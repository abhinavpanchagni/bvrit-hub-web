export default function FreshersPack() {
  const topics = [
    "How Engineering Works",
    "SGPA & CGPA",
    "Attendance Rules",
    "Mid Exam Guide",
    "Semester Exams",
    "Labs Overview",
    "VEDIC AI Guide",
    "ECAP Guide",
    "Transport",
    "Hostel",
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full border-2 border-black bg-yellow-300 px-4 py-2 text-sm font-bold">
            🎓 EXCLUSIVE FOR FRESHERS
          </span>

          <h2 className="mt-6 text-5xl font-black md:text-6xl">
            Freshers Starter Pack
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-700600">
            Everything you wish someone had explained before your first day at
            BVRIT—all in one place.
          </p>
        </div>

        {/* Main Card */}
        <div className="rounded-[32px] border-4 border-black bg-white p-8 shadow-[12px_12px_0_#000]">
          <div className="grid gap-4 md:grid-cols-2">
            {topics.map((topic, index) => (
              <div
                key={topic}
                className="flex items-center gap-4 rounded-2xl border-2 border-black bg-gray-50 p-4 transition hover:-translate-y-1 hover:bg-yellow-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black bg-blue-500 font-black text-white">
                  {index + 1}
                </div>

                <h3 className="font-bold">{topic}</h3>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button className="rounded-2xl border-4 border-black bg-black px-8 py-4 text-lg font-bold text-white transition hover:-translate-y-1 hover:shadow-[6px_6px_0_#2563eb]">
              Explore Starter Pack →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
