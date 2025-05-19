import HeroSection from "@/components/screens/landing-page/HeroSection";
import SavingsCards from "@/components/screens/landing-page/SavingsCard";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SavingsCards />
    </div>
  );
}
