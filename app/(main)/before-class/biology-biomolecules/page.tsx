"use client";

import Link from "next/link";
import { ArrowLeft, Dna, Leaf, Stethoscope, Lightbulb } from "lucide-react";
import QuizComponent from "@/components/before-class/QuizComponent";

export default function BeforeClassPage() {
  const prerequisites = [
    "Cell Structure & Function",
    "Proteins & Amino Acids",
    "Carbohydrates & Lipids",
    "DNA & RNA Basics",
    "Enzymes"
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
          Biology & Biomolecules
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* Why This Matters */}
        <section className="bg-accent-black text-bg rounded-[2.5rem] p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-black mb-8 flex items-center gap-4"><div className="w-12 h-12 rounded-full bg-surface-mint flex items-center justify-center text-accent-black"><Lightbulb size={24} strokeWidth={2.5} /></div>Why This Matters</h2>
          <div className="space-y-6 text-lg text-bg/90 leading-relaxed font-medium">
            <p>
              Life is powered by <span className="font-bold text-white">complex molecular machinery</span>.
            </p>
            <p>
              In fields like Biotechnology, Pharmaceutical Engineering, and Biomedical Engineering, you aren't just working with silicon and steel—you are working with living cells, proteins, and DNA.
            </p>
            <p>
              Biology & Biomolecules provides the foundational understanding of how cells operate, how genetic information is transferred, and how proteins function as microscopic machines. This knowledge is crucial for developing everything from vaccines to bio-sensors.
            </p>
            <p className="p-6 bg-white/10 rounded-2xl border border-white/20 text-white font-bold">
              This subject teaches you the programming language of life itself.
            </p>
          </div>
        </section>

        {/* Where You'll Use It */}
        <section>
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <span className="text-4xl">🧬</span> Where You'll Use It
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-lavender rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Dna size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Genetic Engineering</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Understanding DNA and RNA is the first step toward genetic therapies, CRISPR modifications, and personalized medicine tailored to a patient's unique genome.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-mint rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Stethoscope size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Drug Discovery</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Pharmaceutical engineers analyze how biomolecules interact with pathogens to develop life-saving antibiotics, antivirals, and modern mRNA vaccines.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-peach rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Leaf size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Biomanufacturing</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Using living cells as factories to produce everything from synthetic insulin to biodegradable plastics on an industrial scale.
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

          <QuizComponent 
            title="Biology & Biomolecules Quiz" 
            questions={[
              {
                id: 1,
                question: "What are the primary building blocks of proteins?",
                options: ["Fatty Acids", "Amino Acids", "Monosaccharides", "Nucleotides"],
                correctOptionIndex: 1,
                explanation: "Proteins are long chains of amino acids, which fold into complex shapes to perform biological functions."
              },
              {
                id: 2,
                question: "Which biomolecule carries the genetic instructions for life?",
                options: ["Lipids", "Carbohydrates", "Enzymes", "DNA"],
                correctOptionIndex: 3,
                explanation: "Deoxyribonucleic acid (DNA) stores the genetic instructions used in the development and functioning of living organisms."
              },
              {
                id: 3,
                question: "What role do enzymes play in biological systems?",
                options: ["They act as biological catalysts to speed up chemical reactions.", "They store long-term energy.", "They form the rigid structure of cell walls.", "They carry oxygen in the blood."],
                correctOptionIndex: 0,
                explanation: "Enzymes are specialized proteins that significantly speed up the rate of virtually all of the chemical reactions that take place within cells."
              },
              {
                id: 4,
                question: "Which cellular organelle is known as the 'powerhouse' of the cell?",
                options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Apparatus"],
                correctOptionIndex: 2,
                explanation: "Mitochondria generate most of the cell's supply of adenosine triphosphate (ATP), used as a source of chemical energy."
              },
              {
                id: 5,
                question: "Why are biomolecules important for Pharmaceutical Engineering?",
                options: ["They are used as construction materials for factory floors.", "Most drugs are designed to target specific biomolecules like proteins and receptors.", "They are only relevant to plant biology.", "They act as heavy metals in synthesis."],
                correctOptionIndex: 1,
                explanation: "Drugs work by interacting with specific biomolecules (targets) in the body to alter a disease process."
              }
            ]} 
          />
        </section>

      </div>
    </main>
  );
}
