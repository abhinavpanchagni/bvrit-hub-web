import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function getProgress(userId: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("progress")
    .select("*")
    .eq("user_id", userId);

  if (error) return [];

  return data;
}
import { createClient as createBrowserClient } from "@/utils/supabase/client";

export async function saveProgress(
  subjectSlug: string,
  unit: number,
  resourceType: string
) {
  const supabase = createBrowserClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  await supabase.from("progress").upsert(
    {
      user_id: user.id,
      subject_slug: subjectSlug,
      unit,
      resource_type: resourceType,
    },
    {
      onConflict: "user_id,subject_slug,unit,resource_type",
    }
  );
}