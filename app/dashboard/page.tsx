import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("branch, year, section")
    .eq("id", user.id)
    .single();

  return (
    <main className="min-h-screen bg-[#f6f6f6] px-6 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Welcome */}

        <div className="rounded-3xl border-4 border-black bg-yellow-300 p-8 shadow-[8px_8px_0_#000]">
          <div className="flex flex-col items-center gap-6 md:flex-row">

            <img
              src={user.user_metadata.avatar_url}
              alt=""
              className="h-24 w-24 rounded-full border-4 border-black"
            />

            <div>

              <p className="text-lg font-black">
                Welcome Back 👋
              </p>

              <h1 className="mt-2 text-5xl font-black">
                {user.user_metadata.full_name}
              </h1>

              <p className="mt-2 text-lg font-bold">
                {user.email}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">

                <span className="rounded-lg border-2 border-black bg-white px-4 py-2 font-black">
                  🎓 {profile?.branch}
                </span>

                <span className="rounded-lg border-2 border-black bg-white px-4 py-2 font-black">
                  📚 Year {profile?.year}
                </span>

                <span className="rounded-lg border-2 border-black bg-white px-4 py-2 font-black">
                  🏫 {profile?.section || "N/A"}
                </span>

              </div>

            </div>

          </div>
        </div>

        {/* Cards */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl border-4 border-black bg-blue-300 p-6 shadow-[6px_6px_0_#000]">
            <h2 className="text-2xl font-black">📖 Continue</h2>

            <p className="mt-5 font-bold">
              Programming for Problem Solving
            </p>

            <Link
              href="/semester-1/programming-for-problem-solving"
              className="mt-6 inline-block rounded-xl border-2 border-black bg-white px-5 py-3 font-black"
            >
              Continue →
            </Link>
          </div>

          <div className="rounded-3xl border-4 border-black bg-green-300 p-6 shadow-[6px_6px_0_#000]">
            <h2 className="text-2xl font-black">⭐ Bookmarks</h2>

            <p className="mt-6 text-5xl font-black">
              0
            </p>
          </div>

          <div className="rounded-3xl border-4 border-black bg-pink-300 p-6 shadow-[6px_6px_0_#000]">
            <h2 className="text-2xl font-black">📈 Progress</h2>

            <p className="mt-6 text-5xl font-black">
              0%
            </p>
          </div>

          <div className="rounded-3xl border-4 border-black bg-orange-300 p-6 shadow-[6px_6px_0_#000]">
            <h2 className="text-2xl font-black">👤 Profile</h2>

            <p className="mt-5 font-bold">
              {profile?.branch} • Year {profile?.year}
            </p>

            <Link
              href="/profile"
              className="mt-6 inline-block rounded-xl border-2 border-black bg-white px-5 py-3 font-black"
            >
              Edit →
            </Link>
          </div>

        </div>

        {/* Quick Access */}

        <div className="mt-10 rounded-3xl border-4 border-black bg-white p-8 shadow-[8px_8px_0_#000]">

          <h2 className="text-3xl font-black">
            Quick Access
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            <Link
              href="/resources"
              className="rounded-2xl border-2 border-black bg-yellow-300 p-5 text-center text-xl font-black"
            >
              📚 Resources
            </Link>

            <Link
              href="/freshers"
              className="rounded-2xl border-2 border-black bg-green-300 p-5 text-center text-xl font-black"
            >
              🚀 Starter Pack
            </Link>

            <Link
              href="/semester-1"
              className="rounded-2xl border-2 border-black bg-pink-300 p-5 text-center text-xl font-black"
            >
              📖 Semester 1
            </Link>

            <Link
              href="/profile"
              className="rounded-2xl border-2 border-black bg-blue-300 p-5 text-center text-xl font-black"
            >
              👤 Profile
            </Link>

          </div>

        </div>

        <form action="/auth/signout" method="post" className="mt-10">

          <button className="rounded-2xl border-4 border-black bg-red-500 px-8 py-4 text-xl font-black text-white shadow-[6px_6px_0_#000]">
            Logout
          </button>

        </form>

      </div>
    </main>
  );
}
