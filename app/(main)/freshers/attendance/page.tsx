import Link from "next/link";

export default function AttendancePage() {
  return (
    <main className="min-h-screen bg-bg text-text-primary">
      {/* Hero */}
      <section className="border-b border-border/10 bg-red-500 text-bg">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Link
            href="/freshers"
            className="inline-block rounded-xl border border-border/10 bg-white px-5 py-2 font-bold text-text-secondary shadow-sm"
          >
            ← Back to Freshers
          </Link>

          <p className="mt-8 inline-block rounded-full border border-border/10 bg-surface-yellow/40 px-4 py-2 font-bold text-text-secondary">
            CHAPTER 03
          </p>

          <h1 className="mt-6 text-5xl font-extrabold md:text-6xl">
            Attendance Rules
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-red-100">
            Everything freshers should know about attendance, VEDIC AI and
            avoiding last-minute attendance problems.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2.5rem] border border-border/10 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-4xl font-extrabold">
            “Bro, What&apos;s My Attendance?” 😅
          </h2>

          <p className="mt-6 text-lg leading-9 text-text-primary">
            One of the most common questions in engineering!
          </p>

          <p className="mt-5 text-lg leading-9 text-text-primary">
            Attendance may not seem important at first, but you do not want to
            realise its importance only at the end of the semester.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2.5rem] border border-border/10 bg-surface-yellow/40 p-8 shadow-sm">
            <h3 className="text-3xl font-extrabold">
              🎯 How Much Attendance Do You Need?
            </h3>

            <p className="mt-6 text-lg leading-9">
              At BVRIT, students are generally expected to maintain:
            </p>

            <div className="mt-6 rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-8 text-center">
              <p className="text-6xl font-extrabold">75%</p>
              <p className="mt-2 text-lg font-bold">
                Attendance throughout the semester
              </p>
            </div>

            <p className="mt-6 text-lg font-bold">
              Think of 75% as your target, not the minimum you should aim for.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-border/10 bg-orange-300 p-8 shadow-sm">
            <h3 className="text-3xl font-extrabold">
              ⚠️ What If Attendance Drops?
            </h3>

            <p className="mt-6 text-lg leading-9">
              Many students say that 65% or above may still be manageable in
              some situations, but you should never rely on that.
            </p>

            <p className="mt-5 text-lg leading-9">
              College policies can vary, and decisions depend on the
              college&apos;s rules.
            </p>

            <div className="mt-6 rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <p className="text-xl font-extrabold">
                The safest approach is to always maintain 75% or above.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-accent-black text-bg p-8 text-bg shadow-sm md:p-10">
          <h3 className="text-4xl font-extrabold">
            📱 How Is Attendance Taken?
          </h3>

          <p className="mt-6 text-lg leading-9">
            Attendance for every class is recorded using the VEDIC AI app.
          </p>

          <p className="mt-5 text-lg leading-9">
            Your attendance is updated digitally for every lecture and lab.
          </p>

          <div className="mt-8 rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6 text-text-secondary">
            <p className="text-xl font-extrabold">
              Do not assume you will be marked present if you are not in class.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2.5rem] border border-border/10 bg-surface-mint/40 p-8 shadow-sm">
            <h3 className="text-3xl font-extrabold">
              ✅ Why Attendance Matters
            </h3>

            <ul className="mt-6 space-y-4 text-lg font-semibold">
              <li>📚 Stay updated with classes</li>
              <li>🧠 Understand concepts better</li>
              <li>📝 Perform well in internal examinations</li>
              <li>🎓 Prepare better for semester examinations</li>
              <li>😌 Avoid unnecessary stress at semester end</li>
            </ul>

            <p className="mt-6 text-lg leading-8">
              Catching up on weeks of missed classes is much harder than
              attending them regularly.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-border/10 bg-surface-peach/40 p-8 shadow-sm">
            <h3 className="text-3xl font-extrabold">
              💡 Smart Attendance Tips
            </h3>

            <ul className="mt-6 space-y-4 text-lg font-semibold">
              <li>✅ Aim for 80–85% instead of staying close to 75%</li>
              <li>✅ Plan leaves in advance whenever possible</li>
              <li>✅ Inform faculty when you are genuinely unwell</li>
              <li>✅ Check attendance regularly in VEDIC AI</li>
              <li>✅ Do not skip classes just because friends are skipping</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-white p-8 shadow-sm md:p-10">
          <h3 className="text-4xl font-extrabold">
            ❓ Frequently Asked Questions
          </h3>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-yellow-200 p-6">
              <h4 className="text-xl font-extrabold">
                Can I survive with exactly 75%?
              </h4>

              <p className="mt-3 text-lg leading-8">
                Yes, but it is better to stay above it. A small mistake or
                absence can quickly bring your percentage down.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-green-200 p-6">
              <h4 className="text-xl font-extrabold">
                Can I skip classes because my attendance is high?
              </h4>

              <p className="mt-3 text-lg leading-8">
                Think twice. Attendance can drop faster than you expect.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-blue-200 p-6">
              <h4 className="text-xl font-extrabold">
                Where can I check my attendance?
              </h4>

              <p className="mt-3 text-lg leading-8">
                You can check your attendance in the VEDIC AI app.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-black p-8 text-bg shadow-[8px_8px_0_#ef4444] md:p-10">
          <h3 className="text-4xl font-extrabold">
            🚀 Final Tip
          </h3>

          <p className="mt-6 text-lg leading-9">
            Attendance is not just about meeting a number. Every class you
            attend is another opportunity to learn something new, ask
            questions and stay ahead.
          </p>

          <p className="mt-5 text-xl font-extrabold">
            Aim for 75% at minimum, but target 80–85% whenever possible.
          </p>
        </div>
      </section>
    </main>
  );
}
