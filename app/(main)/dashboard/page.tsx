import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { User } from "lucide-react";
import DashboardStats from "@/components/dashboard/DashboardStats";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("branch, year, section")
    .eq("id", user.id)
    .single();

  return (
    <main className="min-h-full py-4 pb-12">
      <div className="mx-auto max-w-5xl">

        {/* Welcome */}
        <div className="bg-surface-lavender rounded-[2.5rem] p-8 lg:p-12 border border-border/10 mb-10 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <img
            src={user.user_metadata.avatar_url || "https://api.dicebear.com/7.x/avataaars/svg?seed=fallback"}
            alt="Avatar"
            className="h-28 w-28 rounded-full object-cover border-4 border-white/50 shadow-sm shrink-0"
          />

          <div>
            <p className="text-text-secondary font-bold mb-1 uppercase tracking-wider text-sm">
              Welcome Back 👋
            </p>

            <h1 className="text-4xl leading-tight md:text-5xl font-extrabold text-text-primary mb-1">
              {user.user_metadata.full_name}
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
          <DashboardStats />

          <div className="bg-[#f0f0f0] rounded-[2rem] p-6 shadow-sm border border-border/10 transition-transform hover:-translate-y-1 flex flex-col justify-between group">
            <div>
               <div className="w-12 h-12 rounded-xl bg-white/60 flex items-center justify-center text-accent-black mb-6 shadow-sm group-hover:scale-105 transition-transform">
                 <User size={24} strokeWidth={2.5} />
               </div>
               <h2 className="text-2xl font-extrabold text-text-primary mb-1">Profile</h2>
               <p className="text-text-secondary font-medium text-sm mb-6 truncate">
                 {profile?.branch || "Setup Profile"}
               </p>
            </div>
            <Link
              href="/profile"
              className="bg-accent-black text-bg font-bold text-sm rounded-xl hover:scale-[1.02] hover:shadow-md transition-all px-4 py-2.5 w-max"
            >
              Edit Profile
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
