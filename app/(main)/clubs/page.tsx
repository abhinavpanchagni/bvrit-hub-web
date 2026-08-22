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
  "Sports",
];

const clubs = [

  {
    name: "Coding Brigade BVRIT",
    category: "Technical",
    icon: "⚡",
    image: "/clubs/coding-brigade.png",
    description: "Competitive programming, open source, hackathons and technical problem solving.",
    skills: ["CP", "Open Source", "Projects", "Problem Solving"],
    status: "Active",
    instagram: "",
    linkedin: "",
    website: "",
    email: "",
  },
  {
    name: "E-cell Bvrit",
    category: "Entrepreneurship",
    icon: "🚀",
    image: "/clubs/ecell.png",
    description: "Build startups, attend business workshops and transform ideas into products.",
    skills: ["Startups", "Pitching", "Leadership", "Innovation"],
    status: "Active",
    instagram: "https://www.instagram.com/ecell_bvrit?igsh=bnQxOHhsZzBkdGxu",
    linkedin: "",
    website: "",
    email: "",
  },
  {
    name: "Toastmasters",
    category: "Communication",
    icon: "🎤",
    image: "/clubs/toastmasters.png",
    description: "Improve public speaking, leadership and communication through weekly meetings.",
    skills: ["Speaking", "Leadership", "Confidence", "Communication"],
    status: "Active",
    instagram: "https://www.instagram.com/bvritn_toastmasters?igsh=aGs4OWhocXBtZzR1",
    linkedin: "",
    website: "",
    email: "",
  },

  {
    name: "NSS",
    category: "Social",
    icon: "❤️",
    image: "/clubs/nss.png",
    description: "Serve society through social service, awareness campaigns and volunteering.",
    skills: ["Leadership", "Service", "Management", "Teamwork"],
    status: "Coming Soon",
    instagram: "",
    linkedin: "",
    website: "",
    email: "",
  },
  {
    name: "Cultural Club BVRIT",
    category: "Cultural",
    icon: "🎭",
    image: "/clubs/ccbvrit.png",
    description: "The official cultural club of BVRIT. Representing dance, music, arts and diverse cultural activities.",
    skills: ["Dance", "Music", "Arts", "Events"],
    status: "Active",
    instagram: "https://www.instagram.com/ccbvrit_official?igsh=djhueXY0bTZ3d3Zi",
    linkedin: "",
    website: "",
    email: "",
  },
  {
    name: "Enlightening Lives Club",
    category: "Social",
    icon: "🤝",
    image: "/clubs/enlightening-lives.png",
    description: "An NGO-related student organization dedicated to social work, community service and enlightening lives.",
    skills: ["Social Work", "Volunteering", "Leadership", "Community"],
    status: "Active",
    instagram: "https://www.instagram.com/el_bvritn?igsh=cjc5a2l5OW82aGIz",
    linkedin: "",
    website: "",
    email: "",
  },
  {
    name: "Musically Bvrit",
    category: "Cultural",
    icon: "🎵",
    image: "/clubs/musically.png",
    description: "The official singing and music club of BVRIT. A platform to showcase your musical talents.",
    skills: ["Singing", "Music", "Performance"],
    status: "Active",
    instagram: "https://www.instagram.com/musically_bvrit?igsh=dmE1N3h6YXRveTg5",
    linkedin: "",
    website: "",
    email: "",
  },
  {
    name: "MHC (Mental Health Club)",
    category: "Social",
    icon: "🧠",
    image: "/clubs/mhc.png",
    description: "Promoting mental health awareness, well-being, and providing a safe space for students.",
    skills: ["Awareness", "Well-being", "Support"],
    status: "Active",
    instagram: "https://www.instagram.com/mhc.bvrit?igsh=MWttNGozYWw3NjYxZg==",
    linkedin: "",
    website: "",
    email: "",
  },
  {
    name: "Impulse Bvrit",
    category: "Communication",
    icon: "💡",
    image: "/clubs/impulse.png",
    description: "Case Study Analysis and Group Discussion Club.",
    skills: ["Case Studies", "Group Discussion", "Analysis", "Communication"],
    status: "Active",
    instagram: "https://www.instagram.com/impulsebvrit?igsh=ZzUycmZuaHJiYzBy",
    linkedin: "",
    website: "",
    email: "",
  },
  {
    name: "Chalana Chitram",
    category: "Cultural",
    icon: "🎬",
    image: "/clubs/chalana-chitram.png",
    description: "The official movie club. Explore cinema, filmmaking, and storytelling.",
    skills: ["Movies", "Filmmaking", "Reviewing"],
    status: "Active",
    instagram: "https://www.instagram.com/chalana.chithram.bvrit?igsh=MTdiZDFjeWd6MnpiaQ==",
    linkedin: "",
    website: "",
    email: "",
  },
  {
    name: "Bvrit - Media",
    category: "Communication",
    icon: "📸",
    image: "/clubs/bvrit-media.png",
    description: "The official media and photography club capturing the essence of campus life.",
    skills: ["Photography", "Media", "Editing"],
    status: "Active",
    instagram: "https://www.Instagram.com/my_bvrit?igsh=NWV0ZWthOHNxOTN3",
    linkedin: "",
    website: "",
    email: "",
  },
  {
    name: "Anime Club",
    category: "Cultural",
    icon: "🎌",
    image: "/clubs/anime.png",
    description: "A community for anime enthusiasts to discuss, watch, and celebrate anime culture.",
    skills: ["Anime", "Manga", "Pop Culture"],
    status: "Active",
    instagram: "https://www.instagram.com/animeclub_bvrit?igsh=aWxlanllM2plNTJk",
    linkedin: "",
    website: "",
    email: "",
  },
  {
    name: "Game Changers Bvrit",
    category: "Sports",
    icon: "🏅",
    image: "/clubs/gamechangers.png",
    description: "The official sports club of BVRIT. Encouraging athleticism, teamwork, and competitive spirit.",
    skills: ["Sports", "Athletics", "Teamwork"],
    status: "Active",
    instagram: "https://www.instagram.com/gamechangers_bvrit?igsh=MTRiOTJsbWUyd2NzcQ==",
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
      <section className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-20">
        <div className="inline-flex rounded-lg md:rounded-xl border border-border/10 bg-surface-yellow px-3 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-bold shadow-sm">
          STUDENT LIFE @ BVRIT
        </div>
        <h1 className="mt-6 md:mt-8 text-4xl md:text-7xl font-extrabold leading-none lg:text-8xl tracking-tight">
          FIND
          <br />
          YOUR
          <br />
          COMMUNITY.
        </h1>
        <p className="mt-6 md:mt-8 max-w-3xl text-lg md:text-xl leading-7 md:leading-8 text-text-secondary font-medium">
          Beyond academics, BVRIT offers clubs that help you become a better
          engineer, leader, entrepreneur, speaker and teammate. Explore every
          opportunity and discover where you belong.
        </p>
        
        <div className="mt-8 md:mt-12 flex flex-wrap gap-3 md:gap-5">
          <div className="rounded-xl md:rounded-2xl border border-border/10 bg-white px-5 py-4 md:px-8 md:py-5 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex-1 min-w-[120px]">
            <h2 className="text-3xl md:text-4xl font-black text-accent-black">9+</h2>
            <p className="text-xs md:text-base font-bold text-text-secondary mt-1">Student Clubs</p>
          </div>
          <div className="rounded-xl md:rounded-2xl border border-border/10 bg-white px-5 py-4 md:px-8 md:py-5 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex-1 min-w-[120px]">
            <h2 className="text-3xl md:text-4xl font-black text-accent-black">100+</h2>
            <p className="text-xs md:text-base font-bold text-text-secondary mt-1">Events / Year</p>
          </div>
          <div className="rounded-xl md:rounded-2xl border border-border/10 bg-white px-5 py-4 md:px-8 md:py-5 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex-1 min-w-[120px]">
            <h2 className="text-3xl md:text-4xl font-black text-accent-black">∞</h2>
            <p className="text-xs md:text-base font-bold text-text-secondary mt-1">Opportunities</p>
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="mx-auto max-w-7xl px-6 relative z-30 pb-4">
        <div className="flex overflow-x-auto md:flex-wrap gap-1.5 md:gap-3 bg-bg/80 backdrop-blur-md p-1.5 md:p-2 rounded-full md:rounded-[2rem] border border-border/10 shadow-sm scrollbar-hide">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActiveCategory(item)}
              className={`relative px-3 py-1.5 md:px-6 md:py-3 rounded-full font-bold text-xs md:text-sm transition-all duration-300 overflow-hidden shrink-0 ${
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
              className="mb-8 rounded-3xl md:rounded-[2.5rem] border border-border/10 bg-surface-yellow p-6 md:p-10 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col gap-8 md:gap-12 lg:flex-row">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6 md:mb-8">
                    <img 
                      src="/clubs/vvlf.png" 
                      alt="VVLF Logo" 
                      className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-xl bg-white shadow-sm border border-border/10 p-1"
                    />
                    <span className="rounded-lg border border-border/10 bg-white px-3 py-1.5 md:px-4 md:py-2 font-bold text-xs md:text-sm shadow-sm h-fit">
                      FEATURED ORGANIZATION
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                    Vishnu Venture Labs Foundation
                  </h2>
                  <p className="mt-4 md:mt-6 text-base md:text-lg leading-7 md:leading-8 font-medium text-text-primary/80">
                    VVLF is the startup incubation center of BVRIT helping students,
                    innovators and researchers transform ideas into successful
                    startups through mentorship, funding support, industry
                    connections and world-class infrastructure.
                  </p>
                  
                  <div className="mt-8 md:mt-10 grid gap-4 md:gap-5 md:grid-cols-3">
                    <div className="rounded-xl md:rounded-2xl border border-border/10 bg-white p-5 md:p-6 shadow-sm hover:-translate-y-1 transition-transform md:aspect-square flex flex-col justify-center">
                      <h3 className="text-lg md:text-xl font-extrabold text-accent-black">Vision</h3>
                      <p className="mt-2 md:mt-3 text-xs md:text-sm font-medium text-text-secondary">
                        Build a world-class innovation ecosystem that creates
                        impactful startups.
                      </p>
                    </div>
                    <div className="rounded-xl md:rounded-2xl border border-border/10 bg-white p-5 md:p-6 shadow-sm hover:-translate-y-1 transition-transform md:aspect-square flex flex-col justify-center">
                      <h3 className="text-lg md:text-xl font-extrabold text-accent-black">Mission</h3>
                      <p className="mt-2 md:mt-3 text-xs md:text-sm font-medium text-text-secondary">
                        Support founders from idea validation to successful
                        businesses.
                      </p>
                    </div>
                    <div className="rounded-xl md:rounded-2xl border border-border/10 bg-white p-5 md:p-6 shadow-sm hover:-translate-y-1 transition-transform md:aspect-square flex flex-col justify-center">
                      <h3 className="text-lg md:text-xl font-extrabold text-accent-black">Who Can Apply?</h3>
                      <p className="mt-2 md:mt-3 text-xs md:text-sm font-medium text-text-secondary">
                        Every BVRIT student with an innovative idea.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full rounded-2xl md:rounded-[2rem] border border-border/10 bg-white p-6 md:p-8 lg:w-[380px] shadow-sm shrink-0 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-extrabold">Focus Areas</h3>
                  <div className="mt-5 md:mt-6 flex flex-wrap gap-2">
                    {[
                      "AI", "IoT", "Robotics", "Deep Tech", 
                      "Semiconductors", "Green Tech", "Startups"
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-black/5 px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-bold text-text-secondary hover:bg-black/10 transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 md:mt-auto pt-4 md:pt-10 space-y-2 md:space-y-3">
                    <a href="https://vishnuventurelabs.com/" target="_blank" rel="noopener noreferrer" className="block w-full text-center rounded-xl md:rounded-2xl border border-border/10 bg-accent-black py-2.5 md:py-4 px-4 font-bold text-bg text-sm md:text-base transition-transform hover:-translate-y-1 hover:shadow-lg active:scale-95">
                      Visit Website
                    </a>
                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                      <button className="w-full rounded-xl md:rounded-2xl border border-border/10 bg-white py-2 md:py-3.5 px-2 md:px-3 font-bold text-xs md:text-sm transition-transform hover:-translate-y-1 shadow-sm active:scale-95">
                        Instagram
                      </button>
                      <button className="w-full rounded-xl md:rounded-2xl border border-border/10 bg-white py-2 md:py-3.5 px-2 md:px-3 font-bold text-xs md:text-sm transition-transform hover:-translate-y-1 shadow-sm active:scale-95">
                        LinkedIn
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* GRID OF CARDS */}
          <motion.div layout className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredClubs.map((club) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
                  key={club.name}
                  className="flex flex-col rounded-3xl md:rounded-[2.5rem] border border-border/10 bg-white p-5 md:p-8 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-5 md:mb-8">
                    <div className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-xl md:rounded-2xl border border-border/10 bg-surface-lavender/50 text-2xl md:text-3xl shadow-sm transition-transform group-hover:scale-105 overflow-hidden">
                      {(club as any).image ? (
                        <img src={(club as any).image} alt={club.name} className="w-full h-full object-cover" />
                      ) : (
                        club.icon
                      )}
                    </div>
                    <span className="rounded-full border border-border/10 bg-surface-mint/30 px-2 py-1 md:px-3 md:py-1.5 text-[10px] md:text-xs font-bold text-accent-blue uppercase tracking-wider">
                      {club.status}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-extrabold text-text-primary tracking-tight">
                    {club.name}
                  </h3>
                  
                  <p className="mt-2 md:mt-3 text-text-secondary font-medium text-xs md:text-sm leading-relaxed flex-1">
                    {club.description}
                  </p>

                  <div className="mt-5 mb-5 md:mt-8 md:mb-8 flex flex-wrap gap-1.5 md:gap-2">
                    {club.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-black/5 px-2 py-1 md:px-3 md:py-1 text-[10px] md:text-xs font-bold text-text-secondary cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto grid grid-cols-2 gap-2 md:gap-3 pt-2">
                    <button className="w-full rounded-xl md:rounded-2xl border border-border/10 bg-accent-black py-2 md:py-3.5 px-2 md:px-3 font-bold text-bg text-xs md:text-sm transition-transform hover:-translate-y-1 hover:shadow-lg active:scale-95 text-center">
                      Learn More
                    </button>
                    {club.instagram ? (
                      <a 
                        href={club.instagram} 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-full rounded-xl md:rounded-2xl border border-border/10 bg-white py-2 md:py-3.5 px-2 md:px-3 font-bold text-xs md:text-sm transition-transform hover:-translate-y-1 hover:shadow-md shadow-sm active:scale-95 text-accent-blue text-center flex items-center justify-center"
                      >
                        Visit Instagram
                      </a>
                    ) : (
                      <button 
                        onClick={() => alert("Instagram link coming soon!")}
                        className="w-full rounded-xl md:rounded-2xl border border-border/10 bg-white py-2 md:py-3.5 px-2 md:px-3 font-bold text-xs md:text-sm transition-transform hover:-translate-y-1 hover:shadow-md shadow-sm active:scale-95 text-text-secondary text-center"
                      >
                        Visit Instagram
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto mt-10 max-w-7xl px-6 pb-20">
        <div className="rounded-3xl md:rounded-[2.5rem] border border-border/10 bg-accent-black p-8 md:p-14 text-center text-bg shadow-xl overflow-hidden relative">
          
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-surface-mint/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-surface-lavender/20 rounded-full blur-3xl pointer-events-none"></div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight relative z-10">
            Your College Journey Starts Here.
          </h2>

          <p className="mx-auto mt-4 md:mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-white/70 font-medium relative z-10">
            Join clubs, participate in events, build projects, meet amazing
            people and create memories that last beyond graduation.
          </p>


        </div>
      </section>
    </main>
  );
}