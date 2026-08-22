"use client";

import { useState, useEffect } from "react";
import { TeamRequest } from "@/lib/network-types";
import { getTeamRequests, updateRequestStatus, syncAcceptedRequestsToTeams } from "@/app/actions/network";
import { Check, X, Clock, UserPlus, Trash2 } from "lucide-react";

export default function TeamRequests() {
  const [incoming, setIncoming] = useState<TeamRequest[]>([]);
  const [sent, setSent] = useState<TeamRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [clearedIds, setClearedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const stored = localStorage.getItem('cleared_team_requests');
    if (stored) {
      setClearedIds(new Set(JSON.parse(stored)));
    }
  }, []);

  useEffect(() => {
    async function init() {
      await syncAcceptedRequestsToTeams();
      await fetchRequests();
    }
    init();
  }, []);

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const data = await getTeamRequests();
      setIncoming(data.incoming);
      setSent(data.sent);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (id: string, action: 'accepted' | 'declined' | 'cancelled') => {
    try {
      const res = await updateRequestStatus(id, action);
      if (res.success) {
        await fetchRequests(); // Refresh
      } else {
        alert(res.error || "Action failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClearRequest = (id: string) => {
    const newSet = new Set(clearedIds);
    newSet.add(id);
    setClearedIds(newSet);
    localStorage.setItem('cleared_team_requests', JSON.stringify(Array.from(newSet)));
  };

  if (loading) {
    return <div className="p-8 text-center text-text-secondary font-bold">Loading requests...</div>;
  }

  const visibleIncoming = incoming.filter(r => !clearedIds.has(r.id));
  const visibleSent = sent.filter(r => !clearedIds.has(r.id));

  return (
    <div className="w-full max-w-4xl mx-auto space-y-10">
      
      {/* Incoming Requests */}
      <div>
        <h2 className="text-2xl font-extrabold text-accent-black mb-6 flex items-center gap-2">
          📥 Incoming Requests
          {visibleIncoming.filter(r => r.status === 'pending').length > 0 && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {visibleIncoming.filter(r => r.status === 'pending').length} New
            </span>
          )}
        </h2>

        {visibleIncoming.length === 0 ? (
          <div className="bg-white p-8 rounded-[2rem] border border-border/10 text-center text-text-secondary">
            No team requests yet. Keep exploring!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {visibleIncoming.map(req => {
              const isExpanded = expandedId === req.id;
              return (
              <div key={req.id} className="bg-white p-6 rounded-2xl border border-border/10 shadow-sm flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div 
                    className="flex items-center gap-3 cursor-pointer hover:bg-black/5 p-2 rounded-xl transition -m-2 flex-1"
                    onClick={() => setExpandedId(isExpanded ? null : req.id)}
                  >
                    <div className="w-12 h-12 rounded-xl bg-surface-lavender flex items-center justify-center shrink-0 border border-border/10">
                      {req.sender?.avatar_url ? (
                        <img src={req.sender.avatar_url} className="w-full h-full rounded-xl object-cover" />
                      ) : (
                        <span className="text-xl font-bold text-accent-black">{(req.sender?.username || "A").charAt(0).toUpperCase()}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-text-primary">@{req.sender?.username}</h3>
                      <p className="text-xs font-bold text-text-secondary">For: {req.team_type}</p>
                    </div>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleClearRequest(req.id); }}
                    className="p-2 text-text-secondary hover:text-red-500 hover:bg-red-50 rounded-lg transition ml-2"
                    title="Clear this request from view"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                {isExpanded && req.sender && (
                  <div className="bg-black/5 p-4 rounded-xl text-sm space-y-3 animate-in slide-in-from-top-2">
                    {req.status === 'accepted' ? (
                      <>
                        <div>
                          <p className="font-bold text-text-primary">{req.sender.name || "No name provided"}</p>
                          {req.sender.email && <p className="text-text-secondary">{req.sender.email}</p>}
                        </div>
                        <div className="flex gap-2">
                          <span className="bg-white px-2 py-1 rounded-md border border-border/10 font-bold">{req.sender.branch}</span>
                          <span className="bg-white px-2 py-1 rounded-md border border-border/10 font-bold">Year {req.sender.year}</span>
                        </div>
                        {req.sender.bio && <p className="text-text-secondary italic">"{req.sender.bio}"</p>}
                        {req.sender.skills && req.sender.skills.length > 0 && (
                          <div>
                            <span className="font-bold text-xs text-text-secondary uppercase">Skills</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {req.sender.skills.map((s, i) => (
                                <span key={i} className="bg-accent-blue/10 text-accent-blue px-2 py-0.5 rounded text-xs font-bold">{s}</span>
                              ))}
                            </div>
                          </div>
                        )}
                        <div className="flex gap-3 text-xs font-bold">
                          {req.sender.github_url && <a href={req.sender.github_url} target="_blank" rel="noreferrer" className="text-accent-blue hover:underline">GitHub</a>}
                          {req.sender.linkedin_url && <a href={req.sender.linkedin_url} target="_blank" rel="noreferrer" className="text-accent-blue hover:underline">LinkedIn</a>}
                        </div>
                      </>
                    ) : (
                      <p className="text-text-secondary italic">Full details are hidden until you accept the request.</p>
                    )}
                  </div>
                )}

                <div className="text-sm">
                  <span className="font-bold text-text-secondary">Looking for:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {req.requested_skills.map((s, i) => (
                      <span key={i} className="bg-black/5 px-2 py-1 rounded-md text-xs font-bold">{s}</span>
                    ))}
                  </div>
                </div>

                {req.status === 'pending' ? (
                  <div className="flex gap-2 mt-auto pt-2">
                    <button 
                      onClick={() => handleAction(req.id, 'accepted')}
                      className="flex-1 bg-accent-black text-white py-2 rounded-xl font-bold hover:bg-black/80 transition flex justify-center items-center gap-1 text-sm"
                    >
                      <Check size={16} /> Accept
                    </button>
                    <button 
                      onClick={() => handleAction(req.id, 'declined')}
                      className="flex-1 bg-red-50 text-red-600 py-2 rounded-xl font-bold hover:bg-red-100 transition flex justify-center items-center gap-1 text-sm"
                    >
                      <X size={16} /> Decline
                    </button>
                  </div>
                ) : (
                  <div className={`mt-auto pt-2 text-center text-sm font-bold p-2 rounded-xl ${req.status === 'accepted' ? 'bg-green-50 text-green-700' : 'bg-black/5 text-text-secondary'}`}>
                    {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
                  </div>
                )}
              </div>
            )})}
          </div>
        )}
      </div>

      {/* Sent Requests */}
      <div>
        <h2 className="text-2xl font-extrabold text-accent-black mb-6">📤 Sent Requests</h2>
        {visibleSent.length === 0 ? (
          <div className="bg-white p-8 rounded-[2rem] border border-border/10 text-center text-text-secondary">
            You haven't sent any requests yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {visibleSent.map(req => {
              const isExpanded = expandedId === req.id;
              return (
              <div key={req.id} className="bg-white p-6 rounded-2xl border border-border/10 shadow-sm flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div 
                    className="flex items-center gap-3 cursor-pointer hover:bg-black/5 p-2 rounded-xl transition -m-2 flex-1"
                    onClick={() => setExpandedId(isExpanded ? null : req.id)}
                  >
                    <div className="w-12 h-12 rounded-xl bg-surface-lavender flex items-center justify-center shrink-0 border border-border/10">
                      {req.receiver?.avatar_url ? (
                        <img src={req.receiver.avatar_url} className="w-full h-full rounded-xl object-cover" />
                      ) : (
                        <span className="text-xl font-bold text-accent-black">{(req.receiver?.username || "A").charAt(0).toUpperCase()}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-text-primary">@{req.receiver?.username}</h3>
                      <p className="text-xs font-bold text-text-secondary">For: {req.team_type}</p>
                    </div>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleClearRequest(req.id); }}
                    className="p-2 text-text-secondary hover:text-red-500 hover:bg-red-50 rounded-lg transition ml-2"
                    title="Clear this request from view"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                {isExpanded && req.receiver && (
                  <div className="bg-black/5 p-4 rounded-xl text-sm space-y-3 animate-in slide-in-from-top-2">
                    {req.status === 'accepted' ? (
                      <>
                        <div>
                          <p className="font-bold text-text-primary">{req.receiver.name || "No name provided"}</p>
                          {req.receiver.email && <p className="text-text-secondary">{req.receiver.email}</p>}
                        </div>
                        <div className="flex gap-2">
                          <span className="bg-white px-2 py-1 rounded-md border border-border/10 font-bold">{req.receiver.branch}</span>
                          <span className="bg-white px-2 py-1 rounded-md border border-border/10 font-bold">Year {req.receiver.year}</span>
                        </div>
                        {req.receiver.bio && <p className="text-text-secondary italic">"{req.receiver.bio}"</p>}
                        {req.receiver.skills && req.receiver.skills.length > 0 && (
                          <div>
                            <span className="font-bold text-xs text-text-secondary uppercase">Skills</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {req.receiver.skills.map((s, i) => (
                                <span key={i} className="bg-accent-blue/10 text-accent-blue px-2 py-0.5 rounded text-xs font-bold">{s}</span>
                              ))}
                            </div>
                          </div>
                        )}
                        <div className="flex gap-3 text-xs font-bold">
                          {req.receiver.github_url && <a href={req.receiver.github_url} target="_blank" rel="noreferrer" className="text-accent-blue hover:underline">GitHub</a>}
                          {req.receiver.linkedin_url && <a href={req.receiver.linkedin_url} target="_blank" rel="noreferrer" className="text-accent-blue hover:underline">LinkedIn</a>}
                        </div>
                      </>
                    ) : (
                      <p className="text-text-secondary italic">Full details are hidden until the request is accepted.</p>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between mt-auto pt-2">
                  <div className={`text-sm font-bold flex items-center gap-1 ${
                    req.status === 'pending' ? 'text-yellow-600' : 
                    req.status === 'accepted' ? 'text-green-600' : 
                    'text-red-600'
                  }`}>
                    {req.status === 'pending' && <Clock size={16} />}
                    {req.status === 'accepted' && <Check size={16} />}
                    {req.status === 'declined' && <X size={16} />}
                    {req.status === 'cancelled' && <X size={16} />}
                    {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
                  </div>
                  
                  {req.status === 'pending' && (
                    <button 
                      onClick={() => handleAction(req.id, 'cancelled')}
                      className="text-xs font-bold text-text-secondary hover:text-red-600 transition"
                    >
                      Cancel Request
                    </button>
                  )}
                </div>
              </div>
            )})}
          </div>
        )}
      </div>

    </div>
  );
}
