import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Create Your FREE Account",
    description:
      "Sign in with your Google account to unlock personalized features like bookmarks, progress tracking and your student dashboard.",
    color: "bg-yellow-300",
  },
  {
    number: "02",
    title: "Choose Your Branch & Semester",
    description:
      "Navigate through your branch, semester and subjects to find exactly what you need without wasting time searching.",
    color: "bg-blue-300",
  },
  {
    number: "03",
    title: "Start Learning Smarter",
    description:
      "Access notes, labs, PYQs, important questions and study resources—all organized in one place.",
    color: "bg-green-300",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-block border-2 border-black bg-pink-300 px-4 py-2 text-sm font-black shadow-[4px_4px_0_#000]">
            HOW IT WORKS
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
            Start Learning in
            <br />
            Just 3 Steps
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-black">
            BVRIT Hub is designed to make finding study resources simple,
            organized and stress-free.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`${step.color} rounded-3xl border-4 border-black p-8 shadow-[8px_8px_0_#000] transition hover:-translate-y-2`}
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border-2 border-black bg-white px-4 py-2 font-black">
                  {step.number}
                </span>

                <span className="text-5xl">
                  {step.number === "01"
                    ? "👤"
                    : step.number === "02"
                    ? "📂"
                    : "🚀"}
                </span>
              </div>

              <h3 className="mt-10 text-3xl font-black">
                {step.title}
              </h3>

              <p className="mt-5 leading-8 text-black">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/login"
            className="inline-flex items-center rounded-xl border-4 border-black bg-black px-8 py-4 text-lg font-black text-white shadow-[6px_6px_0_#facc15] transition hover:-translate-y-1"
          >
            Get Started →
          </Link>
        </div>
      </div>
    </section>
  );
}
