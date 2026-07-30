"use client";

import { useTheme } from "next-themes";
import { LogOut, Sun, Moon, Monitor, Bell, Shield, Key } from "lucide-react";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="flex min-h-full items-start justify-center py-8 pb-16">
      <div className="w-full max-w-3xl bg-white dark:bg-[#1A1A1A] rounded-[2.5rem] shadow-sm border border-border/10 relative overflow-hidden">
        
        {/* Header */}
        <div className="p-8 md:p-12 border-b border-border/10 bg-black/5 dark:bg-white/5">
          <h1 className="text-3xl font-extrabold text-text-primary mb-2">Settings</h1>
          <p className="text-text-secondary font-medium">Manage your app preferences and account settings.</p>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 space-y-12">
          
          {/* Appearance */}
          <div>
            <h3 className="text-xl font-extrabold text-text-primary mb-6">Appearance</h3>
            
            <div className="grid grid-cols-3 gap-4">
              <button 
                onClick={() => setTheme("light")}
                className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-border/10 shadow-sm border transition-all ${theme === 'light' ? 'border-accent-black bg-surface-lavender text-accent-black shadow-md' : 'border-border/10 bg-white dark:bg-[#2A2A2A] text-text-secondary hover:bg-black/5 dark:hover:bg-white/5'}`}
              >
                <Sun size={24} strokeWidth={2.5} />
                <span className="font-bold text-sm">Light</span>
              </button>
              
              <button 
                onClick={() => setTheme("dark")}
                className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-border/10 shadow-sm border transition-all ${theme === 'dark' ? 'border-accent-black bg-surface-lavender text-accent-black shadow-md' : 'border-border/10 bg-white dark:bg-[#2A2A2A] text-text-secondary hover:bg-black/5 dark:hover:bg-white/5'}`}
              >
                <Moon size={24} strokeWidth={2.5} />
                <span className="font-bold text-sm">Dark</span>
              </button>
              
              <button 
                onClick={() => setTheme("system")}
                className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-border/10 shadow-sm border transition-all ${theme === 'system' ? 'border-accent-black bg-surface-lavender text-accent-black shadow-md' : 'border-border/10 bg-white dark:bg-[#2A2A2A] text-text-secondary hover:bg-black/5 dark:hover:bg-white/5'}`}
              >
                <Monitor size={24} strokeWidth={2.5} />
                <span className="font-bold text-sm">System</span>
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div className="pt-8 border-t border-border/10">
            <h3 className="text-xl font-extrabold text-text-primary mb-6 flex items-center gap-2">
              <Bell size={20} /> Notifications
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white dark:bg-black/20">
                <div>
                  <p className="font-bold text-text-primary">Email Notifications</p>
                  <p className="text-sm text-text-secondary mt-1">Receive updates about new resources and events.</p>
                </div>
                <div className="w-12 h-6 bg-accent-blue rounded-full relative cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="pt-8 border-t border-border/10">
            <h3 className="text-xl font-extrabold text-text-primary mb-6 flex items-center gap-2">
              <Shield size={20} /> Security
            </h3>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white dark:bg-black/20 hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                <div className="flex items-center gap-3 text-text-primary">
                  <Key size={18} />
                  <span className="font-bold">Change Password</span>
                </div>
              </button>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="pt-8 border-t border-border/10">
            <h3 className="text-xl font-extrabold text-red-500 mb-6 flex items-center gap-2">
              Danger Zone
            </h3>
            
            <form action="/auth/signout" method="post">
              <button className="w-full bg-red-500 text-bg font-bold text-sm rounded-2xl border border-border/10 shadow-sm hover:bg-red-600 hover:shadow-lg transition-all px-6 py-4 flex items-center justify-center gap-2 active:scale-95 shadow-sm">
                <LogOut size={18} />
                Logout of BVRIT Hub
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
