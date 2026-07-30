"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { User, Settings, Save, LogOut, Sun, Moon, Monitor } from "lucide-react";

export default function ProfilePage() {
  const supabase = createClient();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("profile");

  const [userData, setUserData] = useState<{ name: string; email: string; avatar: string } | null>(null);
  
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState(1);
  const [section, setSection] = useState("");

  useEffect(() => {
    async function loadProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      setUserData({
        name: user.user_metadata.full_name || "Unknown User",
        email: user.email || "No Email",
        avatar: user.user_metadata.avatar_url || "",
      });

      const { data } = await supabase
        .from("profiles")
        .select("branch, year, section")
        .eq("id", user.id)
        .single();

      if (data) {
        setBranch(data.branch || "");
        setYear(data.year || 1);
        setSection(data.section || "");
      }

      setLoading(false);
    }

    loadProfile();
  }, [router, supabase]);

  async function saveProfile() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    await supabase
      .from("profiles")
      .update({
        branch,
        year,
        section,
      })
      .eq("id", user.id);

    alert("Profile saved successfully!");
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-bg md:bg-transparent">
        <h1 className="text-2xl font-bold text-text-secondary animate-pulse">Loading...</h1>
      </main>
    );
  }

  return (
    <main className="flex min-h-full items-start justify-center py-8 pb-16">
      <div className="w-full max-w-3xl bg-white dark:bg-[#1A1A1A] rounded-[2.5rem] shadow-sm border border-border/10 relative overflow-hidden">
        
        <div className="p-8 md:p-12">
          
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
            
            {/* User Identity (Read-only) */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-10 pb-10 border-b border-border/10">
              {userData?.avatar ? (
                <img src={userData.avatar} alt="Avatar" className="w-28 h-28 rounded-full object-cover border-4 border-surface-lavender shadow-sm shrink-0" />
              ) : (
                <div className="w-28 h-28 rounded-full bg-surface-lavender flex items-center justify-center border-4 border-white/50 shadow-sm shrink-0">
                  <User size={40} className="text-accent-black" />
                </div>
              )}
              
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-extrabold text-text-primary mb-1">{userData?.name}</h2>
                <p className="text-lg text-text-secondary font-medium">{userData?.email}</p>
                <span className="inline-block mt-4 bg-black/5 dark:bg-white/10 text-text-primary font-bold text-xs px-4 py-2 rounded-xl">
                  Google Account
                </span>
              </div>
            </div>

            {/* Academic Details Form */}
            <h3 className="text-2xl font-extrabold text-text-primary mb-8">Academic Details</h3>
            
            <div className="space-y-6">
              <div>
                <label className="text-sm font-bold text-text-primary mb-2 block">Branch</label>
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full rounded-2xl border border-border/10 shadow-sm bg-white/50 dark:bg-black/20 border border-border/10 p-4 font-medium text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all appearance-none cursor-pointer shadow-sm"
                >
                  <option value="">Select Branch</option>
                  <option>CSE</option>
                  <option>CSM</option>
                  <option>CSD</option>
                  <option>AI&DS</option>
                  <option>CSBS</option>
                  <option>ECE</option>
                  <option>EEE</option>
                  <option>ME</option>
                  <option>CIVIL</option>
                  <option>PHE</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-bold text-text-primary mb-2 block">Year</label>
                <select
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                  className="w-full rounded-2xl border border-border/10 shadow-sm bg-white/50 dark:bg-black/20 border border-border/10 p-4 font-medium text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all appearance-none cursor-pointer shadow-sm"
                >
                  <option value={1}>1st Year</option>
                  <option value={2}>2nd Year</option>
                  <option value={3}>3rd Year</option>
                  <option value={4}>4th Year</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-bold text-text-primary mb-2 block">Section</label>
                <input
                  value={section}
                  onChange={(e) => setSection(e.target.value)}
                  placeholder="Section (Optional)"
                  className="w-full rounded-2xl border border-border/10 shadow-sm bg-white/50 dark:bg-black/20 border border-border/10 p-4 font-medium text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all shadow-sm"
                />
              </div>
            </div>

            <button
              onClick={saveProfile}
              className="mt-10 w-full bg-accent-black text-bg font-bold text-sm rounded-2xl border border-border/10 shadow-sm hover:scale-[1.02] hover:shadow-lg transition-all px-6 py-4 flex items-center justify-center gap-2 active:scale-95"
            >
              Save Changes <Save size={18} />
            </button>
          </div>

        </div>
      </div>
      
    </main>
  );
}
