import React from "react";
import Image from "next/image";

// const stats = [
//   {
//     label: "Total IDO Volume",
//     value: "50,000",
//     unit: "",
//     icon: "/ido/1.svg",
//     hasToken: true,
//   },
//   {
//     label: "Total Token Supply",
//     value: "10,000,000,000,000",
//     unit: "",
//     icon: "/ido/2.svg",
//     hasToken: false,
//   },
//   {
//     label: "Total Deposit",
//     value: "50,000",
//     unit: "",
//     icon: "/ido/3.svg",
//     hasToken: true,
//   },
//   {
//     label: "IDO Amount",
//     value: "500,000,000,000",
//     unit: "SUG",
//     icon: "/ido/4.svg",
//     hasToken: false,
//   },
//   {
//     label: "FDV",
//     value: "1,000,000",
//     unit: "",
//     icon: "/ido/5.svg",
//     hasToken: true,
//   },
//   {
//     label: "IDO Amount",
//     value: "5.00%",
//     unit: "",
//     icon: "/ido/6.svg",
//     hasToken: false,
//   },
//   {
//     label: "Mint Price",
//     value: "0.0000001",
//     unit: "USDT/SUG",
//     icon: "/ido/7.svg",
//     hasToken: false,
//   },
// ];

const LaunchpadStats = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto p-8 bg-white rounded-[32px] mb-10 shadow-[0_8px_32px_rgba(46,35,150,0.12)]">
      <div className="grid grid-cols-3 gap-4">
        {/* First Row */}
        <div className="bg-[#F8F9FF] p-6 rounded-[24px] flex flex-col justify-between h-[120px]">
          <div className="flex items-center gap-2">
            <Image src="/ido/1.svg" alt="Total IDO Volume" width={24} height={24} />
            <span className="text-[#362E94] text-sm font-medium">Total IDO Volume</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">50,000</span>
            <Image src="/earn/tether.svg" alt="USDT" width={24} height={24} />
          </div>
        </div>

        <div className="bg-[#F8F9FF] p-6 rounded-[24px] flex flex-col justify-between h-[120px]">
          <div className="flex items-center gap-2">
            <Image src="/ido/2.svg" alt="Total Token Supply" width={24} height={24} />
            <span className="text-[#362E94] text-sm font-medium">Total Token Supply</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl font-bold">10,000,000,000,000</span>
          </div>
        </div>

        <div className="bg-[#F8F9FF] p-6 rounded-[24px] flex flex-col justify-between h-[120px]">
          <div className="flex items-center gap-2">
            <Image src="/ido/3.svg" alt="Total Deposit" width={24} height={24} />
            <span className="text-[#362E94] text-sm font-medium">Total Deposit</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">50,000</span>
            <Image src="/earn/tether.svg" alt="USDT" width={24} height={24} />
          </div>
        </div>

        {/* Second Row */}
        <div className="bg-[#F8F9FF] p-6 rounded-[24px] flex flex-col justify-between h-[120px]">
          <div className="flex items-center gap-2">
            <Image src="/ido/4.svg" alt="IDO Amount" width={24} height={24} />
            <span className="text-[#362E94] text-sm font-medium">IDO Amount</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl font-bold">500,000,000,000</span>
            <sub className="text-sm ml-2 text-gray-500">SUG</sub>
          </div>
        </div>

        <div className="bg-[#F8F9FF] p-6 rounded-[24px] flex flex-col justify-between h-[120px]">
          <div className="flex items-center gap-2">
            <Image src="/ido/5.svg" alt="FDV" width={24} height={24} />
            <span className="text-[#362E94] text-sm font-medium">FDV</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">1,000,000</span>
            <Image src="/earn/tether.svg" alt="USDT" width={24} height={24} />
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-[#F8F9FF] p-6 rounded-[24px] flex flex-col gap-4 row-span-2">
          <div>
            <label className="text-sm text-[#362E94] mb-2 block">FDV</label>
            <input
              type="text"
              className="w-full h-12 px-4 rounded-2xl border-0 bg-white focus:outline-none focus:ring-2 focus:ring-[#362E94]"
              placeholder="Enter FDV"
            />
          </div>
          <div>
            <label className="text-sm text-[#362E94] mb-2 block">Mint Price</label>
            <input
              type="text"
              className="w-full h-12 px-4 rounded-2xl border-0 bg-white focus:outline-none focus:ring-2 focus:ring-[#362E94]"
              placeholder="Enter Mint Price"
            />
          </div>
          <button className="w-full h-12 bg-[#362E94] text-white rounded-full mt-2 font-medium hover:bg-[#2a2377] transition-colors">
            Launchpad Contract
          </button>
        </div>

        {/* Third Row */}
        <div className="bg-[#F8F9FF] p-6 rounded-[24px] flex flex-col justify-between h-[120px]">
          <div className="flex items-center gap-2">
            <Image src="/ido/6.svg" alt="IDO Amount" width={24} height={24} />
            <span className="text-[#362E94] text-sm font-medium">IDO Amount</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl font-bold">5.00%</span>
          </div>
        </div>

        <div className="bg-[#F8F9FF] p-6 rounded-[24px] flex flex-col justify-between h-[120px]">
          <div className="flex items-center gap-2">
            <Image src="/ido/7.svg" alt="Mint Price" width={24} height={24} />
            <span className="text-[#362E94] text-sm font-medium">Mint Price</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl font-bold">0.0000001</span>
            <sub className="text-sm ml-2 text-gray-500">USDT/SUG</sub>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchpadStats;
