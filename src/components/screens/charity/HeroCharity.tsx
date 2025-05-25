"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";

const HeroCharity = () => {
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

      {/* top shadow */}
      <div className="absolute w-full h-full z-50 shadow-[inset_0_6px_16px_rgba(46,35,150,0.06)]"></div>

      <section className="w-full min-h-[90vh] pt-[120px] max-lg:pt-10 2xl:pl-[10vw] max-2xl:px-[5vw] max-sm:px-4">

        {/* Desktop Hero Image - Improved responsive positioning */}

    <Image
  src="/charity.svg"
  alt="Hero Image"
  width={800}
  height={800}
  priority
  className="
    hidden 2xl:block  top-1/2 -translate-y-1/2
    absolute z-0 pointer-events-none
    h-full max-h-[90vh] 
    right-0
  "
/>


        {/* Content */}
        <div className=" z-20 flex flex-col h-full justify-center ">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="2xl:w-[40vw] space-y-6 pb-6 text-left"
          >
            <h1 className="text-4xl md:text-[45px] font-bold leading-tight text-black overflow-hidden lg:mb-10">
              <span className="text-[#2E2396]">We Donate 5% </span> Of The
              Company&apos;s Profit To Charity Every Year.
            </h1>

            <div ref={textRef} className="flex flex-col text-[#000920]  gap-4 2xl:w-[30vw]">
              <p className="text-[19px] leading-relaxed font-poppins max-md:text-[16px] animate-char">
                Our charity initiatives focus on two crucial areas: providing
                food assistance to communities in developed countries facing
                food insecurity and supporting youth education to empower the
                next generation.
              </p>

              <p className="text-[19px] leading-relaxed text-[#000920] max-md:text-[16px] font-poppins 2xl:w-[29vw] animate-char">
                By partnering with trusted organizations and communities, we
                ensure that every contribution makes a meaningful impact.
                Whether it&apos;s a warm meal for a family in need or access to
                quality education for young minds.
              </p>

              <p className="text-[19px] leading-relaxed text-[#000920] max-md:text-[16px] font-poppins 2xl:w-[28vw] animate-char">
                We probably can&apos;t do a lot of big things to change the
                world, but we try to do a lot of small things with love.
              </p>
            </div>
          </motion.div>
          <div className="max-2xl:block hidden pb-10">
          <Image
            src="/charity.svg"
            alt="Hero Image"
            width={2000}
            height={690}
            priority
            className="w-[80vw] mx-auto min-md:w-[614.4px]"
          />
</div>
          {/* Mobile Hero Image with improved animation */}
          {/* <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 1.2,
              delay: 0.8,
              ease: [0.16, 1, 0.3, 1],
              scale: { type: "spring", stiffness: 100 },
            }}
            className="lg:hidden relative w-full mt-10 z-10 px-4"
          >
            <Image
              src="/charity.svg"
              alt="Mobile Hero"
              width={1000}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div> */}
        </div>

        {/* Decorative blobs */}
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
    </div>
  );
};

export default HeroCharity;
