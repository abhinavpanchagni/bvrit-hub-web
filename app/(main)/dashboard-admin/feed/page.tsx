export default function FeedPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-5xl font-extrabold">
            Freshers Feed
          </h1>

          <button className="rounded-xl border border-border/10 bg-surface-yellow/40 px-6 py-3 font-extrabold shadow-sm">
            + New Post
          </button>
        </div>

        <div className="rounded-xl border border-border/10 bg-white shadow-sm">

          <table className="w-full">

            <thead className="bg-black text-bg">

              <tr>

                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Actions</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td className="border-b p-4">
                  Welcome Freshers
                </td>

                <td className="border-b p-4">
                  Announcement
                </td>

                <td className="border-b p-4">
                  Published
                </td>

                <td className="border-b p-4">
                  26 Jul 2026
                </td>

                <td className="border-b p-4">

                  <button className="mr-3 rounded bg-blue-500 px-3 py-1 font-bold text-bg">
                    Edit
                  </button>

                  <button className="rounded bg-red-500 px-3 py-1 font-bold text-bg">
                    Delete
                  </button>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </main>
  );
}
