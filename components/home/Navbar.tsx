import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b-2 border-black bg-white px-10 py-4">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Image
          src="/logo/logo.jpeg"
          alt="BVRIT Hub"
          width={95}
          height={95}
          priority
        />
      </div>

      {/* Navigation */}
      <div className="hidden items-center gap-8 rounded-full border-2 border-black px-8 py-3 font-medium md:flex">
        <a href="#">Home</a>
        <a href="#">Starter Pack</a>
        <a href="#">Resources</a>
        <a href="#">Labs</a>
        <a href="#">Community</a>
        <a href="#">About</a>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        <button className="font-medium">Login</button>

        <button className="rounded-2xl border-2 border-black bg-blue-600 px-6 py-3 font-semibold text-white shadow-[4px_4px_0px_0px_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
          Get Started
        </button>
      </div>
    </nav>
  );
}
