import Link from "next/link";

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
    description:
      "International computing community organizing coding contests, workshops and technical events.",
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
    description:
      "Professional body helping students explore software engineering and emerging technologies.",
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
    description:
      "Competitive programming, open source, hackathons and technical problem solving.",
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
    description:
      "Build startups, attend business workshops and transform ideas into products.",
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
    description:
      "Improve public speaking, leadership and communication through weekly meetings.",
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
    description:
      "Corporate awareness, quizzes, interview preparation and personality development.",
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
    description:
      "Represent BVRIT in cultural festivals and showcase your talent.",
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
    description:
      "Platform for singers and musicians to perform and collaborate.",
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
    description:
      "Serve society through social service, awareness campaigns and volunteering.",
    skills: ["Leadership", "Service", "Management", "Teamwork"],
    status: "Coming Soon",
    instagram: "",
    linkedin: "",
    website: "",
    email: "",
  },
];

export default function ClubsPage() {
  return (
    <main className="min-h-screen bg-white text-text-primary">

      {/* HERO */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="inline-flex rounded-xl border border-border/10 bg-surface-yellow px-5 py-2 font-bold shadow-sm">
          STUDENT LIFE @ BVRIT
        </div>

        <h1 className="mt-8 text-7xl font-extrabold leading-none lg:text-8xl">
          FIND
          <br />
          YOUR
          <br />
          COMMUNITY.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-8">
          Beyond academics, BVRIT offers clubs that help you become a better
          engineer, leader, entrepreneur, speaker and teammate. Explore every
          opportunity and discover where you belong.
        </p>

        <div className="mt-12 flex flex-wrap gap-5">

          <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white px-8 py-5 shadow-sm">
            <h2 className="text-4xl font-extrabold">9+</h2>
            <p className="font-semibold">Student Clubs</p>
          </div>

          <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white px-8 py-5 shadow-sm">
            <h2 className="text-4xl font-extrabold">100+</h2>
            <p className="font-semibold">Events Every Year</p>
          </div>

          <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white px-8 py-5 shadow-sm">
            <h2 className="text-4xl font-extrabold">∞</h2>
            <p className="font-semibold">Opportunities</p>
          </div>

        </div>

      </section>

      {/* CATEGORY PILLS */}

      <section className="mx-auto max-w-7xl px-6">

        <div className="flex flex-wrap gap-4">

          {categories.map((item) => (
            <button
              key={item}
              className="rounded-full border border-border/10 bg-white px-6 py-3 font-bold transition hover:bg-black hover:text-bg"
            >
              {item}
            </button>
          ))}

        </div>

      </section>

      {/* FEATURED VVLF */}

      <section className="mx-auto mt-20 max-w-7xl px-6">

        <div className="rounded-[2.5rem] border border-border/10 bg-surface-yellow p-10 shadow-sm">

          <div className="flex flex-col gap-12 lg:flex-row">

            <div className="flex-1">

              <span className="rounded-lg border border-border/10 bg-white px-4 py-2 font-bold">
                FEATURED ORGANIZATION
              </span>

              <h2 className="mt-6 text-5xl font-extrabold">
                Vishnu Venture Labs Foundation
              </h2>

              <p className="mt-6 text-lg leading-8">
                VVLF is the startup incubation center of BVRIT helping students,
                innovators and researchers transform ideas into successful
                startups through mentorship, funding support, industry
                connections and world-class infrastructure.
              </p>

              <div className="mt-10 grid gap-5 md:grid-cols-3">

                <div className="rounded-xl border border-border/10 bg-white p-5">
                  <h3 className="text-xl font-extrabold">
                    Vision
                  </h3>

                  <p className="mt-3">
                    Build a world-class innovation ecosystem that creates
                    impactful startups.
                  </p>
                </div>

                <div className="rounded-xl border border-border/10 bg-white p-5">
                  <h3 className="text-xl font-extrabold">
                    Mission
                  </h3>

                  <p className="mt-3">
                    Support founders from idea validation to successful
                    businesses.
                  </p>
                </div>

                <div className="rounded-xl border border-border/10 bg-white p-5">
                  <h3 className="text-xl font-extrabold">
                    Who Can Apply?
                  </h3>

                  <p className="mt-3">
                    Every BVRIT student with an innovative idea.
                  </p>
                </div>

              </div>

            </div>

            <div className="w-full rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-8 lg:w-[380px]">

              <h3 className="text-3xl font-extrabold">
                Focus Areas
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">

                {[
                  "AI",
                  "IoT",
                  "Robotics",
                  "Deep Tech",
                  "Semiconductors",
                  "Green Tech",
                  "Assistive Tech",
                  "Startups",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/10 px-4 py-2 font-bold"
                  >
                    {item}
                  </span>
                ))}

              </div>

              <div className="mt-10 space-y-4">

                <button className="w-full rounded-xl border border-border/10 bg-black py-4 font-bold text-bg">
                  Visit Website
                </button>

                <button className="w-full rounded-xl border border-border/10 bg-white py-4 font-bold">
                  Instagram
                </button>

                <button className="w-full rounded-xl border border-border/10 bg-white py-4 font-bold">
                  LinkedIn
                </button>

                <button className="w-full rounded-xl border border-border/10 bg-white py-4 font-bold">
                  Contact
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* TECHNICAL CLUBS */}

      <section className="mx-auto mt-24 max-w-7xl px-6">

        <div className="mb-10 flex items-center justify-between">

          <div>
            <h2 className="text-5xl font-extrabold">Technical Clubs</h2>
            <p className="mt-3 text-lg">
              Learn technology, coding, AI and software development.
            </p>
          </div>

          <div className="rounded-xl border border-border/10 bg-surface-mint px-5 py-2 font-bold">
            3 Clubs
          </div>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {clubs
            .filter((club) => club.category === "Technical")
            .map((club) => (

              <div
                key={club.name}
                className="rounded-[2.5rem] border border-border/10 bg-white p-8 shadow-sm"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-surface-yellow text-3xl">
                    {club.icon}
                  </div>

                  <span className="rounded-full border border-border/10 bg-surface-mint px-4 py-2 text-sm font-bold">
                    {club.status}
                  </span>

                </div>

                <h3 className="mt-6 text-3xl font-extrabold">
                  {club.name}
                </h3>

                <p className="mt-5 leading-7">
                  {club.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  {club.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border/10 px-4 py-2 text-sm font-bold"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

                <div className="mt-8 rounded-xl border border-border/10 bg-[#f8f8f8] p-5">

                  <p className="font-extrabold">Quick Information</p>

                  <div className="mt-4 space-y-2 text-sm">

                    <p>📍 Recruitment : Every Academic Year</p>

                    <p>🎓 Open For : All Branches</p>

                    <p>👥 Team : Student Driven</p>

                  </div>

                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">

                  <button className="rounded-xl border border-border/10 bg-black py-3 font-bold text-bg">
                    Learn More
                  </button>

                  <button className="rounded-xl border border-border/10 py-3 font-bold">
                    Join
                  </button>

                  <button
                    disabled={!club.instagram}
                    className="rounded-xl border border-border/10 py-3 font-bold disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Instagram
                  </button>

                  <button
                    disabled={!club.website}
                    className="rounded-xl border border-border/10 py-3 font-bold disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Website
                  </button>

                </div>

              </div>

            ))}

        </div>

      </section>

      {/* ENTREPRENEURSHIP */}

      <section className="mx-auto mt-24 max-w-7xl px-6">

        <div className="mb-10">

          <h2 className="text-5xl font-extrabold">
            Entrepreneurship
          </h2>

          <p className="mt-3 text-lg">
            Build startups and solve real-world problems.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {clubs
            .filter((club) => club.category === "Entrepreneurship")
            .map((club) => (

              <div
                key={club.name}
                className="rounded-[2.5rem] border border-border/10 bg-surface-yellow p-10 shadow-sm"
              >

                <div className="text-6xl">
                  {club.icon}
                </div>

                <h3 className="mt-6 text-4xl font-extrabold">
                  {club.name}
                </h3>

                <p className="mt-5 text-lg leading-8">
                  {club.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  {club.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border/10 bg-white px-4 py-2 font-bold"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

                <div className="mt-10 flex gap-4">

                  <button className="rounded-xl border border-border/10 bg-black px-6 py-3 font-bold text-bg">
                    Learn More
                  </button>

                  <button className="rounded-xl border border-border/10 bg-white px-6 py-3 font-bold">
                    Instagram
                  </button>

                </div>

              </div>

            ))}

        </div>

      </section>
            {/* COMMUNICATION CLUBS */}

      <section className="mx-auto mt-24 max-w-7xl px-6">

        <div className="mb-10 flex items-center justify-between">

          <div>
            <h2 className="text-5xl font-extrabold">Communication & Leadership</h2>
            <p className="mt-3 text-lg">
              Become a confident speaker, leader and communicator.
            </p>
          </div>

          <div className="rounded-xl border border-border/10 bg-surface-yellow px-5 py-2 font-bold">
            2 Clubs
          </div>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {clubs
            .filter((club) => club.category === "Communication")
            .map((club) => (

              <div
                key={club.name}
                className="rounded-[2.5rem] border border-border/10 bg-white p-8 shadow-sm"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-surface-yellow text-3xl">
                    {club.icon}
                  </div>

                  <span className="rounded-full border border-border/10 bg-surface-mint px-4 py-2 font-bold">
                    {club.status}
                  </span>

                </div>

                <h3 className="mt-6 text-3xl font-extrabold">
                  {club.name}
                </h3>

                <p className="mt-5 leading-7">
                  {club.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  {club.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border/10 px-4 py-2 font-bold"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">

                  <button className="rounded-xl border border-border/10 bg-black py-3 font-bold text-bg">
                    Learn More
                  </button>

                  <button className="rounded-xl border border-border/10 py-3 font-bold">
                    Join
                  </button>

                </div>

              </div>

            ))}

        </div>

      </section>

      {/* CULTURAL CLUBS */}

      <section className="mx-auto mt-24 max-w-7xl px-6">

        <div className="mb-10">

          <h2 className="text-5xl font-extrabold">
            Cultural Clubs
          </h2>

          <p className="mt-3 text-lg">
            Express your creativity through music and dance.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {clubs
            .filter((club) => club.category === "Cultural")
            .map((club) => (

              <div
                key={club.name}
                className="rounded-[2.5rem] border border-border/10 bg-surface-mint p-8 shadow-sm"
              >

                <div className="text-6xl">
                  {club.icon}
                </div>

                <h3 className="mt-6 text-4xl font-extrabold">
                  {club.name}
                </h3>

                <p className="mt-5 text-lg leading-8">
                  {club.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  {club.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border/10 bg-white px-4 py-2 font-bold"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

                <button className="mt-10 rounded-xl border border-border/10 bg-white px-6 py-3 font-bold">
                  Learn More
                </button>

              </div>

            ))}

        </div>

      </section>

      {/* SOCIAL CLUBS */}

      <section className="mx-auto mt-24 max-w-7xl px-6">

        <div className="mb-10">

          <h2 className="text-5xl font-extrabold">
            Social Service
          </h2>

          <p className="mt-3 text-lg">
            Make a positive impact on society through volunteering.
          </p>

        </div>

        {clubs
          .filter((club) => club.category === "Social")
          .map((club) => (

            <div
              key={club.name}
              className="rounded-[2.5rem] border border-border/10 bg-white p-10 shadow-sm"
            >

              <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <div className="text-6xl">
                    {club.icon}
                  </div>

                  <h3 className="mt-5 text-5xl font-extrabold">
                    {club.name}
                  </h3>

                  <p className="mt-5 max-w-3xl text-lg leading-8">
                    {club.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">

                    {club.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border/10 px-4 py-2 font-bold"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>

                <div className="space-y-4">

                  <button className="w-60 rounded-xl border border-border/10 bg-black py-4 font-bold text-bg">
                    Learn More
                  </button>

                  <button className="w-60 rounded-xl border border-border/10 bg-surface-yellow py-4 font-bold">
                    Volunteer
                  </button>

                </div>

              </div>

            </div>

          ))}

      </section>

      {/* FINAL CTA */}

      <section className="mx-auto mt-24 max-w-7xl px-6 pb-20">

        <div className="rounded-[2.5rem] border border-border/10 bg-black p-14 text-center text-bg shadow-sm">

          <h2 className="text-5xl font-extrabold md:text-6xl">
            Your College Journey Starts Here.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8">
            Join clubs, participate in events, build projects, meet amazing
            people and create memories that last beyond graduation.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              href="/community"
              className="rounded-xl border-2 border-white bg-white px-8 py-4 font-bold text-text-primary transition hover:-translate-y-1"
            >
              Explore Community
            </Link>

            <Link
              href="/"
              className="rounded-xl border-2 border-white px-8 py-4 font-bold transition hover:-translate-y-1"
            >
              Back To Home
            </Link>

          </div>

          <p className="mt-12 text-sm opacity-90">
            © 2026 BVRIT Hub • Built by Students, for Students.
          </p>

        </div>

      </section>

    </main>
  );
}