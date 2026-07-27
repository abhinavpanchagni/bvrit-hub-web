import Link from "next/link";

export default function BeyondAcademics() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="mb-12">

        <span className="rounded-xl border-2 border-black bg-[#B7C6C2] px-5 py-2 font-bold shadow-[5px_5px_0px_#000]">
          BEYOND ACADEMICS
        </span>

        <h2 className="mt-6 text-6xl font-black leading-none text-black md:text-7xl">
          CAMPUS
          <br />
          LIFE.
        </h2>

        <p className="mt-6 max-w-3xl text-xl leading-8 text-black">
          College is more than lectures and exams. Discover student clubs,
          startup opportunities, leadership programs and connect with talented
          students across BVRIT.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {/* CLUBS */}

        <div className="rounded-3xl border-2 border-black bg-[#FFE17C] p-8 shadow-[8px_8px_0px_#000] transition hover:-translate-y-1">

          <div className="flex items-center justify-between">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-black bg-white text-4xl">
              🎯
            </div>

            <span className="rounded-full border-2 border-black bg-white px-4 py-2 font-bold">
              NEW
            </span>

          </div>

          <h3 className="mt-8 text-5xl font-black text-black">
            Student Clubs
          </h3>

          <p className="mt-5 text-lg leading-8 text-black">
            Explore technical clubs, Toastmasters, Entrepreneurship Cell,
            ACM, CSI, Coding Club, NSS, Dance Club, Music Club and VVLF.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {[
              "ACM",
              "CSI",
              "Toastmasters",
              "VVLF",
              "NSS",
              "Coding Club",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border-2 border-black bg-white px-4 py-2 font-bold"
              >
                {item}
              </span>
            ))}

          </div>

          <div className="mt-10 flex gap-4">

            <Link
              href="/clubs"
              className="rounded-xl border-2 border-black bg-black px-7 py-4 font-bold text-white transition hover:-translate-y-1"
            >
              Explore Clubs →
            </Link>

          </div>

        </div>

        {/* COMMUNITY */}

        <div className="rounded-3xl border-2 border-black bg-[#B7C6C2] p-8 shadow-[8px_8px_0px_#000] transition hover:-translate-y-1">

          <div className="flex items-center justify-between">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-black bg-white text-4xl">
              👥
            </div>

            <span className="rounded-full border-2 border-black bg-[#FFE17C] px-4 py-2 font-bold">
              BETA
            </span>

          </div>

          <h3 className="mt-8 text-5xl font-black text-black">
            Community
          </h3>

          <p className="mt-5 text-lg leading-8 text-black">
            Soon you'll be able to showcase your skills, find project teammates,
            connect with seniors and collaborate on hackathons.
          </p>

          <div className="mt-8 rounded-2xl border-2 border-black bg-white p-6">

            <p className="font-black text-black">
              🚧 Coming Soon
            </p>

            <ul className="mt-4 space-y-2 text-black">
              <li>• Student Profiles</li>
              <li>• Project Teams</li>
              <li>• Hackathon Partners</li>
              <li>• Senior Guidance</li>
              <li>• Skill Showcase</li>
            </ul>

          </div>

          <div className="mt-8 flex gap-4">

            <Link
              href="/community"
              className="rounded-xl border-2 border-black bg-black px-7 py-4 font-bold text-white transition hover:-translate-y-1"
            >
              Learn More →
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}