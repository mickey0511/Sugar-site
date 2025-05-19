"use client";

import RoundedIconButton from "@/components/ui/RoundedIconButton";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      {/* Container with max-w-screen-2xl (1536px) matching Navbar */}
      <div className="mx-auto max-w-[1440px] px-8 h-full">
        {/* Background image - desktop only (right aligned) */}
        <div
          className="hidden md:absolute md:right-0 md:top-0 md:block md:h-full md:w-[50%] lg:w-[55%] xl:w-[60%] bg-cover bg-no-repeat bg-right"
          style={{ backgroundImage: "url('/hero/hero.svg')" }}
        />

        {/* Content container */}
        <div className="relative z-10 flex h-full flex-col items-start pt-12 md:pt-20 lg:pt-24">
          <div className="w-full max-w-2xl space-y-4 sm:space-y-6 text-left">
            <h1 className="text-4xl font-bold leading-tight text-[#2E2396] sm:text-5xl md:text-[3.5rem] lg:text-6xl xl:text-[4.5rem]">
              Money Makes <br />
              Life <span className="text-[#6B5BD2]">Good.</span>
            </h1>
            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl md:text-[1.25rem] lg:text-2xl lg:leading-9">
              Sugar is the first earn protocol designed to maximize the return.
              Now enjoy the sweetest way to make money on earth.
            </p>
            <div className="pt-2 sm:pt-4">
              <RoundedIconButton
                text="Experience Now"
                // className="px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Mobile image - shown only on mobile */}
          <div className="md:hidden w-full mt-8 sm:mt-10">
            <Image
              src="/hero/mobile-hero.svg"
              width={600}
              height={400}
              alt="Mobile hero"
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
