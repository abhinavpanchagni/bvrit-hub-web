import Link from "next/link";
import { ArrowLeft, Type, BookA, BookOpen, AlignLeft, Mic } from "lucide-react";

export default function PrerequisitesHubPage() {
  const prerequisites = [
    {
      title: "Basic Grammar",
      desc: "Rules of the English language.",
      href: "/before-class/english-for-skill-enhancement/english-for-skill-enhancement-prerequisites/basic-grammar",
      icon: Type,
      color: "bg-surface-lavender"
    },
    {
      title: "Vocabulary",
      desc: "Building your word power.",
      href: "/before-class/english-for-skill-enhancement/english-for-skill-enhancement-prerequisites/vocabulary",
      icon: BookA,
      color: "bg-surface-mint"
    },
    {
      title: "Reading Comprehension",
      desc: "Understanding written text.",
      href: "/before-class/english-for-skill-enhancement/english-for-skill-enhancement-prerequisites/reading-comprehension",
      icon: BookOpen,
      color: "bg-surface-peach"
    },
    {
      title: "Sentence Formation",
      desc: "Structuring clear sentences.",
      href: "/before-class/english-for-skill-enhancement/english-for-skill-enhancement-prerequisites/sentence-formation",
      icon: AlignLeft,
      color: "bg-surface-yellow"
    },
    {
      title: "Listening & Speaking Practice",
      desc: "Effective communication skills.",
      href: "/before-class/english-for-skill-enhancement/english-for-skill-enhancement-prerequisites/listening-speaking",
      icon: Mic,
      color: "bg-surface-lavender"
    }
  ];

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="min-h-screen bg-bg p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/before-class/english-for-skill-enhancement" 
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary font-bold mb-8 transition-colors"
          >
            <ArrowLeft size={20} /> Back to English for Skill Enhancement
          </Link>

          <div className="mb-10">
            <h1 className="text-4xl font-extrabold text-text-primary mb-4">English for Skill Enhancement Prerequisites</h1>
            <p className="text-lg text-text-secondary font-medium">
              Refresh these 5 essential concepts before starting English for Skill Enhancement.
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
