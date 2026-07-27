import Link from "next/link";

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
    <aside className="sticky top-24 h-fit rounded-3xl border-4 border-black bg-white p-6 shadow-[8px_8px_0_#000]">
      <h2 className="mb-6 text-2xl font-black">
        📘 Contents
      </h2>

      <div className="space-y-3">
        {sections.map((section, index) => (
          <Link
            key={section.title}
            href={section.href}
            className="flex w-full items-center gap-3 rounded-xl border-2 border-black bg-gray-100 px-4 py-3 font-semibold transition hover:bg-yellow-300"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-black bg-blue-600 font-bold text-white">
              {index + 1}
            </span>

            {section.title}
          </Link>
        ))}
      </div>
    </aside>
  );
}
