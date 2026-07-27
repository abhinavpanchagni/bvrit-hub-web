const features = [
  {
    number: "01",
    title: "Everything in One Place",
    description:
      "Notes, previous papers, labs, question banks and study material organized for every semester.",
    icon: "📚",
    color: "bg-yellow-300",
  },
  {
    number: "02",
    title: "Built for BVRIT Students",
    description:
      "Every page is designed around the BVRIT academic structure so you can find resources quickly.",
    icon: "🎓",
    color: "bg-pink-300",
  },
  {
    number: "03",
    title: "Save Your Time",
    description:
      "Stop searching through WhatsApp groups and Google Drive folders. Everything stays in one place.",
    icon: "⚡",
    color: "bg-blue-300",
  },
  {
    number: "04",
    title: "Always Free",
    description:
      "BVRIT Hub is completely free and built by students to help every engineering student.",
    icon: "❤️",
    color: "bg-green-300",
  },
];

const stats = [
  {
    value: "102+",
    label: "Students Surveyed",
  },
  {
    value: "10",
    label: "Freshers Guides",
  },
  {
    value: "100%",
    label: "Free",
  },
  {
    value: "V1",
    label: "Current Version",
  },
];

export default function WhyBvritHub() {
  return (
    <section className="bg-[#FFF8E8] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-block border-2 border-black bg-yellow-300 px-5 py-2 font-black shadow-[4px_4px_0_#000]">
            WHY BVRIT HUB?
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
            Everything You Need,
            <br />
            All In One Place.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-black">
            Engineering resources are usually scattered across WhatsApp groups,
            Google Drive folders and multiple websites. BVRIT Hub brings
            everything together into one organized platform built specifically
            for BVRIT students.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {features.map((item) => (
            <div
              key={item.number}
              className={`${item.color} rounded-3xl border-4 border-black p-8 shadow-[8px_8px_0_#000] transition hover:-translate-y-2`}
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border-2 border-black bg-white px-4 py-2 font-black">
                  {item.number}
                </span>

                <span className="text-5xl">{item.icon}</span>
              </div>

              <h3 className="mt-10 text-3xl font-black">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-black">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border-4 border-black bg-white p-8 text-center shadow-[6px_6px_0_#000]"
            >
              <h3 className="text-4xl font-black">
                {item.value}
              </h3>

              <p className="mt-3 font-bold text-black">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
