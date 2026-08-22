"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export type TaskType = "BVRIT_HUB" | "PERSONAL";

export interface CreateTaskInput {
  title: string;
  type: TaskType;
  sourceType?: string;
  sourceContentId?: string;
  sourceName?: string;
  sourceUrl?: string;
  dueDate?: string;
}

export async function addTask(input: CreateTaskInput) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { success: false, error: "Not authenticated" };

  // Prevent duplicate BVRIT Hub tasks
  if (input.type === "BVRIT_HUB" && input.sourceContentId) {
    const { data: existingTask } = await supabase
      .from("tasks")
      .select("id")
      .eq("user_id", user.id)
      .eq("source_content_id", input.sourceContentId)
      .single();

    if (existingTask) {
      return { success: true, message: "Already in My Tasks" };
    }
  }

  const { data, error } = await supabase.from("tasks").insert({
    user_id: user.id,
    title: input.title,
    type: input.type,
    source_type: input.sourceType || null,
    source_content_id: input.sourceContentId || null,
    source_name: input.sourceName || null,
    source_url: input.sourceUrl || null,
    due_date: input.dueDate || null,
    completed: false,
  });

  if (error) {
    console.error("Error adding task:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/dashboard");
  revalidatePath("/tasks");
  
  return { success: true, message: "Added to My Tasks" };
}

export async function toggleTaskCompletion(taskId: string, completed: boolean) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { success: false, error: "Not authenticated" };

  const { error } = await supabase
    .from("tasks")
    .update({ completed })
    .eq("id", taskId)
    .eq("user_id", user.id); // RLS is enabled, but adding here for safety

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/dashboard");
  revalidatePath("/tasks");

  return { success: true };
}

export async function deleteTask(taskId: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { success: false, error: "Not authenticated" };

  const { error } = await supabase
    .from("tasks")
    .delete()
    .eq("id", taskId)
    .eq("user_id", user.id);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/dashboard");
  revalidatePath("/tasks");

  return { success: true };
}
