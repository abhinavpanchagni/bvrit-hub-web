import Link from "next/link";

export default function VedicPage() {
  return (
    <main className="min-h-screen bg-bg text-text-primary">
      {/* Hero */}
      <section className="border-b border-border/10 bg-cyan-600 text-bg">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Link
            href="/starter-pack"
            className="inline-block rounded-xl border border-border/10 bg-white px-5 py-2 font-bold text-text-secondary shadow-sm"
          >
            ← Back to Freshers
          </Link>

          <p className="mt-8 inline-block rounded-full border border-border/10 bg-surface-yellow/40 px-4 py-2 font-bold text-text-secondary">
            CHAPTER 07
          </p>

          <h1 className="mt-6 text-5xl font-extrabold md:text-6xl">
            VEDIC AI Guide
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-cyan-100">
            Learn how to use BVRIT's academic platform for attendance,
            assignments, quizzes and classroom activities.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="rounded-[2.5rem] border border-border/10 bg-white p-10 shadow-sm">
          <h2 className="text-4xl font-extrabold">
            📱 What is VEDIC AI?
          </h2>

          <p className="mt-6 text-lg leading-9 text-text-primary">
            VEDIC AI is BVRIT's digital learning platform used by students and
            faculty for various academic activities.
          </p>

          <p className="mt-5 text-lg leading-9 text-text-primary">
            You will be using it almost every day, so getting familiar with it
            early will make college life much easier.
          </p>
        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-surface-yellow/40 p-8 shadow-sm">

          <h3 className="text-4xl font-extrabold">
            💻 What is VEDIC AI Used For?
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <h4 className="text-xl font-extrabold">📚 Attendance</h4>
              <p className="mt-3">
                Attendance is recorded for every class.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <h4 className="text-xl font-extrabold">📝 Assignments</h4>
              <p className="mt-3">
                Faculty can assign and collect assignments.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <h4 className="text-xl font-extrabold">❓ Live Quizzes</h4>
              <p className="mt-3">
                Teachers conduct quizzes during classes.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
              <h4 className="text-xl font-extrabold">🎓 Academic Activities</h4>
              <p className="mt-3">
                Subject-wise classroom activities and updates.
              </p>
            </div>

          </div>

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div className="rounded-[2.5rem] border border-border/10 bg-surface-mint/40 p-8 shadow-sm">

            <h3 className="text-3xl font-extrabold">
              ✅ Tips for Freshers
            </h3>

            <ul className="mt-6 space-y-4 text-lg font-semibold">
              <li>✔ Check VEDIC AI daily</li>
              <li>✔ Complete assignments before deadlines</li>
              <li>✔ Participate in quizzes</li>
              <li>✔ Monitor your attendance</li>
              <li>✔ Report incorrect attendance quickly</li>
            </ul>

          </div>

          <div className="rounded-[2.5rem] border border-border/10 bg-red-300 p-8 shadow-sm">

            <h3 className="text-3xl font-extrabold">
              ❌ Common Mistakes
            </h3>

            <ul className="mt-6 space-y-4 text-lg font-semibold">
              <li>✖ Ignoring assignment deadlines</li>
              <li>✖ Not checking attendance</li>
              <li>✖ Missing live quizzes</li>
              <li>✖ Waiting until the last minute</li>
            </ul>

          </div>

        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-accent-black text-bg p-10 text-bg shadow-sm">

          <h3 className="text-4xl font-extrabold">
            ❓ Frequently Asked Questions
          </h3>

          <div className="mt-8 space-y-6">

            <div className="rounded-2xl border border-border/10 shadow-sm bg-white p-6 text-text-secondary">
              <h4 className="text-xl font-extrabold">
                Is VEDIC AI compulsory?
              </h4>

              <p className="mt-3">
                Yes. Attendance, assignments and quizzes are conducted through
                VEDIC AI.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm bg-white p-6 text-text-secondary">
              <h4 className="text-xl font-extrabold">
                How often should I check it?
              </h4>

              <p className="mt-3">
                At least once every day.
              </p>
            </div>

          </div>

        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-surface-yellow/40 p-10 shadow-sm">

          <h3 className="text-4xl font-extrabold">
            🎥 Video Walkthrough
          </h3>

          <div className="mt-8 flex h-80 items-center justify-center rounded-2xl border border-border/10 shadow-sm border-4 border-dashed border-black bg-white">

            <p className="text-center text-2xl font-extrabold">
              Embed VEDIC AI Walkthrough Video Here
            </p>

          </div>

        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-black p-10 text-bg shadow-[8px_8px_0_#0891b2]">

          <h3 className="text-4xl font-extrabold">
            🚀 Final Tip
          </h3>

          <p className="mt-6 text-lg leading-9">
            Think of VEDIC AI as your digital classroom.
          </p>

          <p className="mt-5 text-lg leading-9">
            Open it daily, stay updated and you'll never miss assignments,
            attendance updates or quizzes.
          </p>

        </div>

      </section>
    </main>
  );
}
