"use client"

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BannerSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const bannerVariants = {
    hidden: { scale: 0.98, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-white py-8 md:py-10 lg:py-12">
      <div className="max-w-[1440px] px-8 mx-auto">
        <motion.section
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={bannerVariants}
          className="bg-[#5b55c6] text-white rounded-2xl overflow-hidden my-16 p-8 lg:p-16 flex flex-col lg:flex-row items-center"
        >
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            className="lg:w-1/2 space-y-6"
          >
            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-[60px] font-bold"
            >
              Blockchain-As-An-Experience
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-base md:text-lg text-gray-200 font-poppins"
            >
              We coined BaaE to make powerful Web3 tech invisible to you. We
              manage the complexity so you can enjoy effortless, high-yield
              returns.
            </motion.p>
          </motion.div>

          {/* Illustration */}
          <motion.div
            variants={imageVariants}
            className="lg:w-1/2 flex justify-center mb-8 lg:mb-0"
          >
            <Image
              width={500}
              height={500}
              src="/hero/banner.svg"
              alt="Web3 technology illustration"
              className="h-full w-full"
            />
          </motion.div>
        </motion.section>
      </div>
    </section>
  );
};

export default BannerSection;