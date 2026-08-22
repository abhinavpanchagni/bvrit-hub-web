"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { ShieldCheck, Loader2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminLoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Sign out any existing session (e.g. student) before admin login
      await supabase.auth.signOut();

      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        setError("Invalid email or password.");
        setLoading(false);
        return;
      }

      // Successful login, middleware handles the routing (checking role and must_change_password)
      router.push("/admin");
      router.refresh();
      
    } catch (e: any) {
      setError("An unexpected error occurred.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white border border-border/10 rounded-3xl p-8 shadow-xl"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-accent-blue rounded-2xl flex items-center justify-center shadow-md text-white mb-4">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-2xl font-extrabold text-text-primary uppercase tracking-widest text-center">
            BVRIT HUB <br/>
            <span className="text-accent-blue">ADMIN PORTAL</span>
          </h1>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-3 font-medium border border-red-100">
            <AlertCircle size={20} />
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-text-secondary uppercase tracking-wider mb-2">
              Email
            </label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface-lavender border border-border/10 rounded-xl px-4 py-3.5 text-text-primary font-medium focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
              placeholder="admin@bvrithub.com"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-text-secondary uppercase tracking-wider mb-2">
              Password
            </label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-surface-lavender border border-border/10 rounded-xl px-4 py-3.5 text-text-primary font-medium focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
              placeholder="••••••••"
              disabled={loading}
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-accent-blue text-white py-4 rounded-xl font-bold text-lg hover:-translate-y-1 hover:shadow-lg transition-all disabled:opacity-50 disabled:hover:translate-y-0 flex items-center justify-center gap-2 mt-4"
          >
            {loading ? <Loader2 size={24} className="animate-spin" /> : "Login"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
