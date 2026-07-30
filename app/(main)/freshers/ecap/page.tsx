import Link from "next/link";

export default function EcapPage() {
  return (
    <main className="min-h-screen bg-bg text-text-primary">
      {/* Hero */}
      <section className="border-b border-border/10 bg-violet-600 text-bg">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Link
            href="/freshers"
            className="inline-block rounded-xl border border-border/10 bg-white px-5 py-2 font-bold text-text-secondary shadow-sm"
          >
            ← Back to Freshers
          </Link>

          <p className="mt-8 inline-block rounded-full border border-border/10 bg-surface-yellow/40 px-4 py-2 font-bold text-text-secondary">
            CHAPTER 08
          </p>

          <h1 className="mt-6 text-5xl font-extrabold md:text-6xl">
            ECAP Guide
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-violet-100">
            Learn how to use the official BVRIT student portal for fees,
            results and academic services.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="rounded-[2.5rem] border border-border/10 bg-white p-10 shadow-sm">
          <h2 className="text-4xl font-extrabold">
            🖥️ What is ECAP?
          </h2>

          <p className="mt-6 text-lg leading-9 text-text-primary">
            ECAP is the official student portal used by BVRIT.
          </p>

          <p className="mt-5 text-lg leading-9 text-text-primary">
            Think of it as your academic dashboard where you can access
            important college information throughout your engineering journey.
          </p>
        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-surface-yellow/40 p-8 shadow-sm">

          <h3 className="text-4xl font-extrabold">
            💻 What is ECAP Used For?
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            {[
              "Semester Fee Payments",
              "Backlog Fee Payments",
              "Transport Fee Payments",
              "Hostel Fee Payments",
              "Semester Results & Marks",
              "Academic Services",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6"
              >
                <p className="text-xl font-extrabold">{item}</p>
              </div>
            ))}

          </div>

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div className="rounded-[2.5rem] border border-border/10 bg-surface-mint/40 p-8 shadow-sm">

            <h3 className="text-3xl font-extrabold">
              📊 Semester Results
            </h3>

            <ul className="mt-6 space-y-4 text-lg font-semibold">
              <li>✔ Subject-wise Marks</li>
              <li>✔ Overall Result</li>
              <li>✔ Academic Performance</li>
            </ul>

          </div>

          <div className="rounded-[2.5rem] border border-border/10 bg-blue-300 p-8 shadow-sm">

            <h3 className="text-3xl font-extrabold">
              💳 Fee Payments
            </h3>

            <ul className="mt-6 space-y-4 text-lg font-semibold">
              <li>✔ Semester Fees</li>
              <li>✔ Backlog Fees</li>
              <li>✔ Transport Fees</li>
              <li>✔ Hostel Fees</li>
            </ul>

          </div>

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div className="rounded-[2.5rem] border border-border/10 bg-surface-mint/40 p-8 shadow-sm">

            <h3 className="text-3xl font-extrabold">
              ✅ Tips for Freshers
            </h3>

            <ul className="mt-6 space-y-4 text-lg font-semibold">
              <li>✔ Save your login credentials</li>
              <li>✔ Check ECAP during result season</li>
              <li>✔ Monitor fee deadlines</li>
              <li>✔ Download payment receipts</li>
            </ul>

          </div>

          <div className="rounded-[2.5rem] border border-border/10 bg-red-300 p-8 shadow-sm">

            <h3 className="text-3xl font-extrabold">
              ❌ Common Mistakes
            </h3>

            <ul className="mt-6 space-y-4 text-lg font-semibold">
              <li>✖ Forgetting login credentials</li>
              <li>✖ Paying fees at the last minute</li>
              <li>✖ Not saving payment receipts</li>
              <li>✖ Ignoring portal updates</li>
            </ul>

          </div>

        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-violet-600 p-10 text-bg shadow-sm">

          <h3 className="text-4xl font-extrabold">
            ❓ Frequently Asked Questions
          </h3>

          <div className="mt-8 space-y-6">

            <div className="rounded-2xl border border-border/10 shadow-sm bg-white p-6 text-text-secondary">
              <h4 className="text-xl font-extrabold">
                Is ECAP compulsory?
              </h4>

              <p className="mt-3">
                Yes. Every BVRIT student uses ECAP for important academic and
                administrative activities.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm bg-white p-6 text-text-secondary">
              <h4 className="text-xl font-extrabold">
                When should I check ECAP?
              </h4>

              <p className="mt-3">
                During results, fee payments and important academic
                notifications.
              </p>
            </div>

          </div>

        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-surface-yellow/40 p-10 shadow-sm">

          <h3 className="text-4xl font-extrabold">
            🎥 ECAP Walkthrough
          </h3>

          <div className="mt-8 flex h-80 items-center justify-center rounded-2xl border border-border/10 shadow-sm border-4 border-dashed border-black bg-white">

            <p className="text-center text-2xl font-extrabold">
              Embed ECAP Walkthrough Video Here
            </p>

          </div>

        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-black p-10 text-bg shadow-[8px_8px_0_#7c3aed]">

          <h3 className="text-4xl font-extrabold">
            🚀 Final Tip
          </h3>

          <p className="mt-6 text-lg leading-9">
            Bookmark ECAP, check it regularly and never miss fee payments,
            results or important academic updates.
          </p>

        </div>

      </section>
    </main>
  );
}
