import EarnSection from "@/components/screens/earn/EarnSection";
import HistoricalAPYChart from "@/components/screens/earn/HistoricalAPYChart";
import ReferralSection from "@/components/screens/earn/ReferralSection";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <EarnSection />
      <ReferralSection />
      <HistoricalAPYChart />
      <Footer />
    </div>
  );
}
