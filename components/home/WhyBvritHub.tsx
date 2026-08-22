"use client";

import { Layers, GraduationCap, Zap, Heart } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  {
    number: "01",
    title: "Everything in One Place",
    description:
      "Community feed, student clubs, networking hub, and freshers guide organized for every student.",
    icon: Layers,
    color: "bg-surface-yellow",
  },
  {
    number: "02",
    title: "Built for BVRIT Students",
    description:
      "Every page is designed around the BVRIT academic structure so you can find resources quickly.",
    icon: GraduationCap,
    color: "bg-surface-peach",
  },
  {
    number: "03",
    title: "Save Your Time",
    description:
      "Stop searching through WhatsApp groups and Google Drive folders. Everything stays in one place.",
    icon: Zap,
    color: "bg-surface-mint",
  },
  {
    number: "04",
    title: "Always Free",
    description:
      "BVRIT Hub is completely free and built by students to help every engineering student.",
    icon: Heart,
    color: "bg-surface-lavender",
  },
];

const stats = [
  {
    value: "102+",
    label: "Students Surveyed",
  },
  {
    value: "10",
    label: "Freshers Guides",
  },
  {
    value: "100%",
    label: "Free",
  },
  {
    value: "V1",
    label: "Current Version",
  },
];

export default function WhyBvritHub() {
  const revealRef = useScrollReveal();

  return (
    <section ref={revealRef} className="bg-bg py-24 scroll-reveal relative">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center flex flex-col items-center">
          <span className="font-bold text-xs uppercase tracking-wider text-accent-blue mb-4">
            Why BVRIT Hub?
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 max-w-4xl leading-tight">
            Everything You Need,
            <br />
            All In One Place.
          </h2>

          <p className="mx-auto text-lg text-text-secondary font-medium max-w-3xl mb-20">
            College life updates, events, and clubs are usually scattered across WhatsApp groups,
            Instagram pages and multiple websites. BVRIT Hub brings
            everything together into one organized platform built specifically
            for BVRIT students.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {features.map((item) => (
            <div
              key={item.number}
              className={`${item.color} rounded-[2.5rem] border border-border/10 p-8 shadow-sm flex flex-col items-start transition-transform hover:-translate-y-1 relative overflow-hidden`}
            >
              <div className="flex items-center justify-between w-full mb-8 relative z-10">
                <span className="text-sm font-bold bg-white/60 text-accent-black px-3 py-1 rounded-xl border border-white/40">
                  {item.number}
                </span>

                <div className="w-12 h-12 rounded-2xl bg-white/60 flex items-center justify-center shadow-sm border border-white/20">
                  <item.icon size={22} strokeWidth={2.5} className="text-accent-black" />
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-accent-black mb-3 relative z-10">
                {item.title}
              </h3>

              <p className="text-sm font-medium text-accent-black/80 leading-relaxed relative z-10">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-[2.5rem] border border-border/10 bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-2">
                {item.value}
              </h3>

              <p className="font-bold text-text-secondary text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
