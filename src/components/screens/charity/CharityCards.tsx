"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CharityCards = () => {
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


  // Use intersection observer for the cards
  const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-[#F5F7FF] py-12 md:py-20 lg:py-24">
      <div className="max-w-[1440px] px-8 mx-auto">
 

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
                <h3 className="text-xl font-semibold text-[#362E94]">
                  Empower Children&apos;s Futures
                </h3>
              </div>
              <p className="text-[#2F2E2E]">
                Fuel education through crypto.Sugar supports underprivileged
                children by funding schools, providing learning materials, and
                enabling digital access through blockchain-powered donations.
                Every crypto contribution opens a new door to opportunity
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
                  Fight World Hunger
                </h3>
              </div>
              <p className="text-[#2F2E2E]">
                Turn digital assets into real-world meals. We partner with
                global organizations to deliver food and nutrition to
                communities in crisis. Your crypto donations are transparently
                tracked and directly support hunger relief missions.
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
                  Rescue and Protect Animals
                </h3>
              </div>
              <p className="text-[#2F2E2E]">
                Give voiceless lives a second chance.Sugar channels crypto funds
                to shelters and rescue groups, helping save animals from abuse,
                neglect, and extinction. With your support, we bring hope to
                every paw, wing, and tail. borrowers.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CharityCards;
