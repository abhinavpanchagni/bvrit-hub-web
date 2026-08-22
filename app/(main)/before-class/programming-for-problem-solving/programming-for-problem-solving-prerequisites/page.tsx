import Link from "next/link";
import { ArrowLeft, Brain, ListOrdered, Workflow, Binary, Calculator } from "lucide-react";

export default function PrerequisitesHubPage() {
  const prerequisites = [
    {
      title: "Logical Thinking",
      desc: "Solving problems step by step.",
      href: "/before-class/programming-for-problem-solving/programming-for-problem-solving-prerequisites/logical-thinking",
      icon: Brain,
      color: "bg-surface-lavender"
    },
    {
      title: "Algorithms",
      desc: "Sequences of steps to solve problems.",
      href: "/before-class/programming-for-problem-solving/programming-for-problem-solving-prerequisites/algorithms",
      icon: ListOrdered,
      color: "bg-surface-mint"
    },
    {
      title: "Flowcharts",
      desc: "Visual representation of processes.",
      href: "/before-class/programming-for-problem-solving/programming-for-problem-solving-prerequisites/flowcharts",
      icon: Workflow,
      color: "bg-surface-peach"
    },
    {
      title: "Number Systems",
      desc: "Binary, decimal, and hexadecimal.",
      href: "/before-class/programming-for-problem-solving/programming-for-problem-solving-prerequisites/number-systems",
      icon: Binary,
      color: "bg-surface-yellow"
    },
    {
      title: "Basic Mathematics",
      desc: "Arithmetic and logical reasoning.",
      href: "/before-class/programming-for-problem-solving/programming-for-problem-solving-prerequisites/basic-mathematics",
      icon: Calculator,
      color: "bg-surface-lavender"
    }
  ];

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="min-h-screen bg-bg p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/before-class/programming-for-problem-solving" 
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary font-bold mb-8 transition-colors"
          >
            <ArrowLeft size={20} /> Back to Programming for Problem Solving
          </Link>

          <div className="mb-10">
            <h1 className="text-4xl font-extrabold text-text-primary mb-4">Programming for Problem Solving Prerequisites</h1>
            <p className="text-lg text-text-secondary font-medium">
              Refresh these 5 essential concepts before starting Programming for Problem Solving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prerequisites.map((req, idx) => (
              <Link 
                key={idx}
                href={req.href}
                className={`group flex flex-col justify-between p-8 rounded-[2.5rem] ${req.color} border border-border/10 shadow-sm transition-all hover:-translate-y-2 hover:shadow-md`}
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-accent-black mb-8 shadow-sm group-hover:scale-105 transition-transform">
                  <req.icon size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-text-primary mb-2">{idx + 1}. {req.title}</h2>
                  <p className="text-text-secondary font-medium">
                    {req.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
