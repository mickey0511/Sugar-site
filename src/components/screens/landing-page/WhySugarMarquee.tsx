"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const WhySugarMarquee = () => {
  return (
    <section className="bg-[#524cbb] py-12 max-xl:py-10 max-md:py-8 overflow-hidden relative">
      <div className="text-center mb-6 max-xl:mb-4 max-md:mb-3">
        <h3 className="text-2xl max-xl:text-xl font-semibold text-gray-800 uppercase">
          Better Way To <span className="text-purple-600">Earn</span>
        </h3>
      </div>

      <Marquee speed={40} gradient={false} className="gap-16">
        {[...Array(10)].map((_, idx) => (
          <div key={idx} className="flex items-center gap-4 px-6">
            <Image src="/navbar/logo.svg" alt="Sugar Logo" width={60} height={60} />
            <span className="text-[60px] max-xl:text-[50px] max-md:text-[40px] max-[600px]:text-[30px] font-bold text-white">Why Sugar</span>
            <span className="text-[60px] max-xl:text-[50px] max-md:text-[40px] max-[600px]:text-[30px] font-bold text-white">Why Sugar</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default WhySugarMarquee;
