"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function submitDoubt(category: string, question: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  // Create the doubt
  const { data: doubt, error: doubtError } = await supabase
    .from("doubts")
    .insert({
      user_id: user.id,
      category,
      status: "pending",
    })
    .select()
    .single();

  if (doubtError || !doubt) throw new Error("Failed to create doubt");

  // Create the initial message
  const { error: msgError } = await supabase
    .from("doubt_messages")
    .insert({
      doubt_id: doubt.id,
      sender_id: user.id,
      sender_role: "student",
      message: question,
    });

  if (msgError) throw new Error("Failed to send message");

  revalidatePath("/doubt-hub");
  return doubt.id;
}

export async function getStudentDoubts() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const { data, error } = await supabase
    .from("doubts")
    .select(`
      id,
      category,
      status,
      created_at,
      updated_at,
      doubt_messages (
        message,
        created_at,
        sender_role
      )
    `)
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

export async function getDoubtDetails(doubtId: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  // Fetch doubt ensuring it belongs to user
  const { data: doubt, error: doubtError } = await supabase
    .from("doubts")
    .select("*")
    .eq("id", doubtId)
    .eq("user_id", user.id)
    .single();

  if (doubtError || !doubt) throw new Error("Doubt not found or access denied");

  const { data: messages, error: msgError } = await supabase
    .from("doubt_messages")
    .select("*")
    .eq("doubt_id", doubtId)
    .order("created_at", { ascending: true });

  if (msgError) throw new Error("Failed to load messages");

  // Mark unread admin messages as read for student
  const unreadMessages = messages.filter(m => m.sender_role === 'admin' && !m.read_at);
  if (unreadMessages.length > 0) {
    await supabase
      .from("doubt_messages")
      .update({ read_at: new Date().toISOString() })
      .in('id', unreadMessages.map(m => m.id));
  }

  return { doubt, messages };
}

export async function sendFollowUpMessage(doubtId: string, message: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  // Verify ownership
  const { data: doubt } = await supabase
    .from("doubts")
    .select("id")
    .eq("id", doubtId)
    .eq("user_id", user.id)
    .single();

  if (!doubt) throw new Error("Doubt not found");

  const { error: msgError } = await supabase
    .from("doubt_messages")
    .insert({
      doubt_id: doubtId,
      sender_id: user.id,
      sender_role: "student",
      message,
    });

  if (msgError) throw new Error("Failed to send message");

  // Update doubt status back to pending and updated_at
  await supabase
    .from("doubts")
    .update({ 
      status: "pending",
      updated_at: new Date().toISOString()
    })
    .eq("id", doubtId);

  revalidatePath(`/doubt-hub/${doubtId}`);
  return true;
}
