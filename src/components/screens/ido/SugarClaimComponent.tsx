"use client";

import React from "react";
// import Image from "next/image";
import {
  AlarmClock,
  BookText,
  ChartCandlestick,
  Database,
  DoorClosedLocked,
  UserCheck,
} from "lucide-react";

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

  return (
    <section className="py-12">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Image Section */}
          <div className="w-full md:w-1/2 aspect-[4/3] relative rounded-3xl overflow-hidden">
            <div
              className="absolute inset-0 bg-[url('/ido/hero-image.svg')] bg-contain bg-no-repeat bg-center p-8"
              style={{
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 space-y-6">
            {/* Title */}
            <div>
              <h2 className="text-3xl font-bold text-black">Sugar-SUG</h2>
              <p className="text-gray-600 mt-1">
                Sugar Is The First Earn Protocol Designed To Maximize The Return
                For Users.
              </p>
            </div>

            {/* Claim Info */}
            <div className="flex flex-wrap items-center gap-3 bg-[#EFF3FF] rounded-2xl p-4">
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
              <h3 className="text-2xl font-semibold text-black mb-4">
                Eligibility
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {eligibilityItems.map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#EFF3FF] rounded-2xl p-4 flex items-center gap-3"
                  >
                    <div className="bg-[#362E94] rounded-xl p-3 text-white">
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

            {/* Connect Wallet Button */}
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
