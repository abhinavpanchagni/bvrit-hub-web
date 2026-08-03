"use client";

import Link from "next/link";
import { Search, Book, FileText, FlaskConical, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const resources = [
  { title: "Syllabus", desc: "Latest curriculum details", icon: Book, color: "bg-surface-lavender", href: "/resources/syllabus" },
  { title: "PYQ Papers", desc: "Previous year questions", icon: FileText, color: "bg-surface-mint", href: "/resources/papers" },
  { title: "Lab Manuals", desc: "Practical guides & code", icon: FlaskConical, color: "bg-surface-yellow", href: "/resources/labs" },
];

export default function StarterPackPreview() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef} className="bg-surface-peach rounded-3xl p-6 md:p-8 flex flex-col h-full scroll-reveal hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-1">Resource Hub</h2>
          <p className="text-text-secondary font-medium text-sm">Everything you need, in one place.</p>
        </div>
      </div>

      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search size={18} className="text-text-secondary" />
        </div>
        <input 
          type="text" 
          placeholder="Search for notes, labs, PYQs..." 
          className="w-full bg-white/60 border border-white/20 text-text-primary rounded-full pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all placeholder:text-text-secondary/70 font-medium text-sm shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 gap-3 mt-auto">
        {resources.map((item) => (
          <Link key={item.title} href={item.href} className="flex items-center gap-4 bg-white/60 hover:bg-white:bg-black/20 p-3 rounded-2xl transition-colors border border-white/20 shadow-sm group">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.color} text-accent-black shadow-sm group-hover:scale-105 transition-transform`}>
              <item.icon size={20} strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-text-primary text-base">{item.title}</h3>
              <p className="text-text-secondary text-xs font-medium">{item.desc}</p>
            </div>
            <ChevronRight size={18} className="text-text-secondary/30 group-hover:text-text-secondary transition-colors group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </div>
  );
}
