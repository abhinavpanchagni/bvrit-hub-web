import Hero from "@/components/home/Hero";
import FreshersFeed from "@/components/home/FreshersFeed";
import StarterPackPreview from "@/components/home/StarterPackPreview";
import BeyondAcademics from "@/components/home/BeyondAcademics";
import GetStarted from "@/components/home/GetStarted";
import AboutSection from "@/components/home/AboutSection";
import LoginBenefits from "@/components/home/LoginBenefits";
import Community from "@/components/home/Community";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />

      <FreshersFeed />

      <StarterPackPreview />

      <BeyondAcademics />

      <GetStarted />

      <AboutSection />

      <LoginBenefits />

      <Community />

      <Footer />
    </main>
  );
}