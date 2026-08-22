"use client";

import Image from "next/image";
import Link from "next/link";
import QuizComponent from "@/components/before-class/QuizComponent";
import FormulaSheet from "@/components/before-class/FormulaSheet";
import { 
  ArrowLeft, 
  BrainCircuit, 
  TrendingUp, 
  Settings,
  CloudSun,
  FileText,
  Lightbulb,
  HelpCircle,
  ArrowRight
} from "lucide-react";

export default function FunctionsGraphsPage() {
  const questions = [
    {
      id: 1,
      question: "Which of the following functions represents a parabola?",
      options: ["y = 2x + 1", "y = x²", "y = 1/x", "y = e^x"],
      correctOptionIndex: 1,
      explanation: "A parabola is represented by a quadratic function, which has an x² term."
    },
    {
      id: 2,
      question: "What is the domain of the function f(x) = √(x)?",
      options: ["x > 0", "x < 0", "x ≥ 0", "All real numbers"],
      correctOptionIndex: 2,
      explanation: "You cannot take the square root of a negative number in real numbers, so x must be greater than or equal to 0."
    },
    {
      id: 3,
      question: "If f(x) = 2x + 3 and g(x) = x², what is f(g(x))?",
      options: ["2x² + 3", "(2x + 3)²", "2x + 3x²", "4x² + 9"],
      correctOptionIndex: 0,
      explanation: "Substitute g(x) into f(x): f(x²) = 2(x²) + 3 = 2x² + 3."
    },
    {
      id: 4,
      question: "What is the y-intercept of the function y = 5x - 7?",
      options: ["5", "-5", "7", "-7"],
      correctOptionIndex: 3,
      explanation: "The y-intercept is the value of y when x = 0, which is -7."
    },
    {
      id: 5,
      question: "Which transformation shifts the graph of y = f(x) up by 3 units?",
      options: ["y = f(x + 3)", "y = f(x) + 3", "y = f(x - 3)", "y = f(x) - 3"],
      correctOptionIndex: 1,
      explanation: "Adding a constant outside the function shifts the graph vertically. +3 shifts it up."
    }
  ];

  const revisions = [
    "What is a Function?",
    "Domain & Range",
    "Types of Functions",
    "Function Notation",
    "Graph of a Function",
    "Linear & Quadratic Graphs",
    "Basic Graph Transformations",
    "Reading Graphs"
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
        
        <h1 className="text-4xl md:text-5xl font-black mb-4">Functions & Graphs</h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* What is it? */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-border/10 shadow-sm">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
            <span className="text-3xl">📖</span> What are Functions & Graphs?
          </h2>
          <div className="space-y-6 text-lg font-medium text-text-secondary leading-relaxed">
            <p>
              A <span className="font-bold text-text-primary">function</span> is a mathematical rule that assigns exactly one output to every input.
            </p>
            <p>
              A <span className="font-bold text-text-primary">graph</span> is a visual representation of that relationship, making it easier to understand trends, changes, and patterns.
            </p>
            <p>
              Instead of reading long tables of numbers, engineers use graphs to analyze information quickly and make informed decisions.
            </p>
          </div>
        </section>

        {/* Where is it used? */}
        <section>
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <span className="text-4xl">🌍</span> Where are Functions & Graphs Used?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-lavender rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <BrainCircuit size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Artificial Intelligence & Machine Learning</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                AI models learn by analyzing relationships between inputs and outputs. Functions and graphs help visualize data patterns, optimize models, and improve predictions.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-mint rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <TrendingUp size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Data Analysis & Business</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Companies use graphs to analyze sales, profits, customer growth, and market trends. Engineers and analysts rely on these visualizations to make better decisions.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-peach rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Settings size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Engineering & Simulation</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Engineers use functions to model speed, temperature, voltage, pressure, and many other quantities. Graphs help understand how these values change over time.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-yellow rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <CloudSun size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Weather Forecasting</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Weather apps use mathematical functions to predict temperature, rainfall, and wind patterns. These predictions are displayed using graphs for easy interpretation.
              </p>
            </div>
          </div>
        </section>

        {/* In This Revision */}
        <section className="bg-surface-yellow rounded-[2.5rem] p-8 md:p-12 border border-border/10 shadow-sm">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
            <span className="text-3xl">📚</span> In This Revision
          </h2>
          <p className="text-lg font-bold mb-6">You'll quickly revise:</p>
          
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
            <FormulaSheet src="/sheets/functions-formulas.jpeg" title="Formula Sheet" />
            <FormulaSheet src="/sheets/functions-tricks.jpeg" title="Tricks & Shortcuts" />
          </div>
        </section>

        <QuizComponent title="Functions & Graphs Quick Quiz" questions={questions} />

        {/* Completed */}
        <section className="text-center pt-8">
          <h2 className="text-2xl font-black mb-4 flex items-center justify-center gap-3">
            <span className="text-3xl">🎉</span> You're Ready!
          </h2>
          <p className="text-lg font-medium text-text-secondary mb-10 max-w-2xl mx-auto">
            Excellent! You've refreshed the Functions & Graphs concepts needed for Engineering Mathematics. Understanding these concepts will make calculus, differential equations, and engineering analysis much easier.
          </p>
          
          <Link 
            href="/before-class/engineering-mathematics/mathematics-prerequisites/basic-calculus"
            className="inline-flex items-center gap-3 bg-white border-2 border-accent-black text-accent-black font-bold text-lg px-8 py-5 rounded-2xl hover:bg-accent-black hover:text-white transition-all shadow-[4px_4px_0_#000]"
          >
            Continue to Basic Calculus Essentials <ArrowRight size={20} />
          </Link>
        </section>

      </div>
    </main>
  );
}





