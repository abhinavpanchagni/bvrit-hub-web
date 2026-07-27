import Link from "next/link";
import Button from "@/components/ui/Button";
import { semester1Labs } from "@/data/labsSemester1";

export default function SemesterOneLabsPage() {
  return (
    <main className="min-h-screen bg-[#f6f6f6]">
      <section className="border-b-4 border-black bg-green-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">

          <Button href="/semester-1" variant="secondary">
            ← Back to Semester 1
          </Button>

          <h1 className="mt-8 text-6xl font-black">
            Semester 1 Labs
          </h1>

          <p className="mt-5 text-xl text-green-100">
            Choose your laboratory.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-8 md:grid-cols-2">

          {semester1Labs.map((lab) => (

            <div
              key={lab.slug}
              className="rounded-3xl border-4 border-black bg-green-300 p-8 shadow-[8px_8px_0_#000]"
            >
              <p className="text-sm font-black text-gray-700">
                {lab.code}
              </p>

              <h2 className="mt-3 text-3xl font-black text-gray-700">
                {lab.title}
              </h2>

              <div className="mt-6 flex flex-wrap gap-2">

                {lab.branches.map((branch) => (
                  <span
                    key={branch}
                    className="rounded-lg border-2 border-black bg-white px-3 py-1 text-sm font-black"
                  >
                    {branch}
                  </span>
                ))}

              </div>

              <div className="mt-8">
                <Button href={`/semester-1/labs/${lab.slug}`}>
                  Open →
                </Button>
              </div>

            </div>

          ))}

        </div>

      </section>
    </main>
  );
}
