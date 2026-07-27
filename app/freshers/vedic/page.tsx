import Link from "next/link";

export default function VedicPage() {
  return (
    <main className="min-h-screen bg-[#f6f6f6]">
      {/* Hero */}
      <section className="border-b-4 border-black bg-cyan-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Link
            href="/freshers"
            className="inline-block rounded-xl border-2 border-black bg-white px-5 py-2 font-bold text-gray-700 shadow-[4px_4px_0_#000]"
          >
            ← Back to Freshers
          </Link>

          <p className="mt-8 inline-block rounded-full border-2 border-black bg-yellow-300 px-4 py-2 font-bold text-gray-700">
            CHAPTER 07
          </p>

          <h1 className="mt-6 text-5xl font-black md:text-6xl">
            VEDIC AI Guide
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-cyan-100">
            Learn how to use BVRIT's academic platform for attendance,
            assignments, quizzes and classroom activities.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="rounded-3xl border-4 border-black bg-white p-10 shadow-[10px_10px_0_#000]">
          <h2 className="text-4xl font-black">
            📱 What is VEDIC AI?
          </h2>

          <p className="mt-6 text-lg leading-9 text-black">
            VEDIC AI is BVRIT's digital learning platform used by students and
            faculty for various academic activities.
          </p>

          <p className="mt-5 text-lg leading-9 text-black">
            You will be using it almost every day, so getting familiar with it
            early will make college life much easier.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border-4 border-black bg-yellow-300 p-8 shadow-[8px_8px_0_#000]">

          <h3 className="text-4xl font-black">
            💻 What is VEDIC AI Used For?
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border-2 border-black bg-white p-6">
              <h4 className="text-xl font-black">📚 Attendance</h4>
              <p className="mt-3">
                Attendance is recorded for every class.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-black bg-white p-6">
              <h4 className="text-xl font-black">📝 Assignments</h4>
              <p className="mt-3">
                Faculty can assign and collect assignments.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-black bg-white p-6">
              <h4 className="text-xl font-black">❓ Live Quizzes</h4>
              <p className="mt-3">
                Teachers conduct quizzes during classes.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-black bg-white p-6">
              <h4 className="text-xl font-black">🎓 Academic Activities</h4>
              <p className="mt-3">
                Subject-wise classroom activities and updates.
              </p>
            </div>

          </div>

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border-4 border-black bg-green-300 p-8 shadow-[8px_8px_0_#000]">

            <h3 className="text-3xl font-black">
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

          <div className="rounded-3xl border-4 border-black bg-red-300 p-8 shadow-[8px_8px_0_#000]">

            <h3 className="text-3xl font-black">
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

        <div className="mt-10 rounded-3xl border-4 border-black bg-blue-600 p-10 text-white shadow-[8px_8px_0_#000]">

          <h3 className="text-4xl font-black">
            ❓ Frequently Asked Questions
          </h3>

          <div className="mt-8 space-y-6">

            <div className="rounded-2xl bg-white p-6 text-gray-700">
              <h4 className="text-xl font-black">
                Is VEDIC AI compulsory?
              </h4>

              <p className="mt-3">
                Yes. Attendance, assignments and quizzes are conducted through
                VEDIC AI.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-gray-700">
              <h4 className="text-xl font-black">
                How often should I check it?
              </h4>

              <p className="mt-3">
                At least once every day.
              </p>
            </div>

          </div>

        </div>

        <div className="mt-10 rounded-3xl border-4 border-black bg-yellow-300 p-10 shadow-[8px_8px_0_#000]">

          <h3 className="text-4xl font-black">
            🎥 Video Walkthrough
          </h3>

          <div className="mt-8 flex h-80 items-center justify-center rounded-2xl border-4 border-dashed border-black bg-white">

            <p className="text-center text-2xl font-black">
              Embed VEDIC AI Walkthrough Video Here
            </p>

          </div>

        </div>

        <div className="mt-10 rounded-3xl border-4 border-black bg-black p-10 text-white shadow-[8px_8px_0_#0891b2]">

          <h3 className="text-4xl font-black">
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
