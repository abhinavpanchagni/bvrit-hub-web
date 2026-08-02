"use client";

import Link from "next/link";
import { BookOpen, Bookmark, TrendingUp } from "lucide-react";
import { useTracker } from "@/hooks/useTracker";

export default function DashboardStats() {
  const { mounted, bookmarks, progressPercentage, recent } = useTracker();

  if (!mounted) {
    return (
      <>
        <div className="bg-surface-peach rounded-[2rem] p-6 shadow-sm border border-border/10 transition-transform hover:-translate-y-1 flex flex-col justify-between group opacity-50">
          <div>
            <div className="w-12 h-12 rounded-xl bg-white/60 dark:bg-black/10 flex items-center justify-center text-accent-black mb-6 shadow-sm">
              <BookOpen size={24} strokeWidth={2.5} />
            </div>
            <h2 className="text-2xl font-extrabold text-text-primary mb-1">Continue</h2>
            <p className="text-text-secondary font-medium text-sm mb-6 leading-tight">
              Loading...
            </p>
          </div>
        </div>
        <div className="bg-surface-mint rounded-[2rem] p-6 shadow-sm border border-border/10 transition-transform hover:-translate-y-1 flex flex-col justify-between group opacity-50">
          <div>
            <div className="w-12 h-12 rounded-xl bg-white/60 dark:bg-black/10 flex items-center justify-center text-accent-black mb-6 shadow-sm">
              <Bookmark size={24} strokeWidth={2.5} />
            </div>
            <h2 className="text-2xl font-extrabold text-text-primary mb-1">Bookmarks</h2>
          </div>
          <p className="text-5xl font-extrabold text-accent-black mt-4">...</p>
        </div>
        <div className="bg-surface-yellow rounded-[2rem] p-6 shadow-sm border border-border/10 transition-transform hover:-translate-y-1 flex flex-col justify-between group opacity-50">
          <div>
            <div className="w-12 h-12 rounded-xl bg-white/60 dark:bg-black/10 flex items-center justify-center text-accent-black mb-6 shadow-sm">
              <TrendingUp size={24} strokeWidth={2.5} />
            </div>
            <h2 className="text-2xl font-extrabold text-text-primary mb-1">Progress</h2>
          </div>
          <p className="text-5xl font-extrabold text-accent-black mt-4">...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-surface-peach rounded-[2rem] p-6 shadow-sm border border-border/10 transition-transform hover:-translate-y-1 flex flex-col justify-between group">
        <div>
          <div className="w-12 h-12 rounded-xl bg-white/60 dark:bg-black/10 flex items-center justify-center text-accent-black mb-6 shadow-sm group-hover:scale-105 transition-transform">
            <BookOpen size={24} strokeWidth={2.5} />
          </div>
          <h2 className="text-2xl font-extrabold text-text-primary mb-1">Continue</h2>
          <p className="text-text-secondary font-medium text-sm mb-6 leading-tight">
            {recent ? recent.title : "Start learning to see recent subjects"}
          </p>
        </div>
        <Link
          href={recent ? recent.href : "/resources"}
          className="bg-accent-black text-bg font-bold text-sm rounded-xl hover:scale-[1.02] hover:shadow-md transition-all px-4 py-2.5 w-max"
        >
          {recent ? "Resume Learning" : "Browse Resources"}
        </Link>
      </div>

      <div className="bg-surface-mint rounded-[2rem] p-6 shadow-sm border border-border/10 transition-transform hover:-translate-y-1 flex flex-col justify-between group">
        <div>
          <div className="w-12 h-12 rounded-xl bg-white/60 dark:bg-black/10 flex items-center justify-center text-accent-black mb-6 shadow-sm group-hover:scale-105 transition-transform">
            <Bookmark size={24} strokeWidth={2.5} />
          </div>
          <h2 className="text-2xl font-extrabold text-text-primary mb-1">Bookmarks</h2>
        </div>
        <div className="flex items-end justify-between mt-4">
          <p className="text-5xl font-extrabold text-accent-black">{bookmarks.length}</p>
          {bookmarks.length > 0 && (
            <Link href="/resources" className="text-sm font-bold text-accent-black/60 hover:text-accent-black transition-colors">
              Go to Resources
            </Link>
          )}
        </div>
      </div>

      <div className="bg-surface-yellow rounded-[2rem] p-6 shadow-sm border border-border/10 transition-transform hover:-translate-y-1 flex flex-col justify-between group">
        <div>
          <div className="w-12 h-12 rounded-xl bg-white/60 dark:bg-black/10 flex items-center justify-center text-accent-black mb-6 shadow-sm group-hover:scale-105 transition-transform">
            <TrendingUp size={24} strokeWidth={2.5} />
          </div>
          <h2 className="text-2xl font-extrabold text-text-primary mb-1">Progress</h2>
        </div>
        <p className="text-5xl font-extrabold text-accent-black mt-4">{progressPercentage}%</p>
      </div>
    </>
  );
}
