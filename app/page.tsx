import Loader from "@/components/home/Loader";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import EverythingYouNeed from "@/components/home/EverythingYouNeed";
import LoginBenefits from "@/components/home/LoginBenefits";
import GetStarted from "@/components/home/GetStarted";
import UpcomingFeatures from "@/components/home/UpcomingFeatures";
import Mission from "@/components/home/Mission";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg relative">
      <Loader />
      <Hero />
      <AboutSection />
      <EverythingYouNeed />
      <LoginBenefits />
      <GetStarted />
      <UpcomingFeatures />
      <Mission />
      <Footer />
    </main>
  );
}