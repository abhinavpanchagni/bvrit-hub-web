import Link from "next/link";
import { ArrowRight, GraduationCap, Lightbulb, Trophy, Wrench } from "lucide-react";

const destinations = [
  { title: "Freshers Guide", description: "Practical answers for academics, campus life, transport, hostel and exams.", href: "/freshers", icon: GraduationCap },
  { title: "Student Toolkit", description: "Useful tools and resources for everyday student work.", href: "/toolkit", icon: Wrench },
  { title: "Clubs", description: "Discover technical, cultural and student communities on campus.", href: "/clubs", icon: Trophy },
  { title: "Suggestions Hub", description: "Share ideas and follow responses from the BVRIT Hub team.", href: "/suggestions-hub", icon: Lightbulb },
];

export default function ExplorePage() {
  return (
    <div className="mx-auto max-w-5xl py-4 pb-12">
      <header className="mb-10 max-w-2xl">
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-accent-blue">Explore</p>
        <h1 className="text-3xl font-extrabold tracking-tight text-text-primary md:text-4xl">Find what you need on campus.</h1>
        <p className="mt-3 text-text-secondary">Guides, tools, communities and ways to improve BVRIT Hub are collected here.</p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2">
        {destinations.map((destination) => (
          <Link key={destination.href} href={destination.href} className="group flex min-h-44 flex-col justify-between rounded-2xl border border-border bg-white p-6 transition-colors hover:border-accent-blue/40 hover:bg-blue-50/30">
            <destination.icon className="h-6 w-6 text-accent-blue" aria-hidden="true" />
            <div className="mt-8">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-text-primary">{destination.title}</h2>
                <ArrowRight className="h-4 w-4 text-text-secondary transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{destination.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
