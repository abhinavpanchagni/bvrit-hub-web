import Hero from "@/components/home/Hero";
import EverythingYouNeed from "@/components/home/EverythingYouNeed";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg relative">
      <Hero />
      <EverythingYouNeed />
      <Footer />
    </main>
  );
}
