import TeamSection from "@/components/screens/team/TeamSection";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <EarnSection /> */}
      <TeamSection />
      <Footer />
    </div>
  );
}
