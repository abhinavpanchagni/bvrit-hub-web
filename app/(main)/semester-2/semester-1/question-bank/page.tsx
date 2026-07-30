import Link from "next/link";

const subjects = [
  {
    name: "Engineering Mathematics",
    code: "M-101",
    color: "bg-surface-yellow/40",
  },
  {
    name: "Engineering Physics",
    code: "PHY-101",
    color: "bg-surface-peach/40",
  },
  {
    name: "Engineering Chemistry",
    code: "CHE-101",
    color: "bg-surface-mint/40",
  },
  {
    name: "Programming for Problem Solving",
    code: "PPS-101",
    color: "bg-blue-300",
  },
  {
    name: "Basic Electrical Engineering",
    code: "BEE-101",
    color: "bg-orange-300",
  },
  {
    name: "Engineering Graphics",
    code: "EG-101",
    color: "bg-purple-300",
  },
];

export default function NotesPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="border-b border-border/10 bg-accent-black text-bg py-16 text-bg">
        <div className="mx-auto max-w-7xl px-6">

          <Link
            href="/semester-1"
            className="inline-block rounded-xl border border-border/10 bg-white px-4 py-2 font-bold text-text-secondary shadow-sm"
          >
            ← Semester 1
          </Link>

          <h1 className="mt-8 text-6xl font-extrabold">
            Notes
          </h1>

          <p className="mt-6 text-xl text-bg/70">
            Semester 1 Subject-wise Notes
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {subjects.map((subject) => (

            <div
              key={subject.name}
              className={`rounded-[2.5rem] border border-border/10 ${subject.color} p-8 shadow-sm transition hover:-translate-y-2`}
            >

              <p className="font-bold">
                {subject.code}
              </p>

              <h2 className="mt-4 text-3xl font-extrabold">
                {subject.name}
              </h2>

              <button className="mt-8 rounded-xl border border-border/10 bg-white px-5 py-2 font-bold">
                View Notes →
              </button>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}
