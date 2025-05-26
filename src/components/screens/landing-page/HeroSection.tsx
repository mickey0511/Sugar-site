"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useAppKit } from '@reown/appkit/react';

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isInView && textRef.current) {
      animate(
        textRef.current,
        { opacity: [0, 1], y: [40, 0] },
        { duration: 1.2, ease: "easeOut" }
      );
    }
  }, [isInView]);
    const { open } = useAppKit();

  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Background Image (solid wallpaper) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute w-full h-full z-10 shadow-[inset_0_6px_16px_rgba(46,35,150,0.06)]"></div>

      <section className="relative w-full min-h-[90vh] pt-[18vh] max-lg:pt-[7vh]">
        {/* Background gradient overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-white to-[rgb(243,243,252)] z-0"
        />

        {/* Desktop Hero Image */}
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

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full justify-center px-6 md:px-20 xl:px-35">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="space-y-6 text-left"
          >
            <motion.h1
              ref={textRef}
              className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-6xl xl:text-[4.5rem] font-bold leading-tight text-[#2E2396]"
            >
              <Image src="/hero/MoneyGood.png" alt="moneygood" width={750} height={220} className="w-[720px]"/>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              className="text-[20px]  leading-relaxed text-[#000920] font-poppins font-medium max-w-2xl"
            >
              Sugar Is The First Earn Protocol Designed To Maximize The Return. Now Enjoy The Sweetest Way To Make Money On Earth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 1.4, type: "spring", stiffness: 80 }}
              className="pt-2"
            >
                <button
        onClick={() => open()}
        className="flex items-center justify-between gap-3 hover:cursor-pointer px-4 py-2 md:px-4 sm:py-3  z-100 max-md:px-3 rounded-full bg-[#2E2396] text-white font-medium transition hover:bg-[#241b78] $"
      
      >
        <span className="truncate text-xl md:text-2xl ">Experience Now</span>
        <span className=" w-9 h-9 sm:w-10 sm:h-10 max-[500px]: bg-white rounded-full flex items-center justify-center">
          <ArrowRight size={24} color="#2E2396" />
        </span>
      </button>
            </motion.div>
          </motion.div>

          {/* Mobile Hero Image */}
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

        {/* Decorative blobs */}
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
    </div>
  );
};

export default HeroSection;
