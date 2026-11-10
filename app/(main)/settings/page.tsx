"use client";

import { LogOut, Trash2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
    if (!confirmed) return;

    try {
      setIsDeleting(true);
      const res = await fetch("/api/account", {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete account");
      }

      // Redirect to login or home after deletion
      router.push("/login");
    } catch (error) {
      console.error(error);
      alert("An error occurred while deleting your account.");
      setIsDeleting(false);
    }
  };
  return (
    <main className="flex min-h-full items-start justify-center py-8 pb-16">
      <div className="w-full max-w-3xl bg-white rounded-[2.5rem] shadow-sm border border-border/10 relative overflow-hidden">
        
        {/* Header */}
        <div className="p-8 md:p-12 border-b border-border/10 bg-black/5">
          <h1 className="text-3xl font-extrabold text-text-primary mb-2">Settings</h1>
          <p className="text-text-secondary font-medium">Manage your app preferences and account settings.</p>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 space-y-12">

          {/* Account Management */}
          <div>
            <h3 className="text-xl font-extrabold text-red-500 mb-6 flex items-center gap-2">
              Account Management
            </h3>
            
            <form action="/auth/signout" method="post">
              <button className="w-full bg-red-500 text-bg font-bold text-sm rounded-2xl border border-border/10 shadow-sm hover:bg-red-600 hover:shadow-lg transition-all px-6 py-4 flex items-center justify-center gap-2 active:scale-95 shadow-sm">
                <LogOut size={18} />
                Logout of BVRIT Hub
              </button>
            </form>

            <div className="mt-4">
              <button 
                onClick={handleDeleteAccount}
                disabled={isDeleting}
                className="w-full bg-white text-red-500 font-bold text-sm rounded-2xl border border-red-200 shadow-sm hover:bg-red-50 transition-all px-6 py-4 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isDeleting ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Trash2 size={18} />
                )}
                {isDeleting ? "Deleting Account..." : "Delete Account"}
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
