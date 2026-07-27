import Link from "next/link";

const resources = [
  {
    title: "Notes",
    description: "Subject-wise notes for Semester 1.",
    href: "/notes",
    color: "bg-yellow-300",
    icon: "📚",
  },
  {
    title: "Previous Papers",
    description: "University PYQs and model papers.",
    href: "/pyqs",
    color: "bg-pink-300",
    icon: "📝",
  },
  {
    title: "Lab Programs",
    description: "Programs, records and outputs.",
    href: "/labs",
    color: "bg-green-300",
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

      <section className="border-b-4 border-black bg-blue-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <Link
            href="/"
            className="inline-block rounded-xl border-2 border-black bg-white px-4 py-2 font-bold text-gray-700 shadow-[4px_4px_0_#000]"
          >
            ← Home
          </Link>

          <h1 className="mt-8 text-6xl font-black">
            Semester 1
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Everything you need for your first semester at BVRIT.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {resources.map((item) => (

            <Link key={item.title} href={item.href}>

              <div
                className={`rounded-3xl border-4 border-black ${item.color} p-8 shadow-[8px_8px_0_#000] transition hover:-translate-y-2`}
              >

                <div className="text-6xl">
                  {item.icon}
                </div>

                <h2 className="mt-6 text-3xl font-black">
                  {item.title}
                </h2>

                <p className="mt-4 text-black">
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
