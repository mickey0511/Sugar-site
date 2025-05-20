"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SavingsCardProps {
  lockInPeriod: string;
  apy: number;
  backgroundColor: string;
  textColor: string;
  index: number;
}

const SavingsCard: React.FC<SavingsCardProps> = ({
  lockInPeriod,
  apy,
  backgroundColor,
  textColor,
  index,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const hoverEffect = {
    scale: 1.03,
    transition: { duration: 0.3, ease: "easeOut" },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      whileHover={hoverEffect}
      className="bg-white rounded-[40px] shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
    >
      <div
        className={`p-6 rounded-[40px] ${backgroundColor} text-gray-800 text-start flex-1`}
      >
        <motion.h3
          className="text-xl md:text-2xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          USDT
        </motion.h3>
        <motion.p
          className={`mt-2 ${textColor} text-sm md:text-base`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Lock-in Period: {lockInPeriod}
        </motion.p>
        <motion.p
          className="mt-4 text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          {apy}% <span className={`text-lg md:text-xl ${textColor}`}>APY</span>
        </motion.p>
      </div>
      <motion.div
        className="px-6 py-4 flex justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-[#362E94] text-sm md:text-base font-medium">
          Start Earning
        </span>
        <ArrowRight size={20} className="text-[#362E94]" />
      </motion.div>
    </motion.div>
  );
};

const SavingsCards: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardData = [
    {
      lockInPeriod: "30 Days",
      apy: 13,
      backgroundColor: "bg-yellow-100",
      textColor: "text-[#FC8220]",
    },
    {
      lockInPeriod: "90 Days",
      apy: 18,
      backgroundColor: "bg-purple-100",
      textColor: "text-[#362E94]",
    },
    {
      lockInPeriod: "180 Days",
      apy: 22,
      backgroundColor: "bg-yellow-100",
      textColor: "text-[#FC8220]",
    },
    {
      lockInPeriod: "365 Days",
      apy: 30,
      backgroundColor: "bg-purple-100",
      textColor: "text-[#362E94]",
    },
  ];

  return (
    <section className="bg-[#F5F7FF] py-12 md:py-20 lg:py-24">
      <div className="max-w-[1440px] px-8 mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.h2
            variants={titleVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold text-gray-900 leading-tight"
          >
            Earn Rates As <span className="text-[#6B5BD2]">High As 30%</span>{" "}
            Annually
            <br className="hidden xl:block" /> With Sugar High-Yield Savings
          </motion.h2>
          <motion.p
            variants={titleVariants}
            className="mt-3 md:mt-4 text-gray-600 text-base md:text-lg max-w-3xl mx-auto"
          >
            Grow Your Savings With Up To 30% Annual Returns - Secure And
            Effortless.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {cardData.map((card, index) => (
            <SavingsCard key={index} {...card} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SavingsCards;
