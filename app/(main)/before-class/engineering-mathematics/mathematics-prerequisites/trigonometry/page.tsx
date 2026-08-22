"use client";

import Link from "next/link";
import QuizComponent from "@/components/before-class/QuizComponent";
import { 
  ArrowLeft, 
  MapPin, 
  Building, 
  Gamepad2,
  Rocket,
  FileText,
  Lightbulb,
  HelpCircle,
  ArrowRight
} from "lucide-react";

export default function TrigonometryPage() {
  const questions = [
    {
      id: 1,
      question: "What is the value of sin²(θ) + cos²(θ)?",
      options: ["0", "1", "-1", "tan(θ)"],
      correctOptionIndex: 1,
      explanation: "This is a fundamental Pythagorean trigonometric identity."
    },
    {
      id: 2,
      question: "What is the sine of 90 degrees (sin 90°)?",
      options: ["0", "0.5", "1", "Undefined"],
      correctOptionIndex: 2,
      explanation: "The y-coordinate of the unit circle at 90 degrees is 1."
    },
    {
      id: 3,
      question: "Convert π/4 radians to degrees:",
      options: ["30°", "45°", "60°", "90°"],
      correctOptionIndex: 1,
      explanation: "π radians = 180°. So, π/4 = 180° / 4 = 45°."
    },
    {
      id: 4,
      question: "Which ratio represents the tangent function (tan θ)?",
      options: ["Opposite / Hypotenuse", "Adjacent / Hypotenuse", "Opposite / Adjacent", "Adjacent / Opposite"],
      correctOptionIndex: 2,
      explanation: "SOH CAH TOA: Tangent = Opposite / Adjacent."
    },
    {
      id: 5,
      question: "What is the period of the function y = sin(x)?",
      options: ["π", "2π", "π/2", "3π"],
      correctOptionIndex: 1,
      explanation: "The sine function repeats its values every 2π radians."
    }
  ];

  const revisions = [
    "Trigonometric Ratios",
    "Standard Angle Values",
    "Reciprocal Ratios",
    "Trigonometric Identities",
    "Allied Angles",
    "Signs in Four Quadrants (ASTC Rule)",
    "Basic Trigonometric Equations",
    "Heights & Distances (Basics)"
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
        
        <h1 className="text-4xl md:text-5xl font-black mb-4">Trigonometry</h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* What is it? */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-border/10 shadow-sm">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
            <span className="text-3xl">📖</span> What is Trigonometry?
          </h2>
          <div className="space-y-6 text-lg font-medium text-text-secondary leading-relaxed">
            <p>
              Trigonometry is the branch of mathematics that studies the relationship between the <span className="font-bold text-text-primary">angles and sides of triangles</span>.
            </p>
            <p>
              It helps engineers calculate heights, distances, slopes, directions, and rotations, making it one of the most important topics in engineering.
            </p>
            <p>
              From designing bridges to satellite communication and robotics, trigonometry is used wherever angles and measurements are involved.
            </p>
          </div>
        </section>

        {/* Where is it used? */}
        <section>
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <span className="text-4xl">🌍</span> Where is Trigonometry Used?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-lavender rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <MapPin size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">GPS & Navigation</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Applications like Google Maps and GPS systems use trigonometric calculations to determine distances, directions, and locations accurately.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-mint rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Building size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Civil & Mechanical Engineering</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Engineers use trigonometry while designing bridges, buildings, roads, machines, and structures to calculate angles, heights, and forces.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-peach rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Gamepad2 size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Robotics & Computer Graphics</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Robots use trigonometric calculations to control arm movements. Computer games, animation, and 3D graphics also rely heavily on trigonometry for rotations.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-yellow rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Rocket size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Aerospace Engineering</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Aircraft and satellites use trigonometric calculations for navigation, trajectory planning, and flight control systems.
              </p>
            </div>
          </div>
        </section>

        {/* In This Revision */}
        <section className="bg-surface-peach rounded-[2.5rem] p-8 md:p-12 border border-border/10 shadow-sm">
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

        {/* Formulas & Cheat Sheet */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-border/10 shadow-sm">
          <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
            <span className="text-3xl">⚡</span> Trigonometry Formulas & Cheat Sheet
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg rounded-2xl p-6 border border-border/10">
              <h3 className="font-black text-lg mb-3 text-accent-black">Pythagorean Identities</h3>
              <ul className="space-y-2 text-sm font-mono font-bold text-text-primary">
                <li className="bg-white p-2.5 rounded-lg border border-border/5">sin²(θ) + cos²(θ) = 1</li>
                <li className="bg-white p-2.5 rounded-lg border border-border/5">1 + tan²(θ) = sec²(θ)</li>
                <li className="bg-white p-2.5 rounded-lg border border-border/5">1 + cot²(θ) = csc²(θ)</li>
              </ul>
            </div>

            <div className="bg-bg rounded-2xl p-6 border border-border/10">
              <h3 className="font-black text-lg mb-3 text-accent-black">Double Angle Formulas</h3>
              <ul className="space-y-2 text-sm font-mono font-bold text-text-primary">
                <li className="bg-white p-2.5 rounded-lg border border-border/5">sin(2θ) = 2 sin(θ) cos(θ)</li>
                <li className="bg-white p-2.5 rounded-lg border border-border/5">cos(2θ) = cos²(θ) - sin²(θ)</li>
                <li className="bg-white p-2.5 rounded-lg border border-border/5">tan(2θ) = 2 tan(θ) / (1 - tan²(θ))</li>
              </ul>
            </div>

            <div className="bg-bg rounded-2xl p-6 border border-border/10 md:col-span-2">
              <h3 className="font-black text-lg mb-3 text-accent-black">Compound Angles & Ratios</h3>
              <div className="grid sm:grid-cols-2 gap-3 text-sm font-mono font-bold text-text-primary">
                <div className="bg-white p-3 rounded-lg border border-border/5">sin(A ± B) = sin A cos B ± cos A sin B</div>
                <div className="bg-white p-3 rounded-lg border border-border/5">cos(A ± B) = cos A cos B ∓ sin A sin B</div>
                <div className="bg-white p-3 rounded-lg border border-border/5">tan θ = Opposite / Adjacent</div>
                <div className="bg-white p-3 rounded-lg border border-border/5">cot θ = 1 / tan θ</div>
              </div>
            </div>
          </div>
        </section>

        <QuizComponent title="Trigonometry Quick Quiz" questions={questions} />

        {/* Completed */}
        <section className="text-center pt-8">
          <h2 className="text-2xl font-black mb-4 flex items-center justify-center gap-3">
            <span className="text-3xl">🎉</span> Revision Complete!
          </h2>
          <p className="text-lg font-medium text-text-secondary mb-10 max-w-2xl mx-auto">
            You've refreshed the most important Trigonometry concepts required for Engineering Mathematics.
          </p>
          
          <Link 
            href="/before-class/engineering-mathematics/mathematics-prerequisites/coordinate-geometry"
            className="inline-flex items-center gap-3 bg-white border-2 border-accent-black text-accent-black font-bold text-lg px-8 py-5 rounded-2xl hover:bg-accent-black hover:text-white transition-all shadow-[4px_4px_0_#000]"
          >
            Continue to Coordinate Geometry <ArrowRight size={20} />
          </Link>
        </section>

      </div>
    </main>
  );
}





