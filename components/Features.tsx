export default function Features() {
  const features = [
    {
      title: "Semester Notes",
      desc: "Well-organized notes for every subject.",
      color: "bg-yellow-300",
      emoji: "📚",
    },
    {
      title: "Previous Papers",
      desc: "Practice with university PYQs.",
      color: "bg-pink-300",
      emoji: "📝",
    },
    {
      title: "Lab Programs",
      desc: "Ready-to-run lab programs with outputs.",
      color: "bg-green-300",
      emoji: "💻",
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
          One platform. All your academic resources.
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
