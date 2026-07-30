import Link from "next/link";
import { BookOpen } from "lucide-react";

const sections = [
  { title: "How Engineering Works", href: "/freshers/engineering" },
  { title: "SGPA & CGPA", href: "/freshers/sgpa" },
  { title: "Attendance", href: "/freshers/attendance" },
  { title: "Mid Exams", href: "/freshers/mids" },
  { title: "Semester Exams", href: "/freshers/semester-exams" },
  { title: "Labs", href: "/freshers/labs" },
  { title: "VEDIC AI", href: "/freshers/vedic" },
  { title: "ECAP", href: "/freshers/ecap" },
  { title: "Transport", href: "/freshers/transport" },
  { title: "Hostel", href: "/freshers/hostel" },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-24 h-fit rounded-[2.5rem] border border-border/10 bg-white dark:bg-[#1A1A1A] p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-surface-yellow/30 border border-surface-yellow/50 flex items-center justify-center">
          <BookOpen size={20} className="text-accent-black" />
        </div>
        <h2 className="text-xl font-extrabold text-text-primary">
          Contents
        </h2>
      </div>

      <div className="space-y-3">
        {sections.map((section, index) => (
          <Link
            key={section.title}
            href={section.href}
            className="flex w-full items-center gap-4 rounded-2xl border border-transparent hover:border-border/10 bg-bg px-4 py-3 font-bold text-sm text-text-secondary hover:text-text-primary hover:bg-surface-mint/20 transition-all"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent-black font-extrabold text-xs text-bg shadow-sm">
              {index + 1}
            </span>
            {section.title}
          </Link>
        ))}
      </div>
    </aside>
  );
}
