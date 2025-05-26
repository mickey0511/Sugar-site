"use client";

import React from "react";
import {
  AlarmClock,
  BookText,
  ChartCandlestick,
  Database,
  DoorClosedLocked,
  UserCheck,
} from "lucide-react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {  useAppKit  } from '@reown/appkit/react'
import ContextProvider from "@/app/context";

const SugarClaimComponent = () => {
  const eligibilityItems = [
    {
      label: "Whitelist",
      value: "No Demand",
      icon: <UserCheck className="w-5 h-5" />,
    },
    {
      label: "Volume of LION",
      value: "No Demand",
      icon: <Database className="w-5 h-5" />,
    },
    {
      label: "Trading Volume",
      value: "No Demand",
      icon: <ChartCandlestick className="w-5 h-5" />,
    },
  ];
  const { open } = useAppKit();

  return (
    
    <section className="mb-[70px]">
      <div className="max-w-[1280px] w-full mx-auto ">
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* Image Section */}
          <div className="w-[343px] max-md:h-[270px] md:w-1/2  rounded-3xl  mx-auto">
            <Image src="/ido/hero-image.svg" alt="sugarimage" width={550} height={440}/>
            
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 space-y-6 flex flex-col justify-between">
            {/* Title */}
            <div>
              <h2 className="text-3xl font-bold text-black">Sugar-SUG</h2>
              <p className="text-black mt-1 font-poppins font-medium">
                Sugar Is The First Earn Protocol Designed To Maximize The Return
                For Users.
              </p>
            </div>

            {/* Claim Info */}
            <div className="flex flex-wrap items-center gap-3 bg-[#EFF3FF] w-fit rounded-2xl p-4 shadow-[4px_4px_8px_rgba(108,107,107,0.13)]">
              {[AlarmClock, DoorClosedLocked, BookText].map((Icon, i) => (
                <div key={i} className="bg-[#362E94] rounded-xl p-3">
                  <Icon className="w-5 h-5 text-white" />
                </div>
              ))}
              <div className="flex items-center gap-2 bg-[#362E94] text-white text-sm rounded-xl px-4 py-3 font-medium">
                <span>Claim</span>|<span>13:00(UTC+0)</span>|
                <span>25-05-2023</span>
              </div>
            </div>

            {/* Eligibility */}
            <div>
              <h3 className="text-2xl font-semibold text-black mb-4">Eligibility</h3>
              <div className="grid grid-cols-1 min-[1440px]:grid-cols-3 gap-4 ">
                {eligibilityItems.map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#EFF3FF] rounded-2xl p-4 flex items-center gap-3 shadow-[4px_4px_8px_rgba(108,107,107,0.13)]"
                  >
                    <div className="bg-[#362E94] rounded-xl p-3 text-white">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-medium text-black truncate">{item.label}</div>
                      <div className="text-sm text-gray-600 truncate">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Connect Wallet Button */}
            <div className="w-fit">
    <button
      onClick={()=>open()}
      className="inline-flex w-auto items-center justify-between gap-2 pl-4 pr-2 py-2 rounded-full bg-[#2E2396] text-white font-medium transition hover:bg-[#241b78] "
    >
      <span className="truncate">Connect Wallet</span>
      <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
        <ArrowRight size={16} color="#2E2396" />
      </span>
    </button>
    </div>
          </div>
        </div>
      </div>
    </section>
   
  );
};

export default SugarClaimComponent;
