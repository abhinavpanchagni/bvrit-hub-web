"use client";

import { useParams } from "next/navigation";
import Button from "@/components/ui/Button";
import { semester1Labs } from "@/data/labsSemester1";

export default function LabPage() {
  const params = useParams();
  const slug = params.lab as string;

  const lab = semester1Labs.find((item) => item.slug === slug);

  if (!lab) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f6f6f6]">
        <div className="rounded-3xl border-4 border-black bg-white p-12 text-center shadow-[8px_8px_0_#000]">
          <h1 className="text-5xl font-black">Lab Not Found</h1>
          <div className="mt-8">
            <Button href="/semester-1/labs" variant="secondary">
              ← Back to Labs
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f6f6f6]">

      <section className="border-b-4 border-black bg-green-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">

          <Button href="/semester-1/labs" variant="secondary">
            ← Back to Labs
          </Button>

          <p className="mt-8 inline-block rounded-full border-4 border-black bg-yellow-300 px-5 py-2 font-black text-gray-700">
            {lab.code}
          </p>

          <h1 className="mt-6 text-6xl font-black">
            {lab.title}
          </h1>

          <div className="mt-8 flex flex-wrap gap-3">
            {lab.branches.map((branch) => (
              <span
                key={branch}
                className="rounded-xl border-2 border-black bg-white px-4 py-2 font-black text-gray-700"
              >
                {branch}
              </span>
            ))}
          </div>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <Button variant="secondary">💻 Programs</Button>

          <Button variant="secondary">📘 Lab Manual</Button>

          <Button variant="secondary">📝 Record PDF</Button>

          <Button variant="secondary">🎤 Viva Questions</Button>

          <Button variant="secondary">🧪 Important Experiments</Button>

          <Button variant="secondary">🖼️ Outputs</Button>

        </div>

      </section>

    </main>
  );
}
