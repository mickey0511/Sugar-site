"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import RoundedIconButton from "@/components/ui/RoundedIconButton";

const HelpHero = () => {
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

  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Background Image (solid wallpaper) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero/hero.svg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute w-full h-full z-50 shadow-[inset_0_6px_16px_rgba(46,35,150,0.06)]"></div>

      <section className="relative w-full min-h-[90vh] pt-[18vh] max-md:pt-[7vh]">
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
          className="hidden lg:block absolute top-0 left-[60px] w-full h-full z-0 pointer-events-none overflow-hidden"
        >
          <Image
            src="/help.svg"
            alt="Hero Image"
            layout="fill"
            className="object-contain object-top"
            priority
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full justify-center max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-6">
        <form action="" className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  placeholder="Type first name"
                  name=""
                  id=""
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#2E2396] transition duration-200"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  placeholder="Type last name"
                  name=""
                  id=""
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#2E2396] transition duration-200"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Type email"
                name=""
                id=""
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#2E2396] transition duration-200"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Message</label>
              <textarea
                placeholder="Type message"
                name=""
                id=""
                cols={30}
                rows={5}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#2E2396] transition duration-200"
              ></textarea>
            </div>
          </form>
          <RoundedIconButton text="Send help" />

          {/* Mobile Hero Image */}
          <div className="lg:hidden relative w-full mt-10 z-10">
            <Image
              src="/help.svg"
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

export default HelpHero;
