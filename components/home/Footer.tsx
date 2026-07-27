import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="inline-block rounded-2xl border-4 border-white bg-yellow-300 px-5 py-3 text-black shadow-[6px_6px_0_#fff]">
              <h2 className="text-3xl font-black">
                BVRIT HUB
              </h2>
            </div>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-300">
              A student-built platform designed to help every BVRIT student
              access notes, previous papers, labs, Freshers Starter Pack,
              question banks and academic resources from one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-neutral-500 px-4 py-2">
                📚 Notes
              </span>

              <span className="rounded-full border border-neutral-500 px-4 py-2">
                📄 PYQs
              </span>

              <span className="rounded-full border border-neutral-500 px-4 py-2">
                🧪 Labs
              </span>

              <span className="rounded-full border border-neutral-500 px-4 py-2">
                🎓 Starter Pack
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-2xl font-black">
              Quick Links
            </h3>

            <div className="mt-8 space-y-4">
              <Link href="/" className="block hover:text-yellow-300">
                Home
              </Link>

              <Link href="/freshers" className="block hover:text-yellow-300">
                Freshers Starter Pack
              </Link>

              <Link href="/login" className="block hover:text-yellow-300">
                Get Started
              </Link>

              <Link href="/login" className="block hover:text-yellow-300">
                Dashboard
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-black">
              Connect
            </h3>

            <div className="mt-8 space-y-4">
              <Link
                href="#"
                className="block rounded-xl border-2 border-white bg-pink-400 px-4 py-3 font-black text-black"
              >
                📸 Instagram
              </Link>

              <Link
                href="#"
                className="block rounded-xl border-2 border-white bg-green-400 px-4 py-3 font-black text-black"
              >
                💬 WhatsApp Community
              </Link>

              <div className="rounded-xl border-2 border-neutral-600 p-4">
                <p className="font-bold">Contact</p>

                <p className="mt-2 text-neutral-300">
                  bvrithub@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-700 pt-8 text-sm text-neutral-400 md:flex-row">
          <p>
            © 2026 BVRIT Hub. Built by Students, for Students.
          </p>

          <p>
            Version 1 • Free Forever
          </p>
        </div>
      </div>
    </footer>
  );
}
