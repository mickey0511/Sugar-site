import LaunchpadStats from "@/components/screens/ido/LaunchpadStats";
import SugarClaimComponent from "@/components/screens/ido/SugarClaimComponent";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SugarClaimComponent />
      <LaunchpadStats />
      <Footer />
    </div>
  );
}
