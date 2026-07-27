import Button from "@/components/ui/Button";
import { semester1Subjects } from "@/data/semester1";
import { semester1Labs } from "@/data/labsSemester1";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function SemesterOnePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("branch")
    .eq("id", user.id)
    .single();

  const branch = profile?.branch;

  const filteredSubjects = semester1Subjects.filter((subject) =>
    subject.branches.includes(branch)
  );

  const filteredLabs = semester1Labs.filter((lab) =>
    lab.branches.includes(branch)
  );

  return (
    <main className="min-h-screen bg-[#f6f6f6]">

      <section className="border-b-4 border-black bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">

          <Button href="/resources" variant="secondary">
            ← Back to Resources
          </Button>

          <h1 className="mt-8 text-6xl font-black">
            Semester 1
          </h1>

          <p className="mt-5 max-w-3xl text-xl leading-9 text-blue-100">
            Theory subjects, laboratories, notes, videos, previous papers and
            question banks.
          </p>

          <p className="mt-8 inline-block rounded-xl border-2 border-black bg-yellow-300 px-5 py-2 font-black text-gray-700">
            Branch : {branch}
          </p>

        </div>
      </section>


      <section className="mx-auto max-w-7xl px-6 py-16">

        <h2 className="text-5xl font-black text-gray-700">
          📘 Theory Subjects
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">

          {filteredSubjects.map((subject) => (

            <div
              key={subject.slug}
              className="rounded-3xl border-4 border-black bg-blue-300 p-8 shadow-[8px_8px_0_#000]"
            >

              <p className="text-sm font-black text-gray-700">
                {subject.code}
              </p>

              <h3 className="mt-3 text-3xl font-black text-gray-700">
                {subject.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">

                {subject.branches.map((branch) => (
                  <span
                    key={branch}
                    className="rounded-lg border-2 border-black bg-white px-3 py-1 text-sm font-black text-gray-700"
                  >
                    {branch}
                  </span>
                ))}

              </div>


              <div className="mt-8">
                <Button href={`/semester-1/${subject.slug}`}>
                  Open →
                </Button>
              </div>

            </div>

          ))}

        </div>


        <div className="mt-20 flex items-center justify-between">

          <h2 className="text-5xl font-black text-gray-700">
            🧪 Laboratories
          </h2>

          <Button href="/semester-1/labs">
            View All Labs →
          </Button>

        </div>


        <div className="mt-10 grid gap-8 md:grid-cols-2">

          {filteredLabs.slice(0, 4).map((lab) => (

            <div
              key={lab.slug}
              className="rounded-3xl border-4 border-black bg-green-300 p-8 shadow-[8px_8px_0_#000]"
            >

              <p className="text-sm font-black text-gray-700">
                {lab.code}
              </p>

              <h3 className="mt-3 text-3xl font-black text-gray-700">
                {lab.title}
              </h3>


              <div className="mt-6 flex flex-wrap gap-2">

                {lab.branches.map((branch) => (
                  <span
                    key={branch}
                    className="rounded-lg border-2 border-black bg-white px-3 py-1 text-sm font-black text-gray-700"
                  >
                    {branch}
                  </span>
                ))}

              </div>


              <div className="mt-8">
                <Button href={`/semester-1/labs/${lab.slug}`}>
                  Open →
                </Button>
              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}
