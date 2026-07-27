export default function EngineeringGuide() {
  return (
    <section className="rounded-[32px] border-4 border-black bg-white p-10 shadow-[10px_10px_0_#000]">

      <span className="rounded-full border-2 border-black bg-blue-600 px-4 py-2 text-sm font-bold text-white">
        CHAPTER 01
      </span>

      <h2 className="mt-6 text-5xl font-black">
        How Engineering Works
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-700600">
        Welcome to engineering! If you're joining BVRIT for the first time,
        everything may look confusing. Don't worry—every senior once started
        exactly where you are today.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        <div className="rounded-3xl border-4 border-black bg-yellow-300 p-6">
          <h3 className="text-2xl font-black">
            🎯 Your Journey
          </h3>

          <ul className="mt-5 space-y-3 font-semibold">
            <li>✅ 4 Years</li>
            <li>✅ 8 Semesters</li>
            <li>✅ Theory Subjects</li>
            <li>✅ Practical Labs</li>
            <li>✅ Projects</li>
            <li>✅ Internals & Semester Exams</li>
          </ul>
        </div>

        <div className="rounded-3xl border-4 border-black bg-green-300 p-6">
          <h3 className="text-2xl font-black">
            📅 Every Semester
          </h3>

          <ul className="mt-5 space-y-3 font-semibold">
            <li>📚 Daily Classes</li>
            <li>🧪 Practical Labs</li>
            <li>📝 Assignments</li>
            <li>📖 Record Writing</li>
            <li>📊 Mid Exams</li>
            <li>🎓 Semester Exams</li>
          </ul>
        </div>

      </div>

      <div className="mt-10 rounded-3xl border-4 border-black bg-blue-600 p-8 text-white">
        <h3 className="text-3xl font-black">
          💡 Remember
        </h3>

        <p className="mt-4 text-lg leading-8">
          Think of engineering like a game.
          Every semester is a new level.
          Complete one semester successfully and you'll unlock the next.
        </p>
      </div>

    </section>
  );
}
