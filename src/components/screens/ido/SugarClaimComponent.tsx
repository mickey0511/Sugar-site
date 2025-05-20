"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  AlarmClock,
  BookText,
  ChartCandlestick,
  Database,
  DoorClosedLocked,
  UserCheck,
} from "lucide-react";
// import { Button } from "@/components/ui/button";

const SugarClaimComponent = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24">
      <div className="max-w-[1440px] px-8 mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10 w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Image Section */}
          <div className="w-full md:w-1/2 md:h-[500px] h-[300px] relative">
            <Image
              src="/ido/hero-image.svg"
              alt="Sugar Logo"
              fill
              className="md:object-cover"
            />
          </div>

          {/* Right Content Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h2 className="text-2xl md:text-[40px] font-bold text-gray-900">
                Sugar-SUG
              </h2>
              <p className="text-gray-700 mt-2">
                Sugar Is The First Earn Protocol Designed To Maximize The Return
                For Users.
              </p>
            </div>

            <div className="flex bg-[#EFF3FF] w-fit p-3 shadow-[0_6px_16px_rgba(46,35,150,0.06)] rounded-md items-center md:gap-[40px] gap-2">
              <div className="bg-[#362E94] text-white text-sm rounded-xl h-[50px] w-[50px] font-medium flex items-center justify-center gap-2">
                <span className="material-icons text-base">
                  <AlarmClock />
                </span>{" "}
                {/* Or use Heroicons */}
              </div>
              <div className="bg-[#362E94] text-white text-sm rounded-xl h-[50px] w-[50px] font-medium flex items-center justify-center gap-2">
                <span className="material-icons text-base">
                  <DoorClosedLocked />
                </span>
              </div>
              <div className="bg-[#362E94] text-white text-sm rounded-xl h-[50px] w-[50px] font-medium flex items-center justify-center gap-2">
                <span className="material-icons text-base">
                  <BookText />
                </span>
              </div>
              <div className="bg-[#362E94] text-white text-sm rounded-xl px-4 h-[50px] font-medium flex items-center gap-2">
                Claim | <span className="md:px-1">13:00(UTC+0)</span> | 25-05-2023
              </div>
            </div>

            <div>
              <h3 className="text-[32px] font-semibold text-gray-800">
                Eligibility
              </h3>
              <div className="md:flex grid grid-cols-2  gap-3 mt-3">
                {[
                  {
                    label: "Whitelist",
                    value: "No Demand",
                    icon: <UserCheck />,
                  },
                  {
                    label: "Volume of LCN",
                    value: "No Demand",
                    icon: <Database />,
                  },
                  {
                    label: "Trading Volume",
                    value: "No Demand",
                    icon: <ChartCandlestick />,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#EFF3FF] rounded-xl px-4 py-3 text-center text-sm text-gray-800 shadow-[0_6px_16px_rgba(46,35,150,0.06)] w-full sm:w-auto"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span className="bg-[#362E94] text-white text-sm rounded-xl h-[50px] w-[50px] font-medium flex items-center justify-center gap-2">
                        {item.icon}
                      </span>
                      <div className="flex flex-col items-start">
                        <div className="font-semibold">{item.label}</div>
                        <div className="text-gray-600">{item.value}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="bg-[#362E94] text-white px-6 h-[40px] rounded-full text-sm font-medium mt-4 hover:bg-[#362E94] transition">
              Connect Wallet
            </button>

            {/* <Button className="bg-[#5D57FF] text-white px-6 py-3 rounded-full text-sm font-medium mt-4 hover:bg-[#4a47d1]">
            Connect Wallet
          </Button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SugarClaimComponent;
