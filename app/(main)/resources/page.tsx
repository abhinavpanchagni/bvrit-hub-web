import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { ArrowRight, BookOpen } from "lucide-react";

const semesters = [
  {
    title: "Semester 1",
    description:
      "Theory subjects, laboratories, notes, videos, PYQs and question banks.",
    href: "/semester-1",
    color: "bg-surface-mint",
  },
  {
    title: "Semester 2",
    description:
      "Access all academic resources for your second semester.",
    href: "/semester-2",
    color: "bg-surface-lavender",
  },
];

export default async function ResourcesPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("branch, year")
    .eq("id", user.id)
    .single();

  return (
    <main className="min-h-screen bg-bg text-text-primary p-6 md:p-12 animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <span className="font-bold text-xs uppercase tracking-wider bg-surface-yellow/30 text-accent-black px-4 py-2 rounded-xl inline-block mb-6 border border-surface-yellow/50">
            Academic Resources
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Choose Your Semester
          </h1>

          <p className="text-lg text-text-secondary font-medium max-w-2xl">
            Welcome <span className="font-bold text-text-primary">{profile?.branch}</span> • Year{" "}
            <span className="font-bold text-text-primary">{profile?.year}</span>
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {semesters.map((semester) => (
            <Link
              key={semester.title}
              href={semester.href}
              className={`${semester.color} rounded-[2.5rem] p-10 shadow-sm border border-border/10 transition-transform hover:-translate-y-1 flex flex-col items-start`}
            >
              <div className="w-14 h-14 rounded-2xl border border-border/10 shadow-sm bg-white/60 dark:bg-black/10 flex items-center justify-center mb-6 shadow-sm border border-white/20">
                <BookOpen size={24} strokeWidth={2.5} className="text-accent-black" />
              </div>

              <h2 className="text-3xl font-extrabold text-accent-black mb-4">
                {semester.title}
              </h2>

              <p className="text-sm font-medium text-accent-black/80 mb-10 leading-relaxed flex-1">
                {semester.description}
              </p>

              <div className="bg-white/60 dark:bg-black/10 border border-white/20 px-6 py-3 rounded-2xl border border-border/10 shadow-sm text-accent-black font-bold text-sm flex items-center gap-2">
                Open <ArrowRight size={16} strokeWidth={2.5} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
