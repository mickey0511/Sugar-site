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
      {/* Background Image (solid wallpaper) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero"
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
          className="hidden lg:block absolute top-0 left-[30rem] w-full h-full z-0 pointer-events-none overflow-hidden"
        >
          <Image
            src="/charity.svg"
            alt="Hero Image"
            layout="fill"
            className="object-contain object-top"
            priority
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full justify-center max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-2xl space-y-6 pb-6 text-left"
          >
            <h1 className="text-4xl md:text-[40px] font-bold leading-tight text-black overflow-hidden">
              <span className="text-[#2E2396]">We donate 5% </span> of the
              company&apos;s profit to charity every year.
            </h1>

            <div ref={textRef} className="flex flex-col gap-4">
              <p className="text-[20px] leading-relaxed text-gray-700 font-poppins animate-char">
                Our charity initiatives focus on two crucial areas: providing
                food assistance to communities in developed countries facing
                food insecurity and supporting youth education to empower the
                next generation.
              </p>

              <p className="text-[20px] leading-relaxed text-gray-700 font-poppins animate-char">
                By partnering with trusted organizations and communities, we
                ensure that every contribution makes a meaningful impact.
                Whether it&apos;s a warm meal for a family in need or access to
                quality education for young minds.
              </p>

              <p className="text-[20px] leading-relaxed text-gray-700 font-poppins animate-char">
                We probably can&apos;t do a lot of big things to change the
                world, but we try to do a lot of small things with love.
              </p>
            </div>
          </motion.div>

          {/* Mobile Hero Image */}
          <div className="lg:hidden relative w-full mt-10 z-10">
            <Image
              src="/charity.svg"
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

export default HeroCharity;
