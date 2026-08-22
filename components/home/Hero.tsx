"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Hero() {
  const revealRef = useScrollReveal();

  return (
    <section className="relative pt-[250px] md:pt-[320px] pb-24 px-6 md:px-12 overflow-hidden bg-bg min-h-screen flex flex-col justify-start">
      {/* Full section background image with opacity */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-top"
        style={{ 
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: '100% 100%' 
        }}
      >
        {/* Slightly black tint to make image visible but readable */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Gradient to seamlessly blend into the page background at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/80 to-bg"></div>
      </div>

      <div 
        ref={revealRef} 
        className="mx-auto max-w-4xl flex flex-col items-center justify-center relative z-10 scroll-reveal"
      >
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-border/10 overflow-hidden shrink-0">
              <img src="/logo.png" alt="BVRIT Hub Logo" className="w-full h-full object-contain p-1.5" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[13px] font-bold tracking-widest text-text-primary">BVRIT HUB</span>
              <div className="h-[3px] w-full bg-accent-blue mt-[2px] rounded-full"></div>
            </div>
          </div>

          <div className="inline-block relative">
            <span className="font-bold text-xs uppercase tracking-wider border border-border/10 bg-surface-yellow text-accent-black px-4 py-2 rounded-full inline-block mb-6 shadow-sm">
              Built by BVRITians. For Every BVRITian.
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold tracking-tight text-text-primary leading-[1.1] mb-6">
            Your Campus. <br />
            <span className="relative inline-block text-accent-blue">
              Connected.
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-text-secondary max-w-2xl mb-12 font-medium leading-relaxed">
            Academics, campus life, people, opportunities and everything you need at BVRIT — in one place.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 w-full">
            <Link
              href="/login"
              className="w-full sm:w-auto text-center bg-accent-black text-bg rounded-full px-8 py-4 font-bold text-lg hover:scale-[1.03] shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              Explore BVRIT Hub →
            </Link>

            <Link
              href="/starter-pack"
              className="w-full sm:w-auto text-center bg-surface-lavender text-accent-black rounded-full px-8 py-4 font-bold text-lg hover:scale-[1.03] shadow-md hover:shadow-lg transition-all active:scale-95 border border-border/10"
            >
              Start as a Fresher →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
