"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Profile } from "@/lib/network-types";
import { TEAM_TYPES, TeamType, RECOMMENDED_SKILLS } from "@/lib/team-finder-data";
import { ChevronRight, ArrowLeft, CheckCircle2, UserPlus, Users, Info, Search, Loader2 } from "lucide-react";
import { getMatchesSecurely, sendTeamRequest } from "@/app/actions/network";

interface MatchResult extends Profile {
  matchScore: number;
  matchLabel: string;
  matchedSkills: string[];
}

export default function TeamFinder() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedType, setSelectedType] = useState<TeamType | null>(null);
  const [neededSkills, setNeededSkills] = useState<string[]>([]);
  const [haveSkills, setHaveSkills] = useState<string[]>([]);
  const [customSkill, setCustomSkill] = useState("");
  const [sendingRequestTo, setSendingRequestTo] = useState<string | null>(null);

  // Step 3 state
  const [matches, setMatches] = useState<MatchResult[]>([]);
  const [loadingMatches, setLoadingMatches] = useState(false);
  const [sentRequests, setSentRequests] = useState<Set<string>>(new Set());

  const handleNextToSkills = () => {
    if (selectedType) {
      setStep(2);
      setNeededSkills([]);
      setHaveSkills([]);
    }
  };

  const handleAddCustomSkill = (e: React.FormEvent) => {
    e.preventDefault();
    const typedSkill = customSkill.trim();
    if (!typedSkill) return;
    
    const skillsToAdd = typedSkill.split(',').map(s => s.trim()).filter(Boolean);
    let newNeeded = [...neededSkills];

    skillsToAdd.forEach(skillStr => {
      // Find if it matches an existing recommended skill (case-insensitive)
      const existingRec = selectedType ? RECOMMENDED_SKILLS[selectedType].find(s => s.toLowerCase() === skillStr.toLowerCase()) : null;
      const existingNeeded = newNeeded.find(s => s.toLowerCase() === skillStr.toLowerCase());
      
      const skillToAdd = existingRec || existingNeeded || skillStr;

      if (!newNeeded.includes(skillToAdd)) {
        newNeeded.push(skillToAdd);
      }
    });

    setNeededSkills(newNeeded);
    setCustomSkill("");
  };

  const handleFindMatches = async () => {
    if (!selectedType) return;
    setLoadingMatches(true);
    setStep(3);
    
    try {
      const profiles = await getMatchesSecurely();
      
      const scoredProfiles = profiles.map(p => {
        let score = 0;
        const pSkills = p.skills || [];
        const pLevels = p.skill_levels || {};
        const pInterestedIn = p.interested_in || [];
        const pLookingFor = p.looking_for || [];

        const matchedSkills: string[] = [];

        neededSkills.forEach(req => {
          const reqClean = req.toLowerCase().trim();
          
          const isMatch = (s: string) => {
             if (!s) return false;
             const sClean = s.toLowerCase().trim();
             // Match if exact, or if one is a substantial substring of the other
             return sClean === reqClean || 
                    sClean.includes(reqClean) || 
                    (reqClean.length > 2 && reqClean.includes(sClean));
          };

          if (pSkills.some(isMatch)) {
            score += 40;
            matchedSkills.push(req);
            
            // Bonus for strong skill
            const exactSkill = pSkills.find(isMatch);
            if (exactSkill && pLevels[exactSkill] === 'Strong') {
              score += 10;
            }
          }
        });

        if (matchedSkills.length > 1) {
          score += 10; // Multiple skills match bonus
        }

        if (pInterestedIn.includes(selectedType)) {
          score += 20;
        }

        if (pLookingFor.includes(selectedType)) {
          score += 20;
        }

        // Cap at 100
        const finalScore = Math.min(score, 100);
        
        let matchLabel = "Potential Match";
        if (finalScore >= 90) matchLabel = "Excellent Match";
        else if (finalScore >= 75) matchLabel = "Strong Match";
        else if (finalScore >= 60) matchLabel = "Good Match";

        return {
          ...p,
          matchScore: finalScore,
          matchLabel,
          matchedSkills
        };
      }).filter(p => p.matchScore >= 40) // At least 1 required skill
        .sort((a, b) => b.matchScore - a.matchScore);

      setMatches(scoredProfiles);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingMatches(false);
    }
  };

  const toggleSkill = (skill: string, list: 'needed' | 'have') => {
    if (list === 'needed') {
      setNeededSkills(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]);
      setHaveSkills(prev => prev.filter(s => s !== skill));
    } else {
      setHaveSkills(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]);
      setNeededSkills(prev => prev.filter(s => s !== skill));
    }
  };

  const handleSendRequest = async (receiverId: string) => {
    if (!selectedType) return;
    setSendingRequestTo(receiverId);
    try {
      const res = await sendTeamRequest(receiverId, selectedType, neededSkills);
      if (res.success) {
        setSentRequests(prev => {
          const newSet = new Set(prev);
          newSet.add(receiverId);
          return newSet;
        });
      } else {
        alert(res.error || "Failed to send request.");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSendingRequestTo(null);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Wizard Header */}
      <div className="mb-8 flex items-center justify-between bg-white p-4 rounded-2xl border border-border/10 shadow-sm">
        <div className="flex items-center gap-2">
          <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 1 ? 'bg-accent-blue text-white' : 'bg-surface-lavender text-text-secondary'}`}>1</span>
          <span className={`font-bold hidden sm:block ${step >= 1 ? 'text-accent-black' : 'text-text-secondary'}`}>Team Type</span>
        </div>
        <div className={`flex-1 h-1 mx-4 rounded-full ${step >= 2 ? 'bg-accent-blue/20' : 'bg-surface-lavender'}`}></div>
        <div className="flex items-center gap-2">
          <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 2 ? 'bg-accent-blue text-white' : 'bg-surface-lavender text-text-secondary'}`}>2</span>
          <span className={`font-bold hidden sm:block ${step >= 2 ? 'text-accent-black' : 'text-text-secondary'}`}>Required Skills</span>
        </div>
        <div className={`flex-1 h-1 mx-4 rounded-full ${step >= 3 ? 'bg-accent-blue/20' : 'bg-surface-lavender'}`}></div>
        <div className="flex items-center gap-2">
          <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 3 ? 'bg-accent-blue text-white' : 'bg-surface-lavender text-text-secondary'}`}>3</span>
          <span className={`font-bold hidden sm:block ${step >= 3 ? 'text-accent-black' : 'text-text-secondary'}`}>Find Matches</span>
        </div>
      </div>

      {/* Step 1: Choose Team Type */}
      {step === 1 && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[2rem] p-8 md:p-10 border border-border/10 shadow-sm">
          <h2 className="text-3xl font-extrabold text-accent-black mb-2">What kind of team are you building?</h2>
          <p className="text-text-secondary font-medium mb-8">Select the event or project type so we can suggest the right skills to look for.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {TEAM_TYPES.map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`p-6 rounded-2xl border-2 text-left transition-all ${selectedType === type ? 'border-accent-blue bg-accent-blue/5 shadow-md' : 'border-border/10 hover:border-accent-blue/30 bg-white hover:bg-black/5'}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{
                    type.includes("Hack") ? "💻" : 
                    type.includes("Project") ? "🚀" : 
                    type.includes("Coding") ? "🏆" : 
                    type.includes("Idea") ? "💡" : 
                    type.includes("Robotics") ? "🤖" : 
                    type.includes("Startup") ? "📈" : "🎪"
                  }</span>
                  {selectedType === type && <CheckCircle2 className="text-accent-blue" size={20} />}
                </div>
                <h3 className="font-extrabold text-text-primary text-lg">{type}</h3>
              </button>
            ))}
          </div>

          <div className="mt-10 flex justify-end">
            <button
              onClick={handleNextToSkills}
              disabled={!selectedType}
              className={`px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-all ${selectedType ? 'bg-accent-black text-white hover:-translate-y-1 hover:shadow-lg' : 'bg-black/5 text-text-secondary cursor-not-allowed'}`}
            >
              Next Step <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      )}

      {/* Step 2: Choose Skills */}
      {step === 2 && selectedType && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[2rem] p-8 md:p-10 border border-border/10 shadow-sm">
          <button onClick={() => setStep(1)} className="flex items-center gap-2 text-text-secondary hover:text-accent-black font-bold mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to Team Types
          </button>
          
          <h2 className="text-3xl font-extrabold text-accent-black mb-2">Skills your team needs</h2>
          <p className="text-text-secondary font-medium mb-8">
            Based on your choice (<span className="text-accent-blue font-bold">{selectedType}</span>), teams usually look for these skills. Select what you need or search for custom skills.
          </p>

          <form onSubmit={handleAddCustomSkill} className="mb-6 relative max-w-lg">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-text-secondary" />
            </div>
            <input
              type="text"
              placeholder="Search or type a custom skill and press Enter..."
              value={customSkill}
              onChange={(e) => setCustomSkill(e.target.value)}
              className="w-full pl-12 pr-24 py-4 bg-black/5 border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-blue/50 font-medium text-text-primary"
            />
            <button type="submit" className="absolute right-2 top-2 bottom-2 bg-accent-blue text-white px-4 rounded-xl font-bold text-sm">Add</button>
          </form>
          
          <div className="mb-10 p-6 rounded-2xl bg-surface-mint/20 border border-border/10">
            <h3 className="font-extrabold text-lg text-text-primary mb-4 flex items-center gap-2">
              <span className="text-xl">🔍</span> What are you currently looking for?
            </h3>
            <div className="flex flex-wrap gap-3">
              {Array.from(new Set([...(selectedType ? RECOMMENDED_SKILLS[selectedType] : []), ...neededSkills]))
                .filter(skill => customSkill.trim() === "" || skill.toLowerCase().includes(customSkill.trim().toLowerCase()))
                .map(skill => (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill, 'needed')}
                  className={`px-5 py-3 rounded-xl font-bold text-sm transition-all border-2 ${neededSkills.includes(skill) ? 'bg-accent-blue text-white border-accent-blue shadow-md scale-105' : 'bg-white border-border/10 text-text-secondary hover:border-accent-blue/30'}`}
                >
                  {skill}
                </button>
              ))}
            </div>
            {neededSkills.length === 0 && (
              <p className="text-sm text-text-secondary mt-4 flex items-center gap-2 font-medium">
                <Info size={16} /> Select at least one skill to find matching students.
              </p>
            )}
          </div>

          <div className="mb-10 p-6 rounded-2xl bg-surface-lavender border border-border/10">
            <h3 className="font-extrabold text-lg text-text-primary mb-4 flex items-center gap-2">
              <span className="text-xl">✅</span> What skills do you already have? <span className="text-sm font-medium text-text-secondary font-normal">(Optional)</span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {RECOMMENDED_SKILLS[selectedType].filter(s => !neededSkills.includes(s)).map(skill => (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill, 'have')}
                  className={`px-5 py-3 rounded-xl font-bold text-sm transition-all border-2 ${haveSkills.includes(skill) ? 'bg-green-500 text-white border-green-500 shadow-md scale-105' : 'bg-white border-border/10 text-text-secondary hover:border-green-500/30'}`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center border-t border-border/10 pt-8 mt-4">
             <div className="text-sm font-bold text-text-secondary bg-black/5 px-4 py-2 rounded-lg">
               Looking for: {neededSkills.length} skill{neededSkills.length !== 1 ? 's' : ''}
             </div>
             <button
                onClick={handleFindMatches}
                disabled={neededSkills.length === 0}
                className={`px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-all ${neededSkills.length > 0 ? 'bg-accent-black text-white hover:-translate-y-1 hover:shadow-lg' : 'bg-black/5 text-text-secondary cursor-not-allowed'}`}
              >
                Find Teammates <Users size={20} />
              </button>
          </div>
        </motion.div>
      )}

      {/* Step 3: Match Results */}
      {step === 3 && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <button onClick={() => setStep(2)} className="flex items-center gap-2 text-text-secondary hover:text-accent-black font-bold mb-4 transition-colors">
                <ArrowLeft size={16} /> Back to Skills
              </button>
              <h2 className="text-3xl font-extrabold text-accent-black">Matching Students</h2>
              <p className="text-text-secondary font-medium mt-1">Based on your required skills for a {selectedType} team.</p>
            </div>
          </div>

          {loadingMatches ? (
             <div className="flex flex-col items-center justify-center p-20 bg-white rounded-[2rem] border border-border/10">
                <Loader2 className="animate-spin text-accent-blue mb-4" size={40} />
                <p className="font-bold text-text-secondary">Finding best matches securely...</p>
             </div>
          ) : matches.length === 0 ? (
             <div className="bg-white rounded-[2rem] p-12 border border-border/10 shadow-sm text-center flex flex-col items-center">
                <div className="w-24 h-24 bg-surface-mint/50 rounded-full flex items-center justify-center mb-6">
                  <Users size={40} className="text-accent-blue" />
                </div>
                <h3 className="text-2xl font-extrabold text-text-primary mb-2">No perfect matches found yet</h3>
                <p className="text-text-secondary font-medium max-w-md mx-auto">
                  We couldn't find students matching the specific skills you selected. Try going back and selecting different or broader skills.
                </p>
                <button onClick={() => setStep(2)} className="mt-8 px-6 py-3 bg-accent-black text-white font-bold rounded-xl hover:-translate-y-1 transition-all">
                  Adjust Skills
                </button>
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matches.map(match => (
                 <div key={match.id} className="bg-white rounded-[2rem] p-6 border border-border/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden group">
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-blue/20 rounded-[2rem] transition-colors pointer-events-none"></div>
                    
                    {/* Match Score Badge */}
                    <div className="absolute top-5 right-5 bg-green-500/10 text-green-700 px-2.5 py-1 rounded-lg text-[10px] tracking-wide font-extrabold border border-green-500/20">
                      {match.matchScore}% • {match.matchLabel}
                    </div>

                    <div className="flex items-center gap-4 mb-6 pt-2">
                      {match.avatar_url ? (
                        <img src={match.avatar_url} alt={match.username} className="w-16 h-16 rounded-2xl object-cover shadow-sm shrink-0 border border-border/10" />
                      ) : (
                        <div className="w-16 h-16 rounded-2xl bg-surface-lavender flex items-center justify-center shrink-0 border border-border/10">
                          <span className="text-2xl font-bold text-accent-black">{(match.username || "A").charAt(0).toUpperCase()}</span>
                        </div>
                      )}
                      <div className="min-w-0 pr-24">
                        {/* Privacy: Real name hidden if not connected */}
                        <h3 className="font-extrabold text-lg text-text-primary truncate">{match.name || `@${match.username}`}</h3>
                        <p className="text-sm font-bold text-text-secondary truncate">{match.branch}</p>
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Matching Skills</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {match.matchedSkills.map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-accent-blue/10 text-accent-blue rounded-lg text-xs font-bold border border-accent-blue/10">
                            ✓ {skill}
                          </span>
                        ))}
                      </div>

                      {selectedType && match.interested_in?.includes(selectedType) && (
                        <p className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg inline-block">
                          🎯 Interested in {selectedType}s
                        </p>
                      )}
                    </div>

                    <div className="mt-6">
                       <button 
                          onClick={() => handleSendRequest(match.id)}
                          disabled={sendingRequestTo === match.id || sentRequests.has(match.id)}
                          className={`w-full px-4 py-3.5 font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${sentRequests.has(match.id) ? 'bg-green-50 text-green-700 border border-green-200 shadow-sm cursor-not-allowed' : 'bg-accent-black text-white hover:bg-black/80 hover:shadow-md disabled:opacity-50'}`}
                       >
                         {sendingRequestTo === match.id ? <Loader2 size={18} className="animate-spin" /> : 
                          sentRequests.has(match.id) ? <CheckCircle2 size={18} className="text-green-600" /> : 
                          <UserPlus size={18} />} 
                         {sentRequests.has(match.id) ? "Request Sent" : "Send Team Request"}
                       </button>
                    </div>
                 </div>
              ))}
            </div>
          )}
        </motion.div>
      )}

    </div>
  );
}
