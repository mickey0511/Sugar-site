import React from "react";
import Image from "next/image";

const stats = [
  {
    label: "Total IDO Volume",
    value: "50,000",
    unit: "",
    icon: "/ido/1.svg",
    hasToken: true,
  },
  {
    label: "Total Token Supply",
    value: "10,000,000,000,000",
    unit: "",
    icon: "/ido/2.svg",
    hasToken: false,
  },
  {
    label: "Total Deposit",
    value: "50,000",
    unit: "",
    icon: "/ido/3.svg",
    hasToken: true,
  },
  {
    label: "IDO Amount",
    value: "500,000,000,000",
    unit: "SUG",
    icon: "/ido/4.svg",
    hasToken: false,
  },
  {
    label: "FDV",
    value: "1,000,000",
    unit: "",
    icon: "/ido/5.svg",
    hasToken: true,
  },
  {
    label: "IDO Amount",
    value: "5.00%",
    unit: "",
    icon: "/ido/6.svg",
    hasToken: false,
  },
  {
    label: "Mint Price",
    value: "0.0000001",
    unit: "USDT/SUG",
    icon: "/ido/7.svg",
    hasToken: false,
  },
];

const LaunchpadStats = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto p-8 bg-white rounded-[32px] shadow-[0_6px_16px_rgba(46,35,150,0.06)]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Stats Cards */}
        {stats.slice(0, 7).map((stat, idx) => (
          <div
            key={idx}
            className="bg-[#F8F9FF] p-6 rounded-[24px] flex flex-col justify-between min-h-[120px]"
          >
            <div className="flex items-center gap-2">
              <Image
                src={stat.icon}
                alt={stat.label}
                width={24}
                height={24}
                className="text-[#362E94]"
              />
              <span className="text-[#362E94] text-sm font-medium">
                {stat.label}
              </span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <div>
                <span className="text-2xl font-bold">{stat.value}</span>
                {stat.unit && (
                  <sub className="text-sm ml-2 text-gray-500">{stat.unit}</sub>
                )}
              </div>
              {stat.hasToken && (
                <Image
                  src="/earn/tether.svg"
                  alt="USDT"
                  width={24}
                  height={24}
                />
              )}
            </div>
          </div>
        ))}

        {/* Input Form Card */}
        <div className="bg-[#F8F9FF] p-6 rounded-[24px] flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-600 mb-2 block">FDV</label>
            <input
              type="text"
              className="w-full h-12 px-4 rounded-2xl border border-[#E5E7EB] focus:outline-none focus:border-[#362E94]"
              placeholder="Enter FDV"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 mb-2 block">
              Mint Price
            </label>
            <input
              type="text"
              className="w-full h-12 px-4 rounded-2xl border border-[#E5E7EB] focus:outline-none focus:border-[#362E94]"
              placeholder="Enter Mint Price"
            />
          </div>
          <button className="w-full h-12 bg-[#362E94] text-white rounded-full mt-2 font-medium hover:bg-[#2a2377] transition-colors">
            Launchpad Contract
          </button>
        </div>
      </div>
    </div>
  );
};

export default LaunchpadStats;
