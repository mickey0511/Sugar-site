"use client";

import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FAQItem = ({
  question,
  answer,
  isActive,
  onClick,
  animationVariants,
}: {
  question: string;
  answer: string;
  isActive: boolean;
  onClick: () => void;
  animationVariants?: import("framer-motion").Variants;
}) => {
  return (
    <motion.div
      variants={animationVariants}
      className={`rounded-lg p-4 md:p-6 mb-4 cursor-pointer transition-all duration-200 ${
        isActive
          ? "bg-[#362E94] border-transparent"
          : "hover:bg-gray-50 border border-gray-200"
      }`}
      onClick={onClick}
      whileHover={{ scale: isActive ? 1 : 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex justify-between items-center">
        <h3
          className={`text-base md:text-lg font-medium flex-1 ${
            isActive ? "text-white" : "text-gray-900"
          }`}
        >
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`w-5 h-5 ml-4 ${
            isActive ? "text-[#FC8220]" : "text-gray-500"
          }`}
        >
          {isActive ? <Minus size={20} /> : <Plus size={20} />}
        </motion.div>
      </div>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-3 md:mt-4 text-white text-sm md:text-base overflow-hidden"
        >
          <p>{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: "I worry that I might lose all my money",
      answer:
        "Clients' assets are protected. Just like any chartered bank, we have purchased 100% full coverage from leading blockchain insurers for our clients.",
    },
    {
      question: "The reward is really high. Where does it come from?",
      answer:
        "Our rewards come from carefully calculated yield generation strategies across decentralized finance protocols, ensuring sustainable returns while managing risk.",
    },
    {
      question: "How is the reward paid out?",
      answer:
        "Rewards are paid out automatically to your account on a daily/weekly/monthly basis (depending on the product) and can be withdrawn at any time.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="max-w-[1440px] px-8 mx-auto py-12 md:py-16 lg:py-24">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={container}
        className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 xl:gap-20 w-full"
      >
        <motion.div
          variants={headerVariants}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-gray-900 mb-3 md:mb-4">
            <span className="text-[#362E94]">Anything</span> That Is Important
            To You Is Important To Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Find Answers Fast—Your Questions Matter, And We&apos;re Here To Help.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          className="w-full lg:w-1/2"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.question}
              isActive={activeIndex === index}
              onClick={() => toggleFAQ(index)}
              animationVariants={item}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FAQSection;