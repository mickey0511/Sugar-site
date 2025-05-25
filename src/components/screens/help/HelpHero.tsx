"use client";

import { motion, useInView, stagger, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
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
    <section className="relative w-full md:h-[90vh]  bg-white overflow-hidden">
      {/* Top inset shadow bar (always visible) */}
      <div className="absolute top-0 left-0 w-full h-full z-40 shadow-[inset_0_6px_16px_rgba(46,35,150,0.06)] pointer-events-none" />



      {/* Main content container */}
      <div  style={{
    backgroundImage: "linear-gradient(to left, #eff3ff, transparent)",
  }} className=" z-10 flex flex-row h-full justify-center pl-6 md:pl-10 xl:pl-32 max-sm:px-0">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="md:x-1/2 space-y-6 pb-6 text-left w-full max-w-[700px]"
        >
          <h1 className="text-4xl md:text-[40px] font-bold leading-tight capitalize md:pt-0 pt-10 text-black overflow-hidden max-sm:px-4 max-md:pr-6 px-0 md:mt-[105px]">
            <span className="text-[#2E2396]">We are committed </span> to serving
            the best interests of our clients
          </h1>

          {/* Mobile hero image with responsive adjustments */}
          <div
            className="min-md:hidden w-full mt-5 "
          >
            <Image
              src="/help.svg"
              alt="Mobile Hero Image"
              width={500}
              height={400}
              className="w-full h-auto object-contain "
              priority
            />
          </div>

          <form action="" className="flex flex-col gap-4 min-md:max-w-[80%] max-sm:px-4 max-md:mr-6 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  placeholder="Type first name"
                  name=""
                  id=""
                  className="w-full border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#2E2396] transition duration-200"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  placeholder="Type last name"
                  name=""
                  id=""
                  className="w-full border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#2E2396] transition duration-200"
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
                className="w-full border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#2E2396] transition duration-200"
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
                className="w-full border border-gray-300 bg-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#2E2396] transition duration-200"
              ></textarea>
            </div>
          </form>
          <button
            className={`flex items-center justify-between gap-2 pl-4 pr-2 py-2 max-md:py-2 max-md:px-4 rounded-full bg-[#2E2396] text-white font-medium transition hover:bg-[#241b78]`}
          >
            <span className="truncate">Send help</span>
            <span className="w-8 h-8 max-md:size-6 bg-white rounded-full flex items-center justify-center">
              <ArrowRight size={14} color={"#2E2396"} />
            </span>
          </button>
        </motion.div>
        <div className="w-full h-full max-md:hidden">
        <Image
          src="/help.svg"
          alt="Hero Image"
          width={700}
          height={500}
          className="w-full h-full md:block hidden"
          objectFit="contain"
          objectPosition="right bottom"
          priority
        />
      </div>
      </div>
      

    </section>
  );
};

export default HelpHero;
