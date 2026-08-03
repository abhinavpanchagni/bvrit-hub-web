"use client";

import { CheckCircle2, Circle, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const timeline = [
  { title: "Mid-Term Exams", date: "Nov 15 - Nov 20", status: "completed" },
  { title: "Lab Internals", date: "Dec 01 - Dec 05", status: "current" },
  { title: "Final Semester Exams", date: "Dec 15 - Dec 28", status: "upcoming" },
];

export default function BeyondAcademics() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef} className="bg-surface-mint rounded-3xl p-6 md:p-8 flex flex-col h-full scroll-reveal hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-1">My Semester</h2>
          <p className="text-text-secondary font-medium text-sm">B.Tech 1st Year • Sem 1</p>
        </div>
      </div>

      <div className="bg-white/60 rounded-2xl p-5 mb-8 shadow-sm border border-white/20">
        <div className="flex justify-between text-sm font-bold text-text-primary mb-2">
          <span>Semester Progress</span>
          <span>65%</span>
        </div>
        <div className="w-full bg-black/5 rounded-full h-3">
          <div className="bg-accent-black h-3 rounded-full" style={{ width: '65%' }}></div>
        </div>
      </div>

      <div className="flex flex-col mt-auto relative">
        <div className="absolute left-3.5 top-2 bottom-6 w-0.5 bg-black/10"></div>
        
        {timeline.map((item, i) => (
          <div key={i} className="flex gap-5 relative mb-6 last:mb-0 group">
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 z-10 shadow-sm border-2 border-surface-mint group-hover:scale-110 transition-transform">
              {item.status === 'completed' ? (
                <CheckCircle2 size={16} className="text-emerald-600" />
              ) : item.status === 'current' ? (
                <Clock size={16} className="text-accent-blue" />
              ) : (
                <Circle size={14} className="text-text-secondary/40" />
              )}
            </div>
            <div className="-mt-1">
              <h3 className={`font-bold text-base ${item.status === 'completed' ? 'text-text-secondary line-through' : 'text-text-primary'}`}>
                {item.title}
              </h3>
              <p className="text-text-secondary text-xs font-medium mt-0.5">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}