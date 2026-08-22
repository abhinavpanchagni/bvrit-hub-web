"use client";

import { useState, useEffect } from "react";
import { Team } from "@/lib/network-types";
import { getMyTeam, createTeam } from "@/app/actions/network";
import { addTeamResource, removeTeamResource, leaveTeam, deleteTeam } from "@/app/actions/team-actions";
import TeamChat from "./TeamChat";
import { TEAM_TYPES, TeamType } from "@/lib/team-finder-data";
import { Users, Plus, Loader2, Link as LinkIcon, Trash2, LogOut, ExternalLink } from "lucide-react";

export default function MyTeam() {
  const [team, setTeam] = useState<Team | null>(null);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [teamType, setTeamType] = useState<TeamType>("Hackathon");

  // Shared Resources State
  const [resourceTitle, setResourceTitle] = useState("");
  const [resourceUrl, setResourceUrl] = useState("");
  const [addingResource, setAddingResource] = useState(false);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    setLoading(true);
    try {
      const data = await getMyTeam();
      if (data) {
        setTeam(data.team);
        setCurrentUserId(data.currentUserId);
      } else {
        setTeam(null);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTeam = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamName.trim() || creating) return;

    setCreating(true);
    try {
      const res = await createTeam(teamName, teamType);
      if (res.success) {
        await fetchTeam(); // Refresh
      } else {
        alert(res.error || "Failed to create team");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setCreating(false);
    }
  };

  const handleAddResource = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!team || !resourceTitle.trim() || !resourceUrl.trim() || addingResource) return;
    setAddingResource(true);
    try {
      const res = await addTeamResource(team.id, resourceTitle, resourceUrl);
      if (res.success) {
        setResourceTitle("");
        setResourceUrl("");
        await fetchTeam();
      } else {
        alert(res.error || "Failed to add resource");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setAddingResource(false);
    }
  };

  const handleRemoveResource = async (resourceId: string) => {
    if (!team || !confirm("Are you sure you want to remove this resource?")) return;
    try {
      const res = await removeTeamResource(team.id, resourceId);
      if (res.success) {
        await fetchTeam();
      } else {
        alert(res.error || "Failed to remove resource");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleLeaveTeam = async () => {
    if (!team || !confirm("Are you sure you want to leave this team?")) return;
    try {
      const res = await leaveTeam(team.id);
      if (res.success) {
        setTeam(null);
      } else {
        alert(res.error || "Failed to leave team");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteTeam = async () => {
    if (!team || !confirm("WARNING: This will permanently delete the team and remove all members. Are you absolutely sure?")) return;
    try {
      const res = await deleteTeam(team.id);
      if (res.success) {
        setTeam(null);
      } else {
        alert(res.error || "Failed to delete team");
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-text-secondary font-bold flex flex-col items-center"><Loader2 className="animate-spin mb-2" /> Loading your team...</div>;
  }

  if (!team) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-white rounded-[2rem] p-8 md:p-12 border border-border/10 shadow-sm text-center">
        <div className="w-20 h-20 bg-surface-lavender rounded-full flex items-center justify-center mx-auto mb-6">
          <Users size={32} className="text-accent-black" />
        </div>
        <h2 className="text-3xl font-extrabold text-text-primary mb-4">Form Your Team</h2>
        <p className="text-text-secondary font-medium mb-8 max-w-md mx-auto">
          Start a team to collaborate on projects, hackathons, and more. Once created, you can accept connections to join your team.
        </p>

        <form onSubmit={handleCreateTeam} className="text-left bg-black/5 p-6 rounded-2xl">
          <div className="mb-4">
            <label className="block text-sm font-bold text-text-primary mb-2">Team Name</label>
            <input 
              type="text" 
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="e.g. CodeCrafters"
              required
              className="w-full bg-white border border-border/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold text-text-primary mb-2">Team Type</label>
            <select
              value={teamType}
              onChange={(e) => setTeamType(e.target.value as TeamType)}
              className="w-full bg-white border border-border/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
            >
              {TEAM_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <button 
            type="submit" 
            disabled={creating}
            className="w-full bg-accent-black text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-black/80 transition"
          >
            {creating ? <Loader2 className="animate-spin" /> : <Plus size={20} />} Create Team
          </button>
        </form>
      </div>
    );
  }

  const memberCount = team.members?.length || 0;
  const isFormed = memberCount >= 4;
  const isCreator = team.creator_id === currentUserId;

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      
      {/* Dashboard Header */}
      <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-accent-black mb-1">🚀 {team.name}</h1>
          <p className="font-bold text-text-secondary">{team.team_type}</p>
        </div>
        
        <div className="flex gap-4 items-center">
          <div className="bg-black/5 px-6 py-4 rounded-2xl text-center">
            <div className="text-2xl font-extrabold text-accent-black mb-1">
              {memberCount} / 6
            </div>
            <div className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${isFormed ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
              {isFormed ? 'Team Formed' : 'Forming Team'}
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            {isCreator ? (
              <button onClick={handleDeleteTeam} className="px-4 py-2 bg-red-50 text-red-600 font-bold rounded-xl text-sm hover:bg-red-100 transition flex items-center gap-2 border border-red-200">
                <Trash2 size={16} /> Delete Team
              </button>
            ) : (
              <button onClick={handleLeaveTeam} className="px-4 py-2 bg-red-50 text-red-600 font-bold rounded-xl text-sm hover:bg-red-100 transition flex items-center gap-2 border border-red-200">
                <LogOut size={16} /> Leave Team
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Members List */}
        <div className="lg:col-span-2 bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm">
          <h2 className="text-2xl font-extrabold text-text-primary mb-6 flex items-center gap-2">
            👥 Members
          </h2>
          
          <div className="grid gap-4">
            {team.members?.map(member => (
              <div key={member.id} className="flex items-center justify-between p-4 bg-black/5 rounded-2xl">
                <div className="flex items-center gap-4">
                  {member.user?.avatar_url ? (
                    <img src={member.user.avatar_url} className="w-12 h-12 rounded-xl object-cover" />
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-surface-lavender flex items-center justify-center shrink-0">
                      <span className="text-xl font-bold text-accent-black">{(member.user?.username || "A").charAt(0).toUpperCase()}</span>
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-text-primary">{member.user?.name || `@${member.user?.username}`}</h3>
                    <p className="text-xs font-bold text-text-secondary">{member.role === 'owner' ? 'Creator' : 'Member'}</p>
                  </div>
                </div>
                {/* Real info revealed here because they are members */}
                {member.user?.linkedin_url && (
                  <a href={member.user.linkedin_url} target="_blank" rel="noreferrer" className="text-[#0077b5] bg-white p-2 rounded-lg hover:shadow-sm transition">
                    LinkedIn
                  </a>
                )}
              </div>
            ))}

            {memberCount < 4 && (
              <div className="p-4 rounded-2xl border border-dashed border-border/20 text-center text-text-secondary font-bold">
                Your team needs {4 - memberCount} more members.
              </div>
            )}
            {memberCount >= 4 && memberCount < 6 && (
              <div className="p-4 rounded-2xl border border-dashed border-border/20 text-center text-text-secondary font-bold">
                You can add up to {6 - memberCount} more members.
              </div>
            )}
            {memberCount === 6 && (
              <div className="p-4 rounded-2xl bg-green-50 text-green-700 text-center font-bold">
                Your team is full. Teams can have up to 6 members.
              </div>
            )}
          </div>
        </div>

        {/* Sidebar / Chat & Resources */}
        <div className="space-y-8">
          <TeamChat team={team} />
          
          <div className="bg-white rounded-[2rem] p-6 border border-border/10 shadow-sm">
            <h3 className="font-extrabold text-text-primary mb-4 flex items-center gap-2">🔗 Shared Resources</h3>
            
            <form onSubmit={handleAddResource} className="mb-6 space-y-2">
              <input 
                type="text" 
                placeholder="Title (e.g. GitHub Repo)" 
                value={resourceTitle}
                onChange={e => setResourceTitle(e.target.value)}
                required
                className="w-full bg-black/5 border-transparent rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
              />
              <input 
                type="url" 
                placeholder="https://..." 
                value={resourceUrl}
                onChange={e => setResourceUrl(e.target.value)}
                required
                className="w-full bg-black/5 border-transparent rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
              />
              <button 
                type="submit" 
                disabled={addingResource}
                className="w-full bg-accent-black text-white py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {addingResource ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />} Add Link
              </button>
            </form>

            <div className="space-y-2">
              {(!team.shared_resources || team.shared_resources.length === 0) ? (
                <div className="text-sm text-text-secondary font-medium text-center py-4 bg-black/5 rounded-xl">
                  No resources added yet.
                </div>
              ) : (
                team.shared_resources.map(res => (
                  <div key={res.id} className="flex items-center justify-between bg-black/5 p-3 rounded-xl group">
                    <a href={res.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-accent-blue hover:underline truncate mr-2">
                      <LinkIcon size={14} className="shrink-0" />
                      <span className="truncate">{res.title}</span>
                    </a>
                    <button 
                      onClick={() => handleRemoveResource(res.id)}
                      className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-red-50 rounded-lg hover:bg-red-100"
                      title="Remove"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
