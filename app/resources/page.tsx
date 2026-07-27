import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

const semesters = [
  {
    title: "Semester 1",
    description:
      "Theory subjects, laboratories, notes, videos, PYQs and question banks.",
    href: "/semester-1",
    color: "bg-blue-300",
  },
  {
    title: "Semester 2",
    description:
      "Access all academic resources for your second semester.",
    href: "/semester-2",
    color: "bg-green-300",
  },
];

export default async function ResourcesPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("branch, year")
    .eq("id", user.id)
    .single();

  return (
    <main className="min-h-screen bg-[#f6f6f6]">

      <section className="border-b-4 border-black bg-black text-white">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <p className="inline-block rounded-full border-2 border-black bg-yellow-300 px-5 py-2 font-black text-gray-700">
            ACADEMIC RESOURCES
          </p>

          <h1 className="mt-6 text-6xl font-black">
            Choose Your Semester
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-gray-700300">
            Welcome <span className="font-black">{profile?.branch}</span> • Year{" "}
            <span className="font-black">{profile?.year}</span>
          </p>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-10 md:grid-cols-2">

          {semesters.map((semester) => (

            <Link
              key={semester.title}
              href={semester.href}
              className={`${semester.color} rounded-3xl border-4 border-black p-10 shadow-[10px_10px_0_#000] transition hover:-translate-y-2`}
            >

              <h2 className="text-5xl font-black">
                {semester.title}
              </h2>

              <p className="mt-6 text-lg leading-8">
                {semester.description}
              </p>

              <div className="mt-10 inline-block rounded-xl border-2 border-black bg-white px-6 py-3 font-black">
                Open →
              </div>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}
