import React from "react";
import { ArrowRight } from "lucide-react";
// import RoundedIconButton from "@/components/ui/RoundedIconButton";

interface SavingsCardProps {
  lockInPeriod: string;
  apy: number;
  backgroundColor: string;
}

const SavingsCard: React.FC<SavingsCardProps> = ({
  lockInPeriod,
  apy,
  backgroundColor,
}) => {
  return (
    <div className="bg-white w-64 rounded-xl shadow-md">
      <div
        className={`p-6 rounded-xl shadow-lg ${backgroundColor} text-gray-800 w-full`}
      >
        <h3 className="text-2xl font-semibold">USDT</h3>
        <p className="mt-1 text-gray-600">Lock-in Period: {lockInPeriod}</p>
        <p className="mt-4 text-4xl font-bold">
          {apy}% <span className="text-xl">APY</span>
        </p>
      </div>
      <div className="px-4 items-center py-5 flex justify-between gap-2">
        <span> Start Earning</span>
        <span>
          <ArrowRight size={24} />
        </span>
      </div>
    </div>
  );
};

const SavingsCards: React.FC = () => {
  const cardData = [
    { lockInPeriod: "30 Days", apy: 13, backgroundColor: "bg-yellow-100" },
    { lockInPeriod: "90 Days", apy: 18, backgroundColor: "bg-purple-100" },
    { lockInPeriod: "180 Days", apy: 22, backgroundColor: "bg-yellow-100" },
    { lockInPeriod: "365 Days", apy: 30, backgroundColor: "bg-purple-100" },
  ];

  return (
    <section className=" bg-[#F5F7FF] text-center py-20 ">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="py-10">
          <h2 className="text-[40px] font-semibold text-[black]">
            Earn Rates As <span className="text-[#6B5BD2]">High As 30%</span>{" "}
            Annually With Sugar <br /> High-Yield Savings
          </h2>
          <p className="text-gray-600 mt-2">
            Grow Your Savings With Up To 30% Annual Returns - Secure And
            Effortless.
          </p>
        </div>
        <div className="grid grid-cols-4 pb-10">
          {cardData.map((card, index) => (
            <SavingsCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SavingsCards;
