"use client";

import { GraduationCap, Rocket, Archive, Package, BarChart2, Bookmark, Bell } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutSection() {
  const revealRef = useScrollReveal();

  const cards = [
    {
      title: "Student Built",
      description:
        "Created by BVRIT students who understand what students actually need.",
      icon: GraduationCap,
      color: "bg-surface-mint",
    },
    {
      title: "Our Vision",
      description:
        "To build the digital home for every BVRITian—from the first day on campus to graduation.",
      icon: Rocket,
      color: "bg-surface-lavender",
    },
    {
      title: "Constantly Growing",
      description:
        "BVRIT Hub will continue evolving with new features, student contributions, and campus initiatives every semester.",
      icon: Archive,
      color: "bg-surface-peach",
    },
  ];

  return (
    <section ref={revealRef} className="py-24 relative scroll-reveal">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center flex flex-col items-center mb-16">
          <span className="font-bold text-xs uppercase tracking-wider text-accent-blue mb-4">
            About BVRIT Hub
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 max-w-4xl leading-tight">
            More Than a Website.
          </h2>

          <p className="mx-auto text-lg text-text-secondary font-medium max-w-3xl">
            BVRIT Hub is a student-led initiative to build a better digital experience for the BVRIT community. Instead of students relying on scattered information, disconnected platforms, and word of mouth, we're creating one place where every student can discover, learn, connect, and grow throughout their engineering journey.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mb-16">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`${card.color} rounded-[2.5rem] p-10 shadow-sm border border-border/10 flex flex-col items-start transition-transform hover:-translate-y-1`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center mb-8 shadow-sm border border-white/20">
                <card.icon size={28} strokeWidth={2.5} className="text-accent-black" />
              </div>

              <h3 className="text-2xl font-extrabold text-text-primary mb-3">
                {card.title}
              </h3>

              <p className="text-sm font-medium text-text-secondary leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
