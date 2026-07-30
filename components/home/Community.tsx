"use client";

import Link from "next/link";
import { Users, Calendar, ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const events = [
  { title: "Hackathon 2026", type: "Event", date: "Oct 15", icon: Calendar },
  { title: "Tech Club Meetup", type: "Club", date: "Oct 18", icon: Users },
  { title: "Cultural Fest", type: "Event", date: "Nov 02", icon: Calendar },
];

export default function Community() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef} className="bg-surface-lavender rounded-3xl p-6 md:p-8 flex flex-col h-full scroll-reveal hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-1">Clubs & Events</h2>
          <p className="text-text-secondary font-medium text-sm">Discover what's happening on campus.</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-auto">
        {events.map((event, i) => (
          <Link key={i} href="#" className="flex items-center gap-4 bg-white/60 dark:bg-black/10 hover:bg-white dark:hover:bg-black/20 p-3 rounded-2xl transition-colors border border-transparent hover:border-border/10 group">
            <div className="w-12 h-12 rounded-xl bg-white dark:bg-black/20 flex items-center justify-center shrink-0 text-accent-black shadow-sm group-hover:scale-105 transition-transform">
              <event.icon size={20} strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-text-primary text-base">{event.title}</h3>
              <p className="text-text-secondary text-xs font-medium">{event.type} • {event.date}</p>
            </div>
            <ArrowUpRight size={18} className="text-text-secondary/30 group-hover:text-text-secondary transition-colors group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
      
      <Link href="#" className="mt-6 text-center text-sm font-bold text-accent-blue hover:text-accent-black transition-colors">
        View All Events
      </Link>
    </div>
  );
}
