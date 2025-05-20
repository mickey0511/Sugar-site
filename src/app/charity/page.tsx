import CharityCards from "@/components/screens/charity/CharityCards";
import HeroCharity from "@/components/screens/charity/HeroCharity";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroCharity />
      <CharityCards />
      <Footer />
    </div>
  );
}
