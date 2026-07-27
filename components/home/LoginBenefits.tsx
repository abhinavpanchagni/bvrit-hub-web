import Link from "next/link";

const benefits = [
  "Save your learning progress",
  "Bookmark important resources",
  "Continue where you left off",
  "Access your personalized dashboard",
  "Receive updates for new resources",
  "Unlock future study packs",
];

export default function LoginBenefits() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left */}

          <div className="rounded-3xl border-4 border-black bg-yellow-300 p-10 shadow-[8px_8px_0_#000]">
            <span className="inline-block rounded-full border-2 border-black bg-white px-4 py-2 text-sm font-black">
              LOGIN REQUIRED
            </span>

            <h2 className="mt-8 text-5xl font-black">
              Create a FREE Account
            </h2>

            <p className="mt-6 text-lg leading-8">
              Login once to unlock all semester-wise academic resources inside
              BVRIT Hub.
            </p>

            <Link
              href="/login"
              className="mt-10 inline-flex rounded-xl border-4 border-black bg-black px-8 py-4 text-lg font-black text-white shadow-[6px_6px_0_#fff] transition hover:-translate-y-1"
            >
              Continue with Google →
            </Link>
          </div>

          {/* Right */}

          <div className="rounded-3xl border-4 border-black bg-white p-10 shadow-[8px_8px_0_#000]">
            <h3 className="text-3xl font-black">
              Benefits
            </h3>

            <div className="mt-8 space-y-5">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border-2 border-black bg-green-200 px-5 py-4 text-lg font-bold"
                >
                  ✅ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
