export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg" role="status" aria-label="Loading BVRIT Hub">
      <div className="flex w-full max-w-xs flex-col gap-5 px-6">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="" className="h-10 w-10 rounded-xl border border-border bg-white object-contain p-1" />
          <span className="text-sm font-semibold tracking-wide">BVRIT Hub</span>
        </div>
        <div className="h-1 overflow-hidden rounded-full bg-black/5">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-brand" />
        </div>
      </div>
    </div>
  );
}
