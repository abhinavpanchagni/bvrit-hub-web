"use client";

import Link from "next/link";
import { Bell, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const notifications = [
  { title: "How Engineering Works", time: "2h ago", color: "bg-surface-peach", text: "text-orange-700" },
  { title: "Understand SGPA & CGPA", time: "5h ago", color: "bg-surface-mint", text: "text-emerald-700" },
  { title: "Attendance Rules Update", time: "1d ago", color: "bg-surface-lavender", text: "text-purple-700" },
];

export default function FreshersFeed() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef} className="bg-white rounded-3xl p-6 md:p-8 flex flex-col h-full scroll-reveal border border-border/10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-1">Freshers Feed</h2>
          <p className="text-text-secondary font-medium text-sm">Updates & essential guides.</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-surface-yellow flex items-center justify-center text-accent-black shrink-0">
          <Bell size={18} strokeWidth={2.5} />
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-auto">
        {notifications.map((item, i) => (
          <Link key={i} href="#" className="flex items-start gap-4 p-3 rounded-2xl hover:bg-black/5:bg-white/5 transition-colors group">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.color} ${item.text} font-bold text-sm shadow-sm group-hover:scale-105 transition-transform`}>
              {item.title.charAt(0)}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-text-primary text-sm leading-tight mb-1">{item.title}</h3>
              <p className="text-text-secondary text-xs font-medium">{item.time}</p>
            </div>
          </Link>
        ))}
      </div>
      
      <Link href="/freshers" className="mt-6 flex items-center justify-center gap-2 text-sm font-bold text-bg bg-accent-black py-3 rounded-full hover:scale-[1.02] shadow-sm transition-all">
        View All Guides <ArrowRight size={16} />
      </Link>
    </div>
  );
}
