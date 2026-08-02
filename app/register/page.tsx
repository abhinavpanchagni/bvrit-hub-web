"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Library } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("1");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const registrationData = {
      name,
      email,
      branch,
      year: parseInt(year)
    };
    
    document.cookie = `bvrithub_register=${encodeURIComponent(JSON.stringify(registrationData))}; path=/; max-age=3600`;
    router.push("/login");
  };

  return (
    <main className="flex min-h-screen bg-bg items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-surface-lavender rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[40%] bg-surface-peach rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-10 z-10">
        
        {/* Left: Branding & Info */}
        <div className="hidden lg:flex flex-col justify-center">
          <div className="bg-surface-lavender p-12 rounded-[2.5rem] border border-border/10 shadow-sm relative h-full flex flex-col justify-center overflow-hidden">
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
              Start your <br />learning journey.
            </h2>
            <p className="text-lg text-text-secondary font-medium mb-12 max-w-md relative z-10">
              Create a free account to unlock semester-wise resources, study packs, labs, and track your progress through engineering.
            </p>

            <div className="bg-white/60 dark:bg-black/10 border border-white/20 rounded-3xl p-6 shadow-sm relative z-10 backdrop-blur-md">
              <div className="w-12 h-12 bg-white dark:bg-black/20 rounded-xl flex items-center justify-center mb-4 text-accent-black shadow-sm">
                <Library size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Built for Students</h3>
              <p className="text-text-secondary font-medium text-sm">BVRIT Hub was created by students, for students. It simplifies finding academic resources, saving you hours of searching.</p>
            </div>
            
            {/* Abstract shapes inside the card */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-surface-yellow rounded-full blur-3xl opacity-60"></div>
          </div>
        </div>

        {/* Right: Register Form */}
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

            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-text-primary mb-2">Sign up</h2>
              <p className="text-text-secondary font-medium text-sm">
                Already have an account? <Link href="/login" className="text-accent-blue hover:text-accent-black transition-colors font-bold">Log in</Link>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-bold text-text-primary mb-1.5 block">Full Name</label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full bg-white/50 dark:bg-black/20 border border-border/10 rounded-2xl px-4 py-3.5 text-text-primary font-medium text-sm placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all shadow-sm"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-text-primary mb-1.5 block">Email Address</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. john@gmail.com"
                  className="w-full bg-white/50 dark:bg-black/20 border border-border/10 rounded-2xl px-4 py-3.5 text-text-primary font-medium text-sm placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all shadow-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-bold text-text-primary mb-1.5 block">Branch</label>
                  <select
                    required
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="w-full bg-white/50 dark:bg-black/20 border border-border/10 rounded-2xl px-4 py-3.5 text-text-primary font-medium text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all cursor-pointer shadow-sm appearance-none"
                  >
                    <option value="">Select</option>
                    <option>CSE</option>
                    <option>CSM</option>
                    <option>CSD</option>
                    <option>AI&DS</option>
                    <option>CSBS</option>
                    <option>ECE</option>
                    <option>EEE</option>
                    <option>ME</option>
                    <option>CIVIL</option>
                    <option>PHE</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-bold text-text-primary mb-1.5 block">Year</label>
                  <select
                    required
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full bg-white/50 dark:bg-black/20 border border-border/10 rounded-2xl px-4 py-3.5 text-text-primary font-medium text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all cursor-pointer shadow-sm appearance-none"
                  >
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-accent-black text-bg font-bold text-sm rounded-2xl hover:scale-[1.02] hover:shadow-lg transition-all px-6 py-4 flex items-center justify-center gap-2 mt-8 active:scale-95"
              >
                Continue Setup <ArrowRight size={18} />
              </button>
            </form>

          </div>
        </div>
      </div>
    </main>
  );
}
