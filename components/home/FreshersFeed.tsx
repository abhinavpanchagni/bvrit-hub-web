import Link from "next/link";

const updates = [
  {
    title: "How Engineering Works",
    description: "Start here if you're new to engineering.",
    href: "/freshers/engineering",
    badge: "START HERE",
    color: "bg-yellow-300",
  },
  {
    title: "Understand SGPA & CGPA",
    description: "Learn how marks and credits are calculated.",
    href: "/freshers/sgpa",
    badge: "IMPORTANT",
    color: "bg-pink-300",
  },
  {
    title: "Attendance Rules",
    description: "Know the attendance requirements before classes begin.",
    href: "/freshers/attendance",
    badge: "READ",
    color: "bg-green-300",
  },
  {
    title: "Transport & Hostel",
    description: "Bus routes, hostel facilities and campus guidance.",
    href: "/freshers/transport",
    badge: "NEW",
    color: "bg-blue-300",
  },
];

export default function FreshersFeed() {
  return (
    <section className="border-y-4 border-black bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="inline-block border-2 border-black bg-red-300 px-4 py-2 text-sm font-black shadow-[4px_4px_0_#000]">
              🔥 FRESHERS FEED
            </span>

            <h2 className="mt-6 text-5xl font-black">
              Check These First.
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-black">
              Important guides every BVRIT fresher should read before the first
              semester.
            </p>
          </div>

          <Link
            href="/freshers"
            className="hidden rounded-xl border-4 border-black bg-black px-6 py-3 font-black text-white shadow-[6px_6px_0_#facc15] lg:block"
          >
            View All →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {updates.map((item) => (
            <Link key={item.title} href={item.href}>
              <div
                className={`${item.color} h-full rounded-3xl border-4 border-black p-6 shadow-[8px_8px_0_#000] transition duration-200 hover:-translate-y-2 hover:shadow-[10px_10px_0_#000]`}
              >
                <span className="inline-block rounded-full border-2 border-black bg-white px-3 py-1 text-xs font-black">
                  {item.badge}
                </span>

                <h3 className="mt-6 text-2xl font-black leading-tight">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-black">
                  {item.description}
                </p>

                <div className="mt-8 font-black">
                  Read Guide →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
