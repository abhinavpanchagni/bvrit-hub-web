"use client";

import Link from "next/link";
import { ArrowLeft, Zap, Car, Factory, Lightbulb } from "lucide-react";
import FormulaSheet from "@/components/before-class/FormulaSheet";

export default function BeforeClassPage() {
  const prerequisites = [
    "Basic Electricity",
    "Current, Voltage & Resistance",
    "Ohm's Law",
    "Simple Circuit Connections",
    "Basic Algebra and Unit Conversions"
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
          Basic Electrical <br />Engineering
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* Why This Matters */}
        <section className="bg-accent-black text-bg rounded-[2.5rem] p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-black mb-8 flex items-center gap-4"><div className="w-12 h-12 rounded-full bg-surface-mint flex items-center justify-center text-accent-black"><Lightbulb size={24} strokeWidth={2.5} /></div>Why This Matters</h2>
          <div className="space-y-6 text-lg text-bg/90 leading-relaxed font-medium">
            <p>
              Electricity is one of the <span className="font-bold text-white">most important forms of energy</span> used in engineering.
            </p>
            <p>
              Every engineer, regardless of their branch, works with electrical systems in some way. Whether you're developing software for smart devices, designing robots, working with electric vehicles, or operating industrial machines, understanding the fundamentals of electricity is essential.
            </p>
            <p className="p-6 bg-white/10 rounded-2xl border border-white/20 text-white font-bold">
              This subject introduces you to electrical circuits, electrical machines, safety principles, and power systems, giving you the confidence to understand how electrical technology works in the real world.
            </p>
          </div>
        </section>

        {/* Where You'll Use It */}
        <section>
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <span className="text-4xl">⚡</span> Where You'll Use It
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-lavender rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Zap size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Power Generation & Distribution</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                When you switch on a light, electricity has travelled hundreds of kilometres from a power plant. Electrical engineers design these systems to ensure a continuous power supply.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-mint rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Car size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Electric Vehicles (EVs)</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Modern EVs rely on motors, batteries, controllers, and charging systems. Engineers design these systems to improve efficiency and make transportation sustainable.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-peach rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Factory size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Smart Industries & Automation</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Factories today use motors, sensors, and automated machines to manufacture products. Electrical engineering enables these machines to operate safely and accurately.
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
            href="/before-class/basic-electrical-engineering/basic-electrical-engineering-prerequisites"
            className="inline-block bg-accent-black text-white font-bold text-lg rounded-xl px-8 py-4 mb-8 shadow-sm hover:scale-[1.02] transition-transform"
          >
            Start Prerequisites Practice →
          </Link>

          
          <div className="bg-white/60 rounded-2xl p-6 border border-white font-bold text-accent-black">
            Don't worry if you've forgotten these concepts. Your faculty will revise and expand them using engineering examples throughout the course.
          </div>
        </section>

        {/* Formulas & Cheat Sheets */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-border/10 shadow-sm relative overflow-hidden">
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <span className="text-4xl">⚡</span> Formulas & Cheat Sheets
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <FormulaSheet src="/sheets/edc-basic-electricity.jpeg" title="Basic Electricity" />
            <FormulaSheet src="/sheets/edc-basic-circuit-symbols.jpeg" title="Circuit Symbols" />
            <FormulaSheet src="/sheets/edc-current-voltage-resistance.jpeg" title="Current, Voltage & Resistance" />
            <FormulaSheet src="/sheets/edc-ohms-law.jpeg" title="Ohm's Law" />
          </div>
        </section>

      </div>
    </main>
  );
}
