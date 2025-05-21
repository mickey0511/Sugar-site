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
  refferedUser: string;
  refferedTVL: string;
  startedDate: string;
};

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState("Staking");
  const [activeTab1, setActiveTab1] = useState("InProgress");

  const products: Product[] = [
    {
      id: 1,
      name: "USDT",
      duration: "30 Days",
      apy: "30%",
      tvl: "100",
      accured: "$101",
      claimable: "$100",
      refferedUser: "John Doe",
      refferedTVL: "Lorem",
      startedDate: "2025/05/16",
    },
    {
      id: 2,
      name: "USDT",
      duration: "90 Days",
      apy: "22%",
      tvl: "1000",
      accured: "$101",
      claimable: "$100",
      refferedUser: "John Doe",
      refferedTVL: "Lorem",
      startedDate: "2025/05/16",
    },
    {
      id: 3,
      name: "USDT",
      duration: "180 Days",
      apy: "18%",
      tvl: "500",
      accured: "$101",
      claimable: "$100",
      refferedUser: "John Doe",
      refferedTVL: "Lorem",
      startedDate: "2025/05/16",
    },
    {
      id: 4,
      name: "USDT",
      duration: "365 Days",
      apy: "13%",
      tvl: "1200",
      accured: "$101",
      claimable: "$100",
      refferedUser: "John Doe",
      refferedTVL: "Lorem",
      startedDate: "2025/05/16",
    },
    {
      id: 5,
      name: "USDT",
      duration: "365 Days",
      apy: "13%",
      tvl: "1200",
      accured: "$101",
      claimable: "$100",
      refferedUser: "John Doe",
      refferedTVL: "Lorem",
      startedDate: "2025/05/16",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 h-[80px] pl-10 bg-white text-[#362E94] shadow-[0_6px_16px_rgba(46,35,150,0.06)] flex items-center">
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
                  ? "bg-[#362E94] text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setActiveTab("Staking")}
            >
              Staking
            </button>
            <button
              className={`px-6 py-2 rounded-full ${
                activeTab === "History"
                  ? "bg-[#362E94] text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setActiveTab("History")}
            >
              History
            </button>
          </div>
        </div>

        {/* Conditional rendering based on activeTab */}
        {activeTab === "Staking" ? (
          <div className="overflow-x-auto pb-4">
            <table className="md:w-full w-[900px] text-sm">
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
                    <td className="py-4 px-4 text-center">
                      {product.duration}
                    </td>
                    <td className="py-4 px-4 font-semibold text-center">
                      {product.apy}
                    </td>
                    <td className="py-4 px-4 text-center">{product.tvl}</td>
                    <td className="py-4 px-4 text-center">{product.accured}</td>
                    <td className="py-4 px-4 text-center">
                      {product.claimable}
                    </td>
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
        ) : (
          <div className="overflow-x-auto pb-4">
            <table className="md:w-full w-[700px] text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4 text-start">Assets</th>
                  <th className="py-3 px-4 text-center">Duration</th>
                  <th className="py-3 px-4 text-center">APY</th>
                  <th className="py-3 px-4 text-center">Status</th>
                  <th className="py-3 px-4 text-center">Time</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: 1,
                    asset: "USDT",
                    amount: "10000",
                    duration: "300 Days",
                    apy: "31%",
                    status: "Pending",
                    time: "2025/05/16 16:20 PM",
                  },
                  {
                    id: 2,
                    asset: "USDT",
                    amount: "10000",
                    duration: "300 Days",
                    apy: "31%",
                    status: "Pending",
                    time: "2025/05/16 16:20 PM",
                  },
                  {
                    id: 3,
                    asset: "USDT",
                    amount: "10000",
                    duration: "300 Days",
                    apy: "31%",
                    status: "Pending",
                    time: "2025/05/16 16:20 PM",
                  },
                  // ... add more history items as needed
                ].map((item, index) => (
                  <tr
                    key={index}
                    className="shadow-[0_6px_16px_rgba(46,35,150,0.06)] rounded-xl my-4"
                  >
                    <td className="py-4 px-4 text-start">{item.id}</td>
                    <td className="py-4 px-4 flex items-center justify-start gap-2 font-medium">
                      <Image
                        width={50}
                        height={50}
                        src="/earn/tether.svg"
                        alt="USDT"
                        className="w-5 h-5"
                      />
                      {item.amount} {item.asset}
                    </td>
                    <td className="py-4 px-4 text-center">{item.duration}</td>
                    <td className="py-4 px-4 font-semibold text-center">
                      {item.apy}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span
                        className={`px-3 py-1 rounded-full ${
                          item.status === "Pending"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-orange-100 text-orange-600"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* My Referral Section */}
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold mb-4">My Referral</h3>

          {/* Position Tabs */}
          <div className="flex gap-4 mb-6">
            <button
              className={`px-6 py-2 rounded-full ${
                activeTab1 === "InProgress"
                  ? "bg-[#362E94] text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setActiveTab1("InProgress")}
            >
              In Progress
            </button>
            <button
              className={`px-6 py-2 rounded-full ${
                activeTab1 === "Claimed"
                  ? "bg-[#362E94] text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setActiveTab1("Claimed")}
            >
              Claimed
            </button>
          </div>
        </div>

        {/* Conditional rendering based on activeTab */}
        {activeTab1 === "InProgress" ? (
          <div className="overflow-x-auto pb-4">
            <table className="md:w-full w-[700px] text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4 text-start">Referred users</th>
                  <th className="py-3 px-4 text-center">Referred TVL</th>
                  <th className="py-3 px-4 text-center">Started Date</th>
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
                      {product.refferedUser}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {product.refferedTVL}
                    </td>
                    <td className="py-4 px-4 font-semibold text-center">
                      {product.startedDate}
                    </td>
                    <td className="py-4 px-4 text-center">{product.accured}</td>
                    <td className="py-4 px-4 text-center">
                      {product.claimable}
                    </td>
                    <td className="py-4 px-4 text-end">
                      <button
                        // whileHover={{ scale: 1.05 }}
                        // whileTap={{ scale: 0.95 }}
                        className="hover:bg-[#FC8220] hover:text-white text-[#FC8220] px-5 py-2 rounded-full border border-[#FC8220] text-sm font-medium transition"
                      >
                        Claim
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-x-auto pb-4">
            <table className="md:w-full w-[700px] text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4 text-start">Referred users</th>
                  <th className="py-3 px-4 text-center">Claimed</th>
                  <th className="py-3 px-4 text-center">Time</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: 1,
                    asset: "John Doe",
                    amount: "10000",
                    duration: "300 Days",
                    apy: "31%",
                    status: "Pending",
                    time: "2025/05/16 16:20 PM",
                  },
                  {
                    id: 2,
                    asset: "Alex Cat",
                    amount: "10000",
                    duration: "300 Days",
                    apy: "31%",
                    status: "Pending",
                    time: "2025/05/16 16:20 PM",
                  },
                  {
                    id: 3,
                    asset: "Shin Shun",
                    amount: "10000",
                    duration: "300 Days",
                    apy: "31%",
                    status: "Pending",
                    time: "2025/05/16 16:20 PM",
                  },
                  // ... add more history items as needed
                ].map((item, index) => (
                  <tr
                    key={index}
                    className="shadow-[0_6px_16px_rgba(46,35,150,0.06)] rounded-xl my-4"
                  >
                    <td className="py-4 px-4 text-start">{item.id}</td>
                    <td className="py-4 px-4 flex items-center justify-start gap-2 font-medium">
                      {item.asset}
                    </td>

                    <td className="py-4 px-4 text-center">${item.amount}</td>
                    <td className="py-4 px-4 text-center">{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Generate Referral Code Button */}
   <div className="flex justify-end items-end">
   <button className="bg-[#362E94] hover:bg-indigo-800 text-white font-bold py-3 px-6 rounded-lg">
        Generate My Referral Code
      </button>
   </div>
    </div>
  );
};

export default AccountPage;
