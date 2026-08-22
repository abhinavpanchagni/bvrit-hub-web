import Link from "next/link";

export default function VedicPage() {
  return (
    <main className="min-h-screen bg-bg text-text-primary">
      {/* Hero */}
      <section className="border-b border-border/10 bg-cyan-600 text-bg">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Link
            href="/freshers"
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

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-white p-10 shadow-sm">
          <h3 className="text-4xl font-extrabold flex items-center gap-3">
            <span>🌐</span> Sri Vishnu Learning Management System (LMS)
          </h3>
          <p className="mt-6 text-lg leading-9 text-text-primary">
            Sri Vishnu Learning Management System (LMS) helps institutes to provide online courses as part of their regular course curriculum and also offer complete online distance learning courses.
          </p>
          <div className="mt-8">
            <a 
              href="https://www.vishnulearning.com/login/index.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-cyan-600 px-8 py-4 text-sm font-bold text-white shadow-sm hover:scale-[1.02] transition-transform"
            >
              Access Vishnu LMS Portal
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
            </a>
          </div>
        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-surface-yellow/40 p-10 shadow-sm">

          <h3 className="text-4xl font-extrabold">
            🎥 Video Walkthrough
          </h3>

          <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-border/10 shadow-sm border-2 border-black bg-white p-12 text-center">
            <p className="text-xl font-bold mb-6 text-text-secondary">
              Watch the complete walkthrough video to understand how to use VEDIC AI effectively.
            </p>
            <a 
              href="https://drive.google.com/file/d/1AP3iHWHclYOnkqzbkPheKsQxZm1ekwkk/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent-black text-white font-bold text-lg px-8 py-5 rounded-2xl hover:scale-105 hover:shadow-xl transition-all shadow-md active:scale-95"
            >
              ▶ Watch VEDIC AI Walkthrough
            </a>
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
