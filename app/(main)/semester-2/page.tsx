import Link from "next/link";
import { semester2Subjects } from "@/data/semester2";

export default function SemesterTwoPage() {
  return (
    <main className="min-h-screen bg-bg text-text-primary">

      <section className="border-b border-border/10 bg-green-600 text-bg">

        <div className="mx-auto max-w-7xl px-6 py-16">

          <Link
            href="/resources"
            className="inline-block rounded-xl border border-border/10 bg-white px-5 py-2 font-extrabold text-text-secondary shadow-sm"
          >
            ← Back to Resources
          </Link>

          <h1 className="mt-8 text-6xl font-extrabold">
            Semester 2
          </h1>

          <p className="mt-5 max-w-3xl text-xl leading-9 text-green-100">
            Semester 2 resources will appear here.
          </p>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        {semester2Subjects.length === 0 ? (

          <div className="rounded-[2.5rem] border border-border/10 bg-white p-16 text-center shadow-sm">

            <h2 className="text-4xl font-extrabold">
              🚧 Coming Soon
            </h2>

            <p className="mt-6 text-xl">
              Semester 2 resources will be added soon.
            </p>

          </div>

        ) : null}

      </section>

    </main>
  );
}
