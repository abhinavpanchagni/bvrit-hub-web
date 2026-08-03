import Link from "next/link";

export default function SgpaPage() {
  return (
    <main className="min-h-screen bg-bg text-text-primary">
      {/* Hero */}
      <section className="border-b border-border/10 bg-purple-600 text-bg">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Link
            href="/starter-pack"
            className="inline-block rounded-xl border border-border/10 bg-white px-5 py-2 font-bold text-text-secondary shadow-sm"
          >
            ← Back to Freshers
          </Link>

          <p className="mt-8 inline-block rounded-full border border-border/10 bg-surface-yellow/40 px-4 py-2 font-bold text-text-secondary">
            CHAPTER 02
          </p>

          <h1 className="mt-6 text-5xl font-extrabold md:text-6xl">
            SGPA & CGPA Explained
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-purple-100">
            Understand your semester score, overall academic performance and
            why both matter during engineering.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2.5rem] border border-border/10 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-4xl font-extrabold">
            Everyone Talks About SGPA & CGPA... 🤔
          </h2>

          <p className="mt-6 text-lg leading-9 text-text-primary">
            As a fresher, you will hear students asking questions like:
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-yellow-200 p-6">
              <p className="text-xl font-extrabold">
                “What&apos;s your SGPA?”
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-green-200 p-6">
              <p className="text-xl font-extrabold">
                “Bro, I need to improve my CGPA!”
              </p>
            </div>
          </div>

          <p className="mt-6 text-lg leading-9 text-text-primary">
            It may sound confusing at first, but the difference is actually
            very simple.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2.5rem] border border-border/10 bg-surface-yellow/40 p-8 shadow-sm">
            <h3 className="text-3xl font-extrabold">📘 What is SGPA?</h3>

            <p className="mt-6 text-lg leading-9">
              SGPA stands for Semester Grade Point Average.
            </p>

            <p className="mt-4 text-lg leading-9">
              It represents your academic performance in one semester.
            </p>

            <div className="mt-6 rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <p className="text-center text-2xl font-extrabold">
                SGPA = One Semester
              </p>
            </div>

            <div className="mt-6 space-y-3 text-lg font-semibold">
              <p>Semester 1 → 8.65 SGPA</p>
              <p>Semester 2 → 9.12 SGPA</p>
              <p>Semester 3 → 8.84 SGPA</p>
            </div>

            <p className="mt-6 text-lg leading-8">
              Every semester has its own separate SGPA.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-border/10 bg-surface-mint/40 p-8 shadow-sm">
            <h3 className="text-3xl font-extrabold">🎓 What is CGPA?</h3>

            <p className="mt-6 text-lg leading-9">
              CGPA stands for Cumulative Grade Point Average.
            </p>

            <p className="mt-4 text-lg leading-9">
              It represents your overall academic performance across all the
              semesters you have completed.
            </p>

            <div className="mt-6 rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <p className="text-center text-2xl font-extrabold">
                CGPA = Entire Engineering Journey
              </p>
            </div>

            <div className="mt-6 space-y-3 text-lg font-semibold">
              <p>After Semester 1 → 8.65 CGPA</p>
              <p>After Semester 2 → 8.89 CGPA</p>
              <p>After Semester 3 → 8.87 CGPA</p>
            </div>

            <p className="mt-6 text-lg leading-8">
              Your CGPA keeps changing as more semesters are completed.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-surface-peach/40 p-8 shadow-sm md:p-10">
          <h3 className="text-3xl font-extrabold">💡 Easy Way to Remember</h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6 text-center">
              <p className="text-2xl font-extrabold">One Match Score</p>
              <p className="mt-3 text-xl font-bold">= SGPA</p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6 text-center">
              <p className="text-2xl font-extrabold">Tournament Average</p>
              <p className="mt-3 text-xl font-bold">= CGPA</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2.5rem] border border-border/10 bg-blue-300 p-8 shadow-sm">
            <h3 className="text-3xl font-extrabold">
              🧮 How is SGPA Calculated?
            </h3>

            <p className="mt-6 text-lg leading-9">
              Every subject has credits and a grade.
            </p>

            <p className="mt-4 text-lg leading-9">
              The university multiplies the grade points by the credits of each
              subject.
            </p>

            <p className="mt-4 text-lg leading-9">
              After adding everything, the total is divided by the total number
              of credits.
            </p>

            <div className="mt-6 rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <p className="text-lg font-extrabold">
                You do not need to calculate it manually every time. Colleges
                usually provide it in your results.
              </p>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-border/10 bg-orange-300 p-8 shadow-sm">
            <h3 className="text-3xl font-extrabold">
              📊 How is CGPA Calculated?
            </h3>

            <p className="mt-6 text-lg leading-9">
              CGPA is calculated using the results of all completed semesters.
            </p>

            <p className="mt-4 text-lg leading-9">
              It shows your overall academic performance throughout your
              degree.
            </p>

            <p className="mt-4 text-lg leading-9">
              Every new semester can increase or decrease your CGPA depending
              on your performance.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-white p-8 shadow-sm md:p-10">
          <h3 className="text-4xl font-extrabold">
            Which One is More Important? ⚖️
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-yellow-200 p-6">
              <h4 className="text-xl font-extrabold">SGPA</h4>
              <p className="mt-3 text-lg leading-8">
                Shows how you performed in one semester.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-green-200 p-6">
              <h4 className="text-xl font-extrabold">CGPA</h4>
              <p className="mt-3 text-lg leading-8">
                Shows your overall consistency throughout engineering.
              </p>
            </div>
          </div>

          <p className="mt-7 text-xl font-extrabold">
            Both SGPA and CGPA are important.
          </p>
        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-purple-600 p-8 text-bg shadow-sm md:p-10">
          <h3 className="text-4xl font-extrabold">🚀 Why Does CGPA Matter?</h3>

          <p className="mt-6 text-lg leading-9">
            A good CGPA can help when applying for:
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-5 text-center text-text-secondary">
              <p className="font-extrabold">Placements</p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-5 text-center text-text-secondary">
              <p className="font-extrabold">Higher Studies</p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-5 text-center text-text-secondary">
              <p className="font-extrabold">MS Abroad</p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-5 text-center text-text-secondary">
              <p className="font-extrabold">Scholarships</p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-5 text-center text-text-secondary">
              <p className="font-extrabold">Internships</p>
            </div>
          </div>

          <p className="mt-8 text-lg leading-9">
            Many companies and universities use CGPA as one of their
            eligibility criteria.
          </p>
        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-red-300 p-8 shadow-sm md:p-10">
          <h3 className="text-4xl font-extrabold">❌ Common Myths</h3>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <h4 className="text-xl font-extrabold">
                “One bad semester ruins my career.”
              </h4>

              <p className="mt-3 text-lg leading-8">
                No. You still have many semesters to improve your CGPA.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <h4 className="text-xl font-extrabold">
                “Only CGPA matters.”
              </h4>

              <p className="mt-3 text-lg leading-8">
                Not true. Skills, projects, communication, internships and
                problem-solving also play an important role.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <h4 className="text-xl font-extrabold">
                “A 10 CGPA guarantees placement.”
              </h4>

              <p className="mt-3 text-lg leading-8">
                No. A good CGPA helps, but companies also evaluate technical
                skills and interview performance.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-surface-mint/40 p-8 shadow-sm md:p-10">
          <h3 className="text-4xl font-extrabold">
            ✅ Tips to Maintain a Good CGPA
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <p className="text-lg font-extrabold">
                Attend classes regularly.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <p className="text-lg font-extrabold">
                Do not ignore internal examinations.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <p className="text-lg font-extrabold">
                Revise consistently instead of studying only before exams.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <p className="text-lg font-extrabold">
                Clear your doubts early.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6 md:col-span-2">
              <p className="text-lg font-extrabold">
                Balance academics with skill development.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-black p-8 text-bg shadow-[8px_8px_0_#a855f7] md:p-10">
          <h3 className="text-4xl font-extrabold">🎯 Final Takeaway</h3>

          <p className="mt-6 text-lg leading-9">
            SGPA tells you how you performed this semester.
          </p>

          <p className="mt-4 text-lg leading-9">
            CGPA tells the story of your entire engineering journey.
          </p>

          <p className="mt-5 text-xl font-extrabold">
            Do not stress over one result. Focus on learning consistently,
            improving every semester and building strong skills alongside good
            academics.
          </p>
        </div>
      </section>
    </main>
  );
}
