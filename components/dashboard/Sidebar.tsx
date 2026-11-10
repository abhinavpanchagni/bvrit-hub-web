"use client";

import type { User as SupabaseUser } from "@supabase/supabase-js";
import { Compass, LayoutDashboard, ListTodo, Menu, Settings, User, Users, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const primaryLinks = [
  { name: "Home", href: "/dashboard", icon: LayoutDashboard },
  { name: "Explore", href: "/explore", icon: Compass },
  { name: "Connect", href: "/network", icon: Users },
  { name: "Profile", href: "/profile", icon: User },
];

const secondaryLinks = [
  { name: "Tasks", href: "/tasks", icon: ListTodo },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar({ user }: { user: SupabaseUser }) {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    if (!isMobileOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <>
      <div className="flex shrink-0 items-center justify-between border-b border-border/10 bg-white p-4 md:hidden">
        <Link href="/dashboard" aria-label="BVRIT Hub home" className="flex items-center gap-2">
          <img src="/logo.png" alt="" className="h-10 w-10 rounded-full border border-border/10 bg-white object-contain p-1.5" />
          <span className="text-xs font-bold tracking-widest">BVRIT HUB</span>
        </Link>
        <button
          type="button"
          aria-label="Open navigation"
          aria-expanded={isMobileOpen}
          aria-controls="student-navigation"
          onClick={() => setIsMobileOpen(true)}
          className="rounded-xl bg-black/5 p-2 text-text-primary transition-colors hover:bg-black/10"
        >
          <Menu size={20} aria-hidden="true" />
        </button>
      </div>

      {isMobileOpen ? (
        <button type="button" aria-label="Close navigation" className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={closeMobileMenu} />
      ) : null}

      <aside
        id="student-navigation"
        className={`fixed left-0 top-0 z-50 flex h-full w-64 flex-col overflow-y-auto border-r border-border/10 bg-white p-4 shadow-xl transition-transform duration-200 md:relative md:translate-x-0 md:shadow-sm ${isMobileOpen ? "translate-x-0" : "invisible -translate-x-full md:visible"}`}
      >
        <button type="button" aria-label="Close navigation" onClick={closeMobileMenu} className="absolute right-4 top-4 rounded-xl bg-black/5 p-2 text-text-secondary hover:text-text-primary md:hidden">
          <X size={20} aria-hidden="true" />
        </button>

        <Link href="/dashboard" onClick={closeMobileMenu} className="mb-8 flex w-max items-end gap-2 p-2">
          <img src="/logo.png" alt="" className="h-12 w-12 rounded-full border border-border/10 bg-white object-contain p-1.5" />
          <span className="mb-1 text-xs font-bold tracking-widest">BVRIT HUB</span>
        </Link>

        <div className="mb-6 flex items-center gap-3 px-3">
          {user.user_metadata?.avatar_url ? (
            <img src={user.user_metadata.avatar_url} alt="" className="h-10 w-10 rounded-xl border border-border/10 object-cover" />
          ) : (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-lavender font-bold">
              {user.email?.charAt(0).toUpperCase() || "U"}
            </div>
          )}
          <div className="min-w-0">
            <p className="truncate text-sm font-bold">{user.user_metadata?.full_name || "BVRIT Student"}</p>
            <p className="truncate text-xs text-text-secondary">{user.email}</p>
          </div>
        </div>

        <nav aria-label="Primary" className="flex-1 space-y-1">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-[13px] font-medium transition-colors ${isActive(link.href) ? "bg-accent-black text-bg" : "text-text-secondary hover:bg-black/5 hover:text-text-primary"}`}
            >
              <link.icon size={17} aria-hidden="true" />
              {link.name}
            </Link>
          ))}
        </nav>

        <nav aria-label="Account" className="mt-6 space-y-1 border-t border-border/10 pt-4">
          {secondaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-[13px] font-medium transition-colors ${isActive(link.href) ? "bg-black/5 text-text-primary" : "text-text-secondary hover:bg-black/5 hover:text-text-primary"}`}
            >
              <link.icon size={17} aria-hidden="true" />
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
