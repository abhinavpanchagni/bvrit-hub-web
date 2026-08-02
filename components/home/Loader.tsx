"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [isIntro, setIsIntro] = useState(true);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsIntro(false);
      // Unlock scroll after animation starts exiting
      setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 500);
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
      {/* Background Overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isIntro ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`absolute inset-0 bg-bg ${isIntro ? "pointer-events-auto" : "pointer-events-none"}`}
      />

      {/* Logo Container */}
      <motion.div
        initial={{ 
          rotateY: 90, 
          rotateX: 45, 
          scale: 0.5,
          opacity: 0,
          x: 0,
          y: 0
        }}
        animate={isIntro ? { 
          rotateY: 0, 
          rotateX: 0, 
          scale: 1.2,
          opacity: 1,
          x: 0,
          y: 0,
          transition: { 
            type: "spring",
            stiffness: 100,
            damping: 15,
            mass: 1,
            delay: 0.2
          }
        } : {
          x: "calc(-50vw + 80px)", // Move to left (adjusting for typical navbar padding)
          y: "calc(-50vh + 50px)", // Move to top (adjusting for typical navbar height)
          scale: 0.25, // Shrink to navbar logo size
          opacity: 1,
          rotateY: 0,
          rotateX: 0,
          transition: { duration: 0.8, ease: "easeInOut" }
        }}
        className="relative w-32 h-32 md:w-48 md:h-48 z-10 bg-white rounded-full flex items-center justify-center shadow-xl border border-border/10 overflow-hidden"
      >
        <img 
          src="/logo.png" 
          alt="BVRIT Hub Logo" 
          className="w-full h-full object-contain p-4"
        />
      </motion.div>
    </div>
  );
}
