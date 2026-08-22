"use client";

import Link from "next/link";
import { ArrowLeft, FlaskConical, Pill, TestTube, Lightbulb } from "lucide-react";
import QuizComponent from "@/components/before-class/QuizComponent";
import FormulaSheet from "@/components/before-class/FormulaSheet";

export default function BeforeClassPage() {
  const prerequisites = [
    "Organic Chemistry Basics",
    "Chemical Bonds",
    "Acids, Bases & pH",
    "Functional Groups",
    "Chemical Kinetics"
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
          Chemistry for Life Sciences
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* Why This Matters */}
        <section className="bg-accent-black text-bg rounded-[2.5rem] p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-black mb-8 flex items-center gap-4"><div className="w-12 h-12 rounded-full bg-surface-mint flex items-center justify-center text-accent-black"><Lightbulb size={24} strokeWidth={2.5} /></div>Why This Matters</h2>
          <div className="space-y-6 text-lg text-bg/90 leading-relaxed font-medium">
            <p>
              In Biomedical and Pharmaceutical Engineering, understanding the <span className="font-bold text-white">chemical interactions</span> within living organisms is critical.
            </p>
            <p>
              Before you can design a new drug formulation or understand how a synthetic implant interacts with blood plasma, you need to understand the underlying organic chemistry that dictates these reactions.
            </p>
            <p>
              Chemistry for Life Sciences bridges the gap between pure chemistry and biological application, teaching you how pH, enzymatic kinetics, and organic functional groups affect biological systems on a macroscopic level.
            </p>
            <p className="p-6 bg-white/10 rounded-2xl border border-white/20 text-white font-bold">
              This subject teaches you the chemical rules that govern cellular and pharmaceutical engineering.
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
                <Pill size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Pharmaceutical Formulation</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Understanding how different chemical compounds interact to create stable, effective, and safe medications for human consumption.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-mint rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <FlaskConical size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Toxicology & Safety</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Analyzing chemical kinetics and reaction pathways to ensure that medical implants and biological therapies do not produce toxic byproducts in the body.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-peach rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <TestTube size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Biomaterials Analysis</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Developing biocompatible materials (like hydrogels or artificial heart valves) requires deep knowledge of organic chemistry and material degradation.
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
          
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 mb-8">
              {prerequisites.map((req, idx) => (
                <div key={idx} className="bg-white border-2 border-accent-black rounded-xl px-5 py-3 font-bold shadow-[4px_4px_0_#000]">
                  📌 {req}
                </div>
              ))}
            </div>
            
            <div className="bg-white/60 rounded-2xl p-6 border border-white font-bold text-accent-black mb-8">
              Don't worry if you've forgotten these concepts. Your faculty will connect them to real engineering applications throughout the course.
            </div>
          </div>

          {/* Formulas & Cheat Sheets */}
          <div className="mb-12 bg-white rounded-[2rem] p-8 shadow-sm border border-border/10">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
              <span className="text-3xl">⚡</span> Formulas & Cheat Sheets
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <FormulaSheet src="/sheets/chem-acids-bases-salts.jpeg" title="Acids, Bases & Salts" />
              <FormulaSheet src="/sheets/chem-atoms-molecules.jpeg" title="Atoms & Molecules" />
              <FormulaSheet src="/sheets/chem-chemical-bonding.jpeg" title="Chemical Bonding" />
              <FormulaSheet src="/sheets/chem-periodic-table.jpeg" title="Periodic Table Trends" />
            </div>
          </div>

          <QuizComponent 
            title="Chemistry for Life Sciences Quiz" 
            questions={[
              {
                id: 1,
                question: "What is the defining characteristic of organic chemistry?",
                options: ["The study of metals", "The study of carbon-containing compounds", "The study of noble gases", "The study of subatomic particles"],
                correctOptionIndex: 1,
                explanation: "Organic chemistry is primarily the study of the structure, properties, and reactions of compounds and materials that contain carbon atoms."
              },
              {
                id: 2,
                question: "In biological systems, what is the typical pH of human blood?",
                options: ["2.0 (Highly acidic)", "7.4 (Slightly basic)", "10.5 (Highly basic)", "5.5 (Slightly acidic)"],
                correctOptionIndex: 1,
                explanation: "Human blood is tightly regulated to stay within a narrow pH range of 7.35 to 7.45 to maintain proper enzymatic functions."
              },
              {
                id: 3,
                question: "Which type of chemical bond involves the sharing of electron pairs between atoms?",
                options: ["Ionic Bond", "Hydrogen Bond", "Covalent Bond", "Metallic Bond"],
                correctOptionIndex: 2,
                explanation: "Covalent bonds occur when atoms share electrons, which is the primary bond forming the stable backbone of organic biomolecules."
              },
              {
                id: 4,
                question: "What is a functional group in organic chemistry?",
                options: ["A group of scientists studying chemistry", "A specific arrangement of atoms responsible for the characteristic chemical reactions of a molecule", "The core nucleus of an atom", "A classification of periodic table elements"],
                correctOptionIndex: 1,
                explanation: "Functional groups (like -OH or -COOH) dictate how an organic molecule will behave and interact biologically."
              },
              {
                id: 5,
                question: "How does chemical kinetics apply to drug delivery?",
                options: ["It determines the color of the medication.", "It has no application in drug delivery.", "It determines the rate at which a drug is absorbed and broken down in the body.", "It only applies to liquid drugs."],
                correctOptionIndex: 2,
                explanation: "Chemical kinetics is crucial in pharmacokinetics, defining how fast a drug acts and how long it stays active in the patient's system."
              }
            ]} 
          />
        </section>

      </div>
    </main>
  );
}
