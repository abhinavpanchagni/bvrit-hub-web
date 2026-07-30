"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { 
  Rocket, 
  Book, 
  FlaskConical, 
  Users, 
  Settings, 
  Moon, 
  Sun,
  LayoutDashboard,
  User
} from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Starter Pack", href: "/freshers", icon: Rocket },
  { name: "Resources", href: "/resources", icon: Book },
  { name: "Labs", href: "/semester-1/labs", icon: FlaskConical },
  { name: "Community", href: "/dashboard-admin/feed", icon: Users },
];

export default function Sidebar({ user }: { user: any }) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <aside className="w-64 h-screen bg-white dark:bg-[#1A1A1A] border-r border-border/10 flex flex-col p-4 shadow-sm z-50">
      
      {/* Brand Logo */}
      <Link href="/" className="flex items-end gap-1 mb-8 p-2">
        <span className="text-4xl font-extrabold tracking-tighter text-accent-black leading-none">bh</span>
        <div className="ml-2 flex flex-col mb-1">
          <span className="text-xs font-bold tracking-widest text-text-primary">BVRIT HUB</span>
          <div className="h-[3px] w-full bg-accent-blue mt-[2px] rounded-full"></div>
        </div>
      </Link>

      {/* Profile / Top */}
      <Link href="/profile" className="flex items-center gap-3 p-3 mb-6 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-all">
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
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                isActive 
                  ? 'bg-accent-black text-bg shadow-sm' 
                  : 'text-text-secondary hover:bg-black/5 dark:hover:bg-white/5 hover:text-text-primary'
              }`}
            >
              <link.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="mt-auto space-y-1 pt-4 border-t border-border/10">
        <Link
          href="/profile"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${pathname === '/profile' ? 'bg-black/5 dark:bg-white/5 text-text-primary' : 'text-text-secondary hover:bg-black/5 dark:hover:bg-white/5 hover:text-text-primary'}`}
        >
          <User size={18} strokeWidth={2} />
          Profile
        </Link>
        <Link
          href="/settings"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${pathname === '/settings' ? 'bg-black/5 dark:bg-white/5 text-text-primary' : 'text-text-secondary hover:bg-black/5 dark:hover:bg-white/5 hover:text-text-primary'}`}
        >
          <Settings size={18} strokeWidth={2} />
          Settings
        </Link>

        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm text-text-secondary hover:bg-black/5 dark:hover:bg-white/5 hover:text-text-primary transition-all text-left"
          >
            {theme === 'dark' ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        )}
      </div>
    </aside>
  );
}
