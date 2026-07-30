import Link from "next/link";
import { Camera, MessageCircle, PenTool } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#111111] border-t border-border/10 w-full pt-20 pb-10 flex flex-col items-center mt-20 relative scroll-reveal">
      
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-surface-lavender mb-6 shadow-sm border border-border/10">
            <PenTool className="text-accent-black" size={24} strokeWidth={2.5} />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-text-primary mb-4 tracking-tighter">BVRIT HUB</h2>
          <p className="text-text-secondary font-medium text-lg">Student-built digital workspace.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-10 w-full mb-16 text-left border border-border/10 rounded-[2.5rem] p-10 bg-black/5 dark:bg-white/5 shadow-sm">
          <div className="flex flex-col gap-4">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-text-primary mb-2">Platform</h4>
            <Link className="text-text-secondary hover:text-accent-blue font-medium transition-colors text-sm" href="/">Home</Link>
            <Link className="text-text-secondary hover:text-accent-blue font-medium transition-colors text-sm" href="/freshers">Starter Pack</Link>
            <Link className="text-text-secondary hover:text-accent-blue font-medium transition-colors text-sm" href="/resources">Resources</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-text-primary mb-2">Account</h4>
            <Link className="text-text-secondary hover:text-accent-blue font-medium transition-colors text-sm" href="/login">Login</Link>
            <Link className="text-text-secondary hover:text-accent-blue font-medium transition-colors text-sm" href="/register">Register</Link>
            <Link className="text-text-secondary hover:text-accent-blue font-medium transition-colors text-sm" href="/dashboard">Dashboard</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-text-primary mb-2">Academics</h4>
            <Link className="text-text-secondary hover:text-accent-blue font-medium transition-colors text-sm" href="/semester-1/labs">Labs</Link>
            <Link className="text-text-secondary hover:text-accent-blue font-medium transition-colors text-sm" href="/semester-1">Semester 1</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-text-primary mb-2">Community</h4>
            <Link className="text-text-secondary hover:text-accent-blue font-medium transition-colors text-sm" href="/clubs">Clubs</Link>
            <Link className="text-text-secondary hover:text-accent-blue font-medium transition-colors text-sm" href="/dashboard-admin/feed">Feed</Link>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-1">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-text-primary mb-2">Social</h4>
            <Link className="text-text-secondary hover:text-accent-blue font-medium transition-colors text-sm flex items-center gap-2" href="#"><Camera size={16} /> Instagram</Link>
            <Link className="text-text-secondary hover:text-accent-blue font-medium transition-colors text-sm flex items-center gap-2" href="#"><MessageCircle size={16} /> WhatsApp</Link>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-text-primary mb-2">Contact</h4>
            <Link className="text-text-secondary hover:text-accent-blue font-bold transition-colors text-sm" href="#">bvrithub@gmail.com</Link>
            <div className="mt-4 p-5 border border-border/10 rounded-2xl bg-surface-yellow text-accent-black shadow-sm">
               <p className="font-extrabold text-sm mb-1">Have a suggestion?</p>
               <p className="font-medium text-xs opacity-80">Drop us an email. We read everything.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-border/10 w-full">
          <p className="text-text-secondary font-medium text-xs">© 2026 BVRIT Hub. Built by Students, for Students.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0 px-4 py-2 rounded-xl bg-surface-mint/20 border border-surface-mint/50">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="font-bold text-xs text-text-primary">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
