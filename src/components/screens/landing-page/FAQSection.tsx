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
  answer: string | React.ReactElement;
  isActive: boolean;
  onClick: () => void;
  animationVariants?: import("framer-motion").Variants;
}) => {
  return (
    <motion.div
      variants={animationVariants}
      className={`rounded-lg p-4 md:p-6 mb-4 cursor-pointer transition-all duration-200 ${
        isActive
          ? "bg-[#524cbb] border-transparent"
          : "hover:bg-gray-50 border border-gray-200"
      }`}
    
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
          onClick={onClick}
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
          transition={{ duration: 0.5 }}
          className="mt-3 md:mt-4 text-white text-sm md:text-base overflow-hidden"
        >
          {typeof answer === "string" ? <p>{answer}</p> : answer}
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
      answer: (
        <div>
          <p>
            There&apos;s a common misconception that traditional banks can only
            offer around 4% APY to customers. In reality, they&apos;re capable
            of offering well over 10%. Banks often borrow money from customers
            and the Federal Reserve at near-zero interest, then turn around and
            lend it back at rates as high as 15%. It&apos;s a deeply flawed and
            exploitative system.
          </p>
          <p className="pt-4">
            We operate similar to banks, except there&apos;s are 2 major
            differences:
          </p>
          <ol className="pt-4 pl-6 list-decimal">
            <li className="ml-2">
              We give the majority of the yield to users, because we believe
              that&apos;s the right thing to do for our users.
            </li>
            <li className="ml-2">
              The yield is coming from Web 3, instead of Web 2 (for example,
              your bank, or any similar financial services is Web 2).
            </li>
          </ol>
          <p className="pt-4">
            We deploy risk-adjusted strategies across blockchain networks such
            as Ethereum and Solana, helping to advance these ecosystems by
            providing essential liquidity. In return, we capture the outsized
            returns that these emerging markets offer.
          </p>
          <p className="pt-4">
            It&apos;s a win-win model—ecosystems gain the liquidity they need to
            grow, and our users earn exceptional returns that would otherwise be
            out of reach.
          </p>
        </div>
      ),
    },
    {
      question: "How is the reward paid out?",
      answer:
        "Regardless of which scheme you choose, you will receive your reward at the beginning of each month for the reward accrued from the previous month. You can check your accrued reward on the dashboard everyday.",
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
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
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
        <motion.div variants={headerVariants} className="w-full lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-gray-900 mb-3 md:mb-4">
            <span className="text-[#362E94]">Anything</span> That Is Important
            To You Is Important To Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Find Answers Fast—Your Questions Matter, And We&apos;re Here To
            Help.
          </p>
        </motion.div>

        <motion.div variants={container} className="w-full lg:w-1/2">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
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
