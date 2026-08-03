"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Mission() {
  const revealRef = useScrollReveal();

  return (
    <section ref={revealRef} className="py-24 relative bg-accent-blue text-white scroll-reveal">
      <div className="mx-auto max-w-7xl px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 max-w-4xl mx-auto leading-tight text-white">
          Our Mission
        </h2>

        <p className="mx-auto text-xl md:text-2xl font-medium max-w-3xl mb-8 leading-relaxed text-white/90">
          We believe students should spend more time learning, building, and participating—and less time searching for information.
        </p>

        <p className="mx-auto text-lg md:text-xl font-medium max-w-3xl text-white/80">
          Our goal is to make BVRIT Hub the platform every student opens when they have a question about college.
        </p>
      </div>
    </section>
  );
}
