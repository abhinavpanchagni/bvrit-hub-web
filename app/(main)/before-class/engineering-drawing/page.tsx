"use client";

import Link from "next/link";
import { ArrowLeft, Car, Building, Laptop, Lightbulb } from "lucide-react";

export default function BeforeClassPage() {
  const prerequisites = [
    "Basic Geometry",
    "Measurement and Scale",
    "Spatial Visualization (imagining 3D objects)",
    "Angles and Shapes",
    "Basic Drawing Instruments (Scale, Compass & Protractor)"
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
          Engineering Drawing & <br />CAD
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* Why This Matters */}
        <section className="bg-accent-black text-bg rounded-[2.5rem] p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-black mb-8 flex items-center gap-4"><div className="w-12 h-12 rounded-full bg-surface-mint flex items-center justify-center text-accent-black"><Lightbulb size={24} strokeWidth={2.5} /></div>Why This Matters</h2>
          <div className="space-y-6 text-lg text-bg/90 leading-relaxed font-medium">
            <p>
              Every engineering innovation begins as an <span className="font-bold text-white">idea</span>. But ideas alone cannot be manufactured, constructed, or shared with others.
            </p>
            <p>
              Engineering Drawing teaches you how to convert ideas into clear technical drawings that engineers across the world can understand. It develops your ability to visualize objects, understand dimensions, and communicate designs accurately.
            </p>
            <p>
              Whether you're designing a bridge, a robot, a drone, an electronic device, or the next generation of smartphones, every engineering solution starts with a well-designed drawing.
            </p>
            <p className="p-6 bg-white/10 rounded-2xl border border-white/20 text-white font-bold">
              This subject helps you develop one of the most important skills of an engineer—visual thinking.
            </p>
          </div>
        </section>

        {/* Where You'll Use It */}
        <section>
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <span className="text-4xl">🌍</span> Where You'll Use It
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-lavender rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Car size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Automobile Engineering</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Before companies manufacture a vehicle, engineers first create detailed engineering drawings and CAD models for every component. These drawings ensure that thousands of individual parts fit together perfectly.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-mint rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Building size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Construction & Infrastructure</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Bridges, buildings, and metro systems are never built directly from an idea. Engineers prepare detailed drawings that become the common language shared by architects, engineers, and construction teams.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-peach rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Laptop size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Product Design & Manufacturing</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Modern products are first designed digitally using Computer Aided Design (CAD). These digital drawings allow engineers to test, improve, and manufacture products efficiently.
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
            Refreshing these school concepts will make your learning journey smoother.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {prerequisites.map((req, idx) => (
              <div key={idx} className="bg-white border-2 border-accent-black rounded-xl px-5 py-3 font-bold shadow-[4px_4px_0_#000]">
                📌 {req}
              </div>
            ))}
          </div>

          <Link 
            href="/before-class/engineering-drawing/engineering-drawing-prerequisites"
            className="inline-block bg-accent-black text-white font-bold text-lg rounded-xl px-8 py-4 mb-8 shadow-sm hover:scale-[1.02] transition-transform"
          >
            Start Prerequisites Practice →
          </Link>

          
          <div className="bg-white/60 rounded-2xl p-6 border border-white font-bold text-accent-black">
            Don't worry if you've forgotten these concepts. Your faculty will teach everything from the basics during the semester.
          </div>
        </section>

      </div>
    </main>
  );
}
