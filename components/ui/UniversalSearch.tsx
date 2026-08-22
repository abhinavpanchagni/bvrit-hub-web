"use client";

import { useState, useEffect, useRef } from "react";
import { Search, Command, X, BookOpen, LayoutDashboard, Settings as SettingsIcon, MessageCircle, FileText, ArrowRight, CheckSquare, Users, Briefcase, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

// Create search database with core features and before-class subjects
const searchDatabase = [
  // Core Features
  { name: "Dashboard", href: "/dashboard", icon: <LayoutDashboard className="w-4 h-4" />, type: "Feature", keywords: "home main" },
  { name: "My Tasks", href: "/tasks", icon: <CheckSquare className="w-4 h-4" />, type: "Feature", keywords: "todo assignments lists" },
  { name: "Suggestions Hub", href: "/suggestions-hub", icon: <MessageCircle className="w-4 h-4" />, type: "Community", keywords: "suggestions feedback ideas college" },
  { name: "Clubs & Communities", href: "/clubs", icon: <Users className="w-4 h-4" />, type: "Community", keywords: "groups organizations" },
  { name: "Network", href: "/network", icon: <Users className="w-4 h-4" />, type: "Community", keywords: "alumni students connect" },
  { name: "Freshers Pack", href: "/freshers", icon: <GraduationCap className="w-4 h-4" />, type: "Resources", keywords: "first year guide" },
  { name: "Toolkit", href: "/toolkit", icon: <Briefcase className="w-4 h-4" />, type: "Tools", keywords: "cgpa calculator apps" },
  { name: "Profile", href: "/profile", icon: <Users className="w-4 h-4" />, type: "Settings", keywords: "account user details" },
  { name: "Settings", href: "/settings", icon: <SettingsIcon className="w-4 h-4" />, type: "Settings", keywords: "preferences configuration" },
  
  // Before Class Subjects
  { name: "Advanced Engineering Physics", href: "/before-class/advanced-engineering-physics", icon: <BookOpen className="w-4 h-4" />, type: "Before Class", keywords: "physics subject prerequisite" },
  { name: "Basic Electrical Engineering", href: "/before-class/basic-electrical-engineering", icon: <BookOpen className="w-4 h-4" />, type: "Before Class", keywords: "bee electrical subject prerequisite" },
  { name: "Electronic Devices & Circuits", href: "/before-class/electronic-devices-circuits", icon: <BookOpen className="w-4 h-4" />, type: "Before Class", keywords: "edc electronics subject prerequisite" },
  { name: "Engineering Chemistry", href: "/before-class/engineering-chemistry", icon: <BookOpen className="w-4 h-4" />, type: "Before Class", keywords: "chemistry subject prerequisite" },
  { name: "Engineering Drawing", href: "/before-class/engineering-drawing", icon: <BookOpen className="w-4 h-4" />, type: "Before Class", keywords: "drawing cad ed subject prerequisite" },
  { name: "Engineering Mathematics", href: "/before-class/engineering-mathematics", icon: <BookOpen className="w-4 h-4" />, type: "Before Class", prerequisites: true, keywords: "maths calculus algebra subject prerequisite" },
  { name: "English for Skill Enhancement", href: "/before-class/english-for-skill-enhancement", icon: <BookOpen className="w-4 h-4" />, type: "Before Class", keywords: "english grammar communication subject prerequisite" },
  { name: "Programming for Problem Solving", href: "/before-class/programming-for-problem-solving", icon: <BookOpen className="w-4 h-4" />, type: "Before Class", keywords: "pps c programming code subject prerequisite" },
];

export default function UniversalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  const filteredResults = query.trim() === "" 
    ? [] 
    : searchDatabase.filter(item => {
        const queryLower = query.toLowerCase();
        return item.name.toLowerCase().includes(queryLower) || 
               (item.keywords && item.keywords.includes(queryLower));
      }).slice(0, 8); // Limit to 8 results

  const handleSelect = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <>
      {/* Less Transparent Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-3 px-5 py-2.5 w-full max-w-lg bg-white/90 hover:bg-white backdrop-blur-sm border border-border shadow-sm rounded-full transition-all duration-300 group"
      >
        <Search className="w-5 h-5 text-text-secondary group-hover:text-accent-blue transition-colors" />
        <span className="flex-1 text-left text-text-secondary font-medium group-hover:text-text-primary transition-colors">
          Search BVRIT Hub...
        </span>
        <kbd className="hidden sm:flex items-center justify-center px-2 py-1 text-[10px] font-bold text-text-secondary bg-bg border border-border rounded-md shadow-sm">
          <span className="mr-1">⌘</span>K
        </kbd>
      </button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] sm:pt-[20vh] px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-white/95 backdrop-blur-md border border-border shadow-xl rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Search Input Area */}
              <div className="flex items-center px-4 py-4 border-b border-border bg-white">
                <Search className="w-6 h-6 text-accent-blue mr-3" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search subjects, clubs, or pages..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent text-lg text-text-primary outline-none placeholder:text-text-secondary/70"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full hover:bg-black/5 text-text-secondary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Results Area */}
              <div className="max-h-[60vh] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-black/10 scrollbar-track-transparent">
                {query.trim() === "" ? (
                  <div className="py-14 text-center text-text-secondary">
                    <Command className="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p>Start typing to search...</p>
                  </div>
                ) : filteredResults.length > 0 ? (
                  <div className="space-y-1">
                    <div className="px-3 py-2 text-xs font-semibold text-text-secondary/70 uppercase tracking-wider">
                      Search Results
                    </div>
                    {filteredResults.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => handleSelect(item.href)}
                        className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-black/5 transition-all text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-surface-lavender/50 text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors">
                            {item.icon}
                          </div>
                          <div>
                            <span className="block font-medium text-text-primary group-hover:text-accent-blue transition-colors">
                              {item.name}
                            </span>
                            <span className="block text-xs text-text-secondary">
                              {item.type}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-transparent group-hover:text-accent-blue transition-colors transform group-hover:translate-x-1" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="py-14 text-center text-text-secondary">
                    <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p>No results found for "{query}"</p>
                  </div>
                )}
              </div>
              
              {/* Footer */}
              <div className="px-4 py-3 border-t border-border bg-bg/50 text-xs text-text-secondary/80 flex justify-between items-center hidden sm:flex">
                <div className="flex items-center gap-2">
                  <span>Use <kbd className="px-1 py-0.5 rounded bg-white border border-border shadow-sm">↑</kbd> <kbd className="px-1 py-0.5 rounded bg-white border border-border shadow-sm">↓</kbd> to navigate</span>
                  <span className="ml-2">Use <kbd className="px-1 py-0.5 rounded bg-white border border-border shadow-sm">Enter</kbd> to select</span>
                </div>
                <div className="font-medium text-accent-blue/70">BVRIT Hub Search</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
