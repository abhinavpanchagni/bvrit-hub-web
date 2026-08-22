import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Sidebar from "@/components/dashboard/Sidebar";

import UniversalSearch from "@/components/ui/UniversalSearch";

export const dynamic = "force-dynamic";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("avatar_url, name")
    .eq("id", user.id)
    .single();

  if (profile) {
    if (profile.avatar_url) user.user_metadata.avatar_url = profile.avatar_url;
    if (profile.name) user.user_metadata.full_name = profile.name;
  }

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden bg-bg text-text-primary selection:bg-accent-blue/20 selection:text-text-primary">
      {/* Sidebar */}
      <Sidebar user={user} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative">
        {/* Top Navbar */}
        <header className="h-20 shrink-0 border-b border-border bg-bg/90 backdrop-blur-md flex items-center justify-center px-4 sm:px-6 relative z-10 shadow-sm">
          <div className="w-full max-w-2xl flex justify-center">
            <UniversalSearch />
          </div>
        </header>

        <main className="flex-1 h-full overflow-auto p-4 md:p-8">
          <div className="max-w-6xl mx-auto h-full">
            {children}
          </div>
        </main>
      </div>


    </div>
  );
}
