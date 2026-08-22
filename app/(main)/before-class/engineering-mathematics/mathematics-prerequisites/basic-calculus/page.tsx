"use client";

import Image from "next/image";
import Link from "next/link";
import QuizComponent from "@/components/before-class/QuizComponent";
import FormulaSheet from "@/components/before-class/FormulaSheet";
import { 
  ArrowLeft, 
  MapPin, 
  BrainCircuit, 
  Settings,
  BarChart3,
  FileText,
  Lightbulb,
  HelpCircle,
  CheckCircle2,
  GraduationCap
} from "lucide-react";

export default function BasicCalculusPage() {
  const questions = [
    {
      id: 1,
      question: "What is the derivative of f(x) = x³ with respect to x?",
      options: ["3x²", "3x", "x²/3", "x⁴/4"],
      correctOptionIndex: 0,
      explanation: "Using the power rule, bring down the exponent and subtract 1 from it: 3x^(3-1) = 3x²."
    },
    {
      id: 2,
      question: "What is the integral of 2x dx?",
      options: ["x² + C", "2x² + C", "x³ + C", "2 + C"],
      correctOptionIndex: 0,
      explanation: "The antiderivative of x is x²/2. So, 2(x²/2) + C = x² + C."
    },
    {
      id: 3,
      question: "What does the derivative of a function represent geometrically?",
      options: ["The area under the curve", "The slope of the tangent line", "The y-intercept", "The roots of the function"],
      correctOptionIndex: 1,
      explanation: "The derivative at a point gives the slope of the tangent line to the curve at that point."
    },
    {
      id: 4,
      question: "What is the limit of (1/x) as x approaches infinity?",
      options: ["Infinity", "1", "0", "Undefined"],
      correctOptionIndex: 2,
      explanation: "As the denominator gets infinitely large, the value of the fraction approaches zero."
    },
    {
      id: 5,
      question: "What is the derivative of a constant (e.g., f(x) = 5)?",
      options: ["5", "1", "x", "0"],
      correctOptionIndex: 3,
      explanation: "A constant function does not change, so its rate of change (derivative) is always 0."
    }
  ];

  const revisions = [
    "Limits (Basic Idea)",
    "Continuity (Basic Idea)",
    "Differentiation",
    "Rules of Differentiation",
    "Integration",
    "Basic Integration Formulas",
    "Area Under a Curve (Introduction)",
    "Real-Life Applications of Calculus"
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
        
        <h1 className="text-4xl md:text-5xl font-black mb-4">∫ Basic Calculus Essentials</h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* What is it? */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-border/10 shadow-sm">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
            <span className="text-3xl">📖</span> What is Calculus?
          </h2>
          <div className="space-y-6 text-lg font-medium text-text-secondary leading-relaxed">
            <p>
              Calculus is the branch of mathematics that studies <span className="font-bold text-text-primary">change and accumulation</span>.
            </p>
            <p>
              It is mainly divided into two parts:
            </p>
            <ul className="space-y-4 font-bold text-text-primary bg-surface-lavender/30 p-6 rounded-2xl border border-border/10">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-black rounded-full"></span> 
                Differentiation – Finding how fast something changes.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-black rounded-full"></span> 
                Integration – Finding the total accumulation or area under a curve.
              </li>
            </ul>
            <p>
              From designing rockets to training AI models, Calculus is used wherever change needs to be measured or predicted.
            </p>
          </div>
        </section>

        {/* Where is it used? */}
        <section>
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <span className="text-4xl">🌍</span> Where is Calculus Used?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-lavender rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <MapPin size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Transportation & Navigation</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Navigation systems calculate speed, acceleration, travel time, and route optimization using calculus.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-mint rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <BrainCircuit size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Artificial Intelligence</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Machine learning models improve themselves using optimization techniques based on differentiation, helping AI reduce errors and make better predictions.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-peach rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Settings size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Engineering Design</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Mechanical, Civil, Electrical, and Aerospace engineers use calculus to analyze motion, forces, fluid flow, heat transfer, and structural behaviour.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-yellow rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <BarChart3 size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Economics & Data Analysis</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Businesses use calculus to study profit, cost, demand, growth, and optimization, helping them make better financial decisions.
              </p>
            </div>
          </div>
        </section>

        {/* In This Revision */}
        <section className="bg-surface-peach rounded-[2.5rem] p-8 md:p-12 border border-border/10 shadow-sm">
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

          <div className="max-w-2xl mx-auto">
            <FormulaSheet src="/sheets/calculus-formulas.jpeg" title="Calculus Formula Sheet" />
          </div>
        </section>

        <QuizComponent title="Basic Calculus Quick Quiz" questions={questions} />

        {/* Completed Journey */}
        <section className="bg-surface-mint rounded-[2.5rem] p-8 md:p-12 border border-border/10 shadow-sm text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
            <GraduationCap size={40} className="text-accent-black" />
          </div>
          <h2 className="text-3xl font-black mb-4">You're Ready!</h2>
          <p className="text-lg font-medium text-text-secondary mb-10 max-w-2xl mx-auto">
            Excellent! You've refreshed the essential Calculus concepts required before beginning Engineering Mathematics. With Algebra, Trigonometry, Coordinate Geometry, Functions & Graphs, and Calculus refreshed, you're now well prepared for your first Engineering Mathematics lecture.
          </p>
          
          <div className="bg-white rounded-2xl p-8 text-left max-w-md mx-auto mb-10 border border-border/10 shadow-sm">
            <h3 className="font-black text-xl mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-green-500" /> Prerequisites Complete
            </h3>
            <ul className="space-y-4 font-bold text-text-secondary">
              <li className="flex items-center gap-3"><span className="w-4 h-4 bg-surface-lavender rounded-sm"></span> Algebra Essentials</li>
              <li className="flex items-center gap-3"><span className="w-4 h-4 bg-surface-mint rounded-sm"></span> Trigonometry Essentials</li>
              <li className="flex items-center gap-3"><span className="w-4 h-4 bg-surface-peach rounded-sm"></span> Coordinate Geometry Essentials</li>
              <li className="flex items-center gap-3"><span className="w-4 h-4 bg-surface-yellow rounded-sm"></span> Functions & Graphs Essentials</li>
              <li className="flex items-center gap-3"><span className="w-4 h-4 bg-accent-black rounded-sm"></span> ∫ Basic Calculus Essentials</li>
            </ul>
          </div>
          
          <div className="mt-8 max-w-2xl mx-auto bg-surface-yellow text-accent-black rounded-[2rem] p-8 border-4 border-accent-black shadow-[8px_8px_0_#000] text-center transform -rotate-1 hover:rotate-0 transition-transform">
            <h3 className="text-2xl font-black mb-3 text-left">💡 Final Tip</h3>
            <p className="font-bold text-lg leading-relaxed text-left">Calculus is best understood by visualizing change. Don't just memorize formulas—try to understand what the derivatives and integrals represent in real life!</p>
          </div>
        </section>

      </div>
    </main>
  );
}





