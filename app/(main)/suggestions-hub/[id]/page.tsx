"use client";

import { useState, useEffect, useRef } from "react";
import { getDoubtDetails, sendFollowUpMessage } from "@/lib/doubts";
import { ArrowLeft, Send, Loader2, User, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function DoubtConversationPage() {
  const { id } = useParams();
  const doubtId = id as string;

  const [doubt, setDoubt] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [reply, setReply] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadDoubt();
  }, [doubtId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function loadDoubt() {
    try {
      const data = await getDoubtDetails(doubtId);
      setDoubt(data.doubt);
      setMessages(data.messages || []);
    } catch (e: any) {
      setError(e.message || "Failed to load doubt.");
    } finally {
      setLoading(false);
    }
  }

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!reply.trim()) return;
    
    setSending(true);
    try {
      await sendFollowUpMessage(doubtId, reply);
      setReply("");
      await loadDoubt();
    } catch (e: any) {
      setError(e.message || "Failed to send reply.");
    } finally {
      setSending(false);
    }
  }

  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto h-[60vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-accent-blue" size={40} />
      </div>
    );
  }

  if (error || !doubt) {
    return (
      <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
        <div className="bg-red-50 text-red-600 p-6 rounded-2xl border border-red-100 font-medium">
          {error || "Doubt not found."}
        </div>
        <Link href="/suggestions-hub" className="mt-4 inline-flex items-center gap-2 text-text-secondary hover:text-text-primary font-medium">
          <ArrowLeft size={18} /> Back to My Suggestions
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col h-[calc(100vh-100px)] max-h-[800px] p-4 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6 shrink-0">
        <Link 
          href="/suggestions-hub"
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-border/10 shadow-sm text-text-secondary hover:text-accent-black hover:border-accent-black transition-colors"
        >
          <ArrowLeft size={20} />
        </Link>
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-extrabold text-text-primary">{doubt.category}</h1>
            <span className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${
              doubt.status === 'pending' ? 'bg-yellow-50 text-yellow-600' : 'bg-green-50 text-green-600'
            }`}>
              {doubt.status}
            </span>
          </div>
          <p className="text-text-secondary text-sm font-medium mt-1">
            Started {new Date(doubt.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-white border border-border/10 rounded-3xl shadow-sm flex flex-col overflow-hidden relative">
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 custom-scrollbar">
          {messages.map((msg, idx) => {
            const isStudent = msg.sender_role === 'student';
            
            return (
              <div key={msg.id} className={`flex flex-col ${isStudent ? 'items-end' : 'items-start'}`}>
                <div className="flex items-center gap-2 mb-1.5 px-1">
                  {isStudent ? (
                    <>
                      <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">You</span>
                      <div className="w-5 h-5 rounded-full bg-accent-black text-white flex items-center justify-center">
                        <User size={12} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-5 h-5 rounded-full bg-accent-blue text-white flex items-center justify-center">
                        <ShieldCheck size={12} />
                      </div>
                      <span className="text-xs font-bold text-accent-blue uppercase tracking-wider">BVRIT HUB ADMIN</span>
                    </>
                  )}
                </div>
                
                <div className={`max-w-[85%] md:max-w-[75%] p-4 rounded-2xl text-[15px] font-medium leading-relaxed shadow-sm ${
                  isStudent 
                    ? 'bg-accent-black text-white rounded-tr-sm' 
                    : 'bg-surface-lavender text-text-primary border border-border/5 rounded-tl-sm'
                }`}>
                  <p className="whitespace-pre-wrap">{msg.message}</p>
                </div>
                <span className="text-[11px] text-text-secondary/70 font-medium mt-1.5 px-1">
                  {new Date(msg.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} • {new Date(msg.created_at).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                </span>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-gray-50 border-t border-border/5 shrink-0">
          <form onSubmit={handleSend} className="flex items-end gap-3 max-w-3xl mx-auto">
            <div className="flex-1 bg-white border border-border/10 rounded-2xl shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-accent-blue/50 focus-within:border-transparent transition-all">
              <textarea 
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                placeholder="Type a follow-up message..."
                className="w-full max-h-32 min-h-[56px] p-4 text-text-primary font-medium focus:outline-none resize-none bg-transparent"
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend(e);
                  }
                }}
              />
            </div>
            <button 
              type="submit"
              disabled={sending || !reply.trim()}
              className="w-14 h-14 bg-accent-black text-white rounded-2xl flex items-center justify-center shadow-md hover:-translate-y-1 transition-all disabled:opacity-50 disabled:hover:translate-y-0 shrink-0"
            >
              {sending ? <Loader2 size={24} className="animate-spin" /> : <Send size={22} className="ml-1" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
