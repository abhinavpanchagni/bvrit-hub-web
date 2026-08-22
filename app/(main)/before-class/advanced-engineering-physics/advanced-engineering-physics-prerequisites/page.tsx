import Link from "next/link";
import { ArrowLeft, Move, Magnet, Sun, Atom, LineChart } from "lucide-react";

export default function PrerequisitesHubPage() {
  const prerequisites = [
    {
      title: "Basic Mechanics",
      desc: "Forces, motion, and energy.",
      href: "/before-class/advanced-engineering-physics/advanced-engineering-physics-prerequisites/basic-mechanics",
      icon: Move,
      color: "bg-surface-lavender"
    },
    {
      title: "Electricity & Magnetism",
      desc: "Electromagnetic principles.",
      href: "/before-class/advanced-engineering-physics/advanced-engineering-physics-prerequisites/electricity-magnetism",
      icon: Magnet,
      color: "bg-surface-mint"
    },
    {
      title: "Light & Optics",
      desc: "Properties of light and lenses.",
      href: "/before-class/advanced-engineering-physics/advanced-engineering-physics-prerequisites/light-optics",
      icon: Sun,
      color: "bg-surface-peach"
    },
    {
      title: "Atoms & Modern Physics",
      desc: "Quantum mechanics and relativity.",
      href: "/before-class/advanced-engineering-physics/advanced-engineering-physics-prerequisites/atoms-modern-physics",
      icon: Atom,
      color: "bg-surface-yellow"
    },
    {
      title: "Basic Algebra and Graphs",
      desc: "Math for physics.",
      href: "/before-class/advanced-engineering-physics/advanced-engineering-physics-prerequisites/basic-algebra-graphs",
      icon: LineChart,
      color: "bg-surface-lavender"
    }
  ];

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="min-h-screen bg-bg p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/before-class/advanced-engineering-physics" 
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary font-bold mb-8 transition-colors"
          >
            <ArrowLeft size={20} /> Back to Advanced Engineering Physics
          </Link>

          <div className="mb-10">
            <h1 className="text-4xl font-extrabold text-text-primary mb-4">Advanced Engineering Physics Prerequisites</h1>
            <p className="text-lg text-text-secondary font-medium">
              Refresh these 5 essential concepts before starting Advanced Engineering Physics.
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
