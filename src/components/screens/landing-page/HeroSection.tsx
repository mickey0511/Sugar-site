"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import RoundedIconButton from "@/components/ui/RoundedIconButton";
import Image from "next/image";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative w-full h-[88vh] bg-white">
      {/* Desktop background image */}
      <div
        className="hidden lg:block absolute right-0 top-0 h-full w-1/2 lg:w-[55%] xl:w-[60%] bg-no-repeat bg-cover lg:bg-right"
        style={{ backgroundImage: "url('/hero/hero.svg')" }}
      />

      {/* Main content container */}
      <div className="relative z-10 flex flex-col h-full justify-center px-6 md:px-20 xl:px-32">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl space-y-6 text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-6xl xl:text-[4.5rem] font-bold leading-tight text-[#2E2396]">
            Money Makes <br />
            Life <span className="text-[#6B5BD2]">Good.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-[1.25rem] lg:text-2xl leading-relaxed text-gray-700 font-poppins">
            Sugar is the first earn protocol designed to maximize the return.
            Now enjoy the sweetest way to make money on earth.
          </p>
          <div>
            <RoundedIconButton text="Experience Now" />
          </div>
        </motion.div>

        {/* Mobile hero image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="lg:hidden w-full mt-10"
        >
          <Image
            src="/hero/mobile-hero.svg"
            alt="Mobile Hero Image"
            width={800}
            height={400}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
