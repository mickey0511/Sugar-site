"use client";

import Image from "next/image";
import React, { useState } from "react";

type Product = {
  id: number;
  name: string;
  duration: string;
  apy: string;
  tvl: string;
  accured: string;
  claimable: string;
};

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState("Staking");

  const products: Product[] = [
    {
      id: 1,
      name: "USDT",
      duration: "30 Days",
      apy: "30%",
      tvl: "100",
      accured: "$101",
      claimable: "$100",
    },
    {
      id: 2,
      name: "USDT",
      duration: "90 Days",
      apy: "22%",
      tvl: "1000",
      accured: "$101",
      claimable: "$100",
    },
    {
      id: 3,
      name: "USDT",
      duration: "180 Days",
      apy: "18%",
      tvl: "500",
      accured: "$101",
      claimable: "$100",
    },
    {
      id: 4,
      name: "USDT",
      duration: "365 Days",
      apy: "13%",
      tvl: "1200",
      accured: "$101",
      claimable: "$100",
    },
    {
      id: 5,
      name: "USDT",
      duration: "365 Days",
      apy: "13%",
      tvl: "1200",
      accured: "$101",
      claimable: "$100",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8  h-[80px] bg-white shadow-[0_6px_16px_rgba(46,35,150,0.06)]">
        My Account
      </h1>

      {/* Historical Earned Section */}
      <div className="mb-10 bg-white shadow-[0_6px_16px_rgba(46,35,150,0.06)] h-[232px] rounded-xl flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold mb-4">Historical Earned</h2>
        <div className="text-4xl font-bold">$ XXXXXXX</div>
      </div>

      {/* My Positions Section */}
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold mb-4">My Positions</h3>

          {/* Position Tabs */}
          <div className="flex gap-4 mb-6">
            <button
              className={`px-6 py-2 rounded-full ${
                activeTab === "Staking"
                  ? "bg-indigo-700 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setActiveTab("Staking")}
            >
              Staking
            </button>
            <button
              className={`px-6 py-2 rounded-full ${
                activeTab === "History"
                  ? "bg-indigo-700 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setActiveTab("History")}
            >
              History
            </button>
          </div>
        </div>
        <div className="overflow-x-auto pb-4">
          <table
            // initial="hidden"
            // animate={isInView ? "show" : "hidden"}
            // variants={container}
            className="md:w-full w-[700px] text-sm"
          >
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4 text-start">Assets</th>
                <th className="py-3 px-4 text-center">Duration</th>
                <th className="py-3 px-4 text-center">APY</th>
                <th className="py-3 px-4 text-center">Days</th>
                <th className="py-3 px-4 text-center">Accrued</th>
                <th className="py-3 px-4 text-center">Claimable</th>
                <th className="py-3 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={index}
                  // variants={item}
                  // transition={{ delay: 0.2 + index * 0.1 }}
                  className="shadow-[0_6px_16px_rgba(46,35,150,0.06)] rounded-xl my-4"
                  // whileHover={{
                  //   y: -5,
                  //   boxShadow: "0 10px 20px rgba(46,35,150,0.1)",
                  // }}
                >
                  <td className="py-4 px-4 text-start">{product.id}</td>
                  <td className="py-4 px-4 flex items-center justify-start gap-2 font-medium">
                    <Image
                      width={50}
                      height={50}
                      src="/earn/tether.svg"
                      alt="USDT"
                      className="w-5 h-5"
                    />
                    {product.name}
                  </td>
                  <td className="py-4 px-4 text-center">{product.duration}</td>
                  <td className="py-4 px-4 font-semibold text-center">
                    {product.apy}
                  </td>
                  <td className="py-4 px-4 text-center">{product.tvl}</td>
                  <td className="py-4 px-4 text-center">{product.accured}</td>
                  <td className="py-4 px-4 text-center">{product.claimable}</td>
                  <td className="py-4 px-4 flex items-center justify-between">
                    <button
                      // whileHover={{ scale: 1.05 }}
                      // whileTap={{ scale: 0.95 }}
                      className="hover:bg-[#FC8220] hover:text-white text-[#FC8220] px-5 py-2 rounded-full border border-[#FC8220] text-sm font-medium transition"
                    >
                      Claim
                    </button>
                    <button
                      // whileHover={{ scale: 1.05 }}
                      // whileTap={{ scale: 0.95 }}
                      className="bg-[#362E94] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#2a2377] transition"
                    >
                      Deposit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* My Referral Section */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4">My Referral</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Referred users</th>
                <th className="py-3 px-4 text-left">Referred TVL</th>
                <th className="py-3 px-4 text-left">Started Date</th>
                <th className="py-3 px-4 text-left">Accrued</th>
                <th className="py-3 px-4 text-left">Claimable</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: 1,
                  user: "Henry",
                  tvl: "Lorem",
                  date: "2025/05/16",
                  accrued: "100",
                  claimable: "$110",
                },
                {
                  id: 2,
                  user: "Allen",
                  tvl: "Lorem",
                  date: "2025/05/16",
                  accrued: "1000",
                  claimable: "$110",
                },
                {
                  id: 3,
                  user: "Lisa",
                  tvl: "Lorem",
                  date: "2025/05/16",
                  accrued: "500",
                  claimable: "$110",
                },
                {
                  id: 4,
                  user: "Roy",
                  tvl: "Lorem",
                  date: "2025/05/16",
                  accrued: "1200",
                  claimable: "$110",
                },
              ].map((referral) => (
                <tr key={referral.id} className="border-t border-gray-200">
                  <td className="py-3 px-4">{referral.id}</td>
                  <td className="py-3 px-4">{referral.user}</td>
                  <td className="py-3 px-4">{referral.tvl}</td>
                  <td className="py-3 px-4">{referral.date}</td>
                  <td className="py-3 px-4">{referral.accrued}</td>
                  <td className="py-3 px-4">{referral.claimable}</td>
                  <td className="py-3 px-4">
                    <button className="px-4 py-1 bg-orange-500 text-white rounded hover:bg-orange-600">
                      Claim
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Staking History Section */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Staking</h3>
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <h4 className="font-medium mb-2">History</h4>
            <div className="space-y-2">
              {["Claim", "Unstake", "Claim", "Unstake", "Claim", "Unstake"].map(
                (action, index) => (
                  <div key={index} className="py-2 px-4 bg-gray-100 rounded">
                    {action}
                  </div>
                )
              )}
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-medium mb-2">In Progress</h4>
            <div className="py-2 px-4 bg-gray-100 rounded mb-4">Claimed</div>
          </div>
        </div>
      </div>

      {/* Generate Referral Code Button */}
      <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-3 px-6 rounded-lg">
        Generate My Referral Code
      </button>
    </div>
  );
};

export default AccountPage;
