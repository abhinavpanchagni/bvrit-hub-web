import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function getDashboard(userId: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const [{ data: progress }, { data: bookmarks }] = await Promise.all([
    supabase.from("progress").select("*").eq("user_id", userId),
    supabase.from("bookmarks").select("*").eq("user_id", userId),
  ]);

  return {
    progress: progress ?? [],
    bookmarks: bookmarks ?? [],
  };
}