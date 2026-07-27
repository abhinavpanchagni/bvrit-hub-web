const resources = [
  {
    title: "Notes",
    desc: "Subject-wise handwritten & faculty notes.",
    icon: "📚",
    color: "bg-yellow-300",
  },
  {
    title: "Previous Papers",
    desc: "University PYQs with solutions.",
    icon: "📝",
    color: "bg-pink-300",
  },
  {
    title: "Lab Programs",
    desc: "Codes, records & outputs.",
    icon: "💻",
    color: "bg-green-300",
  },
  {
    title: "Question Bank",
    desc: "Important & repeated questions.",
    icon: "❓",
    color: "bg-blue-300",
  },
  {
    title: "Video Library",
    desc: "Best YouTube playlists for every subject.",
    icon: "🎥",
    color: "bg-orange-300",
  },
  {
    title: "Syllabus",
    desc: "Latest semester syllabus.",
    icon: "📄",
    color: "bg-purple-300",
  },
];

export default function Resources() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-5xl font-black">
            Semester 1 Resources
          </h2>

          <p className="mt-4 text-lg text-gray-700600">
            Everything you need to succeed in your first semester.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((item) => (
            <div
              key={item.title}
              className={`rounded-3xl border-4 border-black ${item.color} p-8 shadow-[8px_8px_0_#000] transition hover:-translate-y-2`}
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="mt-5 text-2xl font-black">
                {item.title}
              </h3>

              <p className="mt-3 text-black">
                {item.desc}
              </p>

              <button className="mt-8 rounded-xl border-2 border-black bg-white px-5 py-2 font-bold">
                Explore →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
