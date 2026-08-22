import Link from "next/link";
import { ArrowLeft, Zap, Battery, Activity, GitMerge, Calculator } from "lucide-react";

export default function PrerequisitesHubPage() {
  const prerequisites = [
    {
      title: "Basic Electricity",
      desc: "Fundamentals of electrical charge and power.",
      href: "/before-class/basic-electrical-engineering/basic-electrical-engineering-prerequisites/basic-electricity",
      icon: Zap,
      color: "bg-surface-lavender"
    },
    {
      title: "Current, Voltage & Resistance",
      desc: "Core electrical quantities.",
      href: "/before-class/basic-electrical-engineering/basic-electrical-engineering-prerequisites/current-voltage-resistance",
      icon: Battery,
      color: "bg-surface-mint"
    },
    {
      title: "Ohm's Law",
      desc: "The relationship between V, I, and R.",
      href: "/before-class/basic-electrical-engineering/basic-electrical-engineering-prerequisites/ohms-law",
      icon: Activity,
      color: "bg-surface-peach"
    },
    {
      title: "Simple Circuit Connections",
      desc: "Series and parallel circuits.",
      href: "/before-class/basic-electrical-engineering/basic-electrical-engineering-prerequisites/simple-circuits",
      icon: GitMerge,
      color: "bg-surface-yellow"
    },
    {
      title: "Basic Algebra and Unit Conversions",
      desc: "Math for electrical engineering.",
      href: "/before-class/basic-electrical-engineering/basic-electrical-engineering-prerequisites/basic-algebra-units",
      icon: Calculator,
      color: "bg-surface-lavender"
    }
  ];

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="min-h-screen bg-bg p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/before-class/basic-electrical-engineering" 
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary font-bold mb-8 transition-colors"
          >
            <ArrowLeft size={20} /> Back to Basic Electrical Engineering
          </Link>

          <div className="mb-10">
            <h1 className="text-4xl font-extrabold text-text-primary mb-4">Basic Electrical Engineering Prerequisites</h1>
            <p className="text-lg text-text-secondary font-medium">
              Refresh these 5 essential concepts before starting Basic Electrical Engineering.
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
