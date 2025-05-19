import React from 'react';
import Image from 'next/image';
import RoundedIconButton from '@/components/ui/RoundedIconButton';
// import { RoundedIconButton } from './RoundedIconButton';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 max-w-7xl mx-auto px-4 py-20">
      <div className="max-w-lg space-y-8">
        <h1 className="text-[76px] leading-tight font-[500] text-[#2E2396]">
          Money Makes <br /> Life <span className="text-[#6B5BD2]">Good.</span>
        </h1>
        <p className="text-lg text-gray-600">
          Sugar is the first earn protocol designed to maximize the return. Now enjoy the sweetest way to make money on earth.
        </p>
        <RoundedIconButton text="Experience Now" />
      </div>
      <div className="relative w-full max-w-2xl">
        <Image src="/hero/hero.svg" alt="Hero Image" width={800} height={400} className="rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default HeroSection;
