"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

// Only for metrics on the dashboard
export async function getAdminMetrics() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  // Auth & role check is inherently handled by middleware, but we double-check:
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");
  
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
  if (profile?.role !== 'admin') throw new Error("Forbidden");

  // Fetch all doubts
  const { data: allDoubts, error } = await supabase.from('doubts').select('id, status, created_at');
  
  if (error) throw new Error("Failed to fetch metrics");

  const total = allDoubts.length;
  const pending = allDoubts.filter(d => d.status === 'pending').length;
  const answered = allDoubts.filter(d => d.status === 'answered').length;
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayCount = allDoubts.filter(d => new Date(d.created_at) >= today).length;

  return { total, pending, answered, today: todayCount };
}

export async function changeAdminPassword(newPassword: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");
  
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
  if (profile?.role !== 'admin') throw new Error("Forbidden");

  const { error } = await supabase.auth.updateUser({
    password: newPassword
  });

  if (error) throw new Error(error.message);

  // Successfully updated password, remove must_change_password flag
  await supabase.from('profiles').update({ must_change_password: false }).eq('id', user.id);
  
  revalidatePath('/admin');
  return true;
}

export async function getRecentPendingDoubts(limit = 5) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from('doubts')
    .select(`
      id,
      category,
      status,
      created_at,
      profiles:user_id (
        name,
        email
      ),
      doubt_messages (
        message
      )
    `)
    .eq('status', 'pending')
    .order('updated_at', { ascending: false })
    .limit(limit);

  if (error) return [];
  
  // Format for easy consumption
  return data.map(d => {
    const profile = d.profiles as any;
    return {
      id: d.id,
      category: d.category,
      status: d.status,
      created_at: d.created_at,
      student_name: profile?.name || 'Unknown Student',
      last_message: d.doubt_messages?.[0]?.message || 'No message'
    };
  });
}

export async function getAllAdminDoubts() {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
  
    const { data, error } = await supabase
      .from('doubts')
      .select(`
        id,
        category,
        status,
        created_at,
        updated_at,
        profiles:user_id (
          name,
          email
        ),
        doubt_messages (
          message
        )
      `)
      .order('updated_at', { ascending: false });
  
    if (error) return [];
    
    return data.map(d => {
      const profile = d.profiles as any;
      return {
        id: d.id,
        category: d.category,
        status: d.status,
        created_at: d.created_at,
        updated_at: d.updated_at,
        student_name: profile?.name || 'Unknown Student',
        student_email: profile?.email || 'unknown@email.com',
        last_message: d.doubt_messages?.[0]?.message || 'No message'
      };
    });
}

export async function getAdminDoubtDetails(doubtId: string) {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
  
    const { data: doubt, error: doubtError } = await supabase
      .from('doubts')
      .select(`
        *,
        profiles:user_id (
            name,
            email
        )
      `)
      .eq('id', doubtId)
      .single();
  
    if (doubtError) throw new Error("Doubt not found");
  
    const { data: messages, error: msgError } = await supabase
      .from('doubt_messages')
      .select('*')
      .eq('doubt_id', doubtId)
      .order('created_at', { ascending: true });
  
    if (msgError) throw new Error("Messages not found");
  
    const profile = (doubt as any).profiles;
    return { 
      doubt: { 
        ...doubt, 
        student_name: profile?.name || 'Student',
        student_email: profile?.email || ''
      }, 
      messages 
    };
}

export async function adminReplyToDoubt(doubtId: string, message: string) {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
  
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");
  
    const { error: msgError } = await supabase
      .from('doubt_messages')
      .insert({
        doubt_id: doubtId,
        sender_id: user.id,
        sender_role: 'admin',
        message: message
      });
  
    if (msgError) throw new Error("Failed to send message");
  
    await supabase
      .from('doubts')
      .update({ 
          status: 'answered',
          updated_at: new Date().toISOString()
      })
      .eq('id', doubtId);
  
    revalidatePath(`/admin/suggestions/${doubtId}`);
    return true;
}
