"use client";

import { motion } from "framer-motion";
import { EventData } from "@/lib/events-data";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface EventCardsProps {
  events: EventData[];
  onEventSelect: (event: EventData) => void;
}

export default function EventCards({ events, onEventSelect }: EventCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <motion.div
          layoutId={`event-container-${event.id}`}
          key={event.id}
          className="relative group cursor-pointer overflow-hidden rounded-[2.5rem] bg-white border border-border/10 shadow-sm flex flex-col h-[400px]"
          onClick={() => onEventSelect(event)}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Background Image */}
          <motion.div 
            layoutId={`event-image-${event.id}`}
            className="absolute inset-0 w-full h-full"
          >
            {/* We use next/image if domain is configured, but to be safe and avoid Next.js unconfigured remote host errors, let's use an img tag for placeholder urls. Once they move to relative /public paths, next/image is better. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={event.heroImage}
              alt={event.title}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-accent-black/90 via-accent-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
          </motion.div>

          {/* Top Label */}
          <div className="relative z-10 p-6 flex justify-between items-start">
            <span className="font-bold text-xs uppercase tracking-wider bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-lg border border-white/30">
              {event.category}
            </span>
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white transform group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight size={20} />
            </div>
          </div>

          <div className="flex-grow" />

          {/* Bottom Content */}
          <div className="relative z-10 p-8">
            <motion.h3 
              layoutId={`event-title-${event.id}`}
              className="text-3xl font-extrabold text-white mb-2"
            >
              {event.title}
            </motion.h3>
            <div className="flex items-center gap-4 text-white/80 text-sm font-medium">
              {event.date && <span>{event.date}</span>}
              {event.date && event.location && <span className="w-1 h-1 rounded-full bg-white/50" />}
              {event.location && <span>{event.location}</span>}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
