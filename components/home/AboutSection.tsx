export default function AboutSection() {
  const cards = [
    {
      title: "Student Built",
      description:
        "Created by BVRIT students to solve the problem of scattered academic resources.",
      color: "bg-yellow-300",
      emoji: "🎓",
    },
    {
      title: "Our Mission",
      description:
        "To make engineering simpler by providing every important academic resource in one organized platform.",
      color: "bg-pink-300",
      emoji: "🚀",
    },
    {
      title: "Version 1",
      description:
        "Freshers Starter Pack, semester resources, labs, dashboard and much more.",
      color: "bg-green-300",
      emoji: "📚",
    },
  ];

  return (
    <section className="bg-[#FFF8E8] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-block border-2 border-black bg-blue-300 px-5 py-2 text-sm font-black shadow-[4px_4px_0_#000]">
            ABOUT BVRIT HUB
          </span>

          <h2 className="mt-8 text-5xl font-black md:text-6xl">
            Built By Students.
            <br />
            Built For Students.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black">
            BVRIT Hub was created to solve one common problem faced by almost
            every engineering student — finding the right resources at the right
            time. Instead of searching through multiple WhatsApp groups, Google
            Drive folders and websites, everything is available in one place.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`${card.color} rounded-3xl border-4 border-black p-8 shadow-[8px_8px_0_#000] transition hover:-translate-y-2`}
            >
              <div className="text-5xl">
                {card.emoji}
              </div>

              <h3 className="mt-8 text-3xl font-black">
                {card.title}
              </h3>

              <p className="mt-5 leading-8 text-black">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border-4 border-black bg-white p-10 shadow-[8px_8px_0_#000]">
          <h3 className="text-3xl font-black">
            Upcoming Features
          </h3>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border-2 border-black bg-yellow-200 p-4 font-bold">
              📦 Mid & Semester Study Packs
            </div>

            <div className="rounded-xl border-2 border-black bg-pink-200 p-4 font-bold">
              📈 Learning Progress Tracking
            </div>

            <div className="rounded-xl border-2 border-black bg-green-200 p-4 font-bold">
              🔖 Bookmarks & Continue Learning
            </div>

            <div className="rounded-xl border-2 border-black bg-blue-200 p-4 font-bold">
              🔔 Notifications for New Resources
            </div>
          </div>

          <div className="mt-10 rounded-xl border-2 border-black bg-black p-6 text-center text-white">
            <h4 className="text-2xl font-black">
              Contact
            </h4>

            <p className="mt-3">
              📧 bvrithub@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
