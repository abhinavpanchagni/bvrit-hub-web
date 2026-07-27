import { createClient } from "@/utils/supabase/server";

export async function getBookmarks(userId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("bookmarks")
    .select("*, resources(*)")
    .eq("user_id", userId);

  if (error) return [];

  return data;
}