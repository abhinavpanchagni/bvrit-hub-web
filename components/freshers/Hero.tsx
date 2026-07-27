export default function Hero() {
  return (
    <section className="rounded-[36px] border-4 border-black bg-blue-600 p-10 text-white shadow-[10px_10px_0_#000]">
      <span className="rounded-full border-2 border-black bg-yellow-300 px-4 py-2 text-sm font-bold text-gray-700">
        🚀 BVRIT HUB EXCLUSIVE
      </span>

      <h1 className="mt-6 text-5xl font-black leading-tight">
        Freshers Starter Pack
      </h1>

      <p className="mt-6 max-w-3xl text-lg text-blue-100">
        Your complete guide to surviving and succeeding in your first year at
        BVRIT. Everything from SGPA to hostel life—explained in simple words.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <div className="rounded-2xl border-2 border-black bg-white px-5 py-3 text-gray-700">
          <p className="text-3xl font-black">10</p>
          <p className="text-sm font-semibold">Guides</p>
        </div>

        <div className="rounded-2xl border-2 border-black bg-white px-5 py-3 text-gray-700">
          <p className="text-3xl font-black">26+</p>
          <p className="text-sm font-semibold">Pages</p>
        </div>

        <div className="rounded-2xl border-2 border-black bg-white px-5 py-3 text-gray-700">
          <p className="text-3xl font-black">100%</p>
          <p className="text-sm font-semibold">Free</p>
        </div>
      </div>
    </section>
  );
}
