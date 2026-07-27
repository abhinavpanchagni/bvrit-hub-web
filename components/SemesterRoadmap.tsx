const semesters = [
  "Semester 1",
  "Semester 2",
  "Semester 3",
  "Semester 4",
  "Semester 5",
  "Semester 6",
  "Semester 7",
  "Semester 8",
];

export default function SemesterRoadmap() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-5xl font-black">
            Your Engineering Journey
          </h2>

          <p className="mt-4 text-lg text-gray-700600">
            Navigate semester by semester with organized resources.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {semesters.map((semester, index) => (
            <div
              key={semester}
              className="rounded-3xl border-4 border-black bg-white p-6 shadow-[8px_8px_0_#000] transition hover:-translate-y-2 hover:bg-yellow-200"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border-4 border-black bg-blue-600 text-2xl font-black text-white">
                {index + 1}
              </div>

              <h3 className="text-2xl font-black">
                {semester}
              </h3>

              <p className="mt-3 text-gray-700600">
                Notes, PYQs, Labs, Videos & Question Banks.
              </p>

              <button className="mt-6 rounded-xl border-2 border-black bg-black px-5 py-2 font-bold text-white">
                View →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
