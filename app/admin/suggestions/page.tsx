"use client";

import { useState, useEffect } from "react";
import { getAllAdminDoubts } from "@/lib/admin";
import { Search, Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AdminDoubtsList() {
  const [doubts, setDoubts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [filter, setFilter] = useState<'all' | 'pending' | 'answered'>('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getAllAdminDoubts();
        setDoubts(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const filteredDoubts = doubts.filter(d => {
    const matchesFilter = filter === 'all' || d.status === filter;
    const s = search.toLowerCase();
    const matchesSearch = 
      d.student_name.toLowerCase().includes(s) || 
      d.category.toLowerCase().includes(s) || 
      d.last_message.toLowerCase().includes(s);
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-text-primary">Suggestions</h1>
        <p className="text-text-secondary mt-1 font-medium">Manage and respond to student inquiries.</p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
        <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-border/10 shadow-sm w-max">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${filter === 'all' ? 'bg-accent-black text-white' : 'text-text-secondary hover:bg-black/5'}`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('pending')}
            className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${filter === 'pending' ? 'bg-yellow-50 text-yellow-600' : 'text-text-secondary hover:bg-black/5'}`}
          >
            Pending
          </button>
          <button 
            onClick={() => setFilter('answered')}
            className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${filter === 'answered' ? 'bg-green-50 text-green-600' : 'text-text-secondary hover:bg-black/5'}`}
          >
            Answered
          </button>
        </div>

        <div className="relative w-full md:w-80">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-secondary">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search student or question..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-border/10 rounded-xl pl-10 pr-4 py-2.5 text-sm font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/50 shadow-sm"
          />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="animate-spin text-accent-blue" size={40} />
        </div>
      ) : filteredDoubts.length === 0 ? (
        <div className="bg-white border border-border/10 p-12 rounded-3xl text-center shadow-sm">
          <p className="text-text-secondary font-medium">No suggestions found matching your criteria.</p>
        </div>
      ) : (
        <div className="bg-white border border-border/10 rounded-3xl shadow-sm overflow-hidden divide-y divide-border/5">
          {filteredDoubts.map(doubt => (
            <Link 
              key={doubt.id} 
              href={`/admin/suggestions/${doubt.id}`}
              className="flex flex-col md:flex-row md:items-center gap-4 p-6 hover:bg-black/5 transition-colors group cursor-pointer"
            >
              <div className="w-12 h-12 bg-surface-lavender rounded-full flex items-center justify-center font-bold text-lg text-accent-black shrink-0 border border-border/10 shadow-sm">
                {doubt.student_name.charAt(0).toUpperCase()}
              </div>
              
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-text-primary">{doubt.student_name}</span>
                  <span className="text-xs font-bold bg-surface-yellow text-text-primary px-2 py-0.5 rounded uppercase tracking-wider border border-border/5">
                    {doubt.category}
                  </span>
                </div>
                <p className="text-text-secondary text-sm truncate font-medium">"{doubt.last_message}"</p>
                <span className="text-[11px] font-bold text-text-secondary/70 uppercase tracking-wider mt-1.5">
                  {new Date(doubt.updated_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} • {new Date(doubt.updated_at).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                </span>
              </div>
              
              <div className="flex items-center gap-4 shrink-0">
                {doubt.status === 'pending' ? (
                  <span className="flex items-center gap-1.5 text-yellow-600 bg-yellow-50 px-3 py-1 rounded-lg font-bold text-xs uppercase tracking-wider">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                    Pending
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-green-600 bg-green-50 px-3 py-1 rounded-lg font-bold text-xs uppercase tracking-wider">
                    Answered
                  </span>
                )}
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-text-secondary border border-border/10 shadow-sm group-hover:bg-accent-black group-hover:text-white transition-all">
                  <ArrowRight size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
