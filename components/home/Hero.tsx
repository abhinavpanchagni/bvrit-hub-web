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
        {/* Main Logo centered in Hero */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg shadow-black/5 border border-border/10 overflow-hidden">
              <img src="/logo.png" alt="BVRIT Hub Logo" className="w-full h-full object-contain p-2" />
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold tracking-widest text-text-primary">BVRIT HUB</span>
              <div className="h-[3px] w-full bg-accent-blue mt-[2px] rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="inline-block relative">
          <span className="font-medium text-sm md:text-base border border-border/10 bg-surface-yellow text-accent-black px-4 py-1.5 rounded-full inline-block mb-6 shadow-sm">
            Built by BVRITians. For Every BVRITian.
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.1] mb-6">
          Your Campus. <br className="hidden md:block" />
          <span className="relative inline-block text-accent-blue">
            Connected.
          </span>
        </h1>

        <p className="mx-auto text-lg md:text-xl text-text-secondary max-w-2xl mb-10 font-medium">
          BVRIT Hub is the digital companion for every BVRIT student—bringing academics, campus life, communities, opportunities, and everything in between into one place.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          <Link
            href="/login"
            className="bg-accent-black text-bg rounded-full px-8 py-3.5 font-medium text-lg hover:scale-[1.03] shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            Explore BVRIT Hub →
          </Link>

          <Link
            href="/starter-pack"
            className="bg-surface-yellow text-accent-black rounded-full px-8 py-3.5 font-medium text-lg hover:scale-[1.03] shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            Explore Starter Pack →
          </Link>
        </div>
      </div>
    </section>
  );
}
