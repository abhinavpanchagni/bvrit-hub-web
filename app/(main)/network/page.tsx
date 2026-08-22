"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Profile } from "@/lib/network-types";
import ExploreStudents from "@/components/network/ExploreStudents";
import TeamFinder from "@/components/network/TeamFinder";
import TeamRequests from "@/components/network/TeamRequests";
import MyTeam from "@/components/network/MyTeam";
import { Users, Search, Target, Inbox, Shield } from "lucide-react";

export default function NetworkingHub() {
  const supabase = createClient();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"explore" | "team-finder">("explore");
  const [teamFinderTab, setTeamFinderTab] = useState<"find" | "requests" | "my-team">("find");

  useEffect(() => {
    async function fetchProfiles() {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("open_to_collaborate", true)
        .order("name", { ascending: true });

      if (data) {
        // As a fallback to support testing without breaking existing DB,
        // we'll inject mock fields if they don't exist in Supabase yet.
        const mappedData = data.map((p: any) => ({
          ...p,
          year: p.year || 1, // Fallback to 1st year for testing Team Finder
          skill_levels: p.skill_levels || {},
          interests: p.interests || [],
          interested_in: p.interested_in || ["Hackathon", "Project", "Ideathon"], // mock interest
          looking_for: p.looking_for || []
        }));
        setProfiles(mappedData);
      }
      setLoading(false);
    }
    fetchProfiles();
  }, [supabase]);

  return (
    <main className="min-h-full pb-12">
      {/* Header */}
      <div className="mb-8 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary mb-3">
          Networking Hub <span className="inline-block animate-bounce ml-2">🤝</span>
        </h1>
        <p className="text-base text-text-secondary font-medium max-w-2xl">
          Find teammates for your next big project, hackathon, or startup. Connect with the brightest minds in BVRIT.
        </p>
      </div>

      {/* Main Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-border/10 pb-4">
        <button 
          onClick={() => setActiveTab("explore")}
          className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${activeTab === "explore" ? "bg-accent-black text-white shadow-md" : "bg-white text-text-secondary border border-border/10 hover:border-border/30"}`}
        >
          <Search size={18} /> Explore Students
        </button>
        <button 
          onClick={() => setActiveTab("team-finder")}
          className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${activeTab === "team-finder" ? "bg-accent-black text-white shadow-md" : "bg-white text-text-secondary border border-border/10 hover:border-border/30"}`}
        >
          <Users size={18} /> Team Finder
        </button>
      </div>

      {/* Content */}
      {activeTab === "explore" ? (
        <ExploreStudents profiles={profiles} loading={loading} />
      ) : (
        <div className="space-y-6">
          {/* Team Finder Sub-Tabs */}
          <div className="flex flex-wrap gap-2 bg-white p-2 rounded-2xl border border-border/10 shadow-sm inline-flex">
            <button
              onClick={() => setTeamFinderTab("find")}
              className={`px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all text-sm ${teamFinderTab === "find" ? "bg-accent-blue/10 text-accent-blue" : "text-text-secondary hover:bg-black/5"}`}
            >
              <Target size={16} /> Find Teammates
            </button>
            <button
              onClick={() => setTeamFinderTab("requests")}
              className={`px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all text-sm ${teamFinderTab === "requests" ? "bg-accent-blue/10 text-accent-blue" : "text-text-secondary hover:bg-black/5"}`}
            >
              <Inbox size={16} /> Requests
            </button>
            <button
              onClick={() => setTeamFinderTab("my-team")}
              className={`px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all text-sm ${teamFinderTab === "my-team" ? "bg-accent-blue/10 text-accent-blue" : "text-text-secondary hover:bg-black/5"}`}
            >
              <Shield size={16} /> My Team
            </button>
          </div>

          {/* Sub-Tab Content */}
          <div className="pt-4">
            {teamFinderTab === "find" && <TeamFinder />}
            {teamFinderTab === "requests" && <TeamRequests />}
            {teamFinderTab === "my-team" && <MyTeam />}
          </div>
        </div>
      )}
    </main>
  );
}
