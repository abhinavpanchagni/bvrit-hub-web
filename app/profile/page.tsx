"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const supabase = createClient();
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const [branch, setBranch] = useState("");
  const [year, setYear] = useState(1);
  const [section, setSection] = useState("");

  useEffect(() => {
    async function loadProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data } = await supabase
        .from("profiles")
        .select("branch, year, section")
        .eq("id", user.id)
        .single();

      if (data) {
        setBranch(data.branch || "");
        setYear(data.year || 1);
        setSection(data.section || "");
      }

      setLoading(false);
    }

    loadProfile();
  }, []);

  async function saveProfile() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    await supabase
      .from("profiles")
      .update({
        branch,
        year,
        section,
      })
      .eq("id", user.id);

    router.push("/dashboard");
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-black">Loading...</h1>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f6f6] p-6">
      <div className="w-full max-w-xl rounded-3xl border-4 border-black bg-white p-8 shadow-[8px_8px_0_#000]">

        <h1 className="text-4xl font-black">
          Edit Profile
        </h1>

        <select
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          className="mt-8 w-full rounded-xl border-4 border-black p-4 font-bold"
        >
          <option value="">Select Branch</option>
          <option>CSE</option>
          <option>CSM</option>
          <option>CSD</option>
          <option>AI&DS</option>
          <option>CSBS</option>
          <option>ECE</option>
          <option>EEE</option>
          <option>ME</option>
          <option>CIVIL</option>
          <option>PHE</option>
        </select>

        <select
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="mt-5 w-full rounded-xl border-4 border-black p-4 font-bold"
        >
          <option value={1}>1st Year</option>
          <option value={2}>2nd Year</option>
          <option value={3}>3rd Year</option>
          <option value={4}>4th Year</option>
        </select>

        <input
          value={section}
          onChange={(e) => setSection(e.target.value)}
          placeholder="Section (Optional)"
          className="mt-5 w-full rounded-xl border-4 border-black p-4 font-bold"
        />

        <button
          onClick={saveProfile}
          className="mt-8 w-full rounded-xl border-4 border-black bg-black p-4 font-black text-white"
        >
          Save Changes
        </button>

      </div>
    </main>
  );
}
