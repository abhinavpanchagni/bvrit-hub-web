import Link from "next/link";
import { ArrowLeft, Triangle, Ruler, Box, Hexagon, PenTool } from "lucide-react";

export default function PrerequisitesHubPage() {
  const prerequisites = [
    {
      title: "Basic Geometry",
      desc: "Lines, angles, and shapes.",
      href: "/before-class/engineering-drawing/engineering-drawing-prerequisites/basic-geometry",
      icon: Triangle,
      color: "bg-surface-lavender"
    },
    {
      title: "Measurement and Scale",
      desc: "Accurate dimensions and proportions.",
      href: "/before-class/engineering-drawing/engineering-drawing-prerequisites/measurement-scale",
      icon: Ruler,
      color: "bg-surface-mint"
    },
    {
      title: "Spatial Visualization",
      desc: "Imagining 3D objects.",
      href: "/before-class/engineering-drawing/engineering-drawing-prerequisites/spatial-visualization",
      icon: Box,
      color: "bg-surface-peach"
    },
    {
      title: "Angles and Shapes",
      desc: "Constructing polygons and curves.",
      href: "/before-class/engineering-drawing/engineering-drawing-prerequisites/angles-shapes",
      icon: Hexagon,
      color: "bg-surface-yellow"
    },
    {
      title: "Basic Drawing Instruments",
      desc: "Using tools effectively.",
      href: "/before-class/engineering-drawing/engineering-drawing-prerequisites/drawing-instruments",
      icon: PenTool,
      color: "bg-surface-lavender"
    }
  ];

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="min-h-screen bg-bg p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/before-class/engineering-drawing" 
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary font-bold mb-8 transition-colors"
          >
            <ArrowLeft size={20} /> Back to Engineering Drawing
          </Link>

          <div className="mb-10">
            <h1 className="text-4xl font-extrabold text-text-primary mb-4">Engineering Drawing Prerequisites</h1>
            <p className="text-lg text-text-secondary font-medium">
              Refresh these 5 essential concepts before starting Engineering Drawing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prerequisites.map((req, idx) => (
              <Link 
                key={idx}
                href={req.href}
                className={`group flex flex-col justify-between p-8 rounded-[2.5rem] ${req.color} border border-border/10 shadow-sm transition-all hover:-translate-y-2 hover:shadow-md`}
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-accent-black mb-8 shadow-sm group-hover:scale-105 transition-transform">
                  <req.icon size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-text-primary mb-2">{idx + 1}. {req.title}</h2>
                  <p className="text-text-secondary font-medium">
                    {req.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
