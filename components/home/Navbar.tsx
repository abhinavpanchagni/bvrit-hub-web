"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const hasSeenIntro = sessionStorage.getItem("hasSeenLogoIntro");
    if (!hasSeenIntro) {
      setShowIntro(true);
      // After intro finishes, settle into navbar
      const timer = setTimeout(() => {
        setShowIntro(false);
        sessionStorage.setItem("hasSeenLogoIntro", "true");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const Logo = ({ layoutId }: { layoutId: string }) => (
    <motion.div
      layoutId={layoutId}
      className="flex items-end gap-1 group cursor-pointer"
      initial={showIntro ? { opacity: 0, rotateX: 25, rotateY: 25, scale: 0.85, z: -50 } : false}
      animate={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1, z: 0 }}
      transition={showIntro ? { duration: 1.2, type: "spring", bounce: 0.4 } : { duration: 0.5, type: "spring" }}
    >
      <div className="flex items-end">
        <span className="text-4xl md:text-5xl font-extrabold tracking-tighter text-accent-black leading-none">bh</span>
        <div className="ml-2 flex flex-col mb-1">
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-text-primary">BVRIT HUB</span>
          <div className="h-[3px] w-full bg-accent-blue mt-[2px] rounded-full"></div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <AnimatePresence>
        {showIntro && mounted && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
            exit={{ opacity: 0, pointerEvents: "none" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Logo layoutId="main-logo" />
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-6 text-text-secondary font-medium tracking-wide text-sm"
            >
              Not a Startup. A Student Initiative.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 pointer-events-none">
        <div className="pointer-events-auto max-w-7xl mx-auto w-full flex items-center justify-between bg-bg/80 backdrop-blur-md rounded-2xl px-6 py-4 shadow-sm border border-border">
          
          {/* Logo Container (Nav) */}
          <div className="flex items-center gap-2 w-[200px]">
            {!showIntro && <Link href="/"><Logo layoutId="main-logo" /></Link>}
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm">
            <Link href="/freshers" className="text-text-primary hover:text-accent-blue transition-colors">
              Freshers
            </Link>
            <Link href="/resources" className="text-text-primary hover:text-accent-blue transition-colors">
              Resources
            </Link>
            <Link href="/about" className="text-text-primary hover:text-accent-blue transition-colors">
              About
            </Link>
          </div>

          {/* CTA & Theme Toggle */}
          <div className="flex items-center justify-end gap-4 w-[200px]">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-surface-lavender text-text-primary transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            
            <Link
              href="/login"
              className="hidden md:flex items-center justify-center bg-accent-black text-bg rounded-full px-6 py-2.5 font-medium text-sm hover:scale-[1.03] hover:shadow-lg transition-all active:scale-95"
            >
              Continue with Google
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
