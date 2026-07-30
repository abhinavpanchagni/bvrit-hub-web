import { BookOpen, Package, Zap } from "lucide-react";

const items = [
  {
    icon: BookOpen,
    title: "Academic Resources",
    description:
      "Semester-wise notes, PYQs, question banks, important questions and study material.",
    color: "bg-surface-yellow",
  },
  {
    icon: Package,
    title: "Freshers Starter Pack",
    description:
      "Everything you need to know before your first semester at BVRIT.",
    color: "bg-surface-peach",
  },
  {
    icon: Zap,
    title: "Save Hours Every Week",
    description:
      "No more searching through WhatsApp groups, Google Drive links and multiple websites.",
    color: "bg-surface-lavender",
  },
];

export default function EverythingYouNeed() {
  return (
    <section className="bg-bg py-24 scroll-reveal">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center flex flex-col items-center">
          <span className="font-bold text-xs uppercase tracking-wider text-accent-blue mb-4">
            Everything You Need
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 max-w-4xl leading-tight">
            One Platform.<br />Every Resource.
          </h2>

          <p className="mx-auto text-lg text-text-secondary font-medium max-w-3xl">
            BVRIT Hub brings together everything an engineering student needs
            in one organized platform.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className={`${item.color} rounded-[2.5rem] border border-border/10 p-10 shadow-sm flex flex-col items-start transition-transform hover:-translate-y-1`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/60 dark:bg-black/10 flex items-center justify-center mb-8 shadow-sm border border-white/20">
                <item.icon size={28} strokeWidth={2.5} className="text-accent-black" />
              </div>

              <h3 className="text-2xl font-extrabold text-accent-black mb-4">
                {item.title}
              </h3>

              <p className="text-sm font-medium text-accent-black/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
