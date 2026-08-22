"use client";

import { useState, useMemo } from "react";
import { CATEGORIES, TOOLS, Tool } from "@/lib/toolkit-data";
import ToolCard from "@/components/toolkit/ToolCard";
import ToolExperience from "@/components/toolkit/ToolExperience";
import { Search, Wrench, Sparkles, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ToolkitPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  const filteredTools = useMemo(() => {
    return TOOLS.filter(tool => {
      // 1. Category Filter
      if (activeCategory !== "all" && tool.categoryId !== activeCategory) {
        return false;
      }
      
      // 2. Search Filter (checks name, description, tags, category, bestFor)
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = tool.name.toLowerCase().includes(query);
        const matchesDesc = tool.description.toLowerCase().includes(query);
        const matchesTags = tool.tags.some(t => t.toLowerCase().includes(query));
        const matchesBestFor = tool.bestFor.toLowerCase().includes(query);
        const catName = CATEGORIES.find(c => c.id === tool.categoryId)?.name.toLowerCase() || "";
        const matchesCategory = catName.includes(query);
        
        return matchesName || matchesDesc || matchesTags || matchesBestFor || matchesCategory;
      }

      return true;
    });
  }, [activeCategory, searchQuery]);

  // Handle "Where should I start?" quick links
  const handleQuickLink = (query: string, categoryId?: string) => {
    setSearchQuery(query);
    if (categoryId) setActiveCategory(categoryId);
  };

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="min-h-screen bg-bg p-6 md:p-8 pb-24">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Hero Section */}
          <div className="bg-surface-lavender rounded-[3rem] p-8 md:p-12 border border-border/10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-accent-blue">
                  <Wrench size={24} />
                </div>
                <span className="bg-white/50 px-3 py-1 rounded-lg text-sm font-bold uppercase tracking-wider text-accent-blue border border-white/40">
                  Student Toolkit
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4 leading-tight">
                Your digital toolbox <br className="hidden md:block"/> for college.
              </h1>
              
              <div className="flex flex-wrap gap-2 text-lg md:text-xl font-bold text-accent-blue mb-6">
                <span>Design.</span>
                <span className="text-text-secondary">•</span>
                <span>Code.</span>
                <span className="text-text-secondary">•</span>
                <span>Build.</span>
                <span className="text-text-secondary">•</span>
                <span>Learn.</span>
                <span className="text-text-secondary">•</span>
                <span>Compete.</span>
              </div>
              
              <p className="text-lg text-text-secondary font-medium max-w-lg">
                Discover, learn, and use everything you need to turn your ideas into projects. 
                Find beginner-friendly YouTube tutorials and official links all in one place.
              </p>
            </div>
          </div>

          {/* Quick Recommendations (Where should I start?) */}
          <div className="bg-white rounded-3xl p-6 border border-border/10 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={20} className="text-yellow-500" />
              <h2 className="text-lg font-bold text-text-primary">🤔 Not sure where to start?</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => handleQuickLink("PPT")} className="px-4 py-2 bg-surface-yellow rounded-xl text-sm font-bold hover:bg-yellow-100 transition-colors flex items-center gap-1.5 text-yellow-800">
                I want to make a PPT <ChevronRight size={14} />
              </button>
              <button onClick={() => handleQuickLink("Coding")} className="px-4 py-2 bg-surface-mint rounded-xl text-sm font-bold hover:bg-green-100 transition-colors flex items-center gap-1.5 text-green-800">
                I want to learn coding <ChevronRight size={14} />
              </button>
              <button onClick={() => handleQuickLink("DSA")} className="px-4 py-2 bg-surface-peach rounded-xl text-sm font-bold hover:bg-orange-100 transition-colors flex items-center gap-1.5 text-orange-800">
                I want to practice DSA <ChevronRight size={14} />
              </button>
              <button onClick={() => handleQuickLink("App Design")} className="px-4 py-2 bg-surface-lavender rounded-xl text-sm font-bold hover:bg-purple-100 transition-colors flex items-center gap-1.5 text-purple-800">
                I want to design an app <ChevronRight size={14} />
              </button>
              <button onClick={() => handleQuickLink("IoT")} className="px-4 py-2 bg-black/5 rounded-xl text-sm font-bold hover:bg-black/10 transition-colors flex items-center gap-1.5 text-text-primary">
                I want to build an IoT project <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Search & Filters */}
          <div className="space-y-6">
            <div className="relative max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-secondary">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Search tools, skills, or categories... (e.g. 'Git', 'DSA', 'Design')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-border/10 rounded-2xl pl-12 pr-4 py-4 text-base font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/50 shadow-sm"
              />
            </div>

            <div className="flex overflow-x-auto pb-2 gap-2 custom-scrollbar hide-scrollbar-mobile">
              {CATEGORIES.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all border shrink-0 ${
                    activeCategory === category.id
                      ? "bg-accent-black text-white border-accent-black shadow-sm"
                      : "bg-white text-text-secondary border-border/10 hover:bg-black/5 hover:text-text-primary"
                  }`}
                >
                  <span>{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Output */}
          {filteredTools.length === 0 ? (
            <div className="text-center py-20 bg-white border border-border/10 rounded-[3rem] shadow-sm">
              <div className="w-20 h-20 bg-surface-lavender rounded-3xl mx-auto flex items-center justify-center text-3xl mb-6">
                🔍
              </div>
              <h3 className="text-2xl font-extrabold text-text-primary mb-2">No tools found</h3>
              <p className="text-text-secondary font-medium">Try searching for coding, design, hardware, or learning.</p>
              <button 
                onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                className="mt-6 px-6 py-2.5 bg-black/5 hover:bg-black/10 text-text-primary font-bold rounded-xl transition-colors"
              >
                Clear Search & Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              <AnimatePresence>
                {filteredTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} onClick={() => setSelectedTool(tool)} />
                ))}
              </AnimatePresence>
            </div>
          )}

        </div>
      </div>
      
      {/* Expanded Modal View */}
      <ToolExperience tool={selectedTool} onClose={() => setSelectedTool(null)} />
    </main>
  );
}
