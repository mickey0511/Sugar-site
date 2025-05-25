"use client";

import React, { useState, useRef } from "react";
import { ChevronDown, Search, Info } from "lucide-react";
import Image from "next/image";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Switch } from "@/components/ui/switch";

type Product = {
  id: number;
  name: string;
  duration: string;
  apy: string;
  tvl: string;
  autoRenew: boolean;
};

const EarnSection = () => {
  const ref = useRef(null);

  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "USDT",
      duration: "30 Days",
      apy: "30%",
      tvl: "100",
      autoRenew: false,
    },
    {
      id: 2,
      name: "USDT",
      duration: "90 Days",
      apy: "22%",
      tvl: "1000",
      autoRenew: false,
    },
    {
      id: 3,
      name: "USDT",
      duration: "180 Days",
      apy: "18%",
      tvl: "500",
      autoRenew: false,
    },
    {
      id: 4,
      name: "USDT",
      duration: "365 Days",
      apy: "13%",
      tvl: "1200",
      autoRenew: false,
    },
  ]);

  const toggleAutoRenew = (id: number) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, autoRenew: !product.autoRenew }
          : product
      )
    );
  };

  return (
    <div className="bg-[#FBFBFB] relative">
      <div className="absolute top-0 left-0 w-full h-full z-40 shadow-[inset_0_6px_16px_rgba(46,35,150,0.06)] pointer-events-none" />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-16 max-lg:py-12 ">
        

        {/* Header */}
        <div className="flex justify-between bg-white shadow-[0_6px_16px_rgba(46,35,150,0.06)] border-gray-100 rounded-xl p-4 items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#362E94]">Earn</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition">
            <Image
              width={50}
              height={50}
              src="/earn/tether.svg"
              alt="USDT"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium">USDT</span>
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Product Title Row */}
        <div className="flex flex-row items-center justify-between mb-4 gap-4">
          <h2 className="text-lg font-semibold text-gray-700">Product</h2>
          <div className="flex items-center gap-4">
            <div className="relative w-full max-w-[240px]">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none bg-white focus:ring-2 focus:ring-[#362E94] text-sm"
              />
              <Search
                size={18}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
            <button className="flex items-center gap-1 px-3 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
              30d
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Table */}
        <div ref={ref} className="overflow-x-auto rounded-xl shadow-[0_6px_16px_rgba(46,35,150,0.06)]">
          <table className="md:w-full w-[700px] text-sm sm:text-base rounded-xl px-5">
            <thead>
              <tr className="text-left shadow-[0_6px_16px_rgba(46,35,150,0.06)] bg-white text-gray-500">
                <th className="py-6 px-4">#</th>
                <th className="py-6 px-4 text-start">Stake</th>
                <th className="py-6 px-4 text-center">Duration</th>
                <th className="py-6 px-4 text-center">APY</th>
                <th className="py-6 px-4 text-center">TVL</th>
                <th className="py-6 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="bg-white border-t-gray-100 border-t-4"
                >
                  <td className="py-4 px-5 text-start">{product.id}</td>
                  <td className="py-4 px-4 font-medium">
                    <Image
                      width={50}
                      height={50}
                      src="/earn/tether.svg"
                      alt="USDT"
                      className="w-5 h-5 inline-block mr-2"
                    />
                    {product.name}
                  </td>
                  <td className="py-6 px-4 text-center">{product.duration}</td>
                  <td className="py-6 px-4 font-semibold text-center">
                    {product.apy}
                  </td>
                  <td className="py-6 px-4 text-center">{product.tvl}</td>
                  <td className="py-6 px-4 text-end flex items-center justify-end gap-4">
                    <div className="flex items-center justify-center gap-2">
                      <span
                        className={`text-sm ${
                          product.autoRenew ? "text-[#FC8220]" : "text-gray-500"
                        }`}
                      >
                        Auto renew
                      </span>
                      <Switch
                        checked={product.autoRenew}
                        onCheckedChange={() => toggleAutoRenew(product.id)}
                        className="data-[state=checked]:bg-[#FC8220]"
                      />
                    </div>
                    <button className="bg-[#362E94] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#2a2377] transition">
                      Deposit
                    </button>
                    <Tooltip.Provider>
                      <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                          <Info
                            size={16}
                            className="inline-block ml-1 cursor-help text-gray-400"
                          />
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                          <Tooltip.Content
                            className="bg-white p-4 rounded-xl shadow-lg max-w-xs text-sm text-gray-700 leading-relaxed"
                            sideOffset={5}
                          >
                            <p>
                              ✅ The earnings could be claimed at the end of each
                              30 days.
                            </p>
                            <p className="mt-2">
                              ⚠️ You can unstake at the end of month 3,6,9 and the
                              reward received will be calculated as 13% APY, the
                              difference will be deducted from your redemption
                              principal.
                            </p>
                            <Tooltip.Arrow className="fill-white" />
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    </Tooltip.Provider>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EarnSection;
