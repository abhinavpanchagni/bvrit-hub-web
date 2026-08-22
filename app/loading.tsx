import { Loader2 } from "lucide-react";

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-surface-mint rounded-full blur-[120px] opacity-40 pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-surface-peach rounded-full blur-[120px] opacity-40 pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="relative flex items-center justify-center w-24 h-24 bg-white rounded-3xl shadow-xl shadow-black/5 border border-border/10 overflow-hidden">
          <img src="/logo.png" alt="BVRIT Hub" className="w-14 h-14 object-contain animate-pulse" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <Loader2 className="w-5 h-5 text-accent-blue animate-spin" />
            <h2 className="text-xl font-extrabold text-text-primary tracking-tight">Entering Workspace</h2>
          </div>
          <p className="text-sm font-bold text-text-secondary tracking-widest uppercase opacity-70">
            Please wait...
          </p>
        </div>
      </div>
    </div>
  );
}
