import Link from "next/link";
import { ArrowLeft, BookOpen, Sigma, Compass, MapPin, LineChart, FunctionSquare } from "lucide-react";

export default function MathematicsPrerequisitesPage() {
  const prerequisites = [
    {
      title: "Algebra",
      desc: "Variables, equations, and foundational mathematical expressions.",
      href: "/before-class/engineering-mathematics/mathematics-prerequisites/algebra",
      icon: Sigma,
      color: "bg-surface-lavender"
    },
    {
      title: "Trigonometry",
      desc: "Angles, sides, and relationships in triangles.",
      href: "/before-class/engineering-mathematics/mathematics-prerequisites/trigonometry",
      icon: Compass,
      color: "bg-surface-mint"
    },
    {
      title: "Coordinate Geometry",
      desc: "Points, lines, and shapes on a coordinate plane.",
      href: "/before-class/engineering-mathematics/mathematics-prerequisites/coordinate-geometry",
      icon: MapPin,
      color: "bg-surface-peach"
    },
    {
      title: "Functions & Graphs",
      desc: "Relationships between quantities and their visual representation.",
      href: "/before-class/engineering-mathematics/mathematics-prerequisites/functions-and-graphs",
      icon: LineChart,
      color: "bg-surface-yellow"
    },
    {
      title: "Basic Calculus Essentials",
      desc: "Differentiation, integration, and the mathematics of change.",
      href: "/before-class/engineering-mathematics/mathematics-prerequisites/basic-calculus",
      icon: FunctionSquare,
      color: "bg-surface-lavender"
    }
  ];

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="min-h-screen bg-bg p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/before-class/engineering-mathematics" 
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary font-bold mb-8 transition-colors"
          >
            <ArrowLeft size={20} /> Back to Engineering Mathematics
          </Link>

          <div className="mb-10">
            <h1 className="text-4xl font-extrabold text-text-primary mb-4">Mathematics Prerequisites</h1>
            <p className="text-lg text-text-secondary font-medium">
              Refresh these 5 essential concepts before starting Engineering Mathematics.
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
