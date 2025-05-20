"use client";

import React from "react";
import { ChevronDown, Search } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Product = {
  id: number;
  name: string;
  duration: string;
  apy: string;
  tvl: string;
};

const EarnSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products: Product[] = [
    { id: 1, name: "USDT", duration: "30 Days", apy: "30%", tvl: "100" },
    { id: 2, name: "USDT", duration: "90 Days", apy: "22%", tvl: "1000" },
    { id: 3, name: "USDT", duration: "180 Days", apy: "18%", tvl: "500" },
    { id: 4, name: "USDT", duration: "365 Days", apy: "13%", tvl: "1200" },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header with animation */}
      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={item}
        className="flex justify-between bg-white shadow-[0_6px_16px_rgba(46,35,150,0.06)] p-4 items-center mb-6"
      >
        <h1 className="text-2xl md:text-3xl font-semibold text-[#362E94]">
          Earn
        </h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition"
        >
          <img src="/earn/tether.svg" alt="USDT" className="w-5 h-5" />
          <span className="text-sm font-medium">USDT</span>
          <ChevronDown size={16} />
        </motion.button>
      </motion.div>

      {/* Product Title Row with animation */}
      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={item}
        transition={{ delay: 0.1 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4"
      >
        <h2 className="text-lg font-semibold text-gray-700">Product</h2>

        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative w-full max-w-[240px]"
          >
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#362E94] text-sm"
            />
            <Search
              size={18}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1 px-3 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            30d
            <ChevronDown size={16} />
          </motion.button>
        </div>
      </motion.div>

      {/* Table container */}
      <div ref={ref} className="overflow-x-auto pb-4">
        <motion.table
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={container}
          className="md:w-full w-[700px] text-sm"
        >
          <thead>
            <motion.tr variants={fadeIn} className="text-left text-gray-500">
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4 text-start">Stake</th>
              <th className="py-3 px-4 text-center">Duration</th>
              <th className="py-3 px-4 text-center">APY</th>
              <th className="py-3 px-4 text-center">TVL</th>
              <th className="py-3 px-4"></th>
            </motion.tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <motion.tr
                key={product.id}
                variants={item}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="shadow-[0_6px_16px_rgba(46,35,150,0.06)] rounded-xl my-4"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 20px rgba(46,35,150,0.1)",
                }}
              >
                <td className="py-4 px-4 text-start">{product.id}</td>
                <td className="py-4 px-4 flex items-center justify-start gap-2 font-medium">
                  <img src="/earn/tether.svg" alt="USDT" className="w-5 h-5" />
                  {product.name}
                </td>
                <td className="py-4 px-4 text-center">{product.duration}</td>
                <td className="py-4 px-4 font-semibold text-center">
                  {product.apy}
                </td>
                <td className="py-4 px-4 text-center">{product.tvl}</td>
                <td className="py-4 px-4 text-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#362E94] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#2a2377] transition"
                  >
                    Deposit
                  </motion.button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </div>
  );
};

export default EarnSection;
