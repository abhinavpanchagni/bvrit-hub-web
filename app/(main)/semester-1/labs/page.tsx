import Link from "next/link";
import { semester1Labs } from "@/data/labsSemester1";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function SemesterOneLabsPage() {
  return (
    <main className="min-h-screen bg-bg text-text-primary p-6 md:p-12 animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <Link 
            href="/semester-1" 
            className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-text-secondary hover:text-accent-blue transition-colors mb-6"
          >
            <ArrowLeft size={16} strokeWidth={2.5} /> Back to Semester 1
          </Link>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Semester 1 Labs
          </h1>

          <p className="text-lg text-text-secondary font-medium">
            Choose your laboratory to access manuals, records, and experiments.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {semester1Labs.map((lab) => (
            <div
              key={lab.slug}
              className="rounded-[2.5rem] border border-border/10 bg-surface-mint p-10 shadow-sm flex flex-col items-start"
            >
              <span className="font-bold text-xs uppercase tracking-wider bg-white/60 dark:bg-black/10 text-accent-black px-3 py-1 rounded-lg border border-white/20 mb-4 inline-block">
                {lab.code}
              </span>

              <h2 className="text-2xl font-extrabold text-accent-black mb-6">
                {lab.title}
              </h2>

              <div className="flex flex-wrap gap-2 mb-10">
                {lab.branches.map((branch) => (
                  <span
                    key={branch}
                    className="rounded-lg bg-white/40 dark:bg-black/5 border border-white/20 px-3 py-1 text-xs font-bold text-accent-black"
                  >
                    {branch}
                  </span>
                ))}
              </div>

              <div className="mt-auto w-full">
                <Link 
                  href={`/semester-1/labs/${lab.slug}`}
                  className="bg-accent-black text-bg px-6 py-3 rounded-2xl border border-border/10 shadow-sm text-sm font-bold flex items-center justify-between w-full hover:scale-[1.02] transition-transform"
                >
                  Open Lab <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
