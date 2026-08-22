import Link from "next/link";
import { ArrowLeft, Zap, Battery, Cpu, Settings, Activity } from "lucide-react";

export default function PrerequisitesHubPage() {
  const prerequisites = [
    {
      title: "Basic Electricity",
      desc: "Understanding the fundamentals of electrical energy.",
      href: "/before-class/electronic-devices-circuits/electronic-devices-circuits-prerequisites/basic-electricity",
      icon: Zap,
      color: "bg-surface-lavender"
    },
    {
      title: "Current, Voltage & Resistance",
      desc: "The relationship between the core electrical quantities.",
      href: "/before-class/electronic-devices-circuits/electronic-devices-circuits-prerequisites/current-voltage-resistance",
      icon: Battery,
      color: "bg-surface-mint"
    },
    {
      title: "Atoms & Semiconductors",
      desc: "Atomic structure and the nature of semiconductor materials.",
      href: "/before-class/electronic-devices-circuits/electronic-devices-circuits-prerequisites/atoms-semiconductors",
      icon: Cpu,
      color: "bg-surface-peach"
    },
    {
      title: "Basic Circuit Symbols",
      desc: "Reading and understanding electrical diagrams.",
      href: "/before-class/electronic-devices-circuits/electronic-devices-circuits-prerequisites/basic-circuit-symbols",
      icon: Settings,
      color: "bg-surface-yellow"
    },
    {
      title: "Ohm's Law",
      desc: "The fundamental law relating voltage, current, and resistance.",
      href: "/before-class/electronic-devices-circuits/electronic-devices-circuits-prerequisites/ohms-law",
      icon: Activity,
      color: "bg-surface-lavender"
    }
  ];

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="min-h-screen bg-bg p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/before-class/electronic-devices-circuits" 
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary font-bold mb-8 transition-colors"
          >
            <ArrowLeft size={20} /> Back to Electronic Devices & Circuits
          </Link>

          <div className="mb-10">
            <h1 className="text-4xl font-extrabold text-text-primary mb-4">Electronic Devices & Circuits Prerequisites</h1>
            <p className="text-lg text-text-secondary font-medium">
              Refresh these 5 essential concepts before starting Electronic Devices & Circuits.
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
