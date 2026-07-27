export default function SearchPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[36px] border-4 border-black bg-blue-600 p-10 text-white shadow-[12px_12px_0_#000]">

          <p className="font-bold uppercase tracking-widest">
            SMART SEARCH
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Find anything instantly.
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Search notes, PYQs, lab programs, question banks, videos,
            syllabus and much more—all from one search bar.
          </p>

          <div className="mt-10 rounded-2xl border-4 border-black bg-white p-4">
            <input
              type="text"
              placeholder="Search Python Notes..."
              className="w-full bg-transparent text-lg font-semibold text-gray-700 outline-none"
              readOnly
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Python",
              "Physics",
              "Maths",
              "Chemistry",
              "PPS Lab",
              "PYQs",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border-2 border-black bg-yellow-300 px-4 py-2 font-bold text-gray-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
