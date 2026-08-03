"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { semester1Subjects } from "@/data/semester1";
import { resources } from "@/data/resources";
import { Bookmark } from "lucide-react";
import { useTracker } from "@/hooks/useTracker";
import { useEffect } from "react";

export default function SubjectPage() {
  const [open, setOpen] = useState<number | null>(1);

  const params = useParams();
  const slug = params.subject as string;

  const { toggleBookmark, isBookmarked, markProgress, setRecentItem } = useTracker();
  const bookmarked = isBookmarked(slug);

  const data = useMemo(
    () => semester1Subjects.find((subject) => subject.slug === slug),
    [slug]
  );

  const resource =
    resources[slug as keyof typeof resources];

  useEffect(() => {
    if (data) {
      setRecentItem({
        id: slug,
        title: data.title,
        href: `/semester-1/${slug}`
      });
    }
  }, [data, slug, setRecentItem]);

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

          <div className="flex items-center gap-6 mt-6">
            <h1 className="text-5xl md:text-6xl font-extrabold">
              {data.title}
            </h1>
            <button 
              onClick={() => toggleBookmark({ id: slug, title: data.title, href: `/semester-1/${slug}`, type: 'subject' })}
              className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all shadow-sm active:scale-95 ${bookmarked ? 'bg-surface-mint border-surface-mint text-accent-black' : 'bg-white border-border/20 text-text-secondary hover:text-accent-black'}`}
            >
              <Bookmark size={28} strokeWidth={2.5} className={bookmarked ? "fill-accent-black" : ""} />
            </button>
          </div>

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
                className="flex w-full items-center justify-between bg-surface-lavender/40 hover:bg-surface-lavender/60 transition-colors px-8 py-6 text-left border-b border-border/10"
              >
                <h2 className="text-2xl font-extrabold text-accent-black flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm text-sm border border-border/10">
                    {index + 1}
                  </span>
                  {unit}
                </h2>

                <span className="text-3xl font-extrabold text-accent-black/50">
                  {open === index + 1 ? "−" : "+"}
                </span>
              </button>

              {open === index + 1 && (
                <div className="grid gap-5 p-8 md:grid-cols-2 lg:grid-cols-5">

                  <a
                    href={unitData?.notes || "#"}
                    target={unitData?.notes ? "_blank" : undefined}
                    onClick={() => unitData?.notes && markProgress(`${slug}-notes-${index}`)}
                    className={`rounded-2xl border border-border/10 shadow-sm p-6 text-center text-lg font-extrabold transition-all flex flex-col items-center justify-center gap-2 ${
                      unitData?.notes
                        ? "bg-surface-mint/40 hover:-translate-y-1 hover:shadow-md text-accent-black"
                        : "cursor-not-allowed bg-black/5 text-accent-black/40"
                    }`}
                  >
                    📄 Notes
                  </a>

                  <a
                    href={unitData?.video || "#"}
                    target={unitData?.video ? "_blank" : undefined}
                    onClick={() => unitData?.video && markProgress(`${slug}-video-${index}`)}
                    className={`rounded-2xl border border-border/10 shadow-sm p-6 text-center text-lg font-extrabold transition-all flex flex-col items-center justify-center gap-2 ${
                      unitData?.video
                        ? "bg-surface-lavender/40 hover:-translate-y-1 hover:shadow-md text-accent-black"
                        : "cursor-not-allowed bg-black/5 text-accent-black/40"
                    }`}
                  >
                    🎥 Videos
                  </a>

                  <a
                    href={unitData?.pyq || "#"}
                    target={unitData?.pyq ? "_blank" : undefined}
                    onClick={() => unitData?.pyq && markProgress(`${slug}-pyq-${index}`)}
                    className={`rounded-2xl border border-border/10 shadow-sm p-6 text-center text-lg font-extrabold transition-all flex flex-col items-center justify-center gap-2 ${
                      unitData?.pyq
                        ? "bg-surface-yellow/40 hover:-translate-y-1 hover:shadow-md text-accent-black"
                        : "cursor-not-allowed bg-black/5 text-accent-black/40"
                    }`}
                  >
                    📚 PYQs
                  </a>

                  <a
                    href={unitData?.questionBank || "#"}
                    target={unitData?.questionBank ? "_blank" : undefined}
                    onClick={() => unitData?.questionBank && markProgress(`${slug}-qbank-${index}`)}
                    className={`rounded-2xl border border-border/10 shadow-sm p-6 text-center text-lg font-extrabold transition-all flex flex-col items-center justify-center gap-2 ${
                      unitData?.questionBank
                        ? "bg-surface-mint/40 hover:-translate-y-1 hover:shadow-md text-accent-black"
                        : "cursor-not-allowed bg-black/5 text-accent-black/40"
                    }`}
                  >
                    ❓ Q-Bank
                  </a>

                  <a
                    href={unitData?.importantQuestions || "#"}
                    target={unitData?.importantQuestions ? "_blank" : undefined}
                    onClick={() => unitData?.importantQuestions && markProgress(`${slug}-imp-${index}`)}
                    className={`rounded-2xl border border-border/10 shadow-sm p-6 text-center text-lg font-extrabold transition-all flex flex-col items-center justify-center gap-2 ${
                      unitData?.importantQuestions
                        ? "bg-surface-lavender/40 hover:-translate-y-1 hover:shadow-md text-accent-black"
                        : "cursor-not-allowed bg-black/5 text-accent-black/40"
                    }`}
                  >
                    ⭐ Important
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
