"use client";

import Link from "next/link";
import QuizComponent from "@/components/before-class/QuizComponent";
import { 
  ArrowLeft, 
  MapPin, 
  PenTool, 
  Gamepad2,
  Cpu,
  FileText,
  Lightbulb,
  HelpCircle,
  ArrowRight
} from "lucide-react";

export default function CoordinateGeometryPage() {
  const questions = [
    {
      id: 1,
      question: "What is the distance between the points (0,0) and (3,4)?",
      options: ["3", "4", "5", "7"],
      correctOptionIndex: 2,
      explanation: "Using the distance formula: √((3-0)² + (4-0)²) = √(9+16) = √25 = 5."
    },
    {
      id: 2,
      question: "What is the slope (m) of the line passing through (1,2) and (3,6)?",
      options: ["1", "2", "3", "4"],
      correctOptionIndex: 1,
      explanation: "Slope m = (y2 - y1) / (x2 - x1) = (6 - 2) / (3 - 1) = 4 / 2 = 2."
    },
    {
      id: 3,
      question: "Which equation represents a line parallel to y = 3x - 5?",
      options: ["y = -3x + 2", "y = (1/3)x - 5", "y = 3x + 8", "y = -1/3x + 8"],
      correctOptionIndex: 2,
      explanation: "Parallel lines have the same slope. The slope here is 3."
    },
    {
      id: 4,
      question: "What are the coordinates of the midpoint between (2,4) and (6,10)?",
      options: ["(4,7)", "(8,14)", "(2,3)", "(4,6)"],
      correctOptionIndex: 0,
      explanation: "Midpoint = ((x1+x2)/2, (y1+y2)/2) = ((2+6)/2, (4+10)/2) = (4,7)."
    },
    {
      id: 5,
      question: "Which of the following represents the standard equation of a circle with center (h,k)?",
      options: ["(x - h) + (y - k) = r", "(x - h)² + (y - k)² = r²", "(x + h)² + (y + k)² = r²", "x² + y² = r"],
      correctOptionIndex: 1,
      explanation: "The standard equation of a circle is (x - h)² + (y - k)² = r²."
    }
  ];

  const revisions = [
    "Cartesian Coordinate System",
    "Distance Formula",
    "Section Formula",
    "Midpoint Formula",
    "Slope of a Line",
    "Equation of a Straight Line",
    "Circle (Basic Concepts)",
    "Coordinate Transformations (Basics)"
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
        
        <h1 className="text-4xl md:text-5xl font-black mb-4">Coordinate Geometry</h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* What is it? */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-border/10 shadow-sm">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
            <span className="text-3xl">📖</span> What is Coordinate Geometry?
          </h2>
          <div className="space-y-6 text-lg font-medium text-text-secondary leading-relaxed">
            <p>
              Coordinate Geometry combines <span className="font-bold text-text-primary">Algebra and Geometry</span> to study points, lines, curves, and shapes using a coordinate system.
            </p>
            <p>
              Instead of measuring objects manually, engineers use coordinates and equations to calculate distances, slopes, angles, and positions accurately.
            </p>
            <p>
              It is one of the most important mathematical tools used in engineering and computer science.
            </p>
          </div>
        </section>

        {/* Where is it used? */}
        <section>
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <span className="text-4xl">🌍</span> Where is Coordinate Geometry Used?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-lavender rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <MapPin size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">GPS & Navigation</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Every location in Google Maps is represented using coordinates. Coordinate Geometry helps calculate distances, directions, and the shortest routes between places.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-mint rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <PenTool size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Engineering Design</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Buildings, bridges, machines, and electronic components are designed using coordinate systems to ensure accurate dimensions and positioning.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-peach rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Gamepad2 size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Computer Graphics & Game Development</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Every object inside a video game or animation has an (x, y) or (x, y, z) coordinate. Coordinate Geometry allows these objects to move, rotate, and interact realistically.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-yellow rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Cpu size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Robotics & Automation</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Industrial robots and CNC machines use coordinate systems to move precisely and perform tasks with high accuracy.
              </p>
            </div>
          </div>
        </section>

        {/* In This Revision */}
        <section className="bg-surface-lavender rounded-[2.5rem] p-8 md:p-12 border border-border/10 shadow-sm">
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

        {/* Formulas & Cheat Sheet */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-border/10 shadow-sm">
          <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
            <span className="text-3xl">⚡</span> Coordinate Geometry Formulas & Cheat Sheet
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg rounded-2xl p-6 border border-border/10">
              <h3 className="font-black text-lg mb-3 text-accent-black">Distance & Midpoint</h3>
              <ul className="space-y-2 text-sm font-mono font-bold text-text-primary">
                <li className="bg-white p-2.5 rounded-lg border border-border/5">Distance d = √((x₂ - x₁)² + (y₂ - y₁)²);</li>
                <li className="bg-white p-2.5 rounded-lg border border-border/5">Midpoint M = ((x₁ + x₂)/2, (y₁ + y₂)/2)</li>
                <li className="bg-white p-2.5 rounded-lg border border-border/5">Section Formula (Internal): ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n))</li>
              </ul>
            </div>

            <div className="bg-bg rounded-2xl p-6 border border-border/10">
              <h3 className="font-black text-lg mb-3 text-accent-black">Straight Lines & Circle</h3>
              <ul className="space-y-2 text-sm font-mono font-bold text-text-primary">
                <li className="bg-white p-2.5 rounded-lg border border-border/5">Slope m = (y₂ - y₁) / (x₂ - x₁)</li>
                <li className="bg-white p-2.5 rounded-lg border border-border/5">Slope-Intercept Form: y = mx + c</li>
                <li className="bg-white p-2.5 rounded-lg border border-border/5">Circle Form: (x - h)² + (y - k)² = r²</li>
              </ul>
            </div>

            <div className="bg-bg rounded-2xl p-6 border border-border/10 md:col-span-2">
              <h3 className="font-black text-lg mb-3 text-accent-black">Tricks & Memory Hacks</h3>
              <div className="grid sm:grid-cols-2 gap-3 text-sm font-medium text-text-primary">
                <div className="bg-white p-3 rounded-lg border border-border/5">
                  <span className="font-bold text-accent-black">Parallel Lines:</span> Have identical slope (m₁ = m₂).
                </div>
                <div className="bg-white p-3 rounded-lg border border-border/5">
                  <span className="font-bold text-accent-black">Perpendicular Lines:</span> Product of slopes is -1 (m₁ · m₂ = -1).
                </div>
                <div className="bg-white p-3 rounded-lg border border-border/5">
                  <span className="font-bold text-accent-black">Circle Center:</span> If x² + y² + 2gx + 2fy + c = 0, Center is (-g, -f).
                </div>
                <div className="bg-white p-3 rounded-lg border border-border/5">
                  <span className="font-bold text-accent-black">Circle Radius:</span> r = √(g² + f² - c).
                </div>
              </div>
            </div>
          </div>
        </section>

        <QuizComponent title="Coordinate Geometry Quick Quiz" questions={questions} />

        {/* Completed */}
        <section className="text-center pt-8">
          <h2 className="text-2xl font-black mb-4 flex items-center justify-center gap-3">
            <span className="text-3xl">🎉</span> You're Ready!
          </h2>
          <p className="text-lg font-medium text-text-secondary mb-10 max-w-2xl mx-auto">
            Great! You've refreshed the Coordinate Geometry concepts required before starting Engineering Mathematics.
          </p>
          
          <Link 
            href="/before-class/engineering-mathematics/mathematics-prerequisites/functions-and-graphs"
            className="inline-flex items-center gap-3 bg-white border-2 border-accent-black text-accent-black font-bold text-lg px-8 py-5 rounded-2xl hover:bg-accent-black hover:text-white transition-all shadow-[4px_4px_0_#000]"
          >
            Continue to Functions & Graphs <ArrowRight size={20} />
          </Link>
        </section>

      </div>
    </main>
  );
}





