import Link from "next/link";

export default function Community() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-xl border-2 border-black bg-green-300 px-5 py-2 text-sm font-black shadow-[4px_4px_0_#000]">
            JOIN OUR COMMUNITY
          </span>

          <h2 className="mt-8 text-5xl font-black md:text-6xl">
            Stay Updated.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black">
            Follow BVRIT Hub to receive notifications whenever new notes,
            previous papers, labs, study packs and important updates are
            released.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Instagram */}

          <div className="rounded-3xl border-4 border-black bg-pink-300 p-10 shadow-[8px_8px_0_#000]">
            <div className="text-6xl">📸</div>

            <h3 className="mt-6 text-4xl font-black">
              Instagram
            </h3>

            <p className="mt-5 text-lg leading-8">
              Engineering tips, campus updates, announcements and newly added
              academic resources.
            </p>

            <Link
              href="#"
              className="mt-10 inline-flex rounded-xl border-4 border-black bg-black px-8 py-4 font-black text-white shadow-[6px_6px_0_#fff]"
            >
              Follow →
            </Link>
          </div>

          {/* WhatsApp */}

          <div className="rounded-3xl border-4 border-black bg-green-300 p-10 shadow-[8px_8px_0_#000]">
            <div className="text-6xl">💬</div>

            <h3 className="mt-6 text-4xl font-black">
              WhatsApp Community
            </h3>

            <p className="mt-5 text-lg leading-8">
              Get instant notifications whenever new notes, PYQs, labs and study
              materials are uploaded.
            </p>

            <Link
              href="#"
              className="mt-10 inline-flex rounded-xl border-4 border-black bg-black px-8 py-4 font-black text-white shadow-[6px_6px_0_#fff]"
            >
              Join Community →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
