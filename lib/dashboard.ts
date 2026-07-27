import { createClient } from "@/utils/supabase/server";

export async function getDashboard(userId: string) {
  const supabase = await createClient();

  const [{ data: progress }, { data: bookmarks }] = await Promise.all([
    supabase.from("progress").select("*").eq("user_id", userId),
    supabase.from("bookmarks").select("*").eq("user_id", userId),
  ]);

  return {
    progress: progress ?? [],
    bookmarks: bookmarks ?? [],
  };
}