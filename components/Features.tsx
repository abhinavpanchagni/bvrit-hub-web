export default function Features() {
  const features = [
    {
      title: "Community Feed",
      desc: "Connect and share with other BVRIT students.",
      color: "bg-yellow-300",
      emoji: "👥",
    },
    {
      title: "Clubs",
      desc: "Discover and join student clubs.",
      color: "bg-pink-300",
      emoji: "🏆",
    },
    {
      title: "Networking",
      desc: "Connect with students across branches.",
      color: "bg-green-300",
      emoji: "🤝",
    },
    {
      title: "Freshers Guide",
      desc: "Everything you need before your first semester.",
      color: "bg-blue-300",
      emoji: "🎓",
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-5xl font-black">
          Everything You Need.
        </h2>

        <p className="mt-4 text-center text-gray-700600">
          One platform. All your college life in one place.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`rounded-3xl border-4 border-black ${feature.color} p-6 shadow-[8px_8px_0_#000] transition hover:-translate-y-2`}
            >
              <div className="text-5xl">{feature.emoji}</div>

              <h3 className="mt-5 text-2xl font-black">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
