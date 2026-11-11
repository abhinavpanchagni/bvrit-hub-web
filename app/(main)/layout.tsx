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
    <div className="flex min-h-dvh flex-col bg-bg text-text-primary md:h-dvh md:flex-row md:overflow-hidden">
      {/* Sidebar */}
      <Sidebar user={user} />

      {/* Main Content Area */}
      <div className="relative flex min-h-0 min-w-0 flex-1 flex-col md:h-full md:overflow-hidden">
        {/* Top Navbar */}
        <header className="relative z-10 flex h-16 shrink-0 items-center border-b border-border/80 bg-white px-4 sm:px-6 md:h-[72px]">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-center md:justify-end">
            <UniversalSearch />
          </div>
        </header>

        <main id="main-content" className="app-scrollbar min-h-0 flex-1 p-4 sm:p-6 md:overflow-y-auto md:p-8">
          <div className="mx-auto w-full max-w-6xl">
            {children}
          </div>
        </main>
      </div>


    </div>
  );
}
