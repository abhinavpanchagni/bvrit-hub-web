type TopicProps = {
  badge: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function Topic({
  badge,
  title,
  description,
  children,
}: TopicProps) {
  return (
    <section className="mb-10 rounded-[32px] border-4 border-black bg-white p-10 shadow-[10px_10px_0_#000]">
      <span className="rounded-full border-2 border-black bg-blue-600 px-4 py-2 text-sm font-bold text-white">
        {badge}
      </span>

      <h2 className="mt-6 text-5xl font-black">
        {title}
      </h2>

      <p className="mt-5 text-lg text-gray-700600">
        {description}
      </p>

      <div className="mt-8">
        {children}
      </div>
    </section>
  );
}
