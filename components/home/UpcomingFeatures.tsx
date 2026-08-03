"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Sparkles } from "lucide-react";

const features = [
  "Student Communities",
  "Clubs & Chapters",
  "Campus Events",
  "Academic Companion",
  "Smart Search",
  "Personalized Recommendations",
  "Progress Tracking",
  "Student Profiles",
  "Opportunity Hub",
  "Much more...",
];

export default function UpcomingFeatures() {
  const revealRef = useScrollReveal();

  return (
    <section ref={revealRef} className="py-12 relative scroll-reveal">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="bg-white rounded-[2.5rem] p-10 lg:p-14 shadow-sm border border-border/10 text-center transition-transform hover:-translate-y-1">
          <h3 className="text-3xl font-extrabold text-text-primary mb-4">
            What We're Building
          </h3>
          
          <p className="text-lg text-text-secondary font-medium mb-10 max-w-2xl mx-auto">
            BVRIT Hub is just getting started. Upcoming additions include:
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto text-left">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-accent-black/5 border border-border/10 py-4 px-6 rounded-2xl flex items-center gap-3"
              >
                <Sparkles size={18} className="text-accent-blue" />
                <span className="font-bold text-sm text-text-primary">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
