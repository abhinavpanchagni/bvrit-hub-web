import Link from "next/link";
import Hero from "@/components/freshers/Hero"; // I will leave the hero intact if it has its own styling, but let's assume it matches or we can just redesign this file's contents
import { ArrowRight, BookOpen, Clock, Zap } from "lucide-react";

const chapters = [
  {
    number: "01",
    title: "How Engineering Works",
    description:
      "Understand semesters, subjects, labs, projects and your engineering journey.",
    href: "/freshers/engineering",
    color: "bg-surface-mint",
  },
  {
    number: "02",
    title: "SGPA & CGPA",
    description:
      "Learn how marks, SGPA and CGPA are calculated.",
    href: "/freshers/sgpa",
    color: "bg-surface-lavender",
  },
  {
    number: "03",
    title: "Attendance Rules",
    description:
      "Everything about attendance percentage and eligibility.",
    href: "/freshers/attendance",
    color: "bg-surface-peach",
  },
  {
    number: "04",
    title: "Mid Examinations",
    description:
      "Know the mid exam pattern and how to prepare smartly.",
    href: "/freshers/mids",
    color: "bg-surface-yellow",
  },
  {
    number: "05",
    title: "Semester Examinations",
    description:
      "Understand the final exam pattern and evaluation.",
    href: "/freshers/semester-exams",
    color: "bg-surface-mint",
  },
  {
    number: "06",
    title: "Labs Overview",
    description:
      "Everything about labs, records, viva and practical sessions.",
    href: "/freshers/labs",
    color: "bg-surface-lavender",
  },
  {
    number: "07",
    title: "VEDIC AI",
    description:
      "Attendance, assignments, quizzes and academic platform.",
    href: "/freshers/vedic",
    color: "bg-surface-peach",
  },
  {
    number: "08",
    title: "ECAP",
    description:
      "Results, fee payments and student portal guide.",
    href: "/freshers/ecap",
    color: "bg-surface-yellow",
  },
  {
    number: "09",
    title: "Transport",
    description:
      "Bus routes, fees and transport information.",
    href: "/freshers/transport",
    color: "bg-surface-mint",
  },
  {
    number: "10",
    title: "Hostel",
    description:
      "Hostel life, facilities and important information.",
    href: "/freshers/hostel",
    color: "bg-surface-lavender",
  },
];

export default function FreshersPage() {
  return (
    <main className="min-h-screen bg-bg text-text-primary">
      <Hero />

      <section className="mx-auto max-w-7xl px-6 md:px-12 py-16 animate-fade-in-up">
        
        {/* Header Block */}
        <div className="rounded-[2.5rem] border border-border/10 bg-white dark:bg-[#1A1A1A] p-10 md:p-14 shadow-sm mb-16">
          <span className="font-bold text-xs uppercase tracking-wider bg-surface-yellow/30 border border-surface-yellow/50 text-accent-black px-4 py-2 rounded-xl inline-block mb-6">
            🚀 FRESHERS STARTER PACK
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Everything You Need Before Your First Semester
          </h1>

          <p className="text-lg text-text-secondary font-medium max-w-4xl mb-12">
            We collected everything every fresher asks during the first few
            weeks at BVRIT and organized it into one easy guide.
            Read these chapters once and you'll already be ahead of most freshers.
          </p>

          <div className="flex flex-wrap gap-5">
            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-surface-mint/20 px-8 py-6 flex items-center gap-4">
              <BookOpen className="text-accent-blue" size={32} />
              <div>
                <p className="text-2xl font-extrabold leading-none">10</p>
                <p className="font-medium text-xs text-text-secondary mt-1">Chapters</p>
              </div>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-surface-peach/20 px-8 py-6 flex items-center gap-4">
              <Zap className="text-accent-blue" size={32} />
              <div>
                <p className="text-2xl font-extrabold leading-none">100%</p>
                <p className="font-medium text-xs text-text-secondary mt-1">Free</p>
              </div>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-surface-lavender/20 px-8 py-6 flex items-center gap-4">
              <Clock className="text-accent-blue" size={32} />
              <div>
                <p className="text-2xl font-extrabold leading-none">15 min</p>
                <p className="font-medium text-xs text-text-secondary mt-1">Reading Time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap List */}
        <div className="mb-10 text-center">
          <span className="font-bold text-xs uppercase tracking-wider bg-surface-yellow/30 border border-surface-yellow/50 text-accent-black px-4 py-2 rounded-xl inline-block mb-6">
            Start Here
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Your Freshers Roadmap
          </h2>
          <p className="text-lg text-text-secondary font-medium max-w-3xl mx-auto">
            Follow these guides in order. Each one answers the questions every fresher usually has during the first few weeks at BVRIT.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {chapters.map((chapter) => (
            <Link
              key={chapter.number}
              href={chapter.href}
              className={`${chapter.color} rounded-[2rem] border border-border/10 p-8 shadow-sm transition-transform hover:-translate-y-1 flex flex-col`}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="rounded-xl bg-white/60 dark:bg-black/10 border border-white/20 w-12 h-12 flex items-center justify-center text-xl font-extrabold text-accent-black">
                  {chapter.number}
                </div>
                <span className="rounded-xl bg-white/60 dark:bg-black/10 border border-white/20 px-4 py-2 font-bold text-sm text-accent-black flex items-center gap-2">
                  Open <ArrowRight size={14} strokeWidth={2.5} />
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-accent-black mb-3">
                {chapter.title}
              </h3>

              <p className="text-sm font-medium text-accent-black/80 leading-relaxed">
                {chapter.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 rounded-[2.5rem] border border-border/10 bg-accent-black p-12 text-center text-bg shadow-sm">
          <h2 className="text-3xl font-extrabold mb-4">
            Start with Chapter 1
          </h2>
          <p className="text-sm font-medium text-bg/80 mb-8">
            Follow the chapters in order for the best experience.
          </p>
          <Link
            href="/freshers/engineering"
            className="inline-flex items-center gap-2 rounded-2xl border border-border/10 shadow-sm bg-surface-yellow px-8 py-4 text-sm font-bold text-accent-black hover:scale-[1.02] transition-transform"
          >
            Start Learning <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>

      </section>
    </main>
  );
}
