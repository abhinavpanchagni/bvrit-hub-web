import Link from "next/link";

export default function SemesterExamsPage() {
  return (
    <main className="min-h-screen bg-bg text-text-primary">
      {/* Hero */}
      <section className="border-b border-border/10 bg-indigo-600 text-bg">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Link
            href="/freshers"
            className="inline-block rounded-xl border border-border/10 bg-white px-5 py-2 font-bold text-text-secondary shadow-sm"
          >
            ← Back to Freshers
          </Link>

          <p className="mt-8 inline-block rounded-full border border-border/10 bg-surface-yellow/40 px-4 py-2 font-bold text-text-secondary">
            CHAPTER 05
          </p>

          <h1 className="mt-6 text-5xl font-extrabold md:text-6xl">
            Semester Examination Guide
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-indigo-100">
            Understand the marks pattern, passing criteria and smart
            preparation strategy for your semester-end examinations.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        {/* Introduction */}
        <div className="rounded-[2.5rem] border border-border/10 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-4xl font-extrabold">
            🎓 What Are Semester Exams?
          </h2>

          <p className="mt-6 text-lg leading-9 text-text-primary">
            Semester Exams, also called End Semester Examinations, are the final
            examinations conducted at the end of every semester.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-surface-yellow/40 p-6 text-center">
              <p className="text-4xl font-extrabold">2</p>
              <p className="mt-2 text-lg font-bold">
                Semesters Every Academic Year
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-surface-mint/40 p-6 text-center">
              <p className="text-4xl font-extrabold">1</p>
              <p className="mt-2 text-lg font-bold">
                Semester Exam After Each Semester
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-surface-peach/40 p-6 text-center">
              <p className="text-4xl font-extrabold">8</p>
              <p className="mt-2 text-lg font-bold">
                Semester Exams in Four Years
              </p>
            </div>
          </div>
        </div>

        {/* Marks Pattern */}
        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-blue-300 p-8 shadow-sm md:p-10">
          <h3 className="text-4xl font-extrabold">
            📊 How Are Marks Calculated?
          </h3>

          <p className="mt-6 text-lg leading-9">
            Your final marks for each subject are generally divided as follows:
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-7 text-center">
              <p className="text-5xl font-extrabold">60</p>
              <p className="mt-2 text-lg font-bold">Semester Exam</p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-7 text-center">
              <p className="text-5xl font-extrabold">30</p>
              <p className="mt-2 text-lg font-bold">Mid-1 & Mid-2 Average</p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-7 text-center">
              <p className="text-5xl font-extrabold">10</p>
              <p className="mt-2 text-lg font-bold">Assignments</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-surface-yellow/40 p-6 text-center">
            <p className="text-3xl font-extrabold">Total = 100 Marks</p>
          </div>
        </div>

        {/* Example */}
        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-surface-peach/40 p-8 shadow-sm md:p-10">
          <h3 className="text-4xl font-extrabold">🧮 Example Calculation</h3>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <p className="font-extrabold">Semester Exam</p>
              <p className="mt-2 text-2xl font-extrabold">48 / 60</p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <p className="font-extrabold">Mid Average</p>
              <p className="mt-2 text-2xl font-extrabold">24 / 30</p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <p className="font-extrabold">Assignments</p>
              <p className="mt-2 text-2xl font-extrabold">9 / 10</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-7 text-center">
            <p className="text-3xl font-extrabold">
              Final Score = 81 / 100
            </p>
          </div>
        </div>

        {/* Passing Criteria */}
        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-surface-mint/40 p-8 shadow-sm md:p-10">
          <h3 className="text-4xl font-extrabold">✅ Passing Criteria</h3>

          <p className="mt-6 text-lg leading-9">
            To pass a subject, you generally need:
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-7 text-center">
              <p className="text-4xl font-extrabold">14 / 30</p>
              <p className="mt-3 text-lg font-bold">
                Mid Examination Average or Above
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-7 text-center">
              <p className="text-4xl font-extrabold">30 / 60</p>
              <p className="mt-3 text-lg font-bold">
                Semester Examination or Above
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-black p-6 text-bg">
            <p className="text-xl font-extrabold">
              Meeting both requirements is important, so do not depend only on
              one component.
            </p>
          </div>
        </div>

        {/* Importance */}
        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-orange-300 p-8 shadow-sm md:p-10">
          <h3 className="text-4xl font-extrabold">
            ⭐ Why Are Semester Exams Important?
          </h3>

          <p className="mt-6 text-lg leading-9">
            The Semester Examination carries the highest weightage of 60 marks,
            making it the most important examination of the semester.
          </p>

          <div className="mt-8 rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-7">
            <p className="text-xl font-extrabold">
              A good semester examination score can significantly improve your
              overall result.
            </p>
          </div>
        </div>

        {/* Preparation */}
        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-surface-yellow/40 p-8 shadow-sm md:p-10">
          <h3 className="text-4xl font-extrabold">📚 How to Prepare</h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <h4 className="text-xl font-extrabold">Revise Every Unit</h4>
              <p className="mt-3 text-lg leading-8">
                Do not leave complete units for the last moment.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <h4 className="text-xl font-extrabold">
                Solve Previous Papers
              </h4>
              <p className="mt-3 text-lg leading-8">
                Practice Previous Year Question Papers to understand repeated
                questions and patterns.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <h4 className="text-xl font-extrabold">
                Focus on Important Concepts
              </h4>
              <p className="mt-3 text-lg leading-8">
                Give special attention to important concepts and frequently
                repeated questions.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <h4 className="text-xl font-extrabold">
                Practice Problems
              </h4>
              <p className="mt-3 text-lg leading-8">
                Practice numerical and programming problems instead of only
                reading them.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <h4 className="text-xl font-extrabold">
                Prepare Short Notes
              </h4>
              <p className="mt-3 text-lg leading-8">
                Create short revision notes for quick preparation before the
                examination.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <h4 className="text-xl font-extrabold">Start Early</h4>
              <p className="mt-3 text-lg leading-8">
                Start preparing early instead of waiting for study holidays.
              </p>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-red-300 p-8 shadow-sm md:p-10">
          <h3 className="text-4xl font-extrabold">❌ Common Mistakes</h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <p className="text-lg font-extrabold">
                Ignoring Mid Examinations
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <p className="text-lg font-extrabold">
                Leaving Entire Units
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <p className="text-lg font-extrabold">
                Depending Only on Last-Minute Preparation
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <p className="text-lg font-extrabold">
                Not Solving Previous Papers
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6 md:col-span-2">
              <p className="text-lg font-extrabold">
                Memorising Without Understanding Concepts
              </p>
            </div>
          </div>
        </div>

        {/* SE Pack */}
        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-indigo-600 p-8 text-bg shadow-sm md:p-10">
          <p className="inline-block rounded-full border border-border/10 bg-surface-yellow/40 px-4 py-2 font-extrabold text-text-secondary">
            COMING SOON
          </p>

          <h3 className="mt-6 text-4xl font-extrabold">
            🚀 BVRIT Hub SE Pack
          </h3>

          <p className="mt-6 text-lg leading-9">
            Preparing for semester examinations is about to become much easier.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-5 text-text-secondary">
              <p className="font-extrabold">
                Previous Year Semester Papers
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-5 text-text-secondary">
              <p className="font-extrabold">
                Most Important Questions
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-5 text-text-secondary">
              <p className="font-extrabold">Unit-wise Notes</p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-5 text-text-secondary">
              <p className="font-extrabold">
                Last-Minute Revision Notes
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-5 text-text-secondary">
              <p className="font-extrabold">
                Frequently Asked Questions
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-5 text-text-secondary">
              <p className="font-extrabold">Expected Questions</p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-5 text-text-secondary md:col-span-2 lg:col-span-3">
              <p className="text-center font-extrabold">
                Smart Preparation Strategy
              </p>
            </div>
          </div>

          <p className="mt-8 text-xl font-extrabold">
            Everything you need to prepare efficiently—all in one place.
          </p>
        </div>

        {/* Final Tip */}
        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-black p-8 text-bg shadow-[8px_8px_0_#4f46e5] md:p-10">
          <h3 className="text-4xl font-extrabold">🎯 Final Tip</h3>

          <p className="mt-6 text-lg leading-9">
            Do not aim to just pass.
          </p>

          <p className="mt-4 text-lg leading-9">
            Aim to understand the subject, score well in your mids, complete
            your assignments on time and give your best in the semester
            examination.
          </p>

          <p className="mt-6 text-xl font-extrabold">
            A little consistency throughout the semester is much easier than
            trying to study everything at the last minute. All the best!
          </p>
        </div>
      </section>
    </main>
  );
}
