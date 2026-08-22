"use client";

import { useState, useEffect, useRef } from "react";
import { Team, TeamMessage } from "@/lib/network-types";
import { getTeamMessages, sendTeamMessage } from "@/app/actions/network";
import { Send, Loader2, Trash2 } from "lucide-react";

export default function TeamChat({ team }: { team: Team }) {
  const [messages, setMessages] = useState<TeamMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [clearedAt, setClearedAt] = useState<Date | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem(`team_chat_cleared_${team.id}`);
    if (stored) {
      setClearedAt(new Date(stored));
    }
  }, [team.id]);

  const handleClearChat = () => {
    if (confirm("Are you sure you want to clear this chat? This only clears it for you.")) {
      const now = new Date();
      localStorage.setItem(`team_chat_cleared_${team.id}`, now.toISOString());
      setClearedAt(now);
    }
  };

  useEffect(() => {
    fetchMessages();
    // In a real app with Supabase, we would set up a realtime subscription here
    // For this implementation, we will rely on polling or manual refresh for simplicity
    const interval = setInterval(() => {
      fetchMessages(false);
    }, 5000); // Poll every 5s

    return () => clearInterval(interval);
  }, [team.id]);

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const fetchMessages = async (showLoading = true) => {
    if (showLoading) setLoading(true);
    try {
      const data = await getTeamMessages(team.id);
      setMessages(data);
    } catch (e) {
      console.error(e);
    } finally {
      if (showLoading) setLoading(false);
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || sending) return;

    setSending(true);
    try {
      const res = await sendTeamMessage(team.id, newMessage);
      if (res.success) {
        setNewMessage("");
        await fetchMessages(false);
      } else {
        alert(res.error || "Failed to send message");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return <div className="h-64 flex items-center justify-center text-text-secondary"><Loader2 className="animate-spin" /></div>;
  }

  const visibleMessages = messages.filter(msg => {
    if (!clearedAt) return true;
    return new Date(msg.created_at) > clearedAt;
  });

  return (
    <div className="space-y-2">
      <div className="flex flex-col h-[500px] bg-white rounded-2xl border border-border/10 overflow-hidden shadow-sm">
        <div className="bg-surface-lavender p-4 border-b border-border/10 flex items-center justify-between">
          <h3 className="font-extrabold text-accent-black flex items-center gap-2">
            💬 Team Chat <span className="text-sm font-medium text-text-secondary">({team.members?.length || 0} Members)</span>
          </h3>
        </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f8f9fa]">
        {visibleMessages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center text-text-secondary space-y-2">
            <span className="text-4xl">👋</span>
            <p className="font-bold">Say hi to your team!</p>
            <p className="text-sm">Only {team.name} members can see this chat.</p>
          </div>
        ) : (
          visibleMessages.map(msg => {
            const isMe = team.members?.find(m => m.user_id === msg.sender_id)?.user?.id === msg.sender_id; // Check if sender is current user based on some auth state, but we don't have current user ID directly in this component easily without fetching it.
            // For now, let's just display messages simply.
            return (
              <div key={msg.id} className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center shrink-0 border border-accent-blue/20">
                  {msg.sender?.avatar_url ? (
                    <img src={msg.sender.avatar_url} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <span className="text-xs font-bold text-accent-blue">{(msg.sender?.username || "A").charAt(0).toUpperCase()}</span>
                  )}
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-bold text-sm text-text-primary">@{msg.sender?.username}</span>
                    <span className="text-xs text-text-secondary">{new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-2xl rounded-tl-sm border border-border/10 text-text-primary shadow-sm text-sm">
                    {msg.message}
                  </div>
                </div>
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSend} className="p-3 bg-white border-t border-border/10 flex gap-2">
        <input 
          type="text" 
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-black/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 text-sm font-medium"
        />
        <button 
          type="submit" 
          disabled={!newMessage.trim() || sending}
          className="bg-accent-black text-white p-3 rounded-xl hover:bg-black/80 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {sending ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
        </button>
      </form>
    </div>
    
    <div className="flex justify-end">
      <button 
        onClick={handleClearChat}
        className="text-xs font-bold text-text-secondary hover:text-red-500 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors flex items-center gap-1 border border-transparent hover:border-red-100"
        title="Clear chat for me only"
      >
        <Trash2 size={14} /> Clear Chat
      </button>
    </div>
  </div>
  );
}
