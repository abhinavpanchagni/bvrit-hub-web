"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { semester1Subjects } from "@/data/semester1";
import { resources } from "@/data/resources";

export default function SubjectPage() {
  const [open, setOpen] = useState<number | null>(1);

  const params = useParams();
  const slug = params.subject as string;

  const data = useMemo(
    () => semester1Subjects.find((subject) => subject.slug === slug),
    [slug]
  );

  const resource =
    resources[slug as keyof typeof resources];

  if (!data) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-5xl font-extrabold">Subject Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-bg text-text-primary">
      <section className="border-b border-border/10 bg-accent-black text-bg text-bg">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Link
            href="/semester-1"
            className="rounded-xl border border-border/10 bg-white px-5 py-2 font-extrabold text-text-secondary shadow-sm"
          >
            ← Back
          </Link>

          <p className="mt-8 inline-block rounded-full border border-border/10 bg-surface-yellow/40 px-5 py-2 font-extrabold text-text-secondary">
            {data.code}
          </p>

          <h1 className="mt-6 text-6xl font-extrabold">
            {data.title}
          </h1>

          <div className="mt-8 flex flex-wrap gap-3">
            {data.branches.map((branch) => (
              <span
                key={branch}
                className="rounded-lg border border-border/10 bg-white px-4 py-2 font-extrabold text-text-secondary"
              >
                {branch}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        {data.units.map((unit, index) => {
          const unitData = resource?.units[(index + 1) as 1 | 2 | 3 | 4 | 5];

          return (
            <div
              key={unit}
              className="mb-6 overflow-hidden rounded-[2.5rem] border border-border/10 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpen(open === index + 1 ? null : index + 1)
                }
                className="flex w-full items-center justify-between bg-blue-300 px-8 py-6 text-left"
              >
                <h2 className="text-3xl font-extrabold">
                  📘 {unit}
                </h2>

                <span className="text-3xl font-extrabold">
                  {open === index + 1 ? "−" : "+"}
                </span>
              </button>

              {open === index + 1 && (
                <div className="grid gap-5 p-8 md:grid-cols-2 lg:grid-cols-5">

                  <a
                    href={unitData?.notes || "#"}
                    target="_blank"
                    className={`rounded-2xl border border-border/10 shadow-sm border border-border/10 p-6 text-center text-xl font-extrabold ${
                      unitData?.notes
                        ? "bg-surface-yellow/40 hover:-translate-y-1"
                        : "cursor-not-allowed bg-gray-300"
                    }`}
                  >
                    📄 Notes
                  </a>

                  <a
                    href={unitData?.video || "#"}
                    target="_blank"
                    className={`rounded-2xl border border-border/10 shadow-sm border border-border/10 p-6 text-center text-xl font-extrabold ${
                      unitData?.video
                        ? "bg-surface-yellow/40 hover:-translate-y-1"
                        : "cursor-not-allowed bg-gray-300"
                    }`}
                  >
                    🎥 Videos
                  </a>

                  <a
                    href={unitData?.pyq || "#"}
                    target="_blank"
                    className={`rounded-2xl border border-border/10 shadow-sm border border-border/10 p-6 text-center text-xl font-extrabold ${
                      unitData?.pyq
                        ? "bg-surface-yellow/40 hover:-translate-y-1"
                        : "cursor-not-allowed bg-gray-300"
                    }`}
                  >
                    📚 PYQs
                  </a>

                  <a
                    href={unitData?.questionBank || "#"}
                    target="_blank"
                    className={`rounded-2xl border border-border/10 shadow-sm border border-border/10 p-6 text-center text-xl font-extrabold ${
                      unitData?.questionBank
                        ? "bg-surface-yellow/40 hover:-translate-y-1"
                        : "cursor-not-allowed bg-gray-300"
                    }`}
                  >
                    ❓ Question Bank
                  </a>

                  <a
                    href={unitData?.importantQuestions || "#"}
                    target="_blank"
                    className={`rounded-2xl border border-border/10 shadow-sm border border-border/10 p-6 text-center text-xl font-extrabold ${
                      unitData?.importantQuestions
                        ? "bg-surface-yellow/40 hover:-translate-y-1"
                        : "cursor-not-allowed bg-gray-300"
                    }`}
                  >
                    ⭐ Important Questions
                  </a>

                </div>
              )}
            </div>
          );
        })}
      </section>
    </main>
  );
}
