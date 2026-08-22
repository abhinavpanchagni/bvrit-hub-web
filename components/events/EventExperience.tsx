"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { EventData } from "@/lib/events-data";
import { X, Calendar, MapPin, Trophy, ExternalLink } from "lucide-react";

interface EventExperienceProps {
  event: EventData | null;
  onClose: () => void;
}

export default function EventExperience({ event, onClose }: EventExperienceProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (event) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [event]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll animations for the expanded view
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  // Parallax effects
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.4]);

  if (!event) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 md:p-10"
      >
        <motion.div
          layoutId={`event-container-${event.id}`}
          className="relative w-full h-full max-w-6xl mx-auto bg-bg rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Close Button - Sticky */}
          <div className="absolute top-6 right-6 z-50">
            <button
              onClick={onClose}
              className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/40 hover:scale-105 transition-all"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>

          {/* Scrollable Content Container */}
          <div 
            ref={containerRef}
            className="w-full h-full overflow-y-auto overflow-x-hidden relative scroll-smooth"
          >
            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden shrink-0">
              <motion.div
                layoutId={`event-image-${event.id}`}
                className="absolute inset-0 w-full h-full origin-top"
                style={{ scale: heroScale, y: heroY }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={event.heroImage}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent pointer-events-none"
                style={{ opacity: heroOpacity }}
              />

              <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-10 pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                >
                  <span className="inline-block font-bold text-sm uppercase tracking-wider bg-surface-peach/80 text-accent-black px-4 py-2 rounded-xl mb-4 pointer-events-auto">
                    {event.category}
                  </span>
                  <motion.h1 
                    layoutId={`event-title-${event.id}`}
                    className="text-5xl md:text-7xl font-extrabold text-text-primary tracking-tight mb-4 pointer-events-auto"
                  >
                    {event.title}
                  </motion.h1>
                  
                  <div className="flex flex-wrap items-center gap-6 text-text-secondary font-medium text-lg pointer-events-auto">
                    {event.date && (
                      <div className="flex items-center gap-2">
                        <Calendar size={20} className="text-accent-blue" />
                        <span>{event.date}</span>
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center gap-2">
                        <MapPin size={20} className="text-accent-blue" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Content Details */}
            <div className="px-8 md:px-16 py-16 max-w-4xl mx-auto space-y-16">
              
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="prose prose-lg"
              >
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-text-secondary">
                  {event.description}
                </p>
              </motion.div>

              {/* Prize Pool if available */}
              {event.prizePool && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="rounded-[2.5rem] border border-border/10 bg-surface-yellow/30 p-10 flex items-center gap-6 shadow-sm"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white border border-border/10 flex items-center justify-center shrink-0 shadow-sm">
                    <Trophy size={32} className="text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-accent-black mb-2">Prize Pool</h3>
                    <p className="text-lg font-medium text-text-secondary">{event.prizePool}</p>
                  </div>
                </motion.div>
              )}

              {/* Secondary Images Gallery */}
              {event.images && event.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.images.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.1 }}
                      className="rounded-[2.5rem] overflow-hidden aspect-video relative border border-border/10 shadow-sm"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img} alt={`${event.title} gallery ${i}`} className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Registration CTA Removed as requested */}
              
            </div>
            
            {/* Footer space */}
            <div className="h-16" />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
