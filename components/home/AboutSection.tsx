import { GraduationCap, Rocket, Archive, Package, BarChart2, Bookmark, Bell } from "lucide-react";

export default function AboutSection() {
  const cards = [
    {
      title: "Student Built",
      description:
        "Created by BVRIT students to solve the problem of scattered academic resources.",
      icon: GraduationCap,
      color: "bg-surface-mint",
    },
    {
      title: "Our Mission",
      description:
        "To make engineering simpler by providing every important academic resource in one organized platform.",
      icon: Rocket,
      color: "bg-surface-lavender",
    },
    {
      title: "Version 1",
      description:
        "Freshers Starter Pack, semester resources, labs, dashboard and much more.",
      icon: Archive,
      color: "bg-surface-peach",
    },
  ];

  return (
    <section className="py-24 relative scroll-reveal">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center flex flex-col items-center mb-16">
          <span className="font-bold text-xs uppercase tracking-wider text-accent-blue mb-4">
            About BVRIT Hub
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 max-w-4xl leading-tight">
            Built By Students.<br />Built For Students.
          </h2>

          <p className="mx-auto text-lg text-text-secondary font-medium max-w-3xl">
            BVRIT Hub was created to solve one common problem faced by almost
            every engineering student — finding the right resources at the right
            time. Instead of searching through multiple WhatsApp groups, Google
            Drive folders and websites, everything is available in one place.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mb-16">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`${card.color} rounded-[2.5rem] p-10 shadow-sm border border-border/10 flex flex-col items-start transition-transform hover:-translate-y-1`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/60 dark:bg-black/10 flex items-center justify-center mb-8 shadow-sm border border-white/20">
                <card.icon size={28} strokeWidth={2.5} className="text-accent-black" />
              </div>

              <h3 className="text-2xl font-extrabold text-text-primary mb-3">
                {card.title}
              </h3>

              <p className="text-sm font-medium text-text-secondary leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-[#1A1A1A] rounded-[2.5rem] p-10 lg:p-14 shadow-sm border border-border/10 text-center">
          <h3 className="text-3xl font-extrabold text-text-primary mb-10">
            Upcoming Features
          </h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16 max-w-5xl mx-auto text-left">
            <div className="bg-surface-mint/20 border border-surface-mint/50 py-4 px-6 rounded-2xl flex items-center gap-3">
              <Package size={20} className="text-accent-blue" />
              <span className="font-bold text-sm text-text-primary">Study Packs</span>
            </div>
            <div className="bg-surface-lavender/20 border border-surface-lavender/50 py-4 px-6 rounded-2xl flex items-center gap-3">
              <BarChart2 size={20} className="text-accent-blue" />
              <span className="font-bold text-sm text-text-primary">Progress Tracking</span>
            </div>
            <div className="bg-surface-peach/20 border border-surface-peach/50 py-4 px-6 rounded-2xl flex items-center gap-3">
              <Bookmark size={20} className="text-accent-blue" />
              <span className="font-bold text-sm text-text-primary">Bookmarks</span>
            </div>
            <div className="bg-surface-yellow/20 border border-surface-yellow/50 py-4 px-6 rounded-2xl flex items-center gap-3">
              <Bell size={20} className="text-accent-blue" />
              <span className="font-bold text-sm text-text-primary">Notifications</span>
            </div>
          </div>

          <div className="bg-surface-mint border border-border/10 rounded-2xl p-8 max-w-xl mx-auto shadow-sm">
            <h4 className="text-xl font-extrabold text-text-primary mb-1">
              Contact
            </h4>
            <p className="text-sm font-medium text-text-secondary">
              bvrithub@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
