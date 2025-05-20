"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const InstitutionalStrategy = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Use intersection observer for the title section
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Use intersection observer for the cards
  const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-[#F5F7FF] py-12 md:py-20 lg:py-24">
      <div className="max-w-[1440px] px-8 mx-auto">
        {/* Animated title section */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#362E94]">Institutional</span> Strategy
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Built For Institutions Seeking Secure, Scalable Crypto Growth.
          </p>
        </motion.div>

        {/* Animated cards */}
        <motion.div
          ref={cardsRef}
          variants={container}
          initial="hidden"
          animate={cardsInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* LP Strategy Card */}
          <motion.div
            variants={item}
            className="bg-[#EBE9FF] rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <h3 className="text-xl font-semibold text-[#362E94]">LP</h3>
              </div>
              <p className="text-[#2F2E2E]">
                We generate yield by providing liquidity to the partnered DEX
                while neutralizing the delta exposure (price risk) of the
                underlying assets via short positions in the risk assets (SOL,
                ETH, BTC)
              </p>
            </div>
          </motion.div>

          {/* Quant Trading Card */}
          <motion.div
            variants={item}
            className="bg-[#FFF4D8] rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <h3 className="text-xl font-semibold text-[#FC8220]">
                  Quant Trading
                </h3>
              </div>
              <p className="text-[#2F2E2E]">
                Our battle-tested techniques and experiences from quantitative
                finance and high- frequency trading brings mathematical rigor to
                maximize the returns borrowers.
              </p>
            </div>
          </motion.div>

          {/* Web 3 Lending Card */}
          <motion.div
            variants={item}
            className="bg-[#EBE9FF] rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <h3 className="text-xl font-semibold text-[#362E94]">
                  Web 3 Lending
                </h3>
              </div>
              <p className="text-[#2F2E2E]">
                We generate yield from fixed rate, overcollateralized loans to
                institutional borrowers.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstitutionalStrategy;