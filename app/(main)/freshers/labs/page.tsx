import Link from "next/link";

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-bg text-text-primary">
      {/* Hero */}
      <section className="border-b border-border/10 bg-emerald-600 text-bg">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Link
            href="/freshers"
            className="inline-block rounded-xl border border-border/10 bg-white px-5 py-2 font-bold text-text-secondary shadow-sm"
          >
            ← Back to Freshers
          </Link>

          <p className="mt-8 inline-block rounded-full border border-border/10 bg-surface-yellow/40 px-4 py-2 font-bold text-text-secondary">
            CHAPTER 06
          </p>

          <h1 className="mt-6 text-5xl font-extrabold md:text-6xl">
            Labs Overview
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-emerald-100">
            Understand how engineering labs work, what to carry and how to
            perform confidently in practical sessions.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        {/* Introduction */}
        <div className="rounded-[2.5rem] border border-border/10 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-4xl font-extrabold">🔬 What Are Labs?</h2>

          <p className="mt-6 text-lg leading-9 text-text-primary">
            Labs are where engineering becomes practical.
          </p>

          <p className="mt-4 text-lg leading-9 text-text-primary">
            Instead of only learning theory in the classroom, you will perform
            experiments, write programs, build circuits and solve real
            problems.
          </p>

          <div className="mt-8 rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-surface-yellow/40 p-7 text-center">
            <p className="text-2xl font-extrabold">
              Labs are where you learn by doing!
            </p>
          </div>
        </div>

        {/* Number of Labs */}
        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-blue-300 p-8 shadow-sm md:p-10">
          <h3 className="text-4xl font-extrabold">
            📊 How Many Labs Will You Have?
          </h3>

          <p className="mt-6 text-lg leading-9">
            In most semesters at BVRIT, you will generally have:
          </p>

          <div className="mt-8 rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-8 text-center">
            <p className="text-6xl font-extrabold">4–5</p>
            <p className="mt-3 text-xl font-bold">
              Labs, depending on your branch and semester
            </p>
          </div>

          <p className="mt-8 text-lg leading-9">
            Each lab has practical sessions where you perform experiments or
            complete programming tasks under faculty supervision.
          </p>
        </div>

        {/* Common Labs */}
        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-surface-yellow/40 p-8 shadow-sm md:p-10">
          <h3 className="text-4xl font-extrabold">
            🧪 Common First-Year Labs
          </h3>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Programming for Problem Solving Lab",
              "Python Programming Lab",
              "Data Structures Lab",
              "Basic Electrical Engineering Lab",
              "Engineering Chemistry Lab",
              "Advanced Engineering Physics Lab",
              "Engineering Workshop Lab",
              "IT Workshop Lab",
              "English Language Lab",
            ].map((lab) => (
              <div
                key={lab}
                className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-5"
              >
                <p className="font-extrabold">{lab}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-black p-6 text-bg">
            <p className="text-lg font-bold">
              The exact labs may vary depending on your branch and academic
              curriculum.
            </p>
          </div>
        </div>

        {/* Lab Process */}
        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-surface-mint/40 p-8 shadow-sm md:p-10">
          <h3 className="text-4xl font-extrabold">
            ⚙️ What Happens in a Lab?
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <h4 className="text-xl font-extrabold">
                1. Perform the Task
              </h4>
              <p className="mt-3 text-lg leading-8">
                Perform the assigned experiment or programming task.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <h4 className="text-xl font-extrabold">
                2. Record Results
              </h4>
              <p className="mt-3 text-lg leading-8">
                Write down your observations, results or program outputs.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <h4 className="text-xl font-extrabold">
                3. Faculty Verification
              </h4>
              <p className="mt-3 text-lg leading-8">
                Get your completed work verified by the faculty.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <h4 className="text-xl font-extrabold">
                4. Complete the Record
              </h4>
              <p className="mt-3 text-lg leading-8">
                Write and complete the experiment in your lab record.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6 md:col-span-2">
              <h4 className="text-xl font-extrabold">
                5. Answer Viva Questions
              </h4>
              <p className="mt-3 text-lg leading-8">
                Answer questions related to the experiment, program or concept.
              </p>
            </div>
          </div>
        </div>

        {/* Dress Code */}
        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-surface-peach/40 p-8 shadow-sm md:p-10">
          <h3 className="text-4xl font-extrabold">🥼 Lab Dress Code</h3>

          <p className="mt-6 text-lg leading-9">
            Some labs require a lab apron for safety and discipline.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-7">
              <h4 className="text-2xl font-extrabold">White Apron</h4>
              <p className="mt-3 text-lg leading-8">
                Required for certain labs such as Engineering Chemistry.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-blue-500 p-7 text-bg">
              <h4 className="text-2xl font-extrabold">Blue Apron</h4>
              <p className="mt-3 text-lg leading-8">
                Required for workshop or other specified laboratory sessions.
              </p>
            </div>
          </div>

          <p className="mt-8 text-lg font-extrabold">
            Always check with your faculty and carry the required apron.
          </p>
        </div>

        {/* What to Bring */}
        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-orange-300 p-8 shadow-sm md:p-10">
          <h3 className="text-4xl font-extrabold">🎒 What Should You Bring?</h3>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Lab Record",
              "Pen and Required Stationery",
              "College ID Card",
              "Required Apron",
              "Materials Instructed by Faculty",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-5"
              >
                <p className="text-lg font-extrabold">✅ {item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mistakes and Tips */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2.5rem] border border-border/10 bg-red-300 p-8 shadow-sm">
            <h3 className="text-3xl font-extrabold">
              ❌ Common Mistakes
            </h3>

            <ul className="mt-6 space-y-4 text-lg font-semibold">
              <li>• Forgetting your lab record</li>
              <li>• Coming without the required apron</li>
              <li>• Copying experiments without understanding</li>
              <li>• Missing lab submissions</li>
              <li>• Not preparing for the lab viva</li>
            </ul>
          </div>

          <div className="rounded-[2.5rem] border border-border/10 bg-surface-mint/40 p-8 shadow-sm">
            <h3 className="text-3xl font-extrabold">💡 Pro Tips</h3>

            <ul className="mt-6 space-y-4 text-lg font-semibold">
              <li>✅ Complete record work on time</li>
              <li>✅ Revise the experiment before the lab</li>
              <li>✅ Ask questions when you are confused</li>
              <li>✅ Save programming codes for revision</li>
              <li>✅ Take practical sessions seriously</li>
            </ul>
          </div>
        </div>

        {/* Lab Pack */}
        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-emerald-600 p-8 text-bg shadow-sm md:p-10">
          <p className="inline-block rounded-full border border-border/10 bg-surface-yellow/40 px-4 py-2 font-extrabold text-text-secondary">
            COMING SOON
          </p>

          <h3 className="mt-6 text-4xl font-extrabold">
            🚀 BVRIT Lab Pack
          </h3>

          <p className="mt-6 text-lg leading-9">
            Preparing for labs will soon become much easier.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Lab Manuals",
              "Record Writing Guides",
              "Programming Codes",
              "Viva Questions & Answers",
              "Previous Lab Experiments",
              "Quick Revision Notes",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-5 text-text-secondary"
              >
                <p className="font-extrabold">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xl font-extrabold">
            Everything you need to perform confidently in your lab exams—all
            in one place.
          </p>
        </div>

        {/* Final Tip */}
        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-black p-8 text-bg shadow-[8px_8px_0_#059669] md:p-10">
          <h3 className="text-4xl font-extrabold">🎯 Final Tip</h3>

          <p className="mt-6 text-lg leading-9">
            Labs are not just about getting attendance or completing records.
          </p>

          <p className="mt-4 text-lg leading-9">
            They are your opportunity to apply classroom concepts, gain
            practical experience and build confidence.
          </p>

          <p className="mt-6 text-xl font-extrabold">
            Learn, experiment and do not be afraid to make mistakes—that is how
            real engineers grow!
          </p>
        </div>
      </section>
    </main>
  );
}
