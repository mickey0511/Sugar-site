"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface InfoSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  reverse = false,
}) => {
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
    hidden: { opacity: 0, y: 30 },
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
    hidden: { opacity: 0, x: reverse ? -40 : 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-white py-6" ref={ref}>
      <div className="max-w-[1440px] px-8 mx-auto">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className={`flex flex-col ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center gap-8 lg:gap-12 xl:gap-16`}
        >
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            className="w-full lg:w-1/2 space-y-4 md:space-y-6"
          >
            <motion.h2
              variants={textVariants}
              className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-[black] leading-tight"
            >
              <motion.span variants={textVariants} className="text-[#362E94]">
                {title}
              </motion.span>{" "}
              <motion.span variants={textVariants}>{subtitle}</motion.span>
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-base sm:text-lg text-gray-600 leading-relaxed"
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={imageVariants}
            className="w-full lg:w-1/2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              width={400}
              height={400}
              src={imageSrc}
              className="h-full w-full"
              alt=""
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default InfoSection;
