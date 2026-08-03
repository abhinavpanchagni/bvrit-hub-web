"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All",
  "Technical",
  "Entrepreneurship",
  "Communication",
  "Cultural",
  "Social",
];

const clubs = [
  {
    name: "ACM Student Chapter",
    category: "Technical",
    icon: "💻",
    description: "International computing community organizing coding contests, workshops and technical events.",
    skills: ["DSA", "Programming", "Hackathons", "Projects"],
    status: "Coming Soon",
    instagram: "",
    linkedin: "",
    website: "",
    email: "",
  },
  {
    name: "CSI Student Chapter",
    category: "Technical",
    icon: "🖥️",
    description: "Professional body helping students explore software engineering and emerging technologies.",
    skills: ["Development", "Industry Talks", "Coding", "Networking"],
    status: "Coming Soon",
    instagram: "",
    linkedin: "",
    website: "",
    email: "",
  },
  {
    name: "Coding Club BVRIT",
    category: "Technical",
    icon: "⚡",
    description: "Competitive programming, open source, hackathons and technical problem solving.",
    skills: ["CP", "Open Source", "Projects", "Problem Solving"],
    status: "Coming Soon",
    instagram: "",
    linkedin: "",
    website: "",
    email: "",
  },
  {
    name: "Entrepreneurship Cell",
    category: "Entrepreneurship",
    icon: "🚀",
    description: "Build startups, attend business workshops and transform ideas into products.",
    skills: ["Startups", "Pitching", "Leadership", "Innovation"],
    status: "Coming Soon",
    instagram: "",
    linkedin: "",
    website: "",
    email: "",
  },
  {
    name: "Toastmasters",
    category: "Communication",
    icon: "🎤",
    description: "Improve public speaking, leadership and communication through weekly meetings.",
    skills: ["Speaking", "Leadership", "Confidence", "Communication"],
    status: "Coming Soon",
    instagram: "",
    linkedin: "",
    website: "",
    email: "",
  },
  {
    name: "Club InQuizitive",
    category: "Communication",
    icon: "🧠",
    description: "Corporate awareness, quizzes, interview preparation and personality development.",
    skills: ["Corporate", "Interviews", "Quizzes", "Communication"],
    status: "Coming Soon",
    instagram: "",
    linkedin: "",
    website: "",
    email: "",
  },
  {
    name: "Dance Club",
    category: "Cultural",
    icon: "💃",
    description: "Represent BVRIT in cultural festivals and showcase your talent.",
    skills: ["Dance", "Stage", "Creativity", "Teamwork"],
    status: "Coming Soon",
    instagram: "",
    linkedin: "",
    website: "",
    email: "",
  },
  {
    name: "Music & Singing Club",
    category: "Cultural",
    icon: "🎵",
    description: "Platform for singers and musicians to perform and collaborate.",
    skills: ["Music", "Vocals", "Performance", "Creativity"],
    status: "Coming Soon",
    instagram: "",
    linkedin: "",
    website: "",
    email: "",
  },
  {
    name: "NSS",
    category: "Social",
    icon: "❤️",
    description: "Serve society through social service, awareness campaigns and volunteering.",
    skills: ["Leadership", "Service", "Management", "Teamwork"],
    status: "Coming Soon",
    instagram: "",
    linkedin: "",
    website: "",
    email: "",
  },
];

