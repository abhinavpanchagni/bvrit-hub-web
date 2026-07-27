import Link from "next/link";

export default function EngineeringPage() {
  return (
    <main className="min-h-screen bg-[#f6f6f6]">
      {/* Hero */}
      <section className="border-b-4 border-black bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Link
            href="/freshers"
            className="inline-block rounded-xl border-2 border-black bg-white px-5 py-2 font-bold text-gray-700 shadow-[4px_4px_0_#000]"
          >
            ← Back to Freshers
          </Link>

          <p className="mt-8 inline-block rounded-full border-2 border-black bg-yellow-300 px-4 py-2 font-bold text-gray-700">
            CHAPTER 01
          </p>

          <h1 className="mt-6 text-6xl font-black">
            How Engineering Works
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-blue-100">
            Everything you need to understand your engineering journey before
            your first semester begins.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="rounded-3xl border-4 border-black bg-white p-10 shadow-[10px_10px_0_#000]">

          <h2 className="text-4xl font-black">
            Welcome 👋
          </h2>

          <p className="mt-6 text-lg leading-9 text-black">
            Engineering is not just about studying for exams.
            It is a four-year journey where you learn concepts,
            build practical skills, work on projects, participate
            in events and prepare yourself for your career.
          </p>

          <p className="mt-5 text-lg leading-9 text-black">
            Every semester teaches you something new.
            Don't worry if you feel confused in the beginning.
            Every senior once started exactly where you are today.
          </p>

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border-4 border-black bg-yellow-300 p-8 shadow-[8px_8px_0_#000]">

            <h3 className="text-3xl font-black">
              🎯 Your Journey
            </h3>

            <ul className="mt-6 space-y-4 text-lg font-semibold">

              <li>✅ 4 Academic Years</li>

              <li>✅ 8 Semesters</li>

              <li>✅ Theory Subjects</li>

              <li>✅ Practical Laboratories</li>

              <li>✅ Assignments</li>

              <li>✅ Mini Projects</li>

              <li>✅ Major Project</li>

              <li>✅ Campus Placements</li>

            </ul>

          </div>

          <div className="rounded-3xl border-4 border-black bg-green-300 p-8 shadow-[8px_8px_0_#000]">

            <h3 className="text-3xl font-black">
              📅 Every Semester
            </h3>

            <ul className="mt-6 space-y-4 text-lg font-semibold">

              <li>📚 Daily Classes</li>

              <li>📝 Assignments</li>

              <li>💻 Practical Labs</li>

              <li>📖 Record Writing</li>

              <li>📊 Mid Examinations</li>

              <li>🎓 Semester Examinations</li>

              <li>🏆 Workshops & Events</li>

              <li>🚀 Skill Development</li>

            </ul>

          </div>

        </div>
                <div className="mt-10 rounded-3xl border-4 border-black bg-pink-300 p-8 shadow-[8px_8px_0_#000]">

          <h3 className="text-3xl font-black">
            💡 Think Like This
          </h3>

          <p className="mt-6 text-lg leading-9">
            Imagine engineering as a game.
          </p>

          <p className="mt-3 text-lg leading-9">
            Semester 1 = Level 1
          </p>

          <p className="mt-3 text-lg leading-9">
            Semester 2 = Level 2
          </p>

          <p className="mt-3 text-lg leading-9">
            Every semester teaches you new concepts and new skills.
          </p>

          <p className="mt-3 text-lg leading-9">
            Complete one semester successfully and move to the next.
          </p>

        </div>

        <div className="mt-10 rounded-3xl border-4 border-black bg-blue-600 p-10 text-white shadow-[8px_8px_0_#000]">

          <h3 className="text-4xl font-black">
            🚀 Success Tips
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl bg-white p-6 text-gray-700">
              <h4 className="text-xl font-black">Study Daily</h4>
              <p className="mt-3">
                Study a little every day instead of waiting until exams.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-gray-700">
              <h4 className="text-xl font-black">Attend Labs</h4>
              <p className="mt-3">
                Labs improve your practical knowledge and confidence.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-gray-700">
              <h4 className="text-xl font-black">Ask Questions</h4>
              <p className="mt-3">
                Never hesitate to ask faculty or seniors for help.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-gray-700">
              <h4 className="text-xl font-black">Build Skills</h4>
              <p className="mt-3">
                Learn programming, communication and problem solving alongside academics.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
