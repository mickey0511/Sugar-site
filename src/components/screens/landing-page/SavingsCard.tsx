import React from "react";
import { ArrowRight } from "lucide-react";

interface SavingsCardProps {
  lockInPeriod: string;
  apy: number;
  backgroundColor: string;
  textColor: string;
}

const SavingsCard: React.FC<SavingsCardProps> = ({
  lockInPeriod,
  apy,
  backgroundColor,
  textColor,
}) => {
  return (
    <div className="bg-white rounded-[40px] shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div
        className={`p-6 rounded-[40px] ${backgroundColor} text-gray-800 text-start flex-1`}
      >
        <h3 className="text-xl md:text-2xl font-semibold">USDT</h3>
        <p className={`mt-2 ${textColor} text-sm md:text-base`}>
          Lock-in Period: {lockInPeriod}
        </p>
        <p className="mt-4 text-3xl md:text-4xl font-bold">
          {apy}% <span className={`text-lg md:text-xl ${textColor}`}>APY</span>
        </p>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <span className="text-[#362E94] text-sm md:text-base font-medium">
          Start Earning
        </span>
        <ArrowRight size={20} className="text-[#362E94]" />
      </div>
    </div>
  );
};

const SavingsCards: React.FC = () => {
  const cardData = [
    {
      lockInPeriod: "30 Days",
      apy: 13,
      backgroundColor: "bg-yellow-100",
      textColor: "text-[#FC8220]",
    },
    {
      lockInPeriod: "90 Days",
      apy: 18,
      backgroundColor: "bg-purple-100",
      textColor: "text-[#362E94]",
    },
    {
      lockInPeriod: "180 Days",
      apy: 22,
      backgroundColor: "bg-yellow-100",
      textColor: "text-[#FC8220]",
    },
    {
      lockInPeriod: "365 Days",
      apy: 30,
      backgroundColor: "bg-purple-100",
      textColor: "text-[#362E94]",
    },
  ];

  return (
    <section className="bg-[#F5F7FF] py-12 md:py-20 lg:py-24">
      <div className="max-w-[1440px] px-8 mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold text-gray-900 leading-tight">
            Earn Rates As <span className="text-[#6B5BD2]">High As 30%</span>{" "}
            Annually
            <br className="hidden xl:block" /> With Sugar High-Yield Savings
          </h2>
          <p className="mt-3 md:mt-4 text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Grow Your Savings With Up To 30% Annual Returns - Secure And
            Effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <SavingsCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SavingsCards;
