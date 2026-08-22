"use client";

import Link from "next/link";
import { ArrowLeft, HeartPulse, Activity, Microscope, Lightbulb } from "lucide-react";
import QuizComponent from "@/components/before-class/QuizComponent";

export default function BeforeClassPage() {
  const prerequisites = [
    "Human Organ Systems",
    "Cellular Biology",
    "Basic Skeletal Structure",
    "Circulatory System",
    "Nervous System"
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
          Human Anatomy & Physiology Basics
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* Why This Matters */}
        <section className="bg-accent-black text-bg rounded-[2.5rem] p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-black mb-8 flex items-center gap-4"><div className="w-12 h-12 rounded-full bg-surface-mint flex items-center justify-center text-accent-black"><Lightbulb size={24} strokeWidth={2.5} /></div>Why This Matters</h2>
          <div className="space-y-6 text-lg text-bg/90 leading-relaxed font-medium">
            <p>
              In Biomedical Engineering (BME) and Pharmaceutical Engineering (PHE), the <span className="font-bold text-white">human body</span> is the primary system you are designing for.
            </p>
            <p>
              Whether you are developing life-saving pacemakers, designing artificial organs, creating targeted drug delivery systems, or programming medical imaging software, understanding how the human body works is non-negotiable.
            </p>
            <p>
              Human Anatomy & Physiology provides the blueprint. You cannot fix, enhance, or treat a biological system if you don't know how its mechanical and electrical components naturally function.
            </p>
            <p className="p-6 bg-white/10 rounded-2xl border border-white/20 text-white font-bold">
              This subject bridges the gap between engineering mechanics and biological life.
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
                <HeartPulse size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Medical Devices & Implants</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Designing prosthetics, pacemakers, and artificial joints requires deep knowledge of human skeletal structure, tissue compatibility, and cardiovascular flow.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-mint rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Activity size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Diagnostic Imaging</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                To build better MRI, CT scan, or ultrasound machines, engineers must understand organ densities and tissue structures to improve signal processing and image quality.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-border/10 shadow-sm hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-surface-peach rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border/10">
                <Microscope size={28} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-black mb-4">Targeted Drug Delivery</h3>
              <p className="text-text-secondary font-medium leading-relaxed">
                Pharmaceutical engineers use physiology to design drugs that target specific cellular pathways without disrupting the body's natural homeostasis.
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
            title="Anatomy & Physiology Basics Quiz" 
            questions={[
              {
                id: 1,
                question: "Which system in the human body is primarily responsible for transporting oxygen and nutrients?",
                options: ["Nervous System", "Cardiovascular System", "Respiratory System", "Digestive System"],
                correctOptionIndex: 1,
                explanation: "The cardiovascular system uses blood to transport oxygen, nutrients, and hormones to cells."
              },
              {
                id: 2,
                question: "What is the basic structural and functional unit of the human body?",
                options: ["Tissue", "Organ", "Cell", "Protein"],
                correctOptionIndex: 2,
                explanation: "The cell is the smallest unit of life and the building block of all human tissues and organs."
              },
              {
                id: 3,
                question: "In biomechanics, which connective tissue connects muscles to bones?",
                options: ["Ligament", "Cartilage", "Tendon", "Marrow"],
                correctOptionIndex: 2,
                explanation: "Tendons are tough bands of fibrous connective tissue that connect muscle to bone, enabling movement."
              },
              {
                id: 4,
                question: "Which organ acts as the primary control center for processing sensory information?",
                options: ["Heart", "Spinal Cord", "Brain", "Liver"],
                correctOptionIndex: 2,
                explanation: "The brain processes sensory data, coordinates motor functions, and maintains homeostasis."
              },
              {
                id: 5,
                question: "Why is understanding homeostasis critical in Biomedical Engineering?",
                options: ["To design machines that move faster", "To develop devices that maintain biological balance without rejection", "To increase the body's natural temperature", "To replace all biological tissues with synthetics"],
                correctOptionIndex: 1,
                explanation: "Medical devices must work in harmony with the body's natural state (homeostasis) to be safe and effective."
              }
            ]} 
          />
        </section>

      </div>
    </main>
  );
}
