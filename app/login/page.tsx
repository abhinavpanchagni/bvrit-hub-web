"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGoogleLogin() {
    setLoading(true);
    setError("");

    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    let next = "/dashboard";

    if (user) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("branch")
        .eq("id", user.id)
        .single();

      if (!profile?.branch) {
        next = "/profile";
      }
    }

    const { error: loginError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=${next}`,
      },
    });

    if (loginError) {
      setError(loginError.message);
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f6f6] px-6 py-12">
      <section className="w-full max-w-xl rounded-3xl border-4 border-black bg-white p-8 shadow-[10px_10px_0_#000] md:p-12">
        <p className="inline-block rounded-full border-2 border-black bg-yellow-300 px-4 py-2 font-black">
          FREE STUDENT ACCOUNT
        </p>

        <h1 className="mt-6 text-4xl font-black md:text-5xl">
          Unlock BVRIT Hub
        </h1>

        <p className="mt-5 text-lg leading-8 text-black">
          Sign in to access academic resources and your personalized dashboard.
        </p>

        <ul className="mt-8 space-y-4 text-lg font-bold">
          <li>✅ Access subject-wise study material</li>
          <li>✅ Save your learning progress</li>
          <li>✅ Bookmark useful resources</li>
          <li>✅ Continue where you stopped</li>
          <li>✅ Get updates when resources are added</li>
        </ul>

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
          className="mt-10 w-full rounded-2xl border-4 border-black bg-black px-6 py-4 text-lg font-black text-white shadow-[6px_6px_0_#2563eb] transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Opening Google..." : "Continue with Google"}
        </button>

        {error && (
          <p className="mt-5 rounded-xl border-2 border-red-700 bg-red-100 p-4 font-bold text-red-800">
            {error}
          </p>
        )}

        <p className="mt-8 text-center text-sm text-gray-700600">
          Freshers guides remain free without login.
        </p>
      </section>
    </main>
  );
}
