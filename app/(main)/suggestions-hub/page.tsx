"use client";

import { useState, useEffect } from "react";
import { submitDoubt, getStudentDoubts } from "@/lib/doubts";
import { MessageSquare, Clock, CheckCircle2, Loader2, Plus, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "Academics", "Exams", "Clubs", "Events", 
  "Placements", "Technical", "Website", "General"
];

type StudentSuggestion = {
  id: string;
  category: string;
  status: string;
  created_at: string;
  updated_at: string;
  doubt_messages: Array<{ message: string; created_at: string; sender_role: string }> | null;
};

export default function DoubtHubPage() {
  const [doubts, setDoubts] = useState<StudentSuggestion[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [category, setCategory] = useState(categories[0]);
  const [question, setQuestion] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadDoubts();
  }, []);

  async function loadDoubts() {
    setLoading(true);
    try {
      const data = await getStudentDoubts();
      setDoubts(data || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!question.trim()) {
      setError("Please enter your question.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      await submitDoubt(category, question);
      setQuestion("");
      setShowForm(false);
      await loadDoubts();
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Failed to submit suggestion.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 p-4 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-text-primary flex items-center gap-3">
            <MessageSquare className="text-accent-blue" size={32} />
            Suggestions Hub
          </h1>
          <p className="text-text-secondary mt-2 font-medium">
            Got an idea to improve the college? Share it here.
          </p>
        </div>
        {!showForm && (
          <button 
            onClick={() => setShowForm(true)}
            className="hidden md:flex items-center gap-2 bg-accent-black text-white px-5 py-2.5 rounded-xl font-semibold hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            <Plus size={20} />
            Send Suggestion
          </button>
        )}
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.form 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleSubmit}
            className="bg-white border border-border/10 p-6 md:p-8 rounded-3xl shadow-sm overflow-hidden"
          >
            <h2 className="text-xl font-bold text-text-primary mb-6">New Suggestion</h2>
            
            {error && (
              <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-3 font-medium border border-red-100">
                <AlertCircle size={20} />
                {error}
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label htmlFor="suggestion-category" className="block text-sm font-bold text-text-secondary uppercase tracking-wider mb-2">Category</label>
                <select 
                  id="suggestion-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-surface-lavender border border-border/10 rounded-xl px-4 py-3 text-text-primary font-medium focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
                >
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="suggestion-text" className="block text-sm font-bold text-text-secondary uppercase tracking-wider mb-2">Your Suggestion</label>
                <textarea 
                  id="suggestion-text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  rows={4}
                  placeholder="Describe your suggestion or idea in detail..."
                  className="w-full bg-surface-lavender border border-border/10 rounded-xl px-4 py-3 text-text-primary font-medium focus:outline-none focus:ring-2 focus:ring-accent-blue/50 resize-none"
                />
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button 
                  type="submit" 
                  disabled={submitting}
                  className="bg-accent-black text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2"
                >
                  {submitting && <Loader2 size={18} className="animate-spin" />}
                  Send Suggestion
                </button>
                <button 
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 rounded-xl font-bold text-text-secondary hover:bg-black/5 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-text-primary uppercase tracking-wider">My Suggestions</h2>
          {!showForm && (
            <button 
              onClick={() => setShowForm(true)}
              className="md:hidden flex items-center gap-2 bg-accent-black text-white px-4 py-2 rounded-xl font-semibold text-sm"
            >
              <Plus size={16} />
              Suggest
            </button>
          )}
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="animate-spin text-accent-blue" size={40} />
          </div>
        ) : doubts.length === 0 ? (
          <div className="bg-white border border-border/10 p-12 rounded-3xl text-center shadow-sm">
            <div className="w-16 h-16 bg-surface-lavender rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="text-text-secondary" size={32} />
            </div>
            <h1 className="text-4xl leading-tight md:text-5xl font-extrabold text-text-primary mb-2">
              Suggestions Hub
            </h1>
            <p className="text-text-secondary font-medium">
              Got an idea to improve the college? Share it here and follow the team&apos;s response.
            </p>
            {!showForm && (
              <button 
                onClick={() => setShowForm(true)}
                className="mt-6 bg-accent-black text-white px-6 py-3 rounded-xl font-bold hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                Send a Suggestion
              </button>
            )}
          </div>
        ) : (
          <div className="grid gap-4">
            {doubts.map(doubt => (
              <div 
                key={doubt.id}
                className="group block bg-white border border-border/10 p-5 rounded-2xl shadow-sm relative"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2 flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="bg-surface-lavender text-text-primary px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                        {doubt.category}
                      </span>
                      <span className="text-text-secondary text-sm font-medium flex items-center gap-1.5">
                        <Clock size={14} />
                        {new Date(doubt.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })} • {new Date(doubt.created_at).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                      </span>
                    </div>
                    <p className="text-lg font-bold text-text-primary truncate">
                      {doubt.doubt_messages?.[0]?.message || "No content"}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between md:justify-end gap-6 shrink-0">
                    <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1.5 rounded-lg font-bold text-sm">
                      <CheckCircle2 size={16} />
                      Suggestion Sent
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
