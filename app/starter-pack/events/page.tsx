"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { eventsData, EventData } from "@/lib/events-data";
import EventCards from "@/components/events/EventCards";
import EventExperience from "@/components/events/EventExperience";

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  return (
    <main className="min-h-screen bg-bg text-text-primary p-6 md:p-12 animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="mb-16">
          <Link 
            href="/starter-pack" 
            className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-text-secondary hover:text-accent-blue transition-colors mb-6"
          >
            <ArrowLeft size={16} strokeWidth={2.5} /> Back to Freshers
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="font-bold text-xs uppercase tracking-wider bg-surface-peach/80 text-accent-black px-3 py-1 rounded-lg border border-surface-peach">
              Chapter 10
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Events
          </h1>

          <p className="text-lg text-text-secondary font-medium max-w-3xl">
            Discover technical, cultural, and sports events happening around the campus. Click on an event to explore the experience.
          </p>
        </header>

        {/* Body Content */}
        <section className="space-y-10">
          
          <EventCards 
            events={eventsData} 
            onEventSelect={(event) => setSelectedEvent(event)} 
          />

        </section>
      </div>

      {/* Full-Screen Experience Overlay */}
      {selectedEvent && (
        <EventExperience 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
    </main>
  );
}
