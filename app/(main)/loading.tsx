import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center min-h-[50vh]">
      <div className="flex flex-col items-center gap-4 text-text-secondary animate-pulse">
        <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center">
          <Loader2 className="w-6 h-6 text-accent-blue animate-spin" />
        </div>
        <p className="font-medium text-sm uppercase tracking-widest">Loading...</p>
      </div>
    </div>
  );
}
