import FAQSection from "@/components/screens/landing-page/FAQSection";
import HeroSection from "@/components/screens/landing-page/HeroSection";
import InstitutionalStrategy from "@/components/screens/landing-page/InstitutionalStrategy";
import SavingsCards from "@/components/screens/landing-page/SavingsCard";
import Footer from "@/components/ui/Footer";
import InfoSectionProps from "@/components/ui/InfoSectionProps";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SavingsCards />

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

      <InstitutionalStrategy />
      <FAQSection />
      <Footer />
    </div>
  );
}
