import LaunchpadStats from "@/components/screens/ido/LaunchpadStats";
import SugarClaimComponent from "@/components/screens/ido/SugarClaimComponent";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="px-4 sm:px-6 lg:px-20 lg:pt-[70px] lg:pb-14 py-10">
      <SugarClaimComponent />
      <LaunchpadStats />
      </div>
      <Footer />
    </div>
  );
}
