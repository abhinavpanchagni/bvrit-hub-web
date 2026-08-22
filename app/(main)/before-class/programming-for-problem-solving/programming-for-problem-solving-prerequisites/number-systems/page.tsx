"use client";

import Link from "next/link";
import QuizComponent from "@/components/before-class/QuizComponent";
import { ArrowLeft, ArrowRight, BookOpen, Lightbulb } from "lucide-react";

export default function NumberSystemsPage() {
  const questions = [
    {
        "id": 1,
        "question": "What is the primary concept of Number Systems?",
        "options": [
            "A fundamental principle",
            "A complex theory",
            "A historical event",
            "None of the above"
        ],
        "correctOptionIndex": 0,
        "explanation": "Number Systems is a fundamental concept that builds the foundation for this engineering subject."
    },
    {
        "id": 2,
        "question": "Which of the following is an application of Number Systems?",
        "options": [
            "Industrial manufacturing",
            "Daily life problem solving",
            "Software development",
            "All of the above"
        ],
        "correctOptionIndex": 3,
        "explanation": "Number Systems principles are widely applied across various domains including industry and daily life."
    },
    {
        "id": 3,
        "question": "Why is understanding Number Systems important for engineers?",
        "options": [
            "It is required for exams",
            "It forms the basis of complex designs",
            "It is easy to learn",
            "It is not important"
        ],
        "correctOptionIndex": 1,
        "explanation": "Engineers rely on Number Systems to design, analyze, and build complex systems accurately."
    },
    {
        "id": 4,
        "question": "In the context of Number Systems, which statement is generally true?",
        "options": [
            "It relies on logical reasoning",
            "It is entirely theoretical",
            "It has no practical use",
            "It changes every year"
        ],
        "correctOptionIndex": 0,
        "explanation": "Number Systems heavily relies on logical reasoning and consistent principles."
    },
    {
        "id": 5,
        "question": "How can one best master Number Systems?",
        "options": [
            "Memorizing everything",
            "Consistent practice and application",
            "Reading once",
            "Guessing"
        ],
        "correctOptionIndex": 1,
        "explanation": "Like most engineering prerequisites, mastering Number Systems requires consistent practice and real-world application."
    }
];

  return (
    <main className="flex-1 overflow-y-auto bg-bg text-text-primary pb-24">
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-12">
        <Link 
          href="/before-class/programming-for-problem-solving/programming-for-problem-solving-prerequisites" 
          className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary font-bold mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Prerequisites
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-black mb-4">Number Systems</h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* What is it? */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-border/10 shadow-sm">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
            <span className="text-3xl">📖</span> What is Number Systems?
          </h2>
          <div className="space-y-6 text-lg font-medium text-text-secondary leading-relaxed">
            <p>
              Number Systems is a foundational concept essential for understanding Programming for Problem Solving.
            </p>
            <p>
              By mastering this topic, you build a strong baseline that will help you grasp more advanced engineering concepts quickly and effectively.
            </p>
          </div>
        </section>

        {/* Where is it used? */}
        <section>
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <span className="text-4xl">🌍</span> Where is it used?
          </h2>
          <div className="bg-surface-mint rounded-[2.5rem] p-8 md:p-12 border border-border/10 shadow-sm">
             <p className="text-lg font-medium text-accent-black leading-relaxed">
               Engineers apply Number Systems in various real-world scenarios, from designing systems and analyzing data, to optimizing processes. It is a core skill that you will utilize throughout your academic and professional career.
             </p>
          </div>
        </section>

        <QuizComponent title="Number Systems Quick Quiz" questions={questions} />

        {/* Completed */}
        <section className="text-center pt-8">
          <h2 className="text-2xl font-black mb-4 flex items-center justify-center gap-3">
            <span className="text-3xl">🎉</span> Revision Complete!
          </h2>
          <p className="text-lg font-medium text-text-secondary mb-10 max-w-2xl mx-auto">
            You've refreshed an important concept for Programming for Problem Solving.
          </p>
          
          <Link 
            href="/before-class/programming-for-problem-solving/programming-for-problem-solving-prerequisites/basic-mathematics"
            className="inline-flex items-center gap-3 bg-white border-2 border-accent-black text-accent-black font-bold text-lg px-8 py-5 rounded-2xl hover:bg-accent-black hover:text-white transition-all shadow-[4px_4px_0_#000]"
          >
            Continue to Basic Mathematics <ArrowRight size={20} />
          </Link>
        </section>

      </div>
    </main>
  );
}
