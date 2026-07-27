import Link from "next/link";
import Hero from "@/components/freshers/Hero";

const chapters = [
  {
    number: "01",
    title: "How Engineering Works",
    description:
      "Understand semesters, subjects, labs, projects and your engineering journey.",
    href: "/freshers/engineering",
    color: "bg-blue-300",
  },
  {
    number: "02",
    title: "SGPA & CGPA",
    description:
      "Learn how marks, SGPA and CGPA are calculated.",
    href: "/freshers/sgpa",
    color: "bg-purple-300",
  },
  {
    number: "03",
    title: "Attendance Rules",
    description:
      "Everything about attendance percentage and eligibility.",
    href: "/freshers/attendance",
    color: "bg-red-300",
  },
  {
    number: "04",
    title: "Mid Examinations",
    description:
      "Know the mid exam pattern and how to prepare smartly.",
    href: "/freshers/mids",
    color: "bg-orange-300",
  },
  {
    number: "05",
    title: "Semester Examinations",
    description:
      "Understand the final exam pattern and evaluation.",
    href: "/freshers/semester-exams",
    color: "bg-indigo-300",
  },
  {
    number: "06",
    title: "Labs Overview",
    description:
      "Everything about labs, records, viva and practical sessions.",
    href: "/freshers/labs",
    color: "bg-green-300",
  },
  {
    number: "07",
    title: "VEDIC AI",
    description:
      "Attendance, assignments, quizzes and academic platform.",
    href: "/freshers/vedic",
    color: "bg-cyan-300",
  },
  {
    number: "08",
    title: "ECAP",
    description:
      "Results, fee payments and student portal guide.",
    href: "/freshers/ecap",
    color: "bg-pink-300",
  },
  {
    number: "09",
    title: "Transport",
    description:
      "Bus routes, fees and transport information.",
    href: "/freshers/transport",
    color: "bg-yellow-300",
  },
  {
    number: "10",
    title: "Hostel",
    description:
      "Hostel life, facilities and important information.",
    href: "/freshers/hostel",
    color: "bg-teal-300",
  },
];

export default function FreshersPage() {
  return (
    <main className="min-h-screen bg-[#f6f6f6]">

      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="rounded-3xl border-4 border-black bg-white p-10 shadow-[10px_10px_0_#000]">

          <p className="inline-block rounded-full border-2 border-black bg-yellow-300 px-5 py-2 font-black">
            🚀 FRESHERS STARTER PACK
          </p>

          <h1 className="mt-6 text-5xl font-black leading-tight md:text-6xl">
            Everything You Need Before Your First Semester
          </h1>

          <p className="mt-6 max-w-4xl text-xl leading-9 text-black">
            We collected everything every fresher asks during the first few
            weeks at BVRIT and organized it into one easy guide.
            Read these chapters once and you'll already be ahead of most freshers.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <div className="rounded-2xl border-4 border-black bg-blue-300 px-8 py-6 shadow-[6px_6px_0_#000]">
              <p className="text-4xl font-black">10</p>
              <p className="font-bold">Chapters</p>
            </div>

            <div className="rounded-2xl border-4 border-black bg-green-300 px-8 py-6 shadow-[6px_6px_0_#000]">
              <p className="text-4xl font-black">100%</p>
              <p className="font-bold">Free</p>
            </div>

            <div className="rounded-2xl border-4 border-black bg-pink-300 px-8 py-6 shadow-[6px_6px_0_#000]">
              <p className="text-4xl font-black">15 min</p>
              <p className="font-bold">Reading Time</p>
            </div>

          </div>

        </div>

        <div className="mt-16">

  <p className="inline-block rounded-full border-2 border-black bg-yellow-300 px-5 py-2 font-black shadow-[4px_4px_0_#000]">
    START HERE
  </p>

  <h2 className="mt-6 text-5xl font-black md:text-6xl">
    🚀 Your Freshers Roadmap
  </h2>

  <p className="mt-5 max-w-3xl text-xl leading-9 text-black">
    Follow these guides in order. Each one answers the questions every fresher
    usually has during the first few weeks at BVRIT.
  </p>

</div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">

          {chapters.map((chapter) => (

            <Link
              key={chapter.number}
              href={chapter.href}
              className={`${chapter.color} rounded-3xl border-4 border-black p-8 shadow-[8px_8px_0_#000] transition duration-200 hover:-translate-y-2 hover:shadow-[12px_12px_0_#000]`}
            >

              <div className="flex items-center justify-between">
<div className="rounded-2xl border-4 border-black bg-white px-5 py-3 text-3xl font-black shadow-[4px_4px_0_#000]">
  {chapter.number}
</div>

               <span className="rounded-xl border-2 border-black bg-white px-4 py-2 font-black">
  Open →
</span>

              </div>

              <h3 className="mt-8 text-3xl font-black">
                {chapter.title}
              </h3>

              <p className="mt-5 text-lg leading-8">
                {chapter.description}
              </p>

            </Link>

          ))}

        </div>

        <div className="mt-16 rounded-3xl border-4 border-black bg-black p-12 text-center text-white shadow-[10px_10px_0_#2563eb]">

          <h2 className="text-4xl font-black">
            🎯 Start with Chapter 1
          </h2>

          <p className="mt-6 text-xl leading-9 text-gray-700300">
            Follow the chapters in order for the best experience.
          </p>

          <Link
            href="/freshers/engineering"
            className="mt-8 inline-block rounded-2xl border-2 border-black bg-yellow-300 px-8 py-4 text-xl font-black text-gray-700 shadow-[6px_6px_0_#fff]"
          >
            Start Learning →
          </Link>

        </div>

      </section>

    </main>
  );
}
