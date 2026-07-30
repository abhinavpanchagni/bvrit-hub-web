import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function getBookmarks(userId: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("bookmarks")
    .select("*, resources(*)")
    .eq("user_id", userId);

  if (error) return [];

  return data;
}