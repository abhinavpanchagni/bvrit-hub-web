"use client";

import Link from "next/link";
import { ArrowLeft, Smartphone, Bot, Car, Lightbulb } from "lucide-react";
import FormulaSheet from "@/components/before-class/FormulaSheet";

export default function BeforeClassPage() {
  const prerequisites = [
    "Basic Electricity",
    "Current, Voltage & Resistance",
    "Atoms & Semiconductors",
    "Basic Circuit Symbols",
    "Ohm's Law"
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
          Electronic Devices & <br />Circuits
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* Why This Matters */}
        <section className="bg-accent-black text-bg rounded-[2.5rem] p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-black mb-8 flex items-center gap-4"><div className="w-12 h-12 rounded-full bg-surface-mint flex items-center justify-center text-accent-black"><Lightbulb size={24} strokeWidth={2.5} /></div>Why This Matters</h2>
          <div className="space-y-6 text-lg text-bg/90 leading-relaxed font-medium">
            <p>
              Every modern electronic system is built using <span className="font-bold text-white">electronic devices and circuits</span>.
            </p>
            <p>
              Whether it's a smartphone, computer, medical device, satellite, robot, or electric vehicle, all of them depend on electronic components working together accurately and efficiently.
            </p>
            <p>
              This subject introduces you to semiconductor devices, diodes, transistors, rectifiers, amplifiers, and basic electronic circuits. These concepts form the foundation for many advanced subjects in electronics, embedded systems, IoT, VLSI, robotics, and communication engineering.
            </p>
            <p className="p-6 bg-white/10 rounded-2xl border border-white/20 text-white font-bold">
              Understanding electronics helps you understand how technology actually works from the inside.
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
                <Smartphone size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Smartphones & Consumer Electronics</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Every smartphone contains billions of tiny transistors integrated into microchips. These chips process data, control the display, manage the camera, and perform millions of operations every second.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-mint rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Bot size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Robotics & Embedded Systems</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Robots and smart devices constantly receive signals from sensors and make decisions using electronic circuits. Electronics enables machines to sense, process information, and respond automatically.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-peach rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Car size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Electric Vehicles & Smart Transportation</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Modern vehicles contain hundreds of electronic control units (ECUs) that monitor braking, battery systems, safety features, and navigation. Electronic circuits make these systems reliable and safe.
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
            Refreshing these school concepts will make learning easier.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {prerequisites.map((req, idx) => (
              <div key={idx} className="bg-white border-2 border-accent-black rounded-xl px-5 py-3 font-bold shadow-[4px_4px_0_#000]">
                📌 {req}
              </div>
            ))}
          </div>

          <Link 
            href="/before-class/electronic-devices-circuits/electronic-devices-circuits-prerequisites"
            className="inline-block bg-accent-black text-white font-bold text-lg rounded-xl px-8 py-4 mb-8 shadow-sm hover:scale-[1.02] transition-transform"
          >
            Start Prerequisites Practice →
          </Link>

          
          <div className="bg-white/60 rounded-2xl p-6 border border-white font-bold text-accent-black">
            Don't worry if you've forgotten some of these concepts. Your faculty will build upon these basics throughout the course.
          </div>
        </section>

        {/* Formulas & Cheat Sheets */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-border/10 shadow-sm relative overflow-hidden">
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <span className="text-4xl">⚡</span> Formulas & Cheat Sheets
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <FormulaSheet src="/sheets/edc-atoms-semiconductors.jpeg" title="Atoms & Semiconductors" />
            <FormulaSheet src="/sheets/edc-basic-circuit-symbols.jpeg" title="Basic Circuit Symbols" />
            <FormulaSheet src="/sheets/edc-basic-electricity.jpeg" title="Basic Electricity" />
            <FormulaSheet src="/sheets/edc-current-voltage-resistance.jpeg" title="Current, Voltage & Resistance" />
            <div className="md:col-span-2 md:w-1/2 md:mx-auto">
              <FormulaSheet src="/sheets/edc-ohms-law.jpeg" title="Ohm's Law" />
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
