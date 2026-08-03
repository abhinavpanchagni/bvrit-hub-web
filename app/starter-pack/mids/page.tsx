import Link from "next/link";

export default function MidExamsPage() {
  return (
    <main className="min-h-screen bg-bg text-text-primary">
      {/* Hero */}
      <section className="border-b border-border/10 bg-orange-500 text-bg">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Link
            href="/starter-pack"
            className="inline-block rounded-xl border border-border/10 bg-white px-5 py-2 font-bold text-text-secondary shadow-sm"
          >
            ← Back to Freshers
          </Link>

          <p className="mt-8 inline-block rounded-full border border-border/10 bg-surface-yellow/40 px-4 py-2 font-bold text-text-secondary">
            CHAPTER 04
          </p>

          <h1 className="mt-6 text-5xl font-extrabold md:text-6xl">
            Mid Examination Guide
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-orange-100">
            Everything you need to know about Mid-1, Mid-2, marks,
            preparation and how to score well.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        {/* Introduction */}
        <div className="rounded-[2.5rem] border border-border/10 bg-white p-10 shadow-sm">
          <h2 className="text-4xl font-extrabold">
            📖 What Are Mid Exams?
          </h2>

          <p className="mt-6 text-lg leading-9 text-text-primary">
            At BVRIT, every semester has two Mid Examinations:
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-surface-yellow/40 p-8 text-center">
              <h3 className="text-4xl font-extrabold">Mid-1</h3>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-surface-mint/40 p-8 text-center">
              <h3 className="text-4xl font-extrabold">Mid-2</h3>
            </div>

          </div>

          <p className="mt-8 text-lg leading-9 text-text-primary">
            These exams help you prepare gradually instead of studying
            everything at the end of the semester.
          </p>
        </div>

        {/* Marks Pattern */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div className="rounded-[2.5rem] border border-border/10 bg-blue-300 p-8 shadow-sm">

            <h3 className="text-3xl font-extrabold">
              📝 Marks Pattern
            </h3>

            <p className="mt-6 text-lg leading-8">
              Each Mid Examination is conducted for:
            </p>

            <div className="mt-6 rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-8 text-center">
              <p className="text-6xl font-extrabold">30</p>
              <p className="text-xl font-bold">Marks</p>
            </div>

            <p className="mt-6 text-lg leading-8">
              At the end of the semester, Mid-1 and Mid-2 marks are
              averaged according to the college evaluation process.
            </p>

          </div>

          <div className="rounded-[2.5rem] border border-border/10 bg-surface-peach/40 p-8 shadow-sm">

            <h3 className="text-3xl font-extrabold">
              📊 Example Calculation
            </h3>

            <div className="mt-6 space-y-5">

              <div className="rounded-xl border border-border/10 bg-white p-5 font-bold">
                Mid-1 = 24 / 30
              </div>

              <div className="rounded-xl border border-border/10 bg-white p-5 font-bold">
                Mid-2 = 28 / 30
              </div>

              <div className="rounded-xl border border-border/10 bg-yellow-200 p-5 font-extrabold">
                Average = (24 + 28) ÷ 2 = 26 / 30
              </div>

            </div>

          </div>

        </div>

        {/* Importance */}
        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-surface-mint/40 p-10 shadow-sm">

          <h3 className="text-4xl font-extrabold">
            ⭐ Why Are Mid Exams Important?
          </h3>

          <p className="mt-6 text-lg leading-9">
            Many freshers think,
          </p>

          <div className="mt-6 rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
            <p className="text-2xl font-extrabold">
              "They're just internals. I'll study for the semester exam."
            </p>
          </div>

          <p className="mt-6 text-xl font-extrabold text-red-700">
            ❌ That's a mistake.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-border/10 shadow-sm bg-white p-6 border border-border/10">
              <h4 className="text-xl font-extrabold">📚 Better Understanding</h4>
              <p className="mt-3">
                Understand subjects better.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm bg-white p-6 border border-border/10">
              <h4 className="text-xl font-extrabold">🎯 Find Weak Areas</h4>
              <p className="mt-3">
                Identify weak topics early.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm bg-white p-6 border border-border/10">
              <h4 className="text-xl font-extrabold">💪 Build Confidence</h4>
              <p className="mt-3">
                Prepare yourself for semester exams.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm bg-white p-6 border border-border/10">
              <h4 className="text-xl font-extrabold">😌 Less Stress</h4>
              <p className="mt-3">
                Reduce last-minute exam pressure.
              </p>
            </div>

          </div>

          <p className="mt-8 text-lg leading-9">
            Preparing well for Mid Exams also makes Semester Exam
            preparation much easier.
          </p>

        </div>

                {/* Preparation Tips */}
        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-surface-yellow/40 p-8 shadow-sm md:p-10">
          <h3 className="text-4xl font-extrabold">
            📚 How to Prepare for Mids
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <h4 className="text-xl font-extrabold">Revise Regularly</h4>
              <p className="mt-3 text-lg leading-8">
                Revise your class notes regularly instead of waiting until the
                examination.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <h4 className="text-xl font-extrabold">Practice Questions</h4>
              <p className="mt-3 text-lg leading-8">
                Practice previous questions to understand important topics and
                question patterns.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <h4 className="text-xl font-extrabold">Follow Class Examples</h4>
              <p className="mt-3 text-lg leading-8">
                Do not skip important examples explained by your faculty in
                class.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <h4 className="text-xl font-extrabold">Start Early</h4>
              <p className="mt-3 text-lg leading-8">
                Start preparing a few days before the examination instead of
                studying only on the previous night.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6 md:col-span-2">
              <h4 className="text-xl font-extrabold">Clear Your Doubts</h4>
              <p className="mt-3 text-lg leading-8">
                Ask your faculty or classmates and clear doubts before the
                examination.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-black p-6 text-bg">
            <p className="text-xl font-extrabold">
              Small, consistent preparation works much better than last-minute
              cramming.
            </p>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-red-300 p-8 shadow-sm md:p-10">
          <h3 className="text-4xl font-extrabold">❌ Common Mistakes</h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <h4 className="text-xl font-extrabold">Ignoring Mid-1</h4>
              <p className="mt-3 text-lg leading-8">
                Do not ignore Mid-1 and depend completely on Mid-2.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <h4 className="text-xl font-extrabold">Studying for One Day</h4>
              <p className="mt-3 text-lg leading-8">
                Studying only one day before the examination creates
                unnecessary pressure.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <h4 className="text-xl font-extrabold">
                Memorising Without Understanding
              </h4>
              <p className="mt-3 text-lg leading-8">
                Understand the concepts instead of only memorising answers.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <h4 className="text-xl font-extrabold">Skipping Practice</h4>
              <p className="mt-3 text-lg leading-8">
                Do not avoid numerical problems or programming questions.
              </p>
            </div>
          </div>
        </div>

        {/* Mid Pack */}
        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-accent-black text-bg p-8 text-bg shadow-sm md:p-10">
          <p className="inline-block rounded-full border border-border/10 bg-surface-yellow/40 px-4 py-2 font-extrabold text-text-secondary">
            COMING SOON
          </p>

          <h3 className="mt-6 text-4xl font-extrabold">
            🚀 BVRIT Hub Mid Pack
          </h3>

          <p className="mt-6 text-lg leading-9">
            Preparing for mid examinations is about to become much easier.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-5 text-text-secondary">
              <p className="font-extrabold">
                Previous Year Mid Question Papers
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-5 text-text-secondary">
              <p className="font-extrabold">Important Questions</p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-5 text-text-secondary">
              <p className="font-extrabold">Frequently Asked Topics</p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-5 text-text-secondary">
              <p className="font-extrabold">Unit-wise Quick Notes</p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-5 text-text-secondary">
              <p className="font-extrabold">
                Last-Minute Revision Material
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-5 text-text-secondary">
              <p className="font-extrabold">Expected Questions</p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-5 text-text-secondary md:col-span-2 lg:col-span-3">
              <p className="text-center font-extrabold">
                Exam Preparation Tips
              </p>
            </div>
          </div>

          <p className="mt-8 text-xl font-extrabold">
            Everything you need for your mid examinations—all in one place.
          </p>
        </div>

        {/* Final Tip */}
        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-black p-8 text-bg shadow-[8px_8px_0_#f97316] md:p-10">
          <h3 className="text-4xl font-extrabold">🎯 Final Tip</h3>

          <p className="mt-6 text-lg leading-9">
            Do not treat mid examinations as just another test.
          </p>

          <p className="mt-4 text-lg leading-9">
            A good performance in Mid-1 and Mid-2 builds confidence,
            strengthens your concepts and makes semester examinations much less
            stressful.
          </p>

          <p className="mt-6 text-xl font-extrabold">
            Study consistently, stay confident and give your best. Good luck!
          </p>
        </div>

      </section>
    </main>
  );
}
