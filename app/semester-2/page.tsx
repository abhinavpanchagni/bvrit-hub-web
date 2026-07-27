import Link from "next/link";
import { semester2Subjects } from "@/data/semester2";

export default function SemesterTwoPage() {
  return (
    <main className="min-h-screen bg-[#f6f6f6]">

      <section className="border-b-4 border-black bg-green-600 text-white">

        <div className="mx-auto max-w-7xl px-6 py-16">

          <Link
            href="/resources"
            className="inline-block rounded-xl border-2 border-black bg-white px-5 py-2 font-black text-gray-700 shadow-[4px_4px_0_#000]"
          >
            ← Back to Resources
          </Link>

          <h1 className="mt-8 text-6xl font-black">
            Semester 2
          </h1>

          <p className="mt-5 max-w-3xl text-xl leading-9 text-green-100">
            Semester 2 resources will appear here.
          </p>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        {semester2Subjects.length === 0 ? (

          <div className="rounded-3xl border-4 border-black bg-white p-16 text-center shadow-[10px_10px_0_#000]">

            <h2 className="text-4xl font-black">
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
