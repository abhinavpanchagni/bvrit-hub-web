export default function Stats() {
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
        <div className="rounded-3xl border-4 border-black bg-yellow-300 p-6 text-center shadow-[8px_8px_0_#000]">
          <h2 className="text-4xl font-black">150+</h2>
          <p className="mt-2 font-semibold">Study Notes</p>
        </div>

        <div className="rounded-3xl border-4 border-black bg-pink-300 p-6 text-center shadow-[8px_8px_0_#000]">
          <h2 className="text-4xl font-black">60+</h2>
          <p className="mt-2 font-semibold">PYQs</p>
        </div>

        <div className="rounded-3xl border-4 border-black bg-green-300 p-6 text-center shadow-[8px_8px_0_#000]">
          <h2 className="text-4xl font-black">20+</h2>
          <p className="mt-2 font-semibold">Lab Programs</p>
        </div>

        <div className="rounded-3xl border-4 border-black bg-blue-300 p-6 text-center shadow-[8px_8px_0_#000]">
          <h2 className="text-4xl font-black">24/7</h2>
          <p className="mt-2 font-semibold">Access</p>
        </div>
      </div>
    </section>
  );
}
