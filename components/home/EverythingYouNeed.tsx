const items = [
  {
    icon: "📚",
    title: "Academic Resources",
    description:
      "Semester-wise notes, PYQs, question banks, important questions and study material.",
    color: "bg-yellow-300",
  },
  {
    icon: "🎓",
    title: "Freshers Starter Pack",
    description:
      "Everything you need to know before your first semester at BVRIT.",
    color: "bg-pink-300",
  },
  {
    icon: "⚡",
    title: "Save Hours Every Week",
    description:
      "No more searching through WhatsApp groups, Google Drive links and multiple websites.",
    color: "bg-blue-300",
  },
];

export default function EverythingYouNeed() {
  return (
    <section className="bg-[#FFF8E8] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-block border-2 border-black bg-yellow-300 px-5 py-2 text-sm font-black shadow-[4px_4px_0_#000]">
            EVERYTHING YOU NEED
          </span>

          <h2 className="mt-8 text-5xl font-black md:text-6xl">
            One Platform.
            <br />
            Every Resource.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black">
            BVRIT Hub brings together everything an engineering student needs
            in one organized platform.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className={`${item.color} rounded-3xl border-4 border-black p-8 shadow-[8px_8px_0_#000] transition duration-200 hover:-translate-y-2 hover:shadow-[10px_10px_0_#000]`}
            >
              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-8 text-3xl font-black">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-black">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
