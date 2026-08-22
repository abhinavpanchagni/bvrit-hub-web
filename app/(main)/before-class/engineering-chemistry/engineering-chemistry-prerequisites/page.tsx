import Link from "next/link";
import { ArrowLeft, Dna, TestTube, Droplet, Grid, Link as LinkIcon } from "lucide-react";

export default function PrerequisitesHubPage() {
  const prerequisites = [
    {
      title: "Atoms & Molecules",
      desc: "Basic building blocks of matter.",
      href: "/before-class/engineering-chemistry/engineering-chemistry-prerequisites/atoms-molecules",
      icon: Dna,
      color: "bg-surface-lavender"
    },
    {
      title: "Chemical Reactions",
      desc: "How substances interact and change.",
      href: "/before-class/engineering-chemistry/engineering-chemistry-prerequisites/chemical-reactions",
      icon: TestTube,
      color: "bg-surface-mint"
    },
    {
      title: "Acids, Bases & Salts",
      desc: "Properties of common chemical compounds.",
      href: "/before-class/engineering-chemistry/engineering-chemistry-prerequisites/acids-bases-salts",
      icon: Droplet,
      color: "bg-surface-peach"
    },
    {
      title: "Periodic Table",
      desc: "Elements and their properties.",
      href: "/before-class/engineering-chemistry/engineering-chemistry-prerequisites/periodic-table",
      icon: Grid,
      color: "bg-surface-yellow"
    },
    {
      title: "Basic Chemical Bonding",
      desc: "How atoms connect to form molecules.",
      href: "/before-class/engineering-chemistry/engineering-chemistry-prerequisites/basic-chemical-bonding",
      icon: LinkIcon,
      color: "bg-surface-lavender"
    }
  ];

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="min-h-screen bg-bg p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/before-class/engineering-chemistry" 
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary font-bold mb-8 transition-colors"
          >
            <ArrowLeft size={20} /> Back to Engineering Chemistry
          </Link>

          <div className="mb-10">
            <h1 className="text-4xl font-extrabold text-text-primary mb-4">Engineering Chemistry Prerequisites</h1>
            <p className="text-lg text-text-secondary font-medium">
              Refresh these 5 essential concepts before starting Engineering Chemistry.
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