export default function ClubsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredClubs = clubs.filter(
    (club) => activeCategory === "All" || club.category === activeCategory
  );

  return (
    <main className="min-h-screen bg-bg text-text-primary">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="inline-flex rounded-xl border border-border/10 bg-surface-yellow px-5 py-2 font-bold shadow-sm">
          STUDENT LIFE @ BVRIT
        </div>
        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-none lg:text-8xl tracking-tight">
          FIND
          <br />
          YOUR
          <br />
          COMMUNITY.
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-8 text-text-secondary font-medium">
          Beyond academics, BVRIT offers clubs that help you become a better
          engineer, leader, entrepreneur, speaker and teammate. Explore every
          opportunity and discover where you belong.
        </p>
        
        <div className="mt-12 flex flex-wrap gap-5">
          <div className="rounded-2xl border border-border/10 bg-white px-8 py-5 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <h2 className="text-4xl font-black text-accent-black">9+</h2>
            <p className="font-bold text-text-secondary mt-1">Student Clubs</p>
          </div>
          <div className="rounded-2xl border border-border/10 bg-white px-8 py-5 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <h2 className="text-4xl font-black text-accent-black">100+</h2>
            <p className="font-bold text-text-secondary mt-1">Events Every Year</p>
          </div>
          <div className="rounded-2xl border border-border/10 bg-white px-8 py-5 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <h2 className="text-4xl font-black text-accent-black">∞</h2>
            <p className="font-bold text-text-secondary mt-1">Opportunities</p>
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="mx-auto max-w-7xl px-6 relative z-30 pb-4">
        <div className="flex overflow-x-auto md:flex-wrap gap-2 md:gap-3 bg-bg/80 backdrop-blur-md p-2 rounded-[2rem] border border-border/10 shadow-sm">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActiveCategory(item)}
              className={`relative px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 overflow-hidden shrink-0 ${
                activeCategory === item
                  ? "text-bg shadow-sm"
                  : "text-text-secondary hover:bg-black/5 hover:text-text-primary"
              }`}
            >
              {activeCategory === item && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-accent-black rounded-full z-0"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item}</span>
            </button>
          ))}
        </div>
      </section>

      {/* CLUBS GRID */}
      <section className="mx-auto mt-10 max-w-7xl px-6 pb-24">
        
        <AnimatePresence mode="popLayout">
          {/* FEATURED VVLF - Only shows when All or Entrepreneurship is active */}
          {(activeCategory === "All" || activeCategory === "Entrepreneurship") && (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
              className="mb-8 rounded-[2.5rem] border border-border/10 bg-surface-yellow p-10 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col gap-12 lg:flex-row">
                <div className="flex-1">
                  <span className="rounded-lg border border-border/10 bg-white px-4 py-2 font-bold text-sm shadow-sm">
                    FEATURED ORGANIZATION
                  </span>
                  <h2 className="mt-8 text-5xl font-extrabold tracking-tight">
                    Vishnu Venture Labs Foundation
                  </h2>
                  <p className="mt-6 text-lg leading-8 font-medium text-text-primary/80">
                    VVLF is the startup incubation center of BVRIT helping students,
                    innovators and researchers transform ideas into successful
                    startups through mentorship, funding support, industry
                    connections and world-class infrastructure.
                  </p>
                  
                  <div className="mt-10 grid gap-5 md:grid-cols-3">
                    <div className="rounded-2xl border border-border/10 bg-white p-6 shadow-sm hover:-translate-y-1 transition-transform">
                      <h3 className="text-xl font-extrabold text-accent-black">Vision</h3>
                      <p className="mt-3 text-sm font-medium text-text-secondary">
                        Build a world-class innovation ecosystem that creates
                        impactful startups.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-border/10 bg-white p-6 shadow-sm hover:-translate-y-1 transition-transform">
                      <h3 className="text-xl font-extrabold text-accent-black">Mission</h3>
                      <p className="mt-3 text-sm font-medium text-text-secondary">
                        Support founders from idea validation to successful
                        businesses.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-border/10 bg-white p-6 shadow-sm hover:-translate-y-1 transition-transform">
                      <h3 className="text-xl font-extrabold text-accent-black">Who Can Apply?</h3>
                      <p className="mt-3 text-sm font-medium text-text-secondary">
                        Every BVRIT student with an innovative idea.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full rounded-[2rem] border border-border/10 bg-white p-8 lg:w-[380px] shadow-sm shrink-0 flex flex-col">
                  <h3 className="text-2xl font-extrabold">Focus Areas</h3>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "AI", "IoT", "Robotics", "Deep Tech", 
                      "Semiconductors", "Green Tech", "Startups"
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-black/5 px-4 py-1.5 text-xs font-bold text-text-secondary hover:bg-black/10 transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-10 space-y-3">
                    <button className="w-full rounded-2xl border border-border/10 bg-accent-black py-4 font-bold text-bg transition-transform hover:-translate-y-1 hover:shadow-lg active:scale-95">
                      Visit Website
                    </button>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="w-full rounded-2xl border border-border/10 bg-white py-3.5 font-bold text-sm transition-transform hover:-translate-y-1 shadow-sm active:scale-95">
                        Instagram
                      </button>
                      <button className="w-full rounded-2xl border border-border/10 bg-white py-3.5 font-bold text-sm transition-transform hover:-translate-y-1 shadow-sm active:scale-95">
                        LinkedIn
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* GRID OF CARDS */}
          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredClubs.map((club) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
                  key={club.name}
                  className="flex flex-col rounded-[2.5rem] border border-border/10 bg-white p-8 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border/10 bg-surface-lavender/50 text-3xl shadow-sm transition-transform group-hover:scale-105">
                      {club.icon}
                    </div>
                    <span className="rounded-full border border-border/10 bg-surface-mint/30 px-3 py-1.5 text-xs font-bold text-accent-blue uppercase tracking-wider">
                      {club.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-text-primary tracking-tight">
                    {club.name}
                  </h3>
                  
                  <p className="mt-3 text-text-secondary font-medium text-sm leading-relaxed flex-1">
                    {club.description}
                  </p>

                  <div className="mt-8 mb-8 flex flex-wrap gap-2">
                    {club.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-black/5 px-3 py-1 text-xs font-bold text-text-secondary cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto grid grid-cols-2 gap-3 pt-2">
                    <button className="w-full rounded-2xl border border-border/10 bg-accent-black py-3.5 font-bold text-bg text-sm transition-transform hover:-translate-y-1 hover:shadow-lg active:scale-95">
                      Learn More
                    </button>
                    <button className="w-full rounded-2xl border border-border/10 bg-white py-3.5 font-bold text-sm transition-transform hover:-translate-y-1 hover:shadow-md shadow-sm active:scale-95 text-text-primary">
                      Join
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto mt-10 max-w-7xl px-6 pb-20">
        <div className="rounded-[2.5rem] border border-border/10 bg-accent-black p-14 text-center text-bg shadow-xl overflow-hidden relative">
          
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-surface-mint/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-surface-lavender/20 rounded-full blur-3xl pointer-events-none"></div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight relative z-10">
            Your College Journey Starts Here.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/70 font-medium relative z-10">
            Join clubs, participate in events, build projects, meet amazing
            people and create memories that last beyond graduation.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 relative z-10">
            <Link
              href="/community"
              className="rounded-2xl border border-white/20 bg-white px-8 py-4 font-bold text-accent-black transition-transform hover:-translate-y-1 hover:shadow-xl shadow-lg active:scale-95"
            >
              Explore Community
            </Link>
            <Link
              href="/"
              className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition-transform hover:-translate-y-1 hover:bg-white/20 active:scale-95"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}