"use client";

import Link from "next/link";
import { ArrowLeft, Briefcase, Users, Rocket, Lightbulb } from "lucide-react";
import FormulaSheet from "@/components/before-class/FormulaSheet";

export default function BeforeClassPage() {
  const prerequisites = [
    "Basic Grammar",
    "Vocabulary",
    "Reading Comprehension",
    "Sentence Formation",
    "Listening & Speaking Practice"
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
          English for Skill <br />Enhancement
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* Why This Matters */}
        <section className="bg-accent-black text-bg rounded-[2.5rem] p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-black mb-8 flex items-center gap-4"><div className="w-12 h-12 rounded-full bg-surface-mint flex items-center justify-center text-accent-black"><Lightbulb size={24} strokeWidth={2.5} /></div>Why This Matters</h2>
          <div className="space-y-6 text-lg text-bg/90 leading-relaxed font-medium">
            <p>
              Engineering is about solving problems, but it's equally important to <span className="font-bold text-white">communicate those solutions effectively.</span>
            </p>
            <p>
              No matter how good your technical skills are, you'll often need to explain your ideas to professors, teammates, managers, clients, or interviewers.
            </p>
            <p>
              This subject helps you improve your communication, presentation, listening, reading, and writing skills while building the confidence needed to succeed in academics and your professional career.
            </p>
            <p className="p-6 bg-white/10 rounded-2xl border border-white/20 text-white font-bold">
              Strong communication doesn't just make you a better speaker—it makes you a better engineer.
            </p>
          </div>
        </section>

        {/* Where You'll Use It */}
        <section>
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <span className="text-4xl">🗣️</span> Where You'll Use It
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-lavender rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Briefcase size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Campus Placements & Interviews</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                During placement drives, recruiters don't just evaluate your technical knowledge. They also assess how clearly you communicate your ideas, answer questions, and present yourself professionally.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-mint rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Users size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Team Projects & Collaboration</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Engineering projects are rarely completed alone. Effective communication helps teams work efficiently, divide tasks, resolve problems, and avoid misunderstandings.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-peach rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Rocket size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Leadership & Entrepreneurship</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Great leaders and entrepreneurs are great communicators. The ability to express your thoughts confidently can inspire others and create new opportunities.
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
            Refreshing these basics will help you participate more confidently.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {prerequisites.map((req, idx) => (
              <div key={idx} className="bg-white border-2 border-accent-black rounded-xl px-5 py-3 font-bold shadow-[4px_4px_0_#000]">
                📌 {req}
              </div>
            ))}
          </div>

          <Link 
            href="/before-class/english-for-skill-enhancement/english-for-skill-enhancement-prerequisites"
            className="inline-block bg-accent-black text-white font-bold text-lg rounded-xl px-8 py-4 mb-8 shadow-sm hover:scale-[1.02] transition-transform"
          >
            Start Prerequisites Practice →
          </Link>

          
          <div className="bg-white/60 rounded-2xl p-6 border border-white font-bold text-accent-black">
            Don't worry if you're not fluent in English. This course is designed to help you improve step by step through regular practice.
          </div>
        </section>

        {/* Formulas & Cheat Sheets */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-border/10 shadow-sm relative overflow-hidden">
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <span className="text-4xl">⚡</span> Formulas & Cheat Sheets
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <FormulaSheet src="/sheets/eng-basic-grammar.jpeg" title="Basic Grammar" />
            <FormulaSheet src="/sheets/eng-listening-speaking.jpeg" title="Listening & Speaking" />
            <FormulaSheet src="/sheets/eng-reading-comprehension.jpeg" title="Reading Comprehension" />
            <FormulaSheet src="/sheets/eng-sentence-formation.jpeg" title="Sentence Formation" />
            <div className="md:col-span-2 md:w-1/2 md:mx-auto">
              <FormulaSheet src="/sheets/eng-vocabulary.jpeg" title="Vocabulary" />
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
