"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Hero() {
  const revealRef = useScrollReveal();

  return (
    <section className="relative pt-[160px] pb-16 px-4 md:px-8 overflow-hidden">
      <div 
        ref={revealRef} 
        className="mx-auto max-w-5xl text-center relative z-10 scroll-reveal"
      >
        <div className="inline-block relative">
          <span className="font-medium text-sm md:text-base border border-border/10 bg-surface-yellow text-accent-black px-4 py-1.5 rounded-full inline-block mb-6 shadow-sm">
            For BVRITians, by BVRITians
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.1] mb-6">
          The Unofficial <br className="hidden md:block" />
          <span className="relative inline-block text-accent-blue">
            Student OS
          </span>
        </h1>

        <p className="mx-auto text-lg md:text-xl text-text-secondary max-w-2xl mb-10 font-medium">
          We got tired of searching through messy WhatsApp groups and Drive links. 
          So we built a better way to find labs, PYQs, and study materials.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/login"
            className="bg-accent-black text-bg rounded-full px-8 py-3.5 font-medium text-lg hover:scale-[1.03] shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            Start Exploring 🚀
          </Link>

          <Link
            href="#dashboard"
            className="font-medium text-lg text-text-secondary hover:text-text-primary border border-border/20 bg-white/50 dark:bg-black/20 rounded-full px-8 py-3.5 hover:bg-white dark:hover:bg-black transition-all"
          >
            How it works
          </Link>
        </div>
      </div>
    </section>
  );
}
