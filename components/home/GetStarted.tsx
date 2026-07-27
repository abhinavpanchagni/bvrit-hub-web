import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Login",
    description: "Sign in using your Google account.",
  },
  {
    number: "02",
    title: "Choose Branch",
    description: "Select your engineering branch.",
  },
  {
    number: "03",
    title: "Choose Semester",
    description: "Open your current semester.",
  },
  {
    number: "04",
    title: "Start Learning",
    description: "Access notes, labs, PYQs and more.",
  },
];

const benefits = [
  "Save learning progress",
  "Bookmark important resources",
  "Continue where you left off",
  "Personalized Dashboard",
  "Future Study Packs",
  "New Resource Notifications",
];

export default function GetStarted() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-block border-2 border-black bg-yellow-300 px-5 py-2 text-sm font-black shadow-[4px_4px_0_#000]">
            🚀 GET STARTED
          </span>

          <h2 className="mt-8 text-5xl font-black md:text-6xl">
            Start Your Learning Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black">
            Login once and unlock all semester-wise academic resources.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Left */}

          <div className="rounded-3xl border-4 border-black bg-blue-300 p-10 shadow-[8px_8px_0_#000]">
            <h3 className="text-3xl font-black">
              Login Required
            </h3>

            <p className="mt-5 leading-8">
              To access academic resources, simply login and follow this path.
            </p>

            <div className="mt-10 space-y-5">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border-2 border-black bg-white p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-yellow-300 font-black">
                      {step.number}
                    </div>

                    <div>
                      <h4 className="font-black text-xl">
                        {step.title}
                      </h4>

                      <p className="text-black">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}

          <div className="rounded-3xl border-4 border-black bg-green-300 p-10 shadow-[8px_8px_0_#000]">
            <h3 className="text-3xl font-black">
              Why Create an Account?
            </h3>

            <p className="mt-5 leading-8">
              Your free account unlocks everything available in BVRIT Hub.
            </p>

            <div className="mt-10 space-y-4">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border-2 border-black bg-white px-5 py-4 font-bold"
                >
                  ✅ {item}
                </div>
              ))}
            </div>

            <Link
              href="/login"
              className="mt-10 inline-flex rounded-xl border-4 border-black bg-black px-8 py-4 text-lg font-black text-white shadow-[6px_6px_0_#fff] transition hover:-translate-y-1"
            >
              Continue with Google →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
