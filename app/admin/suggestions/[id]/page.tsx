"use client";

import { useState, useEffect, useRef } from "react";
import { getAdminDoubtDetails, adminReplyToDoubt } from "@/lib/admin";
import { ArrowLeft, Send, Loader2, User, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function AdminDoubtConversation() {
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
      const data = await getAdminDoubtDetails(doubtId);
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
      await adminReplyToDoubt(doubtId, reply);
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
      <div className="w-full h-full flex items-center justify-center min-h-[50vh]">
        <Loader2 className="animate-spin text-accent-blue" size={40} />
      </div>
    );
  }

  if (error || !doubt) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <div className="bg-red-50 text-red-600 p-6 rounded-2xl border border-red-100 font-medium">
          {error || "Suggestion not found."}
        </div>
        <Link href="/admin/suggestions" className="mt-4 inline-flex items-center gap-2 text-text-secondary hover:text-text-primary font-medium">
          <ArrowLeft size={18} /> Back to Suggestions
        </Link>
      </div>
    );
  }

  const studentName = doubt.student_name || "Student";

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col h-[calc(100vh-100px)] max-h-[900px] p-4 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6 shrink-0 bg-white p-4 rounded-3xl border border-border/10 shadow-sm">
        <Link 
          href="/admin/suggestions"
          className="w-10 h-10 bg-surface-lavender rounded-xl flex items-center justify-center text-text-secondary hover:text-accent-black transition-colors"
        >
          <ArrowLeft size={20} />
        </Link>
        <div className="flex-1 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-extrabold text-text-primary">Suggestion by {studentName}</h1>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-text-secondary text-sm font-medium">{doubt.student_email}</span>
              <span className="w-1 h-1 rounded-full bg-border/20"></span>
              <span className="bg-surface-yellow px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider text-text-primary">
                {doubt.category}
              </span>
            </div>
          </div>
          <span className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider ${
            doubt.status === 'pending' ? 'bg-yellow-50 text-yellow-600' : 'bg-green-50 text-green-600'
          }`}>
            {doubt.status}
          </span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-white border border-border/10 rounded-3xl shadow-sm flex flex-col overflow-hidden relative">
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 custom-scrollbar bg-gray-50/50">
          {messages.map((msg) => {
            const isAdmin = msg.sender_role === 'admin';
            
            return (
              <div key={msg.id} className={`flex flex-col ${isAdmin ? 'items-end' : 'items-start'}`}>
                <div className="flex items-center gap-2 mb-1.5 px-1">
                  {isAdmin ? (
                    <>
                      <span className="text-xs font-bold text-accent-blue uppercase tracking-wider">You (Admin)</span>
                      <div className="w-5 h-5 rounded-full bg-accent-blue text-white flex items-center justify-center">
                        <ShieldCheck size={12} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-5 h-5 rounded-full bg-accent-black text-white flex items-center justify-center">
                        <User size={12} />
                      </div>
                      <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">{studentName}</span>
                    </>
                  )}
                </div>
                
                <div className={`max-w-[85%] md:max-w-[75%] p-4 rounded-2xl text-[15px] font-medium leading-relaxed shadow-sm ${
                  isAdmin 
                    ? 'bg-accent-blue text-white rounded-tr-sm' 
                    : 'bg-white border border-border/10 text-text-primary rounded-tl-sm'
                }`}>
                  <p className="whitespace-pre-wrap">{msg.message}</p>
                </div>
                <div className="flex items-center gap-2 mt-1.5 px-1">
                  <span className="text-[11px] font-bold text-text-secondary/70 uppercase tracking-wider">
                    {new Date(msg.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} • {new Date(msg.created_at).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-border/5 shrink-0">
          <form onSubmit={handleSend} className="flex items-end gap-3 max-w-4xl mx-auto">
            <div className="flex-1 bg-surface-lavender border border-border/10 rounded-2xl overflow-hidden focus-within:ring-2 focus-within:ring-accent-blue/50 focus-within:bg-white transition-all">
              <textarea 
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                placeholder="Type your answer..."
                className="w-full max-h-40 min-h-[56px] p-4 text-text-primary font-medium focus:outline-none resize-none bg-transparent"
                rows={2}
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
              className="h-14 px-6 bg-accent-blue text-white rounded-2xl flex items-center justify-center font-bold gap-2 shadow-md hover:-translate-y-1 transition-all disabled:opacity-50 disabled:hover:translate-y-0 shrink-0"
            >
              {sending ? <Loader2 size={20} className="animate-spin" /> : (
                <>
                  <Send size={18} />
                  Send Reply
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
