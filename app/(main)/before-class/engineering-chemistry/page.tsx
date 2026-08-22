"use client";

import Link from "next/link";
import { ArrowLeft, Battery, Droplet, Cpu, Lightbulb } from "lucide-react";
import FormulaSheet from "@/components/before-class/FormulaSheet";

export default function BeforeClassPage() {
  const prerequisites = [
    "Atoms & Molecules",
    "Chemical Reactions",
    "Acids, Bases & Salts",
    "Periodic Table",
    "Basic Chemical Bonding"
  ];

  return (
    <main className="flex-1 overflow-y-auto bg-bg text-text-primary pb-24">
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-12">
        <Link 
          href="/before-class" 
          className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary font-bold mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Subjects
        </Link>
        
        <div className="inline-block px-4 py-2 bg-surface-lavender border border-border/10 rounded-full text-accent-black font-extrabold text-sm mb-6 shadow-sm">
          🚀 Before Your First Class
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
          Engineering Chemistry
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* Why This Matters */}
        <section className="bg-accent-black text-bg rounded-[2.5rem] p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-black mb-8 flex items-center gap-4"><div className="w-12 h-12 rounded-full bg-surface-mint flex items-center justify-center text-accent-black"><Lightbulb size={24} strokeWidth={2.5} /></div>Why This Matters</h2>
          <div className="space-y-6 text-lg text-bg/90 leading-relaxed font-medium">
            <p>
              Every engineering discipline depends on <span className="font-bold text-white">materials</span>.
            </p>
            <p>
              Whether you're designing a bridge, manufacturing a car, developing a semiconductor, building an electric vehicle, or treating industrial water, understanding the properties and behaviour of materials is essential.
            </p>
            <p>
              Engineering Chemistry introduces you to the science behind batteries, corrosion, polymers, nanomaterials, water treatment, and advanced engineering materials. These concepts help engineers design safer, stronger, more efficient, and environmentally sustainable technologies.
            </p>
            <p className="p-6 bg-white/10 rounded-2xl border border-white/20 text-white font-bold">
              This subject provides the scientific foundation needed to make better engineering decisions.
            </p>
          </div>
        </section>

        {/* Where You'll Use It */}
        <section>
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <span className="text-4xl">⚗️</span> Where You'll Use It
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-lavender rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Battery size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Electric Vehicle Batteries</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Electric vehicles rely on advanced lithium-ion batteries that store and deliver energy efficiently. Engineers study chemistry to understand battery materials, improve charging speed, and develop sustainable energy storage.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-mint rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Droplet size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Water Treatment & Environmental Engineering</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Industries and cities use chemical treatment processes to remove harmful impurities and make water safe for drinking and manufacturing. Engineers apply chemistry to design systems that protect the environment.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-peach rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Cpu size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Advanced Materials & Electronics</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Modern smartphones, computer chips, medical implants, and aerospace components use specially designed materials with unique chemical properties. Engineering Chemistry helps engineers understand how these materials are developed.
              </p>
            </div>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="bg-surface-mint rounded-[2.5rem] p-8 md:p-12 border border-border/10 shadow-sm relative overflow-hidden">
          <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
            <span className="text-4xl">🧠</span> Before Your First Class
          </h2>
          <p className="text-lg font-bold mb-8">
            Refreshing these school concepts will help you understand the subject more easily.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {prerequisites.map((req, idx) => (
              <div key={idx} className="bg-white border-2 border-accent-black rounded-xl px-5 py-3 font-bold shadow-[4px_4px_0_#000]">
                📌 {req}
              </div>
            ))}
          </div>

          <Link 
            href="/before-class/engineering-chemistry/engineering-chemistry-prerequisites"
            className="inline-block bg-accent-black text-white font-bold text-lg rounded-xl px-8 py-4 mb-8 shadow-sm hover:scale-[1.02] transition-transform"
          >
            Start Prerequisites Practice →
          </Link>

          
          <div className="bg-white/60 rounded-2xl p-6 border border-white font-bold text-accent-black">
            Don't worry if you've forgotten these concepts. Your faculty will connect them to real engineering applications throughout the course.
          </div>
        </section>

        {/* Formulas & Cheat Sheets */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-border/10 shadow-sm relative overflow-hidden">
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <span className="text-4xl">⚡</span> Formulas & Cheat Sheets
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <FormulaSheet src="/sheets/chem-acids-bases-salts.jpeg" title="Acids, Bases & Salts" />
            <FormulaSheet src="/sheets/chem-atoms-molecules.jpeg" title="Atoms & Molecules" />
            <FormulaSheet src="/sheets/chem-chemical-bonding.jpeg" title="Chemical Bonding" />
            <FormulaSheet src="/sheets/chem-periodic-table.jpeg" title="Periodic Table Trends" />
          </div>
        </section>

      </div>
    </main>
  );
}
