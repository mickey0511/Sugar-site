"use client";

import { motion, useInView, stagger, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import RoundedIconButton from "@/components/ui/RoundedIconButton";
import Image from "next/image";

const HelpHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const textRef = useRef<HTMLDivElement>(null);

  // Staggered text animation
  useEffect(() => {
    if (isInView && textRef.current) {
      animate(
        textRef.current.querySelectorAll(".animate-char"),
        { opacity: [0, 1], y: [20, 0] },
        {
          duration: 0.8,
          delay: stagger(0.03, { startDelay: 0.2 }),
          ease: "easeOut",
        }
      );
    }
  }, [isInView]);

  return (
    <section className="relative w-full md:h-[88vh] md:pt-0 pt-20 bg-white overflow-hidden">

       {/* Top inset shadow bar (always visible) */}
      <div className="absolute top-0 left-0 w-full h-full z-40 shadow-[inset_0_6px_16px_rgba(46,35,150,0.06)] pointer-events-none" />

      {/* Animated gradient background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-white to-[#f5f3ff] z-0"
      />

      {/* Desktop background image with parallax effect */}
      <motion.div
        initial={{ opacity: 0, x: "30%" }}
        animate={isInView ? { opacity: 1, x: "0%" } : {}}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:block absolute right-0 top-4 h-full w-1/2 lg:w-[55%] xl:w-[60%] bg-no-repeat bg-cover lg:bg-right"
        style={{ backgroundImage: "url('/help.svg')" }}
      />

      {/* Main content container */}
      <div className="relative z-10 flex flex-col h-full justify-center px-6 md:px-20 xl:px-32">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl space-y-6 pb-6 text-left"
        >
          <h1 className="text-4xl md:text-[40px] font-bold leading-tight text-black overflow-hidden">
            <span className="text-[#2E2396]">We are committed </span> to serving
            the best interests of our clients
          </h1>

          {/* Mobile hero image with more sophisticated animation */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 1.2,
              delay: 0.8,
              ease: [0.16, 1, 0.3, 1],
              scale: { type: "spring", stiffness: 100 },
            }}
            className="lg:hidden w-full mt-10"
          >
            <Image
              src="/help.svg"
              alt="Mobile Hero Image"
              width={800}
              height={400}
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>

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
        </motion.div>
      </div>

      {/* Decorative animated elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#6B5BD2] mix-blend-multiply filter blur-3xl opacity-0"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 2, delay: 0.7 }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-[#2E2396] mix-blend-multiply filter blur-3xl opacity-0"
      />
    </section>
  );
};

export default HelpHero;
