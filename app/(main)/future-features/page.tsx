"use client";

import { Rocket, Users, Briefcase, GraduationCap, Trophy, Sparkles, BookOpen, HeartHandshake } from "lucide-react";

export default function FutureFeaturesPage() {
  const features = [
    {
      title: "Senior Connect",
      description: "Directly connect with seniors from your branch for guidance, notes, and advice.",
      icon: Users,
      color: "bg-surface-mint"
    },
    {
      title: "Alumni Connect",
      description: "Reach out to BVRIT alumni working in top companies and get mentorship.",
      icon: GraduationCap,
      color: "bg-surface-lavender"
    },
    {
      title: "Project Expo",
      description: "Showcase your college projects, get feedback, and find inspiration from others.",
      icon: Sparkles,
      color: "bg-surface-yellow"
    },
    {
      title: "Short Notes Hub",
      description: "Quick, bite-sized revision notes for every subject. Cram smarter, not harder right before exams!",
      icon: BookOpen,
      color: "bg-surface-peach"
    },
    {
      title: "Senior & Alumni Advice",
      description: "Read curated tips, interview experiences, and career roadmaps from past students.",
      icon: HeartHandshake,
      color: "bg-surface-mint"
    },
    {
      title: "Student Achievements",
      description: "Celebrate wins! A dedicated space for hackathon winners, placements, and milestones.",
      icon: Trophy,
      color: "bg-surface-yellow"
    },
    {
      title: "Better Networking Profiles",
      description: "Upgraded student profiles to highlight your skills, GitHub, LinkedIn, and projects.",
      icon: Briefcase,
      color: "bg-surface-lavender"
    }
  ];

  return (
    <main className="flex-1 overflow-y-auto bg-bg text-text-primary pb-24">
      <div className="max-w-5xl mx-auto px-6 pt-12 pb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-border/10 text-accent-blue">
            <Rocket size={28} />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 leading-tight">
          What's Coming Next?
        </h1>
        
        <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mb-16 font-medium">
          BVRIT Hub is constantly evolving. We're actively building these features to make your campus life even more connected and resourceful.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`${feature.color} rounded-[2rem] p-8 border border-border/10 shadow-sm flex flex-col items-start hover:-translate-y-1 transition-transform`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/60 flex items-center justify-center mb-6 shadow-sm border border-white/20">
                <feature.icon size={24} className="text-accent-black" />
              </div>
              <h3 className="text-xl font-extrabold text-accent-black mb-3">
                {feature.title}
              </h3>
              <p className="text-sm font-medium text-accent-black/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-accent-black rounded-[2.5rem] p-10 text-center shadow-md">
          <h2 className="text-3xl font-extrabold text-white mb-4">Want to help us build these?</h2>
          <p className="text-white/80 font-medium mb-8 max-w-xl mx-auto text-lg">
            We are a student-led initiative. If you love coding or design, drop a suggestion in the Suggestions Hub!
          </p>
          <a 
            href="/suggestions-hub" 
            className="inline-block bg-white text-accent-black font-bold px-8 py-3.5 rounded-full hover:scale-105 transition-transform"
          >
            Go to Suggestions Hub
          </a>
        </div>
      </div>
    </main>
  );
}
