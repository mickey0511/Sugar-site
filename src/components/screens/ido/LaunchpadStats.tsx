import React from "react";
import Image from "next/image";

const LaunchpadStats = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto p-5 lg:p-[30px]  my-10 bg-white rounded-[40px] shadow-[0px_0px_28.2px_4px_#2864c12b] border-none">
      <div className="grid grid-cols-1 min-[800px]:grid-cols-2 min-[1280px]:grid-cols-3 gap-4 sm:gap-5 ">
        {/* First Row */}
        <div className="bg-[#EFF3FF] p-4 rounded-[16px] flex flex-col justify-between h-[120px] shadow-[7px_7px_8px_rgba(108,107,107,0.13)] transition-shadow">
          <div className="flex items-center gap-2">
            <Image
              src="/ido/1.svg"
              alt="Total IDO Volume"
              width={20}
              height={20}
            />
            <span className="text-[#362E94] text-sm font-medium">
              Total IDO Volume
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[32px] font-bold">50,000</span>
            <Image src="/earn/tether.svg" alt="USDT" width={20} height={20} />
          </div>
        </div>

        <div className="bg-[#EFF3FF] p-4 rounded-[16px] overflow-hidden flex flex-col justify-between h-[120px] shadow-[7px_7px_8px_rgba(108,107,107,0.13)] transition-shadow">
          <div className="flex items-center gap-2">
            <Image
              src="/ido/2.svg"
              alt="Total Token Supply"
              width={20}
              height={20}
            />
            <span className="text-[#362E94] text-sm font-medium">
              Total Token Supply
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-[32px] font-bold">10,000,000,000,000</span>
          </div>
        </div>

        <div className="bg-[#EFF3FF] p-4 rounded-[16px] flex flex-col justify-between h-[120px] shadow-[7px_7px_8px_rgba(108,107,107,0.13)] transition-shadow">
          <div className="flex items-center gap-2">
            <Image
              src="/ido/3.svg"
              alt="Total Deposit"
              width={20}
              height={20}
            />
            <span className="text-[#362E94] text-sm font-medium">
              Total Deposit
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[32px] font-bold">50,000</span>
            <Image src="/earn/tether.svg" alt="USDT" width={20} height={20} />
          </div>
        </div>

        {/* Second Row */}
        <div className="bg-[#EFF3FF] p-4 rounded-[16px] flex flex-col overflow-hidden justify-between h-[120px] shadow-[7px_7px_8px_rgba(108,107,107,0.13)] transition-shadow">
          <div className="flex items-center gap-2">
            <Image src="/ido/4.svg" alt="IDO Amount" width={20} height={20} />
            <span className="text-[#362E94] text-sm font-medium">
              IDO Amount
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[32px] font-bold">500,000,000,000</span>
            <span className="text-sm text-gray-500 ml-1">SUG</span>
          </div>
        </div>

        <div className="bg-[#EFF3FF] p-4 rounded-[16px] flex flex-col justify-between h-[120px] shadow-[7px_7px_8px_rgba(108,107,107,0.13)] transition-shadow">
          <div className="flex items-center gap-2">
            <Image src="/ido/5.svg" alt="FDV" width={20} height={20} />
            <span className="text-[#362E94] text-sm font-medium">FDV</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[32px] font-bold">1000000</span>
            <Image src="/earn/tether.svg" alt="USDT" width={20} height={20} />
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-[#EFF3FF] p-4 rounded-[16px] flex flex-col gap-3 max-[800px]:gap-3 max-[1280px]:gap-15  row-span-3  max-[800px]:row-start-8 min-[1280]:row-span-2 shadow-[7px_7px_8px_rgba(108,107,107,0.13)] transition-shadow">
          <div className=" max-[800px]:mt-0 max-[1280px]:mt-5">
            <label className="text-sm text-[#362E94] mb-1 block">FDV</label>
            <input
              type="text"
              className="w-full h-10 px-4 rounded-xl border-0 bg-white focus:outline-none focus:ring-2 focus:ring-[#362E94] shadow-[0_2px_8px_rgba(46,35,150,0.08)]"
              placeholder="Enter FDV"
            />
          </div>
          <div className="">
            <label className="text-sm text-[#362E94] mb-1 block">
              Mint Price
            </label>
            <input
              type="text"
              className="w-full h-10 px-4 rounded-xl border-0 bg-white focus:outline-none focus:ring-2 focus:ring-[#362E94] shadow-[0_2px_8px_rgba(46,35,150,0.08)]"
              placeholder="Enter Mint Price"
            />
          </div>
          <button className="w-full h-10 bg-[#362E94] text-white rounded-xl font-medium mt-auto max-[800px]:mt-5 shadow-[0_4px_16px_rgba(46,35,150,0.2)] hover:shadow-[0_6px_20px_rgba(46,35,150,0.3)] transition-shadow">
            Launchpad Contract
          </button>
        </div>

        {/* Third Row */}
        <div className="bg-[#EFF3FF] p-4 rounded-[16px] flex flex-col justify-between h-[120px] shadow-[7px_7px_8px_rgba(108,107,107,0.13)] transition-shadow">
          <div className="flex items-center gap-2">
            <Image src="/ido/6.svg" alt="IDO Amount" width={20} height={20} />
            <span className="text-[#362E94] text-sm font-medium">
              IDO Amount
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-[32px] font-bold">5.00%</span>
          </div>
        </div>

        <div className="bg-[#EFF3FF] p-4 rounded-[16px] flex flex-col justify-between h-[120px] shadow-[7px_7px_8px_rgba(108,107,107,0.13)] transition-shadow">
          <div className="flex items-center gap-2">
            <Image src="/ido/7.svg" alt="Mint Price" width={20} height={20} />
            <span className="text-[#362E94] text-sm font-medium">
              Mint Price
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[32px] font-bold">0.0000001</span>
            <span className="text-sm text-gray-500 ml-1">USDT/SUG</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchpadStats;
