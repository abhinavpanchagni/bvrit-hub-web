"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function bookmarkResource(resourceId: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  await supabase.from("bookmarks").upsert({
    user_id: user.id,
    resource_id: resourceId,
  });
}

export async function markCompleted(resourceId: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  await supabase.from("progress").upsert({
    user_id: user.id,
    resource_id: resourceId,
    completed: true,
    last_opened: new Date().toISOString(),
  });
}