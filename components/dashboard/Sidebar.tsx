"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Rocket,
  Users,
  Settings,
  Moon,
  Sun,
  LayoutDashboard,
  User,
  Menu,
  X,
  Trophy,
  BookOpen,
  MessageSquare,
  Wrench,
  ListTodo,
  ShoppingBag
} from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Before Your First Class", href: "/before-class", icon: BookOpen },
  { name: "Student Toolkit", href: "/toolkit", icon: Wrench },
  { name: "Clubs", href: "/clubs", icon: Trophy },
  { name: "Networking", href: "/network", icon: Users },
  { name: "Campus Circle", href: "/campus-circle", icon: ShoppingBag },
  { name: "Coming Soon", href: "/future-features", icon: Rocket },
  { name: "Suggestions Hub", href: "/suggestions-hub", icon: MessageSquare },
];

export default function Sidebar({ user }: { user: any }) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-border/10 shrink-0">
        <Link href="/dashboard" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-border/10 transition-transform hover:scale-105 active:scale-95 overflow-hidden">
          <img src="/logo.png" alt="BVRIT Hub Logo" className="w-full h-full object-contain p-1.5" />
        </Link>
        <button
          onClick={() => setIsMobileOpen(true)}
          className="p-2 rounded-xl bg-black/5 text-text-primary hover:bg-black/10:bg-white/10 transition-colors"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed md:relative top-0 left-0 h-full w-64 bg-white border-r border-border/10 flex flex-col p-4 shadow-xl md:shadow-sm z-50 transform transition-transform duration-300 ease-in-out ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>

        <button
          onClick={() => setIsMobileOpen(false)}
          className="md:hidden absolute top-4 right-4 p-2 rounded-xl bg-black/5 text-text-secondary hover:text-text-primary transition-colors"
        >
          <X size={20} />
        </button>

        {/* Brand Logo */}
        <Link href="/dashboard" className="flex items-end gap-1 mb-8 p-2 w-max">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-border/10 overflow-hidden">
            <img src="/logo.png" alt="BVRIT Hub Logo" className="w-full h-full object-contain p-1.5" />
          </div>
          <div className="ml-2 flex flex-col mb-1">
            <span className="text-xs font-bold tracking-widest text-text-primary">BVRIT HUB</span>
            <div className="h-[3px] w-full bg-accent-blue mt-[2px] rounded-full"></div>
          </div>
        </Link>

        {/* Profile / Top */}
        <Link href="/profile" className="flex items-center gap-3 p-3 mb-6 rounded-2xl hover:bg-black/5:bg-white/5 transition-all">
          {user?.user_metadata?.avatar_url ? (
            <img
              src={user.user_metadata.avatar_url}
              alt="Profile"
              className="w-10 h-10 rounded-xl object-cover border border-border/10"
            />
          ) : (
            <div className="w-10 h-10 rounded-xl bg-surface-lavender flex items-center justify-center text-accent-black font-bold border border-border/10 shadow-sm shrink-0">
              {user?.email?.charAt(0).toUpperCase() || "U"}
            </div>
          )}
          <div className="flex flex-col min-w-0">
            <span className="font-bold text-text-primary text-sm truncate w-full">
              {user?.user_metadata?.full_name || "BVRIT Student"}
            </span>
            <span className="text-text-secondary text-xs truncate w-full">
              {user?.email || "student@gmail.com"}
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-[13px] transition-all ${isActive
                    ? 'bg-accent-black text-bg shadow-sm'
                    : 'text-text-secondary hover:bg-black/5:bg-white/5 hover:text-text-primary'
                  }`}
              >
                <link.icon size={16} strokeWidth={isActive ? 2.5 : 2} />
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="mt-auto space-y-1 pt-4 border-t border-border/10">
          <Link
            href="/profile"
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-[13px] transition-all ${pathname === '/profile' ? 'bg-black/5 text-text-primary' : 'text-text-secondary hover:bg-black/5:bg-white/5 hover:text-text-primary'}`}
          >
            <User size={16} strokeWidth={2} />
            Profile
          </Link>
          <Link
            href="/settings"
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-[13px] transition-all ${pathname === '/settings' ? 'bg-black/5 text-text-primary' : 'text-text-secondary hover:bg-black/5:bg-white/5 hover:text-text-primary'}`}
          >
            <Settings size={16} strokeWidth={2} />
            Settings
          </Link>
        </div>
      </aside>
    </>
  );
}
