type InfoCardProps = {
  title: string;
  children: React.ReactNode;
  color?: string;
};

export default function InfoCard({
  title,
  children,
  color = "bg-yellow-300",
}: InfoCardProps) {
  return (
    <div
      className={`rounded-3xl border-4 border-black ${color} p-6 shadow-[8px_8px_0_#000]`}
    >
      <h3 className="text-2xl font-black">{title}</h3>

      <div className="mt-5 text-base leading-7">
        {children}
      </div>
    </div>
  );
}
