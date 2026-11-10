"use client";

import { useEffect, useState, useRef } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { User, Save, Loader2, CheckCircle2, XCircle, Camera } from "lucide-react";

export default function ProfilePage() {
  const supabase = createClient();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("profile");

  const [userData, setUserData] = useState<{ name: string; email: string; avatar: string } | null>(null);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [editName, setEditName] = useState("");
  const [editUsername, setEditUsername] = useState("");
  const [originalUsername, setOriginalUsername] = useState("");
  const [usernameStatus, setUsernameStatus] = useState<"idle" | "loading" | "available" | "taken">("idle");

  const [branch, setBranch] = useState("");
  const [year, setYear] = useState(1);
  const [section, setSection] = useState("");
  
  // Networking fields
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState("");
  const [projects, setProjects] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [openToCollaborate, setOpenToCollaborate] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      const { data } = await supabase
        .from("profiles")
        .select("avatar_url, name, username, branch, year, section, bio, skills, projects, github_url, linkedin_url, portfolio_url, open_to_collaborate")
        .eq("id", user.id)
        .single();

      if (data) {
        setUserData({
          name: data.name || user.user_metadata.full_name || "Unknown User",
          email: user.email || "No Email",
          avatar: data.avatar_url || user.user_metadata.avatar_url || "",
        });
        setEditName(data.name || user.user_metadata.full_name || "");
        setEditUsername(data.username || "");
        setOriginalUsername(data.username || "");
        setBranch(data.branch || "");
        setYear(data.year || 1);
        setSection(data.section || "");
        setBio(data.bio || "");
        setSkills((data.skills || []).join(", "));
        setProjects((data.projects || []).join(", "));
        setGithubUrl(data.github_url || "");
        setLinkedinUrl(data.linkedin_url || "");
        setPortfolioUrl(data.portfolio_url || "");
        setOpenToCollaborate(data.open_to_collaborate || false);
      } else {
        setUserData({
          name: user.user_metadata.full_name || "Unknown User",
          email: user.email || "No Email",
          avatar: user.user_metadata.avatar_url || "",
        });
        setEditName(user.user_metadata.full_name || "");
      }

      setLoading(false);
    }

    loadProfile();
  }, [router, supabase]);

  useEffect(() => {
    if (!editUsername.trim() || editUsername.trim() === originalUsername) {
      setUsernameStatus("idle");
      return;
    }
    
    setUsernameStatus("loading");
    const timeoutId = setTimeout(async () => {
      const { data } = await supabase
        .from("profiles")
        .select("id")
        .eq("username", editUsername.trim())
        .maybeSingle();
        
      if (data) {
        setUsernameStatus("taken");
      } else {
        setUsernameStatus("available");
      }
    }, 500);
    
    return () => clearTimeout(timeoutId);
  }, [editUsername, originalUsername, supabase]);

  async function handleAvatarUpload(event: React.ChangeEvent<HTMLInputElement>) {
    try {
      setUploadingAvatar(true);
      
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.');
      }
      
      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) throw new Error("No user found");
      
      const filePath = `${user.id}-${Math.random()}.${fileExt}`;
      
      let { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage.from('avatars').getPublicUrl(filePath);
      
      setUserData(prev => prev ? { ...prev, avatar: data.publicUrl } : null);
      await supabase.from('profiles').update({ avatar_url: data.publicUrl }).eq('id', user.id);
      
      router.refresh();
      
    } catch (error: any) {
      alert(error.message);
    } finally {
      setUploadingAvatar(false);
    }
  }

  async function saveProfile() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;
    if (usernameStatus === "taken" || usernameStatus === "loading") return;

    await supabase
      .from("profiles")
      .update({
        name: editName,
        username: editUsername.trim() || null,
        branch,
        year,
        section,
        bio,
        skills: skills.split(",").map(s => s.trim()).filter(s => s !== ""),
        projects: projects.split(",").map(s => s.trim()).filter(s => s !== ""),
        github_url: githubUrl,
        linkedin_url: linkedinUrl,
        portfolio_url: portfolioUrl,
        open_to_collaborate: openToCollaborate
      })
      .eq("id", user.id);

    setUserData(prev => prev ? { ...prev, name: editName } : null);
    setOriginalUsername(editUsername.trim());
    setUsernameStatus("idle");
    
    router.refresh();
    
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
      <div className="w-full max-w-5xl bg-white rounded-[2.5rem] shadow-sm border border-border/10 relative overflow-hidden">
        
        <div className="p-8 md:p-12">
          
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
            
            {/* User Identity */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-10 pb-10 border-b border-border/10">
              <div className="relative group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                {userData?.avatar ? (
                  <img src={userData.avatar} alt="Avatar" className="w-28 h-28 rounded-full object-cover border-4 border-surface-lavender shadow-sm shrink-0 group-hover:opacity-80 transition-opacity" />
                ) : (
                  <div className="w-28 h-28 rounded-full bg-surface-lavender flex items-center justify-center border-4 border-white/50 shadow-sm shrink-0 group-hover:opacity-80 transition-opacity">
                    <User size={40} className="text-accent-black" />
                  </div>
                )}
                
                <div className="absolute inset-0 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/30 transition-opacity">
                  {uploadingAvatar ? <Loader2 size={24} className="text-white animate-spin" /> : <Camera size={24} className="text-white" />}
                </div>
                
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleAvatarUpload} 
                  accept="image/*" 
                  className="hidden" 
                />
              </div>
              
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-extrabold text-text-primary mb-1">{userData?.name}</h2>
                <p className="text-lg text-text-secondary font-medium">{userData?.email}</p>
                <span className="inline-block mt-4 bg-black/5 text-text-primary font-bold text-xs px-4 py-2 rounded-xl">
                  Google Account
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column: Personal Details */}
              <div>
                <h3 className="text-2xl font-extrabold text-text-primary mb-8 border-b border-border/10 pb-4">Personal Details</h3>
                
                <div className="flex flex-col gap-6">
                  <div>
                    <label className="text-sm font-bold text-text-primary mb-2 block">Full Name</label>
                    <input
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      placeholder="Your Full Name"
                      className="w-full rounded-2xl border bg-white/50 border border-border/10 p-4 font-medium text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-text-primary mb-2 block">Username (For Anonymity on Hub)</label>
                    <div className="relative">
                      <input
                        value={editUsername}
                        onChange={(e) => setEditUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))}
                        placeholder="e.g. coder_john"
                        className={`w-full rounded-2xl border bg-white/50 p-4 pr-12 font-medium text-sm text-text-primary focus:outline-none focus:ring-2 transition-all shadow-sm ${
                          usernameStatus === 'taken' ? 'border-red-500 focus:ring-red-500/50' : 
                          usernameStatus === 'available' ? 'border-green-500 focus:ring-green-500/50' : 
                          'border-border/10 focus:ring-accent-blue/50'
                        }`}
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        {usernameStatus === 'loading' && <Loader2 size={18} className="animate-spin text-text-secondary" />}
                        {usernameStatus === 'available' && <CheckCircle2 size={18} className="text-green-500" />}
                        {usernameStatus === 'taken' && <XCircle size={18} className="text-red-500" />}
                      </div>
                    </div>
                    {usernameStatus === 'taken' && <p className="text-xs text-red-500 font-bold mt-1.5 ml-1">This username is already taken.</p>}
                    {usernameStatus === 'available' && <p className="text-xs text-green-500 font-bold mt-1.5 ml-1">Username is available!</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-bold text-text-primary mb-2 block">Branch</label>
                      <select
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        className="w-full rounded-2xl border bg-white/50 border border-border/10 p-4 font-medium text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all appearance-none cursor-pointer shadow-sm"
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
                        className="w-full rounded-2xl border bg-white/50 border border-border/10 p-4 font-medium text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all appearance-none cursor-pointer shadow-sm"
                      >
                        <option value={1}>1st Year</option>
                        <option value={2}>2nd Year</option>
                        <option value={3}>3rd Year</option>
                        <option value={4}>4th Year</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-bold text-text-primary mb-2 block">Section</label>
                    <input
                      value={section}
                      onChange={(e) => setSection(e.target.value)}
                      placeholder="Section (Optional)"
                      className="w-full rounded-2xl border bg-white/50 border border-border/10 p-4 font-medium text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Networking Profile */}
              <div>
                <div className="mb-8 flex flex-col xl:flex-row xl:items-center justify-between border-b border-border/10 pb-4 gap-4">
                  <h3 className="text-2xl font-extrabold text-text-primary">Networking Profile</h3>
                  <div className="flex items-center gap-3 bg-black/5 px-4 py-2 rounded-xl w-fit">
                    <span className="text-sm font-bold text-text-secondary">Open to Collaborate</span>
                    <button
                      onClick={() => setOpenToCollaborate(!openToCollaborate)}
                      className={`w-12 h-6 rounded-full transition-colors relative ${openToCollaborate ? 'bg-green-500' : 'bg-border/20'}`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform shadow-sm ${openToCollaborate ? 'translate-x-6' : 'translate-x-0.5'}`} />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div>
                    <label className="text-sm font-bold text-text-primary mb-2 block">Bio</label>
                    <textarea
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      placeholder="Tell others about yourself, your interests, and what you're working on..."
                      className="w-full rounded-2xl border bg-white/50 border-border/10 p-4 font-medium text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all min-h-[100px] resize-y shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-text-primary mb-2 block">Skills (Comma separated)</label>
                    <input
                      value={skills}
                      onChange={(e) => setSkills(e.target.value)}
                      placeholder="React, UI/UX, Public Speaking, Python"
                      className="w-full rounded-2xl border border-border/10 bg-white/50 p-4 font-medium text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-text-primary mb-2 block">Projects (Comma separated GitHub Repo links)</label>
                    <input
                      value={projects}
                      onChange={(e) => setProjects(e.target.value)}
                      placeholder="https://github.com/user/repo1, https://github.com/user/repo2"
                      className="w-full rounded-2xl border border-border/10 bg-white/50 p-4 font-medium text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-text-primary mb-2 block">LinkedIn URL</label>
                    <input
                      value={linkedinUrl}
                      onChange={(e) => setLinkedinUrl(e.target.value)}
                      placeholder="https://linkedin.com/in/..."
                      className="w-full rounded-2xl border border-border/10 bg-white/50 p-4 font-medium text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-text-primary mb-2 block">GitHub URL</label>
                    <input
                      value={githubUrl}
                      onChange={(e) => setGithubUrl(e.target.value)}
                      placeholder="https://github.com/..."
                      className="w-full rounded-2xl border border-border/10 bg-white/50 p-4 font-medium text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-text-primary mb-2 block">Portfolio URL</label>
                    <input
                      value={portfolioUrl}
                      onChange={(e) => setPortfolioUrl(e.target.value)}
                      placeholder="https://yourwebsite.com"
                      className="w-full rounded-2xl border border-border/10 bg-white/50 p-4 font-medium text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={saveProfile}
              disabled={usernameStatus === 'taken' || usernameStatus === 'loading'}
              className="mt-10 w-full bg-accent-black text-bg font-bold text-sm rounded-2xl border border-border/10 shadow-sm hover:scale-[1.02] hover:shadow-lg transition-all px-6 py-4 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
            >
              Save Changes <Save size={18} />
            </button>
          </div>

        </div>
      </div>
      
    </main>
  );
}
