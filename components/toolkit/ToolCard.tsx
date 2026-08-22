"use client";

import { Tool } from "@/lib/toolkit-data";
import { motion } from "framer-motion";

interface ToolCardProps {
  tool: Tool;
  onClick: () => void;
}

export default function ToolCard({ tool, onClick }: ToolCardProps) {
  const diffColors = {
    Beginner: "text-green-700 bg-green-50",
    Intermediate: "text-yellow-700 bg-yellow-50",
    Advanced: "text-red-700 bg-red-50",
  };
  
  const diffCircles = {
    Beginner: "🟢",
    Intermediate: "🟡",
    Advanced: "🔴",
  };

  return (
    <motion.div 
      layoutId={`tool-container-${tool.id}`}
      onClick={onClick}
      className="group relative cursor-pointer flex flex-col items-center justify-center bg-white border border-border/10 rounded-3xl sm:rounded-[2rem] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden h-full p-4 sm:p-6 min-h-[160px] sm:min-h-[220px]"
    >
      <div className="absolute inset-0 bg-surface-lavender opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <motion.div 
        layoutId={`tool-icon-${tool.id}`}
        className="w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-4xl shadow-sm border border-border/10 mb-2 sm:mb-6 relative z-10 shrink-0"
      >
        {tool.iconType === "image" ? (
          <img src={tool.icon} alt={`${tool.name} logo`} className="w-8 h-8 sm:w-12 sm:h-12 object-contain" />
        ) : (
          <span>{tool.icon}</span>
        )}
      </motion.div>

      <motion.h3 
        layoutId={`tool-title-${tool.id}`}
        className="text-sm sm:text-xl font-extrabold text-text-primary mb-1.5 sm:mb-3 text-center relative z-10 w-full px-1 line-clamp-2 leading-tight"
      >
        {tool.name}
      </motion.h3>
      
      <span className={`relative z-10 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-bold border border-white/40 shadow-sm whitespace-nowrap shrink-0 ${diffColors[tool.difficulty]}`}>
        {diffCircles[tool.difficulty]} {tool.difficulty}
      </span>
      
      {/* Decorative background glow */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
    </motion.div>
  );
}
