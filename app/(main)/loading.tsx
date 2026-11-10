export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-5xl animate-pulse py-4" role="status" aria-label="Loading page">
      <div className="mb-8 flex items-center gap-4 border-b border-border pb-8">
        <div className="h-16 w-16 rounded-2xl bg-black/5" />
        <div className="space-y-3">
          <div className="h-3 w-24 rounded bg-black/5" />
          <div className="h-7 w-48 rounded bg-black/10" />
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-white p-6">
        <div className="mb-6 h-6 w-36 rounded bg-black/10" />
        <div className="space-y-3">
          <div className="h-14 rounded-xl bg-black/5" />
          <div className="h-14 rounded-xl bg-black/5" />
          <div className="h-14 rounded-xl bg-black/5" />
        </div>
      </div>
      <span className="sr-only">Loading</span>
    </div>
  );
}
