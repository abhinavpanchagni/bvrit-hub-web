"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Globe, X, AlertCircle } from "lucide-react";
import { Profile } from "@/lib/network-types";

const Github = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function ExploreStudents({ profiles, loading }: { profiles: Profile[], loading: boolean }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  const filteredProfiles = profiles.filter(profile => {
    if (!searchQuery.trim()) return true;
    const searchLower = searchQuery.toLowerCase();
    const matchUsername = (profile.username || "Anonymous User").toLowerCase().includes(searchLower);
    const matchSkills = profile.skills?.some(skill => skill.toLowerCase().includes(searchLower)) || false;
    const matchBranch = profile.branch?.toLowerCase().includes(searchLower) || false;
    return matchUsername || matchSkills || matchBranch;
  });

  return (
    <>
      {/* Search */}
      <div className="mb-10 relative max-w-2xl">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-text-secondary" />
        </div>
        <input
          type="text"
          placeholder="Search by skill (e.g. React), name, or branch..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-white border border-border/10 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/50 font-medium text-text-primary"
        />
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white rounded-[2rem] h-64 border border-border/10 shadow-sm animate-pulse"></div>
          ))}
        </div>
      ) : filteredProfiles.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[3rem] border border-border/10 shadow-sm text-center px-4">
          <div className="w-20 h-20 bg-surface-lavender rounded-full flex items-center justify-center mb-6">
            <AlertCircle size={32} className="text-text-secondary" />
          </div>
          <h2 className="text-2xl font-extrabold text-text-primary mb-2">No students found</h2>
          <p className="text-text-secondary font-medium">Try adjusting your search criteria or skills.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProfiles.map((profile) => (
            <motion.div
              layoutId={`card-${profile.id}`}
              key={profile.id}
              onClick={() => setSelectedProfile(profile)}
              className="bg-white rounded-[2rem] p-6 border border-border/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col group relative overflow-hidden"
            >
              {/* Highlight Ring */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-blue/20 rounded-[2rem] transition-colors pointer-events-none"></div>

              <div className="flex items-center gap-4 mb-6">
                {profile.avatar_url ? (
                  <img src={profile.avatar_url} alt={profile.username || "Anonymous User"} className="w-16 h-16 rounded-2xl object-cover shadow-sm shrink-0 border border-border/10" />
                ) : (
                  <div className="w-16 h-16 rounded-2xl bg-surface-lavender flex items-center justify-center shrink-0 border border-border/10">
                    <span className="text-2xl font-bold text-accent-black">{(profile.username || "A").charAt(0).toUpperCase()}</span>
                  </div>
                )}
                <div className="min-w-0">
                  <h3 className="font-extrabold text-lg text-text-primary truncate">@{profile.username || "anonymous"}</h3>
                  <p className="text-sm font-bold text-text-secondary truncate">{profile.branch} {profile.year ? `• ${profile.year}${profile.year===1?'st':profile.year===2?'nd':profile.year===3?'rd':'th'} Year` : ''}</p>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {profile.skills?.slice(0, 3).map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-black/5 rounded-lg text-xs font-bold text-text-secondary truncate max-w-full">
                      {skill}
                    </span>
                  ))}
                  {profile.skills?.length > 3 && (
                    <span className="px-2 py-1 bg-black/5 rounded-lg text-xs font-bold text-text-secondary">
                      +{profile.skills.length - 3}
                    </span>
                  )}
                  {(!profile.skills || profile.skills.length === 0) && (
                    <span className="px-3 py-1 bg-black/5 rounded-lg text-xs font-bold text-text-secondary opacity-50">
                      No skills listed
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/10 flex items-center justify-between">
                <span className="text-xs font-bold text-accent-blue tracking-wider uppercase">View Profile</span>
                <div className="flex gap-2">
                  {profile.linkedin_url && <Linkedin size={16} className="text-text-secondary" />}
                  {profile.github_url && <Github size={16} className="text-text-secondary" />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Profile Modal */}
      <AnimatePresence>
        {selectedProfile && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProfile(null)}
              className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId={`card-${selectedProfile.id}`}
              className="bg-white rounded-[2.5rem] w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl border border-border/10 p-6 md:p-10"
            >
              <button 
                onClick={() => setSelectedProfile(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
              >
                <X size={20} className="text-text-primary" />
              </button>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-8 text-center md:text-left">
                {selectedProfile.avatar_url ? (
                  <img src={selectedProfile.avatar_url} alt={selectedProfile.username || "Anonymous User"} className="w-28 h-28 md:w-32 md:h-32 rounded-[2rem] object-cover shadow-md shrink-0 border border-border/10" />
                ) : (
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-[2rem] bg-surface-lavender flex items-center justify-center shrink-0 border border-border/10">
                    <span className="text-4xl font-bold text-accent-black">{(selectedProfile.username || "A").charAt(0).toUpperCase()}</span>
                  </div>
                )}
                
                <div className="flex-1 mt-2 md:mt-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-xs font-bold uppercase tracking-wider mb-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Open to Collaborate
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary mb-2">@{selectedProfile.username || "anonymous"}</h2>
                  <p className="text-base font-bold text-text-secondary mb-4">
                    {selectedProfile.branch} {selectedProfile.year ? `• ${selectedProfile.year}${selectedProfile.year===1?'st':selectedProfile.year===2?'nd':selectedProfile.year===3?'rd':'th'} Year` : ''}
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                    {selectedProfile.linkedin_url && (
                      <a href={selectedProfile.linkedin_url} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5] hover:scale-110 transition-transform">
                        <Linkedin size={20} />
                      </a>
                    )}
                    {selectedProfile.github_url && (
                      <a href={selectedProfile.github_url} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-text-primary hover:scale-110 transition-transform">
                        <Github size={20} />
                      </a>
                    )}
                    {selectedProfile.portfolio_url && (
                      <a href={selectedProfile.portfolio_url} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue hover:scale-110 transition-transform">
                        <Globe size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {selectedProfile.bio && (
                <div className="mb-8">
                  <h3 className="text-lg font-extrabold text-text-primary mb-3">About</h3>
                  <p className="text-sm text-text-secondary font-medium leading-relaxed bg-black/5 p-5 rounded-2xl">
                    {selectedProfile.bio}
                  </p>
                </div>
              )}

              {selectedProfile.skills && selectedProfile.skills.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-extrabold text-text-primary mb-3">Skills & Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProfile.skills.map((skill, i) => (
                      <span key={i} className="px-4 py-2 bg-white border border-border/10 rounded-xl text-sm font-bold text-text-primary shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedProfile.projects && selectedProfile.projects.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-extrabold text-text-primary mb-3">Projects</h3>
                  <div className="flex flex-col gap-3">
                    {selectedProfile.projects.map((projectUrl, i) => {
                      const projectName = projectUrl.split("/").pop() || projectUrl;
                      return (
                        <a 
                          key={i} 
                          href={projectUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center gap-3 p-4 bg-white border border-border/10 rounded-2xl hover:-translate-y-1 hover:shadow-md transition-all group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-text-primary group-hover:bg-accent-black group-hover:text-bg transition-colors">
                            <Github size={20} />
                          </div>
                          <span className="font-bold text-text-primary text-sm truncate">{projectName}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-border/10">
                {selectedProfile.linkedin_url ? (
                  <a 
                    href={selectedProfile.linkedin_url}
                    target="_blank" rel="noreferrer"
                    className="w-full text-white font-bold text-base rounded-2xl px-6 py-4 flex items-center justify-center gap-3 hover:scale-[1.02] hover:shadow-lg transition-all active:scale-95 bg-[#0077b5]"
                  >
                    <Linkedin size={20} />
                    Connect on LinkedIn
                  </a>
                ) : (
                  <button 
                    disabled
                    className="w-full bg-black/5 text-text-secondary font-bold text-base rounded-2xl px-6 py-4 flex items-center justify-center gap-3 opacity-50 cursor-not-allowed"
                  >
                    No social links provided
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
