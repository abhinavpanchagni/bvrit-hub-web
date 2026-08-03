import Link from "next/link";
import { semester1Subjects } from "@/data/semester1";
import { semester1Labs } from "@/data/labsSemester1";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ArrowLeft, ArrowRight, Book, Beaker } from "lucide-react";

export default async function SemesterOnePage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("branch")
    .eq("id", user.id)
    .single();

  const branch = profile?.branch;

  const filteredSubjects = branch
    ? semester1Subjects.filter((subject) => subject.branches.includes(branch))
    : semester1Subjects;

  const filteredLabs = branch
    ? semester1Labs.filter((lab) => lab.branches.includes(branch))
    : semester1Labs;

  return (
    <main className="min-h-screen bg-bg text-text-primary p-6 md:p-12 animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="mb-16">
          <Link 
            href="/resources" 
            className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-text-secondary hover:text-accent-blue transition-colors mb-6"
          >
            <ArrowLeft size={16} strokeWidth={2.5} /> Back to Resources
          </Link>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Semester 1
          </h1>

          <p className="text-lg text-text-secondary font-medium max-w-3xl mb-8">
            Theory subjects, laboratories, notes, videos, previous papers and
            question banks.
          </p>

          <span className="inline-block rounded-xl bg-surface-yellow/30 border border-surface-yellow/50 px-4 py-2 font-bold text-xs tracking-wider uppercase text-accent-black">
            Branch : {branch || "ALL (Not Set)"}
          </span>
        </header>


        {/* Theory Subjects Section */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-surface-lavender flex items-center justify-center shadow-sm border border-border/10">
              <Book size={20} className="text-accent-black" />
            </div>
            <h2 className="text-3xl font-extrabold text-text-primary">
              Theory Subjects
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {filteredSubjects.map((subject) => (
              <div
                key={subject.slug}
                className="rounded-[2.5rem] border border-border/10 bg-surface-lavender/40 p-10 shadow-sm flex flex-col items-start transition-transform hover:-translate-y-1"
              >
                <span className="font-bold text-xs uppercase tracking-wider bg-white/60 text-accent-black px-3 py-1 rounded-lg border border-white/20 mb-4 inline-block">
                  {subject.code}
                </span>

                <h3 className="text-2xl font-extrabold text-accent-black mb-6">
                  {subject.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-10">
                  {subject.branches.map((branch) => (
                    <span
                      key={branch}
                      className="rounded-lg bg-white/40 border border-white/20 px-3 py-1 text-xs font-bold text-accent-black"
                    >
                      {branch}
                    </span>
                  ))}
                </div>

                <div className="mt-auto w-full">
                  <Link 
                    href={`/semester-1/${subject.slug}`}
                    className="bg-accent-black text-bg px-6 py-3 rounded-2xl border border-border/10 shadow-sm text-sm font-bold flex items-center justify-between w-full hover:scale-[1.02] transition-transform"
                  >
                    Open Subject <ArrowRight size={16} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Laboratories Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-surface-mint flex items-center justify-center shadow-sm border border-border/10">
                <Beaker size={20} className="text-accent-black" />
              </div>
              <h2 className="text-3xl font-extrabold text-text-primary">
                Laboratories
              </h2>
            </div>

            <Link 
              href="/semester-1/labs"
              className="hidden md:inline-flex items-center gap-2 font-bold text-sm text-accent-blue hover:text-accent-blue/80 transition-colors"
            >
              View All Labs <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {filteredLabs.slice(0, 4).map((lab) => (
              <div
                key={lab.slug}
                className="rounded-[2.5rem] border border-border/10 bg-surface-mint/40 p-10 shadow-sm flex flex-col items-start transition-transform hover:-translate-y-1"
              >
                <span className="font-bold text-xs uppercase tracking-wider bg-white/60 text-accent-black px-3 py-1 rounded-lg border border-white/20 mb-4 inline-block">
                  {lab.code}
                </span>

                <h3 className="text-2xl font-extrabold text-accent-black mb-6">
                  {lab.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-10">
                  {lab.branches.map((branch) => (
                    <span
                      key={branch}
                      className="rounded-lg bg-white/40 border border-white/20 px-3 py-1 text-xs font-bold text-accent-black"
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
          </div>
          
          {/* Mobile view all link */}
          <div className="mt-8 text-center md:hidden">
            <Link 
              href="/semester-1/labs"
              className="inline-flex items-center gap-2 font-bold text-sm text-accent-blue hover:text-accent-blue/80 transition-colors"
            >
              View All Labs <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
