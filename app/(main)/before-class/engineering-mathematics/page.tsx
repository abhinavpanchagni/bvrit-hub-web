"use client";

import Link from "next/link";
import { ArrowLeft, Brain, MapPin, DraftingCompass, Lightbulb } from "lucide-react";

export default function BeforeClassPage() {
  const prerequisites = [
    "Algebra",
    "Trigonometry",
    "Coordinate Geometry",
    "Functions & Graphs",
    "Basic Differentiation & Integration"
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
          Engineering <br />Mathematics
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* Why This Matters */}
        <section className="bg-accent-black text-bg rounded-[2.5rem] p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-black mb-8 flex items-center gap-4"><div className="w-12 h-12 rounded-full bg-surface-mint flex items-center justify-center text-accent-black"><Lightbulb size={24} strokeWidth={2.5} /></div>Why This Matters</h2>
          <div className="space-y-6 text-lg text-bg/90 leading-relaxed font-medium">
            <p>
              Many students think mathematics is just another subject filled with formulas. In reality, <span className="font-bold text-white">it is one of the most important tools</span> an engineer uses throughout their career.
            </p>
            <p>
              Engineering Mathematics develops analytical thinking and teaches you how to model, analyze, and solve complex engineering problems. Whether you're building software, designing machines, analyzing electrical circuits, or developing AI systems, mathematics provides the logical foundation behind every engineering discipline.
            </p>
            <p className="p-6 bg-white/10 rounded-2xl border border-white/20 text-white font-bold">
              The concepts you learn here will continue to support many technical subjects in the coming semesters.
            </p>
          </div>
        </section>

        {/* Where You'll Use It */}
        <section>
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <span className="text-4xl">📈</span> Where You'll Use It
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-lavender rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Brain size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Artificial Intelligence & Machine Learning</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Artificial Intelligence is built on mathematical concepts such as matrices, vectors, calculus, and optimization. Every recommendation you receive on YouTube, and every face recognized by your phone depends on mathematics.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-mint rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <MapPin size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Navigation & GPS</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Applications like Google Maps constantly calculate millions of possible routes to find the fastest path. These calculations involve mathematical models, optimization techniques, and algorithms that process distance and time.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-peach rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <DraftingCompass size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Engineering Design & Analysis</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Before constructing a bridge, designing a machine, or manufacturing a product, engineers perform mathematical calculations to determine dimensions, forces, volumes, and stability.
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
            Refreshing these concepts from school will make the transition to engineering mathematics much easier.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {prerequisites.map((req, idx) => (
              <div key={idx} className="bg-white border-2 border-accent-black rounded-xl px-5 py-3 font-bold shadow-[4px_4px_0_#000]">
                📌 {req}
              </div>
            ))}
          </div>
          
          <Link 
            href="/before-class/engineering-mathematics/mathematics-prerequisites"
            className="inline-block bg-accent-black text-white font-bold text-lg rounded-xl px-8 py-4 mb-8 shadow-sm hover:scale-[1.02] transition-transform"
          >
            Start Prerequisites Practice →
          </Link>
          
          <div className="bg-white/60 rounded-2xl p-6 border border-white font-bold text-accent-black">
            Don't worry if you've forgotten some of these topics. Your faculty will build upon these concepts during the course.
          </div>
        </section>

      </div>
    </main>
  );
}
