"use client";

import { ArrowRight, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const ReferralSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className=" py-12 md:py-20 lg:py-24 bg-[#EFF3FF]">
      <div className="max-w-[1440px] px-4 sm:px-6 lg:px-20 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-[#362E94] rounded-2xl relative p-8 md:p-10 shadow-lg flex flex-col lg:flex-row items-center gap-10"
        >
          {/* Left Side Content */}
          <div className="flex-1 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Get An Extra 2% APY With A Referral Code
            </h2>

            {/* Input with arrow button */}
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-white/90 mt-1 mb-3">
                Enter referral code
              </label>
              <div className="flex w-full max-w-md">
                <input
                  type="text"
                  placeholder="Enter Invitation Code"
                  className="flex-1 px-5 py-4 rounded-l-lg bg-white text-[#362E94] placeholder-[#362E94]/60 border-none focus:outline-none"
                />
                <button className="px-5 bg-white text-[#362E94] rounded-r-lg hover:bg-gray-100 transition-colors duration-200">
                  <ArrowRight />
                </button>
              </div>
            </div>

            {/* Help / Info Section */}
            <div className="mt-6 flex items-start gap-2 text-white">
              <HelpCircle className="mt-1 text-yellow-300" size={20} />
              <div>
                <p className="font-semibold">Need a referral code?</p>
                <p className="text-white/90 mt-1 mb-3">
                  Stake first, then share your code, and both of you can earn an
                  extra 2% apy
                </p>
                <button className="px-5 py-2 border border-white rounded-full hover:bg-white hover:text-[#362E94] transition duration-200">
                  Go To My Account
                </button>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex-1  w-full">
            <Image
              src="/earn/referral.svg" // Replace with your uploaded image path
              alt="Referral illustration"
              width={500}
              height={400}
              className="mx-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReferralSection;
