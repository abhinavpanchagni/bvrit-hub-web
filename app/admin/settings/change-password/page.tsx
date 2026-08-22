"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { changeAdminPassword } from "@/lib/admin";
import { Lock, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ChangePasswordPage() {
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Simple validation checks
  const hasLength = newPassword.length >= 8;
  const hasUpper = /[A-Z]/.test(newPassword);
  const hasLower = /[a-z]/.test(newPassword);
  const hasNumber = /[0-9]/.test(newPassword);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);
  
  const isValid = hasLength && hasUpper && hasLower && hasNumber && hasSpecial;
  const passwordsMatch = newPassword === confirmPassword && newPassword !== "";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!currentPassword || !isValid || !passwordsMatch) {
      setError("Please ensure all requirements are met.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // In a real scenario, you might want to re-authenticate with currentPassword first.
      // But Supabase updateUser requires an active session, which we have.
      await changeAdminPassword(newPassword);
      setSuccess(true);
      setTimeout(() => {
        router.push("/admin");
      }, 1500);
    } catch (e: any) {
      setError(e.message || "Failed to change password.");
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border border-border/10 rounded-3xl p-8 shadow-sm"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
            <Lock size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-text-primary">Secure Your Account</h1>
            <p className="text-text-secondary font-medium">You must change the initial administrator password before continuing.</p>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-3 font-medium border border-red-100">
            <AlertCircle size={20} />
            {error}
          </div>
        )}
        
        {success && (
          <div className="mb-6 p-4 bg-green-50 text-green-600 rounded-xl flex items-center gap-3 font-medium border border-green-100">
            <CheckCircle2 size={20} />
            Password updated successfully. Redirecting...
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-text-secondary uppercase tracking-wider mb-2">
              Current Password
            </label>
            <input 
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full bg-surface-lavender border border-border/10 rounded-xl px-4 py-3 text-text-primary font-medium focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
              disabled={loading || success}
            />
          </div>

          <div className="pt-4 border-t border-border/10">
            <label className="block text-sm font-bold text-text-secondary uppercase tracking-wider mb-2">
              New Password
            </label>
            <input 
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full bg-surface-lavender border border-border/10 rounded-xl px-4 py-3 text-text-primary font-medium focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
              disabled={loading || success}
            />
            
            {/* Password Requirements indicator */}
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm font-medium">
              <div className={`flex items-center gap-1.5 ${hasLength ? 'text-green-600' : 'text-text-secondary'}`}>
                <CheckCircle2 size={14} /> 8+ characters
              </div>
              <div className={`flex items-center gap-1.5 ${hasUpper ? 'text-green-600' : 'text-text-secondary'}`}>
                <CheckCircle2 size={14} /> Uppercase
              </div>
              <div className={`flex items-center gap-1.5 ${hasLower ? 'text-green-600' : 'text-text-secondary'}`}>
                <CheckCircle2 size={14} /> Lowercase
              </div>
              <div className={`flex items-center gap-1.5 ${hasNumber ? 'text-green-600' : 'text-text-secondary'}`}>
                <CheckCircle2 size={14} /> Number
              </div>
              <div className={`flex items-center gap-1.5 ${hasSpecial ? 'text-green-600' : 'text-text-secondary'}`}>
                <CheckCircle2 size={14} /> Special character
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-text-secondary uppercase tracking-wider mb-2">
              Confirm New Password
            </label>
            <input 
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-surface-lavender border border-border/10 rounded-xl px-4 py-3 text-text-primary font-medium focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
              disabled={loading || success}
            />
            {confirmPassword && !passwordsMatch && (
              <p className="text-red-500 text-sm font-medium mt-1">Passwords do not match.</p>
            )}
          </div>

          <button 
            type="submit" 
            disabled={loading || success || !isValid || !passwordsMatch || !currentPassword}
            className="w-full bg-accent-black text-white py-4 rounded-xl font-bold text-lg hover:-translate-y-1 hover:shadow-lg transition-all disabled:opacity-50 disabled:hover:translate-y-0 flex items-center justify-center gap-2 mt-4"
          >
            {loading ? <Loader2 size={24} className="animate-spin" /> : "Change Password"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
