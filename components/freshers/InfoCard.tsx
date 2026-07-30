type InfoCardProps = {
  title: string;
  children: React.ReactNode;
  color?: string; // Expects a Tailwind color class like bg-surface-yellow
};

export default function InfoCard({
  title,
  children,
  color = "bg-surface-yellow",
}: InfoCardProps) {
  return (
    <div
      className={`rounded-3xl border border-border/10 ${color} p-8 shadow-sm flex flex-col`}
    >
      <h3 className="text-xl font-extrabold text-accent-black mb-4">{title}</h3>

      <div className="text-sm font-medium text-accent-black/80 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
