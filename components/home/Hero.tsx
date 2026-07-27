import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-16 lg:flex-row lg:px-10">
      {/* Left */}
      <div className="max-w-3xl">
        <span className="inline-block rounded-xl border-2 border-black bg-yellow-300 px-4 py-2 text-sm font-black shadow-[4px_4px_0_#000]">
          STUDENT-BUILT DIGITAL COMPANION
        </span>

        <h1 className="mt-8 text-6xl font-black leading-none md:text-7xl lg:text-8xl">
          YOUR FIRST-
          <br />
          YEAR
          <br />
          COMPANION.
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-black">
          Everything a BVRIT fresher needs in one place — semester notes,
          previous year papers, labs, Freshers Starter Pack, question banks,
          important topics and much more.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/login"
            className="rounded-2xl border-4 border-black bg-black px-8 py-4 text-lg font-black text-white shadow-[6px_6px_0_#facc15] transition hover:-translate-y-1"
          >
            Get Started →
          </Link>

          <Link
            href="/freshers"
            className="rounded-2xl border-4 border-black bg-yellow-300 px-8 py-4 text-lg font-black shadow-[6px_6px_0_#000] transition hover:-translate-y-1"
          >
            Freshers Starter Pack
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {[
            "📚 Notes",
            "📄 PYQs",
            "🧪 Labs",
            "❓ Question Banks",
            "🎥 Videos",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border-2 border-black bg-white px-4 py-2 font-bold shadow-[3px_3px_0_#000]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="hidden w-[470px] overflow-hidden rounded-[36px] border-4 border-black bg-white shadow-[10px_10px_0_#000] lg:block">
        {/* Browser */}
        <div className="flex items-center justify-between border-b-4 border-black bg-zinc-100 px-5 py-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
          </div>

          <div className="rounded-full border-2 border-black bg-white px-4 py-1 text-xs font-bold shadow-[2px_2px_0_#000]">
            bvrit-hub.app
          </div>

          <div className="w-10"></div>
        </div>

        <div className="p-6">
          <div className="rounded-3xl border-3 border-black bg-blue-600 p-6 text-white">
            <p className="text-xs font-black uppercase tracking-widest">
              Semester 1
            </p>

            <h3 className="mt-3 text-4xl font-black">
              Academic Resources
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                "📚 Notes",
                "📄 PYQs",
                "🧪 Labs",
                "❓ Question Bank",
                "⭐ Important Questions",
                "🎥 Videos",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border-2 border-black bg-white p-3 text-sm font-bold text-black"
                >
                  {item}
                </div>
              ))}
            </div>

            <button className="mt-8 rounded-xl border-2 border-black bg-yellow-300 px-5 py-3 font-black text-black shadow-[4px_4px_0_#000]">
              Explore Resources →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
