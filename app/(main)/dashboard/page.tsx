import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import MyTasksWidget from "@/components/dashboard/MyTasksWidget";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("avatar_url, name, branch, year, section")
    .eq("id", user.id)
    .single();

  const { data: tasks } = await supabase
    .from("tasks")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (
    <div className="pb-12 pt-2 sm:pt-4">
      <div className="mx-auto max-w-5xl">
        <section className="mb-8 flex flex-col gap-5 border-b border-border/80 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-4">
          <img
            src={profile?.avatar_url || user.user_metadata.avatar_url || "https://api.dicebear.com/7.x/avataaars/svg?seed=fallback"}
            alt=""
            className="h-14 w-14 shrink-0 rounded-2xl border border-border object-cover sm:h-16 sm:w-16"
          />
          <div className="min-w-0">
            <p className="mb-1 text-sm font-medium text-text-secondary">
              Welcome back
            </p>
            <h1 className="truncate text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
              {profile?.name || user.user_metadata.full_name || "Student"}
            </h1>
          </div>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-secondary sm:justify-end">
            <span><strong className="font-semibold text-text-primary">{profile?.branch || "Branch pending"}</strong></span>
            <span>Year <strong className="font-semibold text-text-primary">{profile?.year || "—"}</strong></span>
            <span>Section <strong className="font-semibold text-text-primary">{profile?.section || "—"}</strong></span>
          </div>
        </section>

        <section aria-labelledby="tasks-heading">
          <MyTasksWidget initialTasks={tasks || []} />
        </section>

      </div>
    </div>
  );
}
