import Link from "next/link";

const topics = [
  {
    title: "Engineering",
    subtitle: "How Engineering Works",
    href: "/freshers/engineering",
    color: "bg-yellow-300",
    icon: "⚙️",
  },
  {
    title: "SGPA",
    subtitle: "Grades & Credits",
    href: "/freshers/sgpa",
    color: "bg-pink-300",
    icon: "📊",
  },
  {
    title: "Attendance",
    subtitle: "Rules & Requirements",
    href: "/freshers/attendance",
    color: "bg-green-300",
    icon: "✅",
  },
  {
    title: "Labs",
    subtitle: "Practical Guidance",
    href: "/freshers/labs",
    color: "bg-blue-300",
    icon: "🧪",
  },
  {
    title: "Transport",
    subtitle: "Bus Routes",
    href: "/freshers/transport",
    color: "bg-orange-300",
    icon: "🚌",
  },
  {
    title: "Hostel",
    subtitle: "Hostel Facilities",
    href: "/freshers/hostel",
    color: "bg-purple-300",
    icon: "🏠",
  },
];

export default function StarterPackPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <span className="inline-block border-2 border-black bg-cyan-300 px-5 py-2 text-sm font-black shadow-[4px_4px_0_#000]">
              🎓 FRESHERS STARTER PACK
            </span>

            <h2 className="mt-8 text-5xl font-black md:text-6xl">
              Everything Before
              <br />
              Your First Semester.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-black">
              Learn how engineering works, understand college systems and
              prepare yourself before your first day at BVRIT.
            </p>
          </div>

          <Link
            href="/freshers"
            className="rounded-xl border-4 border-black bg-black px-8 py-4 text-lg font-black text-white shadow-[6px_6px_0_#facc15] transition hover:-translate-y-1"
          >
            Explore All →
          </Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Link key={topic.title} href={topic.href}>
              <div
                className={`${topic.color} rounded-3xl border-4 border-black p-8 shadow-[8px_8px_0_#000] transition hover:-translate-y-2 hover:shadow-[10px_10px_0_#000]`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-5xl">{topic.icon}</span>

                  <span className="rounded-full border-2 border-black bg-white px-3 py-1 text-sm font-black">
                    FREE
                  </span>
                </div>

                <h3 className="mt-8 text-3xl font-black">
                  {topic.title}
                </h3>

                <p className="mt-3 font-semibold text-black">
                  {topic.subtitle}
                </p>

                <div className="mt-8 font-black">
                  Explore →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
