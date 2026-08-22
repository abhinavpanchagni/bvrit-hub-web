"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, MessageSquare, Settings, LogOut, ShieldCheck } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const isLoginPage = pathname === "/admin/login";

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  if (isLoginPage) {
    return <div className="min-h-screen bg-bg">{children}</div>;
  }

  return (
    <div className="flex min-h-screen bg-bg">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-white border-r border-border/10 flex flex-col p-4 shadow-sm shrink-0">
        <div className="flex items-end gap-1 mb-10 p-2">
          <div className="w-12 h-12 bg-accent-blue rounded-full flex items-center justify-center shadow-sm text-white overflow-hidden">
            <ShieldCheck size={24} />
          </div>
          <div className="ml-2 flex flex-col mb-1">
            <span className="text-xs font-bold tracking-widest text-text-primary">ADMIN PORTAL</span>
            <div className="h-[3px] w-full bg-accent-blue mt-[2px] rounded-full"></div>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          <Link
            href="/admin"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
              pathname === "/admin" 
                ? 'bg-accent-black text-bg shadow-sm' 
                : 'text-text-secondary hover:bg-black/5 hover:text-text-primary'
            }`}
          >
            <LayoutDashboard size={18} strokeWidth={pathname === "/admin" ? 2.5 : 2} />
            Dashboard
          </Link>
          <Link
            href="/admin/suggestions"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
              pathname.startsWith("/admin/suggestions") 
                ? 'bg-accent-black text-bg shadow-sm' 
                : 'text-text-secondary hover:bg-black/5 hover:text-text-primary'
            }`}
          >
            <MessageSquare size={18} strokeWidth={pathname.startsWith("/admin/suggestions") ? 2.5 : 2} />
            Suggestions
          </Link>
          <Link
            href="/admin/settings/change-password"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
              pathname.startsWith("/admin/settings") 
                ? 'bg-accent-black text-bg shadow-sm' 
                : 'text-text-secondary hover:bg-black/5 hover:text-text-primary'
            }`}
          >
            <Settings size={18} strokeWidth={pathname.startsWith("/admin/settings") ? 2.5 : 2} />
            Settings
          </Link>
        </nav>

        <div className="mt-auto pt-4 border-t border-border/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm text-red-600 hover:bg-red-50 transition-all"
          >
            <LogOut size={18} strokeWidth={2.5} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
