import Link from "next/link";

const resources = [
  {
    title: "Notes",
    description: "Subject-wise notes for Semester 1.",
    href: "/notes",
    color: "bg-surface-yellow/40",
    icon: "📚",
  },
  {
    title: "Previous Papers",
    description: "University PYQs and model papers.",
    href: "/pyqs",
    color: "bg-surface-peach/40",
    icon: "📝",
  },
  {
    title: "Lab Programs",
    description: "Programs, records and outputs.",
    href: "/labs",
    color: "bg-surface-mint/40",
    icon: "💻",
  },
  {
    title: "Question Bank",
    description: "Important and repeated questions.",
    href: "/question-bank",
    color: "bg-blue-300",
    icon: "❓",
  },
  {
    title: "Video Library",
    description: "Best YouTube playlists.",
    href: "/videos",
    color: "bg-orange-300",
    icon: "🎥",
  },
  {
    title: "Syllabus",
    description: "Latest Semester 1 syllabus.",
    href: "/syllabus",
    color: "bg-purple-300",
    icon: "📄",
  },
];

export default function SemesterOnePage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="border-b border-border/10 bg-accent-black text-bg py-16 text-bg">
        <div className="mx-auto max-w-7xl px-6">

          <Link
            href="/"
            className="inline-block rounded-xl border border-border/10 bg-white px-4 py-2 font-bold text-text-secondary shadow-sm"
          >
            ← Home
          </Link>

          <h1 className="mt-8 text-6xl font-extrabold">
            Semester 1
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-bg/70">
            Everything you need for your first semester at BVRIT.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {resources.map((item) => (

            <Link key={item.title} href={item.href}>

              <div
                className={`rounded-[2.5rem] border border-border/10 ${item.color} p-8 shadow-sm transition hover:-translate-y-2`}
              >

                <div className="text-6xl">
                  {item.icon}
                </div>

                <h2 className="mt-6 text-3xl font-extrabold">
                  {item.title}
                </h2>

                <p className="mt-4 text-text-primary">
                  {item.description}
                </p>

                <div className="mt-8 font-bold">
                  Open →
                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}
