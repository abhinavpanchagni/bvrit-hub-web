"use client";

import { useState, useEffect } from "react";
import { getAdminMetrics, getRecentPendingDoubts } from "@/lib/admin";
import { MessageSquare, Clock, CheckCircle2, Inbox, Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const [metrics, setMetrics] = useState({ total: 0, pending: 0, answered: 0, today: 0 });
  const [recent, setRecent] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [m, r] = await Promise.all([
          getAdminMetrics(),
          getRecentPendingDoubts(5)
        ]);
        setMetrics(m);
        setRecent(r);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center min-h-[50vh]">
        <Loader2 className="animate-spin text-accent-blue" size={40} />
      </div>
    );
  }

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-text-primary">Admin Dashboard</h1>
        <p className="text-text-secondary mt-1 font-medium">Overview of Suggestions Hub activity.</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-border/10 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center text-text-secondary">
              <Inbox size={24} />
            </div>
            <h3 className="font-bold text-text-secondary uppercase tracking-wider text-sm">Total</h3>
          </div>
          <p className="text-4xl font-extrabold text-text-primary">{metrics.total}</p>
        </div>
        
        <div className="bg-white border border-border/10 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-yellow-50 flex items-center justify-center text-yellow-600">
              <Clock size={24} />
            </div>
            <h3 className="font-bold text-text-secondary uppercase tracking-wider text-sm">Pending</h3>
          </div>
          <p className="text-4xl font-extrabold text-text-primary">{metrics.pending}</p>
        </div>
        
        <div className="bg-white border border-border/10 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="font-bold text-text-secondary uppercase tracking-wider text-sm">Answered</h3>
          </div>
          <p className="text-4xl font-extrabold text-text-primary">{metrics.answered}</p>
        </div>

        <div className="bg-accent-blue border border-accent-blue p-6 rounded-3xl shadow-sm hover:shadow-md transition-all text-white">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
              <MessageSquare size={24} />
            </div>
            <h3 className="font-bold uppercase tracking-wider text-sm">Today</h3>
          </div>
          <p className="text-4xl font-extrabold">{metrics.today}</p>
        </div>
      </div>

      {/* Recent Pending */}
      <div className="bg-white border border-border/10 rounded-3xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-border/5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-text-primary">Recent Pending Suggestions</h2>
          <Link href="/admin/suggestions" className="text-accent-blue font-bold text-sm hover:underline flex items-center gap-1">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="divide-y divide-border/5">
          {recent.length === 0 ? (
            <div className="p-8 text-center text-text-secondary font-medium">
              No pending suggestions 🎉
            </div>
          ) : (
            recent.map((doubt) => (
              <Link 
                key={doubt.id} 
                href={`/admin/suggestions/${doubt.id}`}
                className="flex flex-col md:flex-row md:items-center gap-4 p-6 hover:bg-black/5 transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 bg-surface-lavender rounded-full flex items-center justify-center font-bold text-accent-black shrink-0">
                  {doubt.student_name.charAt(0).toUpperCase()}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-text-primary">{doubt.student_name}</span>
                    <span className="text-xs font-bold bg-surface-yellow text-text-primary px-2 py-0.5 rounded uppercase tracking-wider">
                      {doubt.category}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm truncate font-medium">"{doubt.last_message}"</p>
                </div>
                
                <div className="flex items-center gap-4 shrink-0">
                  <span className="flex items-center gap-1.5 text-yellow-600 bg-yellow-50 px-3 py-1 rounded-lg font-bold text-xs uppercase tracking-wider">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                    Pending
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-text-secondary border border-border/10 shadow-sm group-hover:bg-accent-black group-hover:text-white transition-all">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
