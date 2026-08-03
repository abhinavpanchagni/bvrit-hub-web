import Link from "next/link";

export default function HostelPage() {
  return (
    <main className="min-h-screen bg-bg text-text-primary">
      {/* Hero */}
      <section className="border-b border-border/10 bg-teal-600 text-bg">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Link
            href="/starter-pack"
            className="inline-block rounded-xl border border-border/10 bg-white px-5 py-2 font-bold text-text-secondary shadow-sm"
          >
            ← Back to Freshers
          </Link>

          <p className="mt-8 inline-block rounded-full border border-border/10 bg-surface-yellow/40 px-4 py-2 font-bold text-text-secondary">
            CHAPTER 10
          </p>

          <h1 className="mt-6 text-5xl font-extrabold md:text-6xl">
            Hostel Facilities
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-teal-100">
            Everything you need to know about BVRIT hostels, facilities and
            hostel life.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="rounded-[2.5rem] border border-border/10 bg-white p-10 shadow-sm">

          <h2 className="text-4xl font-extrabold">
            🏠 Staying at the BVRIT Hostel
          </h2>

          <p className="mt-6 text-lg leading-9 text-text-primary">
            BVRIT provides separate hostel facilities for boys and girls.
          </p>

          <p className="mt-5 text-lg leading-9 text-text-primary">
            Hostel life helps you make friends, save travel time and enjoy
            campus life.
          </p>

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div className="rounded-[2.5rem] border border-border/10 bg-blue-300 p-8 shadow-sm">

            <h3 className="text-3xl font-extrabold">
              👨 Boys' Hostels
            </h3>

            <div className="mt-6 space-y-5">

              <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
                <h4 className="text-xl font-extrabold">
                  CR Rao Hostel
                </h4>

                <p className="mt-3">
                  Most first-year boys stay here.
                </p>
              </div>

              <div className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-6">
                <h4 className="text-xl font-extrabold">
                  CV Raman Hostel
                </h4>

                <p className="mt-3">
                  Allotted depending on availability.
                </p>
              </div>

            </div>

          </div>

          <div className="rounded-[2.5rem] border border-border/10 bg-surface-peach/40 p-8 shadow-sm">

            <h3 className="text-3xl font-extrabold">
              👩 Girls' Hostel
            </h3>

            <p className="mt-6 text-lg leading-9">
              Separate girls' hostel with its own dining facility.
            </p>

            <p className="mt-5 text-lg leading-9">
              Students from different years stay together.
            </p>

          </div>

        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-surface-yellow/40 p-8 shadow-sm">

          <h3 className="text-4xl font-extrabold">
            🍽️ Food Facility
          </h3>

          <div className="mt-8 rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-8">

            <p className="text-2xl font-extrabold">
              Boys have meals at the D1 Dining Hall (Mess).
            </p>

            <p className="mt-4 text-lg">
              Breakfast, Lunch, Snacks and Dinner are served according to the
              hostel schedule.
            </p>

          </div>

        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-surface-mint/40 p-8 shadow-sm">

          <h3 className="text-4xl font-extrabold">
            🎉 Hostel Life
          </h3>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {[
              "Make New Friends",
              "Group Study",
              "Festivals & Events",
              "Projects",
              "Assignments",
              "Home Away From Home",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border/10 shadow-sm border border-border/10 bg-white p-5"
              >
                <p className="font-extrabold">{item}</p>
              </div>
            ))}

          </div>

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div className="rounded-[2.5rem] border border-border/10 bg-orange-300 p-8 shadow-sm">

            <h3 className="text-3xl font-extrabold">
              🎒 What Should You Bring?
            </h3>

            <ul className="mt-6 space-y-4 text-lg font-semibold">
              <li>✔ Bedding & Blanket</li>
              <li>✔ Daily Clothes</li>
              <li>✔ Toiletries</li>
              <li>✔ Cupboard Lock</li>
              <li>✔ Laptop & Charger</li>
              <li>✔ Study Materials</li>
            </ul>

          </div>

          <div className="rounded-[2.5rem] border border-border/10 bg-surface-mint/40 p-8 shadow-sm">

            <h3 className="text-3xl font-extrabold">
              ✅ Tips for Freshers
            </h3>

            <ul className="mt-6 space-y-4 text-lg font-semibold">
              <li>✔ Keep your room clean</li>
              <li>✔ Follow hostel rules</li>
              <li>✔ Respect roommates</li>
              <li>✔ Take care of belongings</li>
              <li>✔ Contact the warden if needed</li>
            </ul>

          </div>

        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-accent-black text-bg p-10 text-bg shadow-sm">

          <h3 className="text-4xl font-extrabold">
            ❓ Frequently Asked Questions
          </h3>

          <div className="mt-8 space-y-6">

            <div className="rounded-2xl border border-border/10 shadow-sm bg-white p-6 text-text-secondary">
              <h4 className="text-xl font-extrabold">
                Which hostel do first-year boys stay in?
              </h4>

              <p className="mt-3">
                Mostly CR Rao Hostel. Some may get CV Raman Hostel.
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm bg-white p-6 text-text-secondary">
              <h4 className="text-xl font-extrabold">
                Where do boys eat?
              </h4>

              <p className="mt-3">
                D1 Dining Hall (Mess).
              </p>
            </div>

            <div className="rounded-2xl border border-border/10 shadow-sm bg-white p-6 text-text-secondary">
              <h4 className="text-xl font-extrabold">
                Is there a separate girls' hostel?
              </h4>

              <p className="mt-3">
                Yes. It has its own dining facility.
              </p>
            </div>

          </div>

        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-surface-yellow/40 p-10 shadow-sm">

          <h3 className="text-4xl font-extrabold">
            🎥 Hostel Tour
          </h3>

          <div className="mt-8 flex h-80 items-center justify-center rounded-2xl border border-border/10 shadow-sm border-4 border-dashed border-black bg-white">

            <p className="text-center text-2xl font-extrabold">
              Embed Hostel Tour Video Here
            </p>

          </div>

        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border/10 bg-black p-10 text-bg shadow-[8px_8px_0_#0f766e]">

          <h3 className="text-4xl font-extrabold">
            🚀 Final Tip
          </h3>

          <p className="mt-6 text-lg leading-9">
            Hostel life is one of the best parts of engineering. You'll make
            lifelong friends, become independent and create unforgettable
            memories.
          </p>

        </div>

      </section>
    </main>
  );
}
