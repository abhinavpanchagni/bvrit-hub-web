import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "Save your learning progress",
  "Bookmark important resources",
  "Continue where you left off",
  "Access your personalized dashboard",
  "Receive updates for new resources",
  "Unlock future study packs",
];

export default function LoginBenefits() {
  return (
    <section className="py-24 relative z-10 scroll-reveal">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left */}
          <div className="bg-surface-peach rounded-[2.5rem] p-10 lg:p-14 shadow-sm border border-border/10 flex flex-col justify-between">
            <div>
              <span className="font-bold text-xs uppercase tracking-wider bg-white/60 dark:bg-black/10 border border-white/20 text-accent-black px-4 py-2 rounded-xl inline-block mb-8">
                Login Required
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4 leading-tight">
                Create a FREE Account
              </h2>

              <p className="text-lg text-text-secondary font-medium mb-12">
                Login once to unlock all semester-wise academic resources inside
                BVRIT Hub.
              </p>
            </div>

            <Link
              href="/login"
              className="bg-accent-black text-bg font-bold text-sm rounded-2xl hover:scale-[1.02] hover:shadow-lg transition-all px-8 py-4 w-max flex items-center gap-3"
            >
              Continue to Login <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
          </div>

          {/* Right */}
          <div className="bg-surface-lavender rounded-[2.5rem] p-10 lg:p-14 shadow-sm border border-border/10">
            <h3 className="text-3xl font-extrabold text-text-primary mb-10">
              Benefits
            </h3>

            <div className="space-y-4">
              {benefits.map((item, i) => (
                <div
                  key={item}
                  className="bg-white/60 dark:bg-black/10 border border-white/20 py-4 px-6 rounded-2xl flex items-center gap-4 transition-transform hover:-translate-y-1"
                >
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-black/20 flex items-center justify-center shrink-0 shadow-sm border border-white/20">
                    <Check size={16} strokeWidth={3} className="text-accent-black" />
                  </div>
                  <span className="text-text-primary font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
