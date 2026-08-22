"use client";

import Link from "next/link";
import { ArrowLeft, Smartphone, Globe, HeartPulse, Lightbulb } from "lucide-react";

export default function BeforeClassPage() {
  const prerequisites = [
    "Basic Mechanics",
    "Electricity & Magnetism",
    "Light & Optics",
    "Atoms & Modern Physics",
    "Basic Algebra and Graphs"
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
          Advanced Engineering <br />Physics
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* Why This Matters */}
        <section className="bg-accent-black text-bg rounded-[2.5rem] p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-black mb-8 flex items-center gap-4"><div className="w-12 h-12 rounded-full bg-surface-mint flex items-center justify-center text-accent-black"><Lightbulb size={24} strokeWidth={2.5} /></div>Why This Matters</h2>
          <div className="space-y-6 text-lg text-bg/90 leading-relaxed font-medium">
            <p>
              Physics is <span className="font-bold text-surface-yellow">not about memorizing formulas</span>—it's about understanding <span className="font-bold text-white">how the world works</span>.
            </p>
            <p>
              As an engineer, you'll design, build, analyze, and improve technologies. To do that, you must understand the scientific principles behind materials, electricity, light, semiconductors, lasers, quantum mechanics, and modern communication systems.
            </p>
            <p className="p-6 bg-white/10 rounded-2xl border border-white/20 text-white font-bold">
              Engineering Physics develops scientific thinking and helps you understand the principles behind many technologies you'll use and build throughout your career.
            </p>
          </div>
        </section>

        {/* Where You'll Use It */}
        <section>
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <span className="text-4xl">🌍</span> Where You'll Use It
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-lavender rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Smartphone size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Smartphones & Electronics</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Every smartphone depends on semiconductors, electronic materials, and quantum physics. The processors, memory chips, sensors, and displays inside your phone all work because of principles you'll begin learning in this course.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-mint rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Globe size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Internet & Fibre Optics</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                The internet reaches millions of homes through fibre optic cables that transmit information using light. Engineering Physics explains how lasers generate light and how optical fibres carry data over long distances with incredible speed and very little loss.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-peach rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <HeartPulse size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Healthcare Technology</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Modern medical equipment such as MRI scanners, X-ray systems, laser surgery devices, and diagnostic instruments are based on the principles of Physics. Engineers work alongside doctors to design technologies that improve healthcare and save lives.
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
            Refreshing these school concepts will make learning much easier.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {prerequisites.map((req, idx) => (
              <div key={idx} className="bg-white border-2 border-accent-black rounded-xl px-5 py-3 font-bold shadow-[4px_4px_0_#000]">
                📌 {req}
              </div>
            ))}
          </div>

          <Link 
            href="/before-class/advanced-engineering-physics/advanced-engineering-physics-prerequisites"
            className="inline-block bg-accent-black text-white font-bold text-lg rounded-xl px-8 py-4 mb-8 shadow-sm hover:scale-[1.02] transition-transform"
          >
            Start Prerequisites Practice →
          </Link>

          
          <div className="bg-white/60 rounded-2xl p-6 border border-white font-bold text-accent-black">
            Don't worry if you've forgotten these topics. Your faculty will connect them with engineering applications throughout the course.
          </div>
        </section>

      </div>
    </main>
  );
}
