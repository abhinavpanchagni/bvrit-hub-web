"use client";

import { useState, useEffect } from "react";
import { Download, Maximize2, X } from "lucide-react";

export default function FormulaSheet({ src, title }: { src: string, title: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsExpanded(false);
    };
    if (isExpanded) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isExpanded]);

  return (
    <>
      <div className="flex flex-col gap-3 group relative">
        <div className="flex items-center justify-between px-2">
          <h4 className="font-bold text-lg text-accent-black">{title}</h4>
          <a 
            href={src} 
            download
            className="p-2 bg-surface-lavender text-accent-black rounded-lg hover:bg-accent-blue hover:text-white transition-colors"
            title="Download Sheet"
          >
            <Download size={18} />
          </a>
        </div>
        <div 
          className="rounded-2xl overflow-hidden border border-border/10 cursor-pointer relative group-hover:shadow-md transition-shadow"
          onClick={() => setIsExpanded(true)}
        >
          <img src={src} alt={title} className="w-full h-auto object-contain" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="bg-white text-accent-black p-3 rounded-full shadow-lg">
              <Maximize2 size={24} />
            </div>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8" onClick={() => setIsExpanded(false)}>
          <button 
            className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-50"
            onClick={() => setIsExpanded(false)}
          >
            <X size={24} />
          </button>
          
          <div className="relative max-w-full max-h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={src} 
              alt={title} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-6">
              <a 
                href={src} 
                download
                className="flex items-center gap-2 bg-accent-blue text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
              >
                <Download size={20} /> Download Sheet
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
