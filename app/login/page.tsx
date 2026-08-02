"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { Check, AlertCircle } from "lucide-react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGoogleLogin() {
    setLoading(true);
    setError("");

    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    let next = "/dashboard";

    if (user) {
      // User is logged in, redirect to dashboard directly
    }

    const { error: loginError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=${next}`,
      },
    });

    if (loginError) {
      setError(loginError.message);
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen bg-bg items-center justify-center p-6 relative overflow-hidden">
      
      {/* Decorative blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-surface-mint rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[40%] bg-surface-peach rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-10 z-10">
        
        {/* Left: Branding & Info */}
        <div className="hidden lg:flex flex-col justify-center">
          <div className="bg-surface-mint p-12 rounded-[2.5rem] border border-border/10 shadow-sm relative h-full flex flex-col justify-center overflow-hidden">
            <Link href="/" className="flex items-end gap-1 group mb-12 w-max relative z-10">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-border/10 overflow-hidden">
                <img src="/logo.png" alt="BVRIT Hub Logo" className="w-full h-full object-contain p-1.5" />
              </div>
              <div className="ml-2 flex flex-col mb-1">
                <span className="text-xs font-bold tracking-widest text-text-primary">BVRIT HUB</span>
                <div className="h-[3px] w-full bg-accent-blue mt-[2px] rounded-full"></div>
              </div>
            </Link>

            <h2 className="text-5xl font-extrabold tracking-tight text-text-primary mb-6 relative z-10 leading-[1.1]">
              Welcome back to <br />your workspace.
            </h2>
            <p className="text-lg text-text-secondary font-medium mb-12 relative z-10">
              Sign in to access your personalized academic resources, track your learning progress, and stay updated.
            </p>

            <ul className="space-y-4 relative z-10">
              {[
                "Save your learning progress securely",
                "Bookmark useful resources for exams",
                "Resume your study packs anywhere"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-text-secondary font-medium">
                   <div className="w-8 h-8 rounded-full bg-white dark:bg-black/20 flex items-center justify-center shrink-0 shadow-sm border border-white/20">
                     <Check size={16} strokeWidth={3} className="text-accent-black" />
                   </div>
                   {item}
                </li>
              ))}
            </ul>

            {/* Abstract shapes inside the card */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-surface-yellow rounded-full blur-3xl opacity-60"></div>
          </div>
        </div>

        {/* Right: Auth Form */}
        <div className="w-full flex items-center justify-center">
          <div className="w-full max-w-md bg-white dark:bg-[#1A1A1A] p-8 md:p-10 rounded-[2.5rem] border border-border/10 shadow-xl shadow-black/5 relative">
            
            <div className="lg:hidden flex items-end justify-center gap-1 mb-10">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-border/10 overflow-hidden">
                <img src="/logo.png" alt="BVRIT Hub Logo" className="w-full h-full object-contain p-1.5" />
              </div>
              <div className="ml-2 flex flex-col mb-1">
                <span className="text-xs font-bold tracking-widest text-text-primary">BVRIT HUB</span>
                <div className="h-[3px] w-full bg-accent-blue mt-[2px] rounded-full"></div>
              </div>
            </div>

            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-text-primary mb-2">Log in</h2>
              <p className="text-text-secondary font-medium text-sm">
                Don't have an account? <Link href="/register" className="text-accent-blue hover:text-accent-black transition-colors font-bold">Sign up</Link>
              </p>
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full bg-white dark:bg-[#2A2A2A] text-text-primary font-bold text-sm border border-border/10 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-all px-6 py-4 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              {loading ? "Opening Google..." : "Continue with Google"}
            </button>

            {error && (
              <div className="mt-6 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 p-4 font-medium text-sm flex items-center gap-3">
                <AlertCircle size={20} className="shrink-0" />
                {error}
              </div>
            )}

            <div className="mt-10 flex items-center gap-4 opacity-50">
              <div className="h-px bg-border flex-1"></div>
              <span className="text-text-secondary font-bold text-xs uppercase tracking-wider">Secure Authentication</span>
              <div className="h-px bg-border flex-1"></div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
