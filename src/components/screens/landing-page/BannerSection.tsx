import Image from "next/image";
import React from "react";

const BannerSection = () => {
  return (
    <section className="bg-[#F5F7FF] py-12 md:py-20 lg:py-24">
      <div className="max-w-[1440px] px-8 mx-auto">
        <section className="bg-[#362E94] text-white rounded-2xl overflow-hidden my-16 p-8 lg:p-16 flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Blockchain-As-An-Experience
            </h2>
            <p className="text-base md:text-lg text-gray-200">
              We coined BaaE to make powerful Web3 tech invisible to you. We
              manage the complexity so you can enjoy effortless, high-yield
              returns.
            </p>
          </div>

          {/* Illustration */}
          <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <Image
              width={500}
              height={500}
              src="/hero/banner.svg"
              alt="Web3 technology illustration"
              className="h-full w-full"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default BannerSection;
