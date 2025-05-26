import BannerSection from "@/components/screens/landing-page/BannerSection";
import EarningsCalculator from "@/components/screens/landing-page/EarningsCalculator";
import FAQSection from "@/components/screens/landing-page/FAQSection";
import HeroSection from "@/components/screens/landing-page/HeroSection";
import InstitutionalStrategy from "@/components/screens/landing-page/InstitutionalStrategy";
import SavingsCards from "@/components/screens/landing-page/SavingsCard";
import WhySugarMarquee from "@/components/screens/landing-page/WhySugarMarquee";
import Footer from "@/components/ui/Footer";
import InfoSectionProps from "@/components/ui/InfoSectionProps";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";
import ProtectedLayout from "./ProtectedLayout";

export default function Home() {
  return (
    <ProtectedLayout>
    <div className="overflow-x-hidden">
      <div className="relative">
      <Navbar />
      <HeroSection />
      <Image src="/hero/fullback.png" alt="fullback" width={800} height={820} className="absolute top-0 left-0 w-[40vw] h-full z-1 flex-shrink-0"/>
      </div>
      <SavingsCards />
      <EarningsCalculator />
      
      <WhySugarMarquee />
      <InfoSectionProps
        title="World"
        subtitle="high Yield"
        description="We take care of all of the complexities and obstacles so you can receive only the
highest-quality yield through a seamless, intuitive experience and services that we
are proud of."
        imageSrc="/hero/world.png"
        reverse={false}
      />
      <InfoSectionProps
        title="Available"
        subtitle="to Everyone"
        description="Thanks to blockchain technology, everyone on this planet can use our product in
a permission less way, regardless of his or her background, social status, or family
histories. Our motto is Pro Humanities."
        imageSrc="/hero/2nd-props.svg"
        reverse={true}
      />
      <InfoSectionProps
        title="Your"
        subtitle="Principal is Protected"
        description="All funds are 100% secured by industry-leading insurance providers. AND we have
a $15 million reserve fund to ensure protection and stability in the event of any
mishaps."
        imageSrc="/hero/3rd-props.svg"
        reverse={false}
      />
<BannerSection />
      <InstitutionalStrategy />
      <FAQSection />
      <Footer />
      
    </div>
    </ProtectedLayout>
  );
}
