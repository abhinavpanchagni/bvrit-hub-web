import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { User } from "lucide-react";
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
    <main className="min-h-full py-4 pb-12">
      <div className="mx-auto max-w-5xl">

        {/* Welcome */}
        <div className="bg-surface-lavender rounded-[2.5rem] p-8 lg:p-12 border border-border/10 mb-10 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <img
            src={profile?.avatar_url || user.user_metadata.avatar_url || "https://api.dicebear.com/7.x/avataaars/svg?seed=fallback"}
            alt="Avatar"
            className="h-28 w-28 rounded-full object-cover border-4 border-white/50 shadow-sm shrink-0"
          />

          <div>
            <p className="text-text-secondary font-bold mb-1 uppercase tracking-wider text-sm">
              Welcome Back 👋
            </p>

            <h1 className="text-4xl leading-tight md:text-5xl font-extrabold text-text-primary mb-1 uppercase">
              {profile?.name || user.user_metadata.full_name || "STUDENT"}
            </h1>

            <p className="text-text-secondary font-medium mb-6 text-sm">
              {user.email}
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="bg-white/60 border border-white/20 text-text-primary font-bold text-sm px-4 py-2 rounded-xl shadow-sm">
                 Branch: {profile?.branch || "N/A"}
              </span>
              <span className="bg-white/60 border border-white/20 text-text-primary font-bold text-sm px-4 py-2 rounded-xl shadow-sm">
                 Year: {profile?.year || "N/A"}
              </span>
              <span className="bg-white/60 border border-white/20 text-text-primary font-bold text-sm px-4 py-2 rounded-xl shadow-sm">
                 Section: {profile?.section || "N/A"}
              </span>
            </div>
          </div>
        </div>



        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">


          {/* My Tasks Widget */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2">
            <MyTasksWidget initialTasks={tasks || []} />
          </div>
        </div>

      </div>
    </main>
  );
}
