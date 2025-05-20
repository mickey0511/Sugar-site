"use client";

import { motion, useInView, stagger, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import RoundedIconButton from "@/components/ui/RoundedIconButton";
import Image from "next/image";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const textRef = useRef<HTMLDivElement>(null);

  // Staggered text animation
  useEffect(() => {
    if (isInView && textRef.current) {
      animate(
        textRef.current.querySelectorAll(".animate-char"),
        { opacity: [0, 1], y: [20, 0] },
        {
          duration: 0.8,
          delay: stagger(0.03, { startDelay: 0.2 }),
          ease: "easeOut",
        }
      );
    }
  }, [isInView]);

  return (
    <section className="relative w-full h-[88vh] bg-white overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-white to-[#f5f3ff] z-0"
      />

      {/* Desktop background image with parallax effect */}
      <motion.div
        initial={{ opacity: 0, x: "30%" }}
        animate={isInView ? { opacity: 1, x: "0%" } : {}}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:block absolute right-0 top-0 h-full w-1/2 lg:w-[55%] xl:w-[60%] bg-no-repeat bg-cover lg:bg-right"
        style={{ backgroundImage: "url('/hero/hero.svg')" }}
      />

      {/* Main content container */}
      <div className="relative z-10 flex flex-col h-full justify-center px-6 md:px-20 xl:px-32">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl space-y-6 text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-6xl xl:text-[4.5rem] font-bold leading-tight text-[#2E2396] overflow-hidden">
            <div ref={textRef} className="inline-block">
              {"Money Makes".split("").map((char, index) => (
                <span key={`m-${index}`} className="animate-char inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
            <br />
            <div ref={textRef} className="inline-block">
              {"Life ".split("").map((char, index) => (
                <span key={`l-${index}`} className="animate-char inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
              <span className="text-[#6B5BD2]">
                {"Good.".split("").map((char, index) => (
                  <span
                    key={`g-${index}`}
                    className="animate-char inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-[1.25rem] lg:text-2xl leading-relaxed text-gray-700 font-poppins"
          >
            Sugar is the first earn protocol designed to maximize the return.
            Now enjoy the sweetest way to make money on earth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: 1.5,
              type: "spring",
              stiffness: 100,
            }}
            className="pt-2"
          >
            <RoundedIconButton text="Experience Now" />
          </motion.div>
        </motion.div>

        {/* Mobile hero image with more sophisticated animation */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{
            duration: 1.2,
            delay: 0.8,
            ease: [0.16, 1, 0.3, 1],
            scale: { type: "spring", stiffness: 100 },
          }}
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

      {/* Decorative animated elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#6B5BD2] mix-blend-multiply filter blur-3xl opacity-0"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 2, delay: 0.7 }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-[#2E2396] mix-blend-multiply filter blur-3xl opacity-0"
      />
    </section>
  );
};

export default HeroSection;
