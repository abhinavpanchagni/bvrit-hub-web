import Link from "next/link";

export default function TransportPage() {
  return (
    <main className="min-h-screen bg-bg text-text-primary">
      {/* Hero */}
      <section className="border-b border-border/10 bg-orange-600 text-bg">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Link
            href="/freshers"
            className="inline-block rounded-xl border border-border/10 bg-white px-5 py-2 font-bold text-text-secondary shadow-sm"
          >
            ← Back to Freshers
          </Link>

          <p className="mt-8 inline-block rounded-full border border-border/10 bg-surface-yellow/40 px-4 py-2 font-bold text-text-secondary">
            CHAPTER 09
          </p>

          <h1 className="mt-6 text-5xl font-extrabold md:text-6xl">
            Transport Information
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-orange-100">
            Everything you need to know about the BVRIT bus facility, routes
            and transport fees.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="rounded-[2.5rem] border border-border/10 bg-white p-10 shadow-sm">
          <h2 className="text-4xl font-extrabold">
            🚌 College Bus Facility
          </h2>

          <p className="mt-6 text-lg leading-9 text-text-primary">
            BVRIT provides a well-organized transportation facility for
            students travelling from different parts of the city.
          </p>

          <p className="mt-5 text-lg leading-9 text-text-primary">
            Multiple bus routes cover various locations, making daily travel
            convenient and safe.
          </p>
        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-blue-300 p-8 shadow-sm">

          <h3 className="text-4xl font-extrabold">
            🗺️ Bus Routes
          </h3>

          <p className="mt-6 text-lg leading-9">
            Refer to the route map below to find the bus covering your area.
          </p>

          <div className="mt-8 flex h-96 items-center justify-center rounded-2xl border border-border/10 shadow-sm border-4 border-dashed border-black bg-white">

            <p className="text-center text-2xl font-extrabold">
              Bus Routes Image Here
            </p>

          </div>

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div className="rounded-[2.5rem] border border-border/10 bg-surface-yellow/40 p-8 shadow-sm">

            <h3 className="text-3xl font-extrabold">
              💳 Transport Fee
            </h3>

            <div className="mt-8 rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-8 text-center">

              <p className="text-5xl font-extrabold">
                ₹45,000 – ₹50,000
              </p>

              <p className="mt-3 text-lg font-bold">
                Per Year
              </p>

            </div>

            <p className="mt-6 text-lg leading-8">
              The exact fee depends on your boarding location and selected
              route.
            </p>

          </div>

          <div className="rounded-[2.5rem] border border-border/10 bg-surface-mint/40 p-8 shadow-sm">

            <h3 className="text-3xl font-extrabold">
              📝 How to Apply
            </h3>

            <ol className="mt-6 space-y-4 text-lg font-semibold list-decimal pl-6">
              <li>Visit the College Reception / Transport Office.</li>
              <li>Select the suitable bus route.</li>
              <li>Complete the required formalities.</li>
              <li>Pay the transport fee.</li>
            </ol>

          </div>

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div className="rounded-[2.5rem] border border-border/10 bg-surface-mint/40 p-8 shadow-sm">

            <h3 className="text-3xl font-extrabold">
              ✅ Tips
            </h3>

            <ul className="mt-6 space-y-4 text-lg font-semibold">
              <li>✔ Apply early</li>
              <li>✔ Carry your Bus Pass / ID Card</li>
              <li>✔ Reach the boarding point early</li>
            </ul>

          </div>

          <div className="rounded-[2.5rem] border border-border/10 bg-red-300 p-8 shadow-sm">

            <h3 className="text-3xl font-extrabold">
              ❓ FAQ
            </h3>

            <div className="mt-6 space-y-5">

              <div className="rounded-xl border border-border/10 bg-white p-5">
                <h4 className="font-extrabold">
                  How do I know which bus covers my area?
                </h4>

                <p className="mt-2">
                  Refer to the Bus Route image or visit the Transport Office.
                </p>
              </div>

              <div className="rounded-xl border border-border/10 bg-white p-5">
                <h4 className="font-extrabold">
                  Can the transport fee change?
                </h4>

                <p className="mt-2">
                  Yes. It depends on the selected route.
                </p>
              </div>

            </div>

          </div>

        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-black p-10 text-bg shadow-[8px_8px_0_#ea580c]">

          <h3 className="text-4xl font-extrabold">
            🚀 Final Tip
          </h3>

          <p className="mt-6 text-lg leading-9">
            The college bus service is one of the safest and easiest ways to
            travel to campus. Visit the Transport Office for routes, timings
            and fee details.
          </p>

        </div>

      </section>
    </main>
  );
}
