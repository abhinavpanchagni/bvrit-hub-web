"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tool } from "@/lib/toolkit-data";
import { X, PlayCircle, ExternalLink } from "lucide-react";
import AddTaskButton from "@/components/ui/AddTaskButton";

interface ToolExperienceProps {
  tool: Tool | null;
  onClose: () => void;
}

export default function ToolExperience({ tool, onClose }: ToolExperienceProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (tool) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [tool]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const diffColors = {
    Beginner: "text-green-700 border-green-200 bg-green-50",
    Intermediate: "text-yellow-700 border-yellow-200 bg-yellow-50",
    Advanced: "text-red-700 border-red-200 bg-red-50",
  };
  
  const diffCircles = {
    Beginner: "🟢",
    Intermediate: "🟡",
    Advanced: "🔴",
  };

  return (
    <AnimatePresence>
      {tool && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 md:p-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0, transition: { type: "spring", damping: 25, stiffness: 300 } }}
            exit={{ opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.2 } }}
            className="relative w-full max-w-3xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row h-[85vh] md:h-auto max-h-[800px]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 border border-border/10 flex items-center justify-center text-text-secondary hover:text-text-primary transition-all"
            >
              <X size={20} />
            </button>

            {/* Left Side: Visual / Logo */}
            <div className="md:w-2/5 bg-surface-lavender p-10 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-border/10 shrink-0">
              <div 
                className="w-32 h-32 bg-white rounded-[2rem] shadow-md border border-border/10 flex items-center justify-center text-6xl mb-6 relative"
              >
                {tool.iconType === "image" ? (
                  <img src={tool.icon} alt={`${tool.name} logo`} className="w-20 h-20 object-contain" />
                ) : (
                  <span>{tool.icon}</span>
                )}
              </div>
              
              <h2 
                className="text-3xl font-extrabold text-text-primary text-center"
              >
                {tool.name}
              </h2>
            </div>

            {/* Right Side: Details & Actions */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.1 } }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              className="p-8 md:p-12 flex flex-col flex-grow overflow-y-auto custom-scrollbar"
            >
              
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border shadow-sm ${diffColors[tool.difficulty]}`}>
                  {diffCircles[tool.difficulty]} {tool.difficulty}
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-text-secondary bg-black/5 px-2.5 py-1 rounded-lg">
                  {tool.bestFor.split('•')[0].trim()}
                </span>
              </div>

              <p className="text-text-secondary font-medium text-lg leading-relaxed mb-8">
                {tool.description}
              </p>

              <div className="mb-10">
                <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-3">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map(tag => (
                    <span key={tag} className="bg-black/5 text-text-secondary px-3 py-1.5 rounded-xl text-xs font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto space-y-2.5 pt-3">
                <a 
                  href={tool.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-accent-blue text-white py-3 rounded-[1rem] font-bold text-sm transition-all hover:bg-blue-600 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <PlayCircle size={18} />
                  <span>{tool.learningText}</span>
                </a>
                
                <a 
                  href={tool.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-white border-2 border-border/10 text-text-primary py-3 rounded-[1rem] font-bold text-sm transition-all hover:bg-black/5"
                >
                  <ExternalLink size={18} />
                  <span>Open Official Website</span>
                </a>

                <AddTaskButton
                  task={{
                    title: `Install ${tool.name}`,
                    type: "BVRIT_HUB",
                    sourceType: "tool",
                    sourceContentId: tool.id,
                    sourceName: "Student Toolkit",
                    sourceUrl: "/toolkit",
                  }}
                  className="w-full justify-center py-3 border-2 text-sm rounded-[1rem]"
                />

                {["canva", "powerpoint", "gamma", "leetcode", "codechef", "hackerrank", "smartinterviews", "figma", "vscode", "github", "vercel", "firebase_supabase", "autocad", "fusion360", "matlab", "arduino"].includes(tool.id) && (
                  <div className="mt-3 p-4 rounded-xl bg-surface-yellow/50 border border-yellow-200 shadow-sm">
                    <p className="text-xs font-bold text-accent-black mb-2">
                      Feel confident using {tool.name}? Put your skill to work.
                    </p>
                    <a 
                      href="https://unstop.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-black text-blue-700 hover:text-blue-800 transition-colors group"
                    >
                      Find Internships / Freelancing Opportunities 
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                )}
              </div>

            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
