export default function Hero() {
  return (
    <section className="rounded-[2.5rem] border border-border/10 bg-surface-mint/30 dark:bg-surface-mint/10 p-10 md:p-14 text-text-primary shadow-sm mb-12">
      <span className="rounded-xl border border-surface-yellow/50 bg-surface-yellow/30 px-4 py-2 text-xs font-bold uppercase tracking-wider text-accent-black">
        🚀 BVRIT HUB EXCLUSIVE
      </span>

      <h1 className="mt-8 text-4xl md:text-5xl font-extrabold leading-tight">
        Freshers Starter Pack
      </h1>

      <p className="mt-6 max-w-3xl text-lg font-medium text-text-secondary">
        Your complete guide to surviving and succeeding in your first year at
        BVRIT. Everything from SGPA to hostel life—explained in simple words.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <div className="rounded-2xl border border-border/10 bg-white dark:bg-[#1A1A1A] px-6 py-4 shadow-sm flex items-center gap-4">
          <p className="text-3xl font-extrabold text-accent-blue">10</p>
          <p className="text-sm font-bold text-text-secondary">Guides</p>
        </div>

        <div className="rounded-2xl border border-border/10 bg-white dark:bg-[#1A1A1A] px-6 py-4 shadow-sm flex items-center gap-4">
          <p className="text-3xl font-extrabold text-accent-blue">26+</p>
          <p className="text-sm font-bold text-text-secondary">Pages</p>
        </div>

        <div className="rounded-2xl border border-border/10 bg-white dark:bg-[#1A1A1A] px-6 py-4 shadow-sm flex items-center gap-4">
          <p className="text-3xl font-extrabold text-accent-blue">100%</p>
          <p className="text-sm font-bold text-text-secondary">Free</p>
        </div>
      </div>
    </section>
  );
}
