"use client";

import Link from "next/link";
import { ArrowLeft, BrainCircuit, Smartphone, CreditCard, Lightbulb } from "lucide-react";
import FormulaSheet from "@/components/before-class/FormulaSheet";

export default function BeforeClassPage() {
  const prerequisites = [
    {
      title: "Logical Thinking",
      desc: "Learn to solve problems step by step instead of trying to solve everything at once."
    },
    {
      title: "Algorithms",
      desc: "Understand that an algorithm is simply a sequence of steps followed to solve a problem."
    },
    {
      title: "Flowcharts",
      desc: "Revise how problems can be represented visually before converting them into programs."
    },
    {
      title: "Number Systems",
      desc: "Refresh Binary and Decimal number systems, as computers internally process information using binary."
    },
    {
      title: "Basic Mathematics",
      desc: "Simple arithmetic operations, percentages, and logical reasoning will make programming easier to understand."
    }
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
          Programming for <br />Problem Solving
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* Why This Matters */}
        <section className="bg-accent-black text-bg rounded-[2.5rem] p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-black mb-8 flex items-center gap-4"><div className="w-12 h-12 rounded-full bg-surface-mint flex items-center justify-center text-accent-black"><Lightbulb size={24} strokeWidth={2.5} /></div>Why This Matters</h2>
          <div className="space-y-6 text-lg text-bg/90 leading-relaxed font-medium">
            <p>
              Programming is <span className="font-bold text-white">not just about writing code</span>—it's about learning <span className="font-bold text-surface-yellow">how to think</span>.
            </p>
            <p>
              Engineers solve problems every day. Programming teaches you how to analyze a problem, break it into smaller steps, and develop a logical solution.
            </p>
            <p>
              Even if you don't become a software engineer, the ability to think logically and solve problems systematically will help you throughout your engineering career.
            </p>
            <p className="p-6 bg-white/10 rounded-2xl border border-white/20 text-white font-bold">
              This subject lays the foundation for many advanced subjects you'll study in the coming semesters.
            </p>
          </div>
        </section>

        {/* Where You'll Use It */}
        <section>
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <span className="text-4xl">💻</span> Where You'll Use It
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-lavender rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <BrainCircuit size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Artificial Intelligence</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                AI systems like ChatGPT, Gemini, and self-driving cars don't think on their own. They are built using thousands of programming instructions and intelligent algorithms created by engineers.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-mint rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Smartphone size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Mobile Applications</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Every feature you use in apps like WhatsApp, Instagram, Swiggy, and Google Maps exists because programmers designed and developed it.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-peach rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <CreditCard size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Digital Payments</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                When you scan a QR code or make a UPI payment, programming ensures that these transactions are secure, accurate, and happen almost instantly.
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
            Refreshing these school-level concepts will help you understand the subject more easily.
          </p>
          
          <div className="space-y-4 mb-8">
            {prerequisites.map((req, idx) => (
              <div key={idx} className="bg-white border-2 border-accent-black rounded-2xl p-5 shadow-[4px_4px_0_#000]">
                <h3 className="font-black text-xl mb-2 flex items-center gap-2">📌 {req.title}</h3>
                <p className="font-medium text-text-secondary">{req.desc}</p>
              </div>
            ))}
          </div>

          <Link 
            href="/before-class/programming-for-problem-solving/programming-for-problem-solving-prerequisites"
            className="inline-block bg-accent-black text-white font-bold text-lg rounded-xl px-8 py-4 mb-8 shadow-sm hover:scale-[1.02] transition-transform"
          >
            Start Prerequisites Practice →
          </Link>
          
          <div className="bg-white/60 rounded-2xl p-6 border border-white font-bold text-accent-black">
            Don't worry if you've forgotten these concepts. Your faculty will revise the required basics during the course.
          </div>
        </section>

        {/* Formulas & Cheat Sheets */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-border/10 shadow-sm relative overflow-hidden">
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <span className="text-4xl">⚡</span> Formulas & Cheat Sheets
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <FormulaSheet src="/sheets/pps-algorithms.jpeg" title="Algorithms" />
            <FormulaSheet src="/sheets/pps-basic-mathematics.jpeg" title="Basic Mathematics" />
            <FormulaSheet src="/sheets/pps-flowcharts.jpeg" title="Flowcharts" />
            <FormulaSheet src="/sheets/pps-logical-thinking.jpeg" title="Logical Thinking" />
            <div className="md:col-span-2 md:w-1/2 md:mx-auto">
              <FormulaSheet src="/sheets/pps-number-systems.jpeg" title="Number Systems" />
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
