import Link from "next/link";
import { ArrowRight, Check, PenTool } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Login",
    description: "Sign in using your Google account.",
  },
  {
    number: "2",
    title: "Choose Branch",
    description: "Select your engineering branch.",
  },
  {
    number: "3",
    title: "Choose Semester",
    description: "Open your current semester.",
  },
  {
    number: "4",
    title: "Start Learning",
    description: "Access notes, labs, PYQs and more.",
  },
];

const benefits = [
  "Save learning progress",
  "Bookmark important resources",
  "Continue where you left off",
  "Personalized Dashboard",
  "Future Study Packs",
  "New Resource Notifications",
];

export default function GetStarted() {
  return (
    <section className="py-24 relative scroll-reveal">
      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        <div className="text-center flex flex-col items-center mb-16">
          <span className="font-bold text-xs uppercase tracking-wider text-accent-blue mb-4">
            Get Started
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 max-w-4xl leading-tight">
            Start Your Learning Journey
          </h2>

          <p className="mx-auto text-lg text-text-secondary font-medium max-w-3xl">
            Login once and unlock all semester-wise academic resources.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left */}
          <div className="bg-white dark:bg-[#1A1A1A] rounded-[2.5rem] p-10 lg:p-14 shadow-sm border border-border/10 relative">
            <h3 className="text-3xl font-extrabold text-text-primary mb-4">
              Login Required
            </h3>

            <p className="text-lg text-text-secondary font-medium mb-10">
              To access academic resources, simply login and follow this path.
            </p>

            <div className="space-y-6 relative">
              {/* Connecting line */}
              <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-border/20 -z-10"></div>
              
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="bg-surface-mint/30 dark:bg-surface-mint/10 border border-border/10 rounded-2xl p-6 flex items-center gap-6 shadow-sm transition-transform hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-mint text-accent-black font-extrabold text-xl shadow-sm">
                    {step.number}
                  </div>

                  <div>
                    <h4 className="text-xl font-extrabold text-text-primary mb-1">
                      {step.title}
                    </h4>
                    <p className="text-sm font-medium text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="bg-surface-yellow rounded-[2.5rem] p-10 lg:p-14 shadow-sm border border-border/10 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-extrabold text-text-primary mb-4">
                Why Create an Account?
              </h3>

              <p className="text-lg text-text-secondary font-medium mb-10">
                Your free account unlocks everything available in BVRIT Hub.
              </p>

              <div className="space-y-4">
                {benefits.map((item, i) => (
                  <div
                    key={item}
                    className="bg-white/60 dark:bg-black/10 border border-white/20 rounded-2xl py-4 px-6 flex items-center gap-4 transition-transform hover:-translate-y-1"
                  >
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-black/20 flex items-center justify-center shrink-0 shadow-sm border border-white/20">
                      <PenTool size={16} strokeWidth={2.5} className="text-accent-black" />
                    </div>
                    <span className="text-text-primary font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/register"
              className="bg-accent-black text-bg font-bold text-sm rounded-2xl hover:scale-[1.02] hover:shadow-lg transition-all px-8 py-4 w-max mt-12 flex items-center gap-3"
            >
              Get Started <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
