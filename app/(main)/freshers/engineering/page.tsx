import Link from "next/link";
import { ArrowLeft, BookOpen, Check, Target, Lightbulb, TrendingUp } from "lucide-react";

export default function EngineeringPage() {
  return (
    <main className="min-h-screen bg-bg text-text-primary p-6 md:p-12 animate-fade-in-up">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="mb-16">
          <Link 
            href="/freshers" 
            className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-text-secondary hover:text-accent-blue transition-colors mb-6"
          >
            <ArrowLeft size={16} strokeWidth={2.5} /> Back to Freshers
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="font-bold text-xs uppercase tracking-wider bg-surface-yellow/30 text-accent-black px-3 py-1 rounded-lg border border-surface-yellow/50">
              Chapter 01
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            How Engineering Works
          </h1>

          <p className="text-lg text-text-secondary font-medium max-w-3xl">
            Everything you need to understand your engineering journey before
            your first semester begins.
          </p>
        </header>

        {/* Body Content */}
        <section className="space-y-10">
          
          <div className="rounded-[2.5rem] border border-border/10 bg-white dark:bg-[#1A1A1A] p-10 md:p-14 shadow-sm">
            <h2 className="text-3xl font-extrabold text-text-primary mb-6">
              Welcome 👋
            </h2>
            <p className="text-lg text-text-secondary font-medium leading-relaxed mb-6">
              Engineering is not just about studying for exams.
              It is a four-year journey where you learn concepts,
              build practical skills, work on projects, participate
              in events and prepare yourself for your career.
            </p>
            <p className="text-lg text-text-secondary font-medium leading-relaxed">
              Every semester teaches you something new.
              Don't worry if you feel confused in the beginning.
              Every senior once started exactly where you are today.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2.5rem] border border-border/10 bg-surface-mint/40 p-10 shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-white/60 dark:bg-black/10 flex items-center justify-center mb-6 shadow-sm border border-white/20">
                <Target size={24} className="text-accent-black" />
              </div>
              <h3 className="text-2xl font-extrabold text-accent-black mb-6">
                Your Journey
              </h3>
              <ul className="space-y-4">
                {[
                  "4 Academic Years",
                  "8 Semesters",
                  "Theory Subjects",
                  "Practical Laboratories",
                  "Assignments & Mini Projects",
                  "Major Project & Campus Placements"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-accent-black/80">
                    <Check size={16} className="text-accent-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2.5rem] border border-border/10 bg-surface-lavender/40 p-10 shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-white/60 dark:bg-black/10 flex items-center justify-center mb-6 shadow-sm border border-white/20">
                <BookOpen size={24} className="text-accent-black" />
              </div>
              <h3 className="text-2xl font-extrabold text-accent-black mb-6">
                Every Semester
              </h3>
              <ul className="space-y-4">
                {[
                  "Daily Classes",
                  "Assignments & Records",
                  "Practical Labs",
                  "Mid Examinations",
                  "Semester Examinations",
                  "Workshops & Skill Development"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-accent-black/80">
                    <Check size={16} className="text-accent-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-border/10 bg-surface-peach/40 p-10 md:p-14 shadow-sm flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl border border-border/10 shadow-sm bg-white/60 dark:bg-black/10 flex items-center justify-center shadow-sm border border-white/20 shrink-0">
              <Lightbulb size={32} className="text-accent-black" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-accent-black mb-4">
                Think Like This
              </h3>
              <p className="text-lg font-medium text-accent-black/80 leading-relaxed">
                Imagine engineering as a game. <br />
                Semester 1 = Level 1 <br />
                Semester 2 = Level 2 <br />
                Every semester teaches you new concepts and new skills. Complete one semester successfully and move to the next.
              </p>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-border/10 bg-accent-black p-10 md:p-14 shadow-sm text-bg mt-12">
            <div className="flex items-center gap-4 mb-10">
              <TrendingUp size={32} className="text-surface-yellow" />
              <h3 className="text-3xl font-extrabold">
                Success Tips
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border/10 shadow-sm bg-white/10 p-6 border border-white/10">
                <h4 className="text-lg font-extrabold mb-2 text-bg">Study Daily</h4>
                <p className="text-sm font-medium text-bg/70 leading-relaxed">
                  Study a little every day instead of waiting until exams.
                </p>
              </div>

              <div className="rounded-2xl border border-border/10 shadow-sm bg-white/10 p-6 border border-white/10">
                <h4 className="text-lg font-extrabold mb-2 text-bg">Attend Labs</h4>
                <p className="text-sm font-medium text-bg/70 leading-relaxed">
                  Labs improve your practical knowledge and confidence.
                </p>
              </div>

              <div className="rounded-2xl border border-border/10 shadow-sm bg-white/10 p-6 border border-white/10">
                <h4 className="text-lg font-extrabold mb-2 text-bg">Ask Questions</h4>
                <p className="text-sm font-medium text-bg/70 leading-relaxed">
                  Never hesitate to ask faculty or seniors for help.
                </p>
              </div>

              <div className="rounded-2xl border border-border/10 shadow-sm bg-white/10 p-6 border border-white/10">
                <h4 className="text-lg font-extrabold mb-2 text-bg">Build Skills</h4>
                <p className="text-sm font-medium text-bg/70 leading-relaxed">
                  Learn programming, communication and problem solving alongside academics.
                </p>
              </div>
            </div>
          </div>
          
        </section>
      </div>
    </main>
  );
}
