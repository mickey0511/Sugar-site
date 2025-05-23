"use client";

import React from "react";
import Image from "next/image";
// import { motion } from "framer-motion";
import {
  AlarmClock,
  BookText,
  ChartCandlestick,
  Database,
  DoorClosedLocked,
  UserCheck,
} from "lucide-react";

const SugarClaimComponent = () => {
  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start gap-8 w-full">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2 aspect-[4/3] relative rounded-[32px] overflow-hidden p-6">
            <Image
              src="/ido/hero-image.svg"
              alt="Sugar Logo"
              fill
              className="object-contain p-8"
              priority
            />
          </div>

          {/* Right Content Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="space-y-2">
              <h2 className="text-[32px] font-bold text-black">
                Sugar-SUG
              </h2>
              <p className="text-gray-600">
                Sugar Is The First Earn Protocol Designed To Maximize The Return For Users.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-[#EFF3FF] rounded-[16px] p-2">
              <div className="bg-[#362E94] rounded-[12px] p-3">
                <AlarmClock className="w-5 h-5 text-white" />
              </div>
              <div className="bg-[#362E94] rounded-[12px] p-3">
                <DoorClosedLocked className="w-5 h-5 text-white" />
              </div>
              <div className="bg-[#362E94] rounded-[12px] p-3">
                <BookText className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center gap-2 bg-[#362E94] text-white text-sm rounded-[12px] px-4 py-3">
                <span>Claim</span> |
                <span>13:00(UTC+0)</span> |
                <span>25-05-2023</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-black">
                Eligibility
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
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
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#EFF3FF] rounded-[16px] p-4 flex items-center gap-3"
                  >
                    <div className="bg-[#362E94] rounded-[12px] p-3 text-white">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-medium text-black">{item.label}</div>
                      <div className="text-sm text-gray-600">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="bg-[#362E94] text-white px-6 py-3 rounded-full text-sm font-medium w-[160px] hover:bg-[#2a2370] transition-colors">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SugarClaimComponent;
