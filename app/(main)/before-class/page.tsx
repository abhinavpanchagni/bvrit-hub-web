import Link from "next/link";
import { BookOpen, Cpu, FlaskConical, Binary, PencilRuler, CodeSquare, MessageCircle, Zap, HeartPulse, Dna } from "lucide-react";

export default function BeforeFirstClassPage() {
  const subjects = [
    {
      title: "Advanced Engineering Physics",
      desc: "Discover how physics powers modern technology.",
      href: "/before-class/advanced-engineering-physics",
      icon: BookOpen,
      color: "bg-surface-lavender"
    },
    {
      title: "Electronic Devices & Circuits",
      desc: "Understand the tech that powers today's digital world.",
      href: "/before-class/electronic-devices-circuits",
      icon: Cpu,
      color: "bg-surface-mint"
    },
    {
      title: "Engineering Chemistry",
      desc: "Explore materials and sustainable technologies.",
      href: "/before-class/engineering-chemistry",
      icon: FlaskConical,
      color: "bg-surface-peach"
    },
    {
      title: "Engineering Mathematics",
      desc: "Learn the language that powers modern engineering.",
      href: "/before-class/engineering-mathematics",
      icon: Binary,
      color: "bg-surface-yellow"
    },
    {
      title: "Engineering Drawing & CAD",
      desc: "Develop visual thinking and communicate designs.",
      href: "/before-class/engineering-drawing",
      icon: PencilRuler,
      color: "bg-surface-lavender"
    },
    {
      title: "Programming for Problem Solving",
      desc: "Master the language that powers today's digital world.",
      href: "/before-class/programming-for-problem-solving",
      icon: CodeSquare,
      color: "bg-surface-mint"
    },
    {
      title: "English for Skill Enhancement",
      desc: "Communication is a professional engineering skill.",
      href: "/before-class/english-for-skill-enhancement",
      icon: MessageCircle,
      color: "bg-surface-peach"
    },
    {
      title: "Basic Electrical Engineering",
      desc: "Understand the electricity powering the modern world.",
      href: "/before-class/basic-electrical-engineering",
      icon: Zap,
      color: "bg-surface-yellow"
    },
    {
      title: "Human Anatomy & Physiology Basics",
      desc: "Understand the human body for biomedical innovations.",
      href: "/before-class/human-anatomy-physiology",
      icon: HeartPulse,
      color: "bg-surface-peach"
    },
    {
      title: "Biology & Biomolecules",
      desc: "Explore the building blocks of life and organic structures.",
      href: "/before-class/biology-biomolecules",
      icon: Dna,
      color: "bg-surface-mint"
    },
    {
      title: "Chemistry for Life Sciences",
      desc: "Discover the chemical processes inside living organisms.",
      href: "/before-class/chemistry-life-sciences",
      icon: FlaskConical,
      color: "bg-surface-lavender"
    }
  ];

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="min-h-screen bg-bg p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h1 className="text-4xl font-extrabold text-text-primary mb-4">Before Your First Class</h1>
            <p className="text-lg text-text-secondary font-medium">
              Get a head start on your subjects before the semester begins. Select a subject to see why it matters and what you need to know.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subjects.map((subject, idx) => (
              <Link
                key={idx}
                href={subject.href}
                className={`group flex flex-col justify-between p-8 rounded-[2.5rem] ${subject.color} border border-border/10 shadow-sm transition-all hover:-translate-y-2 hover:shadow-md`}
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-accent-black mb-8 shadow-sm group-hover:scale-105 transition-transform">
                  <subject.icon size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-text-primary mb-2">{subject.title}</h2>
                  <p className="text-text-secondary font-medium">
                    {subject.desc}
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
