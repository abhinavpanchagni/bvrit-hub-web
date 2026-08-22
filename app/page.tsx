import Loader from "@/components/home/Loader";
import Hero from "@/components/home/Hero";
import EverythingYouNeed from "@/components/home/EverythingYouNeed";
import WhyBvritHub from "@/components/home/WhyBvritHub";
import AboutSection from "@/components/home/AboutSection";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg relative">
      <Loader />
      <Hero />
      <EverythingYouNeed />
      <WhyBvritHub />
      <AboutSection />
      <Footer />
    </main>
  );
}