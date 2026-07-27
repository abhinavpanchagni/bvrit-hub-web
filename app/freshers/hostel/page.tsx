import Link from "next/link";

export default function HostelPage() {
  return (
    <main className="min-h-screen bg-[#f6f6f6]">
      {/* Hero */}
      <section className="border-b-4 border-black bg-teal-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Link
            href="/freshers"
            className="inline-block rounded-xl border-2 border-black bg-white px-5 py-2 font-bold text-gray-700 shadow-[4px_4px_0_#000]"
          >
            ← Back to Freshers
          </Link>

          <p className="mt-8 inline-block rounded-full border-2 border-black bg-yellow-300 px-4 py-2 font-bold text-gray-700">
            CHAPTER 10
          </p>

          <h1 className="mt-6 text-5xl font-black md:text-6xl">
            Hostel Facilities
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-teal-100">
            Everything you need to know about BVRIT hostels, facilities and
            hostel life.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="rounded-3xl border-4 border-black bg-white p-10 shadow-[10px_10px_0_#000]">

          <h2 className="text-4xl font-black">
            🏠 Staying at the BVRIT Hostel
          </h2>

          <p className="mt-6 text-lg leading-9 text-black">
            BVRIT provides separate hostel facilities for boys and girls.
          </p>

          <p className="mt-5 text-lg leading-9 text-black">
            Hostel life helps you make friends, save travel time and enjoy
            campus life.
          </p>

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border-4 border-black bg-blue-300 p-8 shadow-[8px_8px_0_#000]">

            <h3 className="text-3xl font-black">
              👨 Boys' Hostels
            </h3>

            <div className="mt-6 space-y-5">

              <div className="rounded-2xl border-2 border-black bg-white p-6">
                <h4 className="text-xl font-black">
                  CR Rao Hostel
                </h4>

                <p className="mt-3">
                  Most first-year boys stay here.
                </p>
              </div>

              <div className="rounded-2xl border-2 border-black bg-white p-6">
                <h4 className="text-xl font-black">
                  CV Raman Hostel
                </h4>

                <p className="mt-3">
                  Allotted depending on availability.
                </p>
              </div>

            </div>

          </div>

          <div className="rounded-3xl border-4 border-black bg-pink-300 p-8 shadow-[8px_8px_0_#000]">

            <h3 className="text-3xl font-black">
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

        <div className="mt-10 rounded-3xl border-4 border-black bg-yellow-300 p-8 shadow-[8px_8px_0_#000]">

          <h3 className="text-4xl font-black">
            🍽️ Food Facility
          </h3>

          <div className="mt-8 rounded-2xl border-2 border-black bg-white p-8">

            <p className="text-2xl font-black">
              Boys have meals at the D1 Dining Hall (Mess).
            </p>

            <p className="mt-4 text-lg">
              Breakfast, Lunch, Snacks and Dinner are served according to the
              hostel schedule.
            </p>

          </div>

        </div>

        <div className="mt-10 rounded-3xl border-4 border-black bg-green-300 p-8 shadow-[8px_8px_0_#000]">

          <h3 className="text-4xl font-black">
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
                className="rounded-2xl border-2 border-black bg-white p-5"
              >
                <p className="font-black">{item}</p>
              </div>
            ))}

          </div>

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border-4 border-black bg-orange-300 p-8 shadow-[8px_8px_0_#000]">

            <h3 className="text-3xl font-black">
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

          <div className="rounded-3xl border-4 border-black bg-green-300 p-8 shadow-[8px_8px_0_#000]">

            <h3 className="text-3xl font-black">
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

        <div className="mt-10 rounded-3xl border-4 border-black bg-blue-600 p-10 text-white shadow-[8px_8px_0_#000]">

          <h3 className="text-4xl font-black">
            ❓ Frequently Asked Questions
          </h3>

          <div className="mt-8 space-y-6">

            <div className="rounded-2xl bg-white p-6 text-gray-700">
              <h4 className="text-xl font-black">
                Which hostel do first-year boys stay in?
              </h4>

              <p className="mt-3">
                Mostly CR Rao Hostel. Some may get CV Raman Hostel.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-gray-700">
              <h4 className="text-xl font-black">
                Where do boys eat?
              </h4>

              <p className="mt-3">
                D1 Dining Hall (Mess).
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-gray-700">
              <h4 className="text-xl font-black">
                Is there a separate girls' hostel?
              </h4>

              <p className="mt-3">
                Yes. It has its own dining facility.
              </p>
            </div>

          </div>

        </div>

        <div className="mt-10 rounded-3xl border-4 border-black bg-yellow-300 p-10 shadow-[8px_8px_0_#000]">

          <h3 className="text-4xl font-black">
            🎥 Hostel Tour
          </h3>

          <div className="mt-8 flex h-80 items-center justify-center rounded-2xl border-4 border-dashed border-black bg-white">

            <p className="text-center text-2xl font-black">
              Embed Hostel Tour Video Here
            </p>

          </div>

        </div>

        <div className="mt-10 rounded-3xl border-4 border-black bg-black p-10 text-white shadow-[8px_8px_0_#0f766e]">

          <h3 className="text-4xl font-black">
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
