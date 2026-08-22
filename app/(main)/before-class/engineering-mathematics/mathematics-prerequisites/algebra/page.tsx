"use client";

import Image from "next/image";
import Link from "next/link";
import QuizComponent from "@/components/before-class/QuizComponent";
import FormulaSheet from "@/components/before-class/FormulaSheet";
import { 
  ArrowLeft, 
  BrainCircuit, 
  CodeSquare, 
  Settings,
  BarChart3,
  FileText,
  Lightbulb,
  HelpCircle,
  ArrowRight
} from "lucide-react";

export default function AlgebraPage() {
  const questions = [
    {
      id: 1,
      question: "What are the roots of the quadratic equation x² - 5x + 6 = 0?",
      options: ["x = 2, x = 3", "x = -2, x = -3", "x = 1, x = 6", "x = -1, x = -6"],
      correctOptionIndex: 0,
      explanation: "Factorizing gives (x-2)(x-3) = 0. Therefore, x = 2 and x = 3."
    },
    {
      id: 2,
      question: "Expand the expression (a + b)²:",
      options: ["a² + b²", "a² - 2ab + b²", "a² + 2ab + b²", "a² + ab + b²"],
      correctOptionIndex: 2,
      explanation: "(a + b)(a + b) = a² + ab + ba + b² = a² + 2ab + b²."
    },
    {
      id: 3,
      question: "If 3x + 7 = 22, what is the value of x?",
      options: ["4", "5", "6", "7"],
      correctOptionIndex: 1,
      explanation: "Subtract 7 from both sides: 3x = 15. Divide by 3: x = 5."
    },
    {
      id: 4,
      question: "What is the degree of the polynomial 4x³ - 2x² + 7x - 1?",
      options: ["1", "2", "3", "4"],
      correctOptionIndex: 2,
      explanation: "The degree of a polynomial is the highest power of the variable, which is 3 in this case."
    },
    {
      id: 5,
      question: "Simplify: (x³ * x⁴) / x²",
      options: ["x⁵", "x⁶", "x⁷", "x⁸"],
      correctOptionIndex: 0,
      explanation: "Using exponent rules: x^(3+4) / x² = x⁷ / x² = x^(7-2) = x⁵."
    }
  ];

  const revisions = [
    "Variables & Constants",
    "Algebraic Expressions",
    "Linear Equations",
    "Quadratic Equations",
    "Algebraic Identities",
    "Factorization",
    "Laws of Exponents",
    "Basic Logarithms"
  ];

  return (
    <main className="flex-1 overflow-y-auto bg-bg text-text-primary pb-24">
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-12">
        <Link 
          href="/before-class/engineering-mathematics/mathematics-prerequisites" 
          className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary font-bold mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Prerequisites
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-black mb-4">Algebra</h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* What is it? */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-border/10 shadow-sm">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
            <span className="text-3xl">📖</span> What is Algebra?
          </h2>
          <div className="space-y-6 text-lg font-medium text-text-secondary leading-relaxed">
            <p>
              Algebra is a branch of mathematics that uses <span className="font-bold text-text-primary">variables, constants, symbols, and equations</span> to represent relationships and solve problems involving unknown values.
            </p>
            <p>
              Instead of describing problems using lengthy sentences, Algebra expresses them using mathematical expressions, making calculations simpler and more efficient.
            </p>
            <p>
              It is one of the most fundamental topics in mathematics and forms the base for calculus, matrices, programming, artificial intelligence, data science, and almost every engineering discipline.
            </p>
          </div>
        </section>

        {/* Where is it used? */}
        <section>
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <span className="text-4xl">🌍</span> Where is Algebra Used?
          </h2>
          <p className="text-lg font-bold mb-8">Algebra is everywhere in engineering.</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-lavender rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <BrainCircuit size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Artificial Intelligence</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                AI algorithms use algebraic equations to train models, recognize patterns, and make predictions.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-mint rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <CodeSquare size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Programming</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Variables, expressions, operators, and conditions used in programming are all based on algebraic concepts.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-peach rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Settings size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Engineering</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Engineers use algebra to calculate unknown values while designing bridges, machines, circuits, buildings, and electronic systems.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-yellow rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <BarChart3 size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Data Science</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Data analysts and scientists use algebra to build mathematical models and analyze large amounts of data.
              </p>
            </div>
          </div>
        </section>

        {/* In This Revision */}
        <section className="bg-surface-mint rounded-[2.5rem] p-8 md:p-12 border border-border/10 shadow-sm">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
            <span className="text-3xl">📚</span> In This Revision
          </h2>
          <p className="text-lg font-bold mb-6">This refresher covers:</p>
          
          <ul className="grid md:grid-cols-2 gap-4">
            {revisions.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 font-bold text-lg bg-white/60 p-4 rounded-xl border border-white">
                <span className="w-2 h-2 bg-accent-black rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Formulas & Cheat Sheet Images */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-border/10 shadow-sm space-y-8">
          <h2 className="text-2xl font-black flex items-center gap-3">
            <span className="text-3xl">⚡</span> Formulas & Cheat Sheets
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <FormulaSheet src="/sheets/algebra-formulas.jpeg" title="Formula Sheet" />
            <FormulaSheet src="/sheets/algebra-tricks.jpeg" title="Tricks & Shortcuts" />
          </div>
        </section>

        <QuizComponent title="Algebra Quick Quiz" questions={questions} />

        {/* Completed */}
        <section className="text-center pt-8">
          <h2 className="text-2xl font-black mb-4 flex items-center justify-center gap-3">
            <span className="text-3xl">🎉</span> Revision Complete!
          </h2>
          <p className="text-lg font-medium text-text-secondary mb-10 max-w-2xl mx-auto">
            You've refreshed the most important Algebra concepts needed for Engineering Mathematics.
          </p>
          
          <Link 
            href="/before-class/engineering-mathematics/mathematics-prerequisites/trigonometry"
            className="inline-flex items-center gap-3 bg-white border-2 border-accent-black text-accent-black font-bold text-lg px-8 py-5 rounded-2xl hover:bg-accent-black hover:text-white transition-all shadow-[4px_4px_0_#000]"
          >
            Continue to Trigonometry <ArrowRight size={20} />
          </Link>
        </section>

      </div>
    </main>
  );
}





