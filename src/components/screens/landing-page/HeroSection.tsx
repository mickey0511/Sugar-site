"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import RoundedIconButton from "@/components/ui/RoundedIconButton";
import Image from "next/image";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isInView && textRef.current) {
      animate(
        textRef.current,
        { opacity: [0, 1], y: [40, 0] },
        {
          duration: 1.2,
          ease: "easeOut",
        }
      );
    }
  }, [isInView]);

  return (
    <section className="relative w-full min-h-[90vh] pt-[18vh] max-md:pt-[7vh] bg-white overflow-hidden">

      {/* Background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-white to-[rgb(243,243,252)] z-0"
      />

      {/* Desktop Hero image (background) */}
      <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={isInView ? { opacity: 1, scale: 1 } : {}}
  transition={{ duration: 1.8, ease: "easeOut" }}
  className="hidden lg:block absolute top-0 left-80 w-full h-full z-0 pointer-events-none overflow-hidden"
>
  <Image
    src="/hero/hero.svg"
    alt="Hero Image"
    layout="fill"
    className="object-contain object-top"
    priority
  />
</motion.div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col h-full justify-center px-6 md:px-20 xl:px-35">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="max-w-2xl space-y-6 text-left"
        >
          {/* Animate as a single block */}
          <motion.h1
            ref={textRef}
            className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-6xl xl:text-[4.5rem] font-bold leading-tight text-[#2E2396]"
          >
            Money Makes<br />
            Life <span className="text-[#6B5BD2]">Good.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-[1.25rem] lg:text-2xl leading-relaxed text-gray-700 font-poppins"
          >
            Sugar is the first earn protocol designed to maximize the return.
            Now enjoy the sweetest way to make money on earth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 1,
              delay: 1.4,
              type: "spring",
              stiffness: 80,
            }}
            className="pt-2"
          >
            <RoundedIconButton text="Experience Now" />
          </motion.div>
        </motion.div>

        {/* Mobile hero image (under text) */}
        <div className="lg:hidden relative w-full mt-10 z-10">
          <Image
            src="/hero/mobile-hero.svg"
            alt="Mobile Hero"
            width={1000}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      {/* Decorative blurred shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#6B5BD2] mix-blend-multiply filter blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 2, delay: 0.7 }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-[#2E2396] mix-blend-multiply filter blur-3xl"
      />
    </section>
  );
};

export default HeroSection;
