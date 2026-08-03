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
    <section className="mb-10 rounded-[2.5rem] border border-border/10 bg-white p-10 md:p-14 shadow-sm">
      <span className="rounded-xl border border-border/10 bg-bg px-4 py-2 text-xs font-bold uppercase tracking-wider text-text-secondary inline-block mb-6">
        {badge}
      </span>

      <h2 className="text-4xl font-extrabold text-text-primary leading-tight">
        {title}
      </h2>

      <p className="mt-5 text-lg font-medium text-text-secondary leading-relaxed">
        {description}
      </p>

      <div className="mt-10">
        {children}
      </div>
    </section>
  );
}
