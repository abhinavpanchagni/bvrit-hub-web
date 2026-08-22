"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, RefreshCw, DollarSign, ShieldCheck, Truck, Zap, ExternalLink } from "lucide-react";

const CAMPUS_CIRCLE_URL = "https://www.campuscircle.co.in/";

const features = [
  {
    icon: ShoppingBag,
    title: "Buy Anything",
    description: "Textbooks, gadgets, stationery, lab coats — find what you need from fellow students at unbeatable prices.",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: DollarSign,
    title: "Sell Instantly",
    description: "List your old items in seconds. No middlemen, no commission. Your stuff, your price.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: RefreshCw,
    title: "Swap & Trade",
    description: "Got something they need? They've got something you need. Exchange without spending a rupee.",
    color: "bg-amber-100 text-amber-600",
  },
];

const stats = [
  { icon: ShieldCheck, label: "Students Only", desc: "Verified BVRIT classmates. No strangers, ever." },
  { icon: Zap, label: "Zero Commission", desc: "100% free to list and buy. Always." },
  { icon: Truck, label: "Campus Delivery", desc: "Items stay within campus. No shipping hassles." },
];

const floatingItems = ["📚", "🎧", "💻", "🛒", "👕", "🔬", "📐", "🎒"];

export default function CampusCirclePage() {
  return (
    <div className="min-h-full pb-20">

      {/* Hero */}
      <section className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-10 md:p-20 text-white text-center mb-10 shadow-2xl">

        {/* Floating background emojis */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          {floatingItems.map((emoji, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl md:text-3xl opacity-20"
              style={{ left: `${(i * 13) % 90}%`, top: `${(i * 17 + 10) % 80}%` }}
              animate={{ y: [0, -18, 0], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-5 py-2 text-sm font-bold mb-8 text-white/80"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Exclusively for BVRIT Students
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-black leading-tight mb-4"
        >
          Buy. Sell. Swap.{" "}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Stay on Campus.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10"
        >
          The student marketplace built exclusively for BVRITians. Think OLX — but smarter, safer, and only for your campus.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={CAMPUS_CIRCLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-400 hover:to-cyan-400 text-white font-black text-lg px-8 py-4 rounded-2xl transition-all shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:scale-105"
          >
            Visit Campus Circle
            <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all border border-white/20"
          >
            Learn More <ArrowRight size={18} />
          </a>
        </motion.div>
      </section>

      {/* Features */}
      <section id="how-it-works" className="mb-10">
        <div className="text-center mb-10">
          <span className="text-sm font-bold text-text-secondary uppercase tracking-widest">What You Can Do</span>
          <h2 className="text-3xl md:text-4xl font-black text-text-primary mt-2">Your Campus, Your Marketplace</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-border/10 rounded-[2rem] p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${feature.color}`}>
                <feature.icon size={26} />
              </div>
              <h3 className="text-xl font-black text-text-primary mb-3">{feature.title}</h3>
              <p className="text-text-secondary font-medium leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Campus Circle */}
      <section className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] rounded-[2.5rem] p-10 md:p-16 mb-10 text-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black">Why Campus Circle?</h2>
          <p className="text-white/60 mt-3 text-lg">Built for students, by students. No compromises.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 border border-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all"
            >
              <div className="w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon size={22} className="text-cyan-400" />
              </div>
              <h3 className="text-lg font-black mb-2">{stat.label}</h3>
              <p className="text-white/60 text-sm font-medium">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center bg-white border border-border/10 rounded-[2.5rem] p-12 shadow-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-5xl mb-4">🚀</div>
          <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-4">Ready to Explore?</h2>
          <p className="text-text-secondary font-medium text-lg max-w-xl mx-auto mb-8">
            Join hundreds of BVRIT students already buying, selling, and swapping on Campus Circle.
          </p>
          <a
            href={CAMPUS_CIRCLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-black text-xl px-10 py-5 rounded-2xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]"
          >
            Launch Campus Circle 🚀
            <ExternalLink size={22} />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
