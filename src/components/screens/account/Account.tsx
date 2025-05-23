"use client";

import Image from "next/image";
import React, { useState } from "react";

type Position = {
  id: number;
  amount: string;
  duration: string;
  apy: string;
  days: number;
  accrued: string;
  claimable: string;
};

type HistoryItem = {
  id: number;
  amount: string;
  duration: string;
  apy: string;
  days: number;
  earned: string;
  status: "Pending" | "Claimed";
  time: string;
};

type ReferralItem = {
  id: number;
  user: string;
  claimed: string;
  time: string;
};

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState<"Staking" | "History">("Staking");
  const [referralTab, setReferralTab] = useState<"In Progress" | "Claimed">(
    "In Progress"
  );

  const positions: Position[] = [
    {
      id: 1,
      amount: "10000 USDT",
      duration: "1 Month",
      apy: "31%",
      days: 15,
      accrued: "$ 110",
      claimable: "$ 120",
    },
    {
      id: 2,
      amount: "10000 USDT",
      duration: "1 Month",
      apy: "31%",
      days: 20,
      accrued: "$ 110",
      claimable: "$ 11",
    },
    {
      id: 3,
      amount: "10000 USDT",
      duration: "1 Month",
      apy: "18%",
      days: 20,
      accrued: "$ 110",
      claimable: "$ 11",
    },
    {
      id: 4,
      amount: "10000 USDT",
      duration: "1 Month",
      apy: "13%",
      days: 15,
      accrued: "$ 110",
      claimable: "$ 11",
    },
  ];

  const history: HistoryItem[] = [
    {
      id: 1,
      amount: "10000 USDT",
      duration: "300 Days",
      apy: "31%",
      days: 15,
      earned: "$ 110",
      status: "Pending",
      time: "2025/05/16 16:20 PM",
    },
    // ... Add more history items
  ];

  const referrals: ReferralItem[] = [
    {
      id: 1,
      user: "Henry",
      claimed: "$ 110",
      time: "2025/05/16 16:20 PM",
    },
    {
      id: 2,
      user: "Allen",
      claimed: "$ 110",
      time: "2025/05/16 16:20 PM",
    },
    {
      id: 3,
      user: "Lisa",
      claimed: "$ 110",
      time: "2025/05/16 16:20 PM",
    },
    {
      id: 4,
      user: "Roy",
      claimed: "$ 110",
      time: "2025/05/16 16:20 PM",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto p-8">
      <h1 className="text-[#362E94] text-xl font-medium mb-6">My Account</h1>
      
      <div className="bg-white rounded-[32px] shadow-[0_6px_16px_rgba(46,35,150,0.06)] p-8 mb-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-gray-900 text-lg font-medium mb-4">Historical Earned</h2>
          <div className="bg-[#F8F9FF] px-6 py-2 rounded-full">
            <span className="text-lg font-medium">$ XXXXXXX</span>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">My Positions</h2>
          <div className="flex gap-2 bg-[#F8F9FF] p-1 rounded-full">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "Staking"
                  ? "bg-[#362E94] text-white"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("Staking")}
            >
              Staking
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "History"
                  ? "bg-[#362E94] text-white"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("History")}
            >
              History
            </button>
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-[32px] shadow-[0_6px_16px_rgba(46,35,150,0.06)]">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="text-gray-500 text-sm border-b">
                <th className="text-left py-6 px-6">#</th>
                <th className="text-left py-6 px-6">Asset</th>
                <th className="text-left py-6 px-6">Duration</th>
                <th className="text-left py-6 px-6">APY</th>
                <th className="text-left py-6 px-6">Days</th>
                {activeTab === "Staking" ? (
                  <>
                    <th className="text-left py-6 px-6">Accrued</th>
                    <th className="text-left py-6 px-6">Claimable</th>
                    <th className="text-right py-6 px-6"></th>
                  </>
                ) : (
                  <>
                    <th className="text-left py-6 px-6">Earned</th>
                    <th className="text-left py-6 px-6">Status</th>
                    <th className="text-left py-6 px-6">Time</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {activeTab === "Staking"
                ? positions.map((position) => (
                    <tr
                      key={position.id}
                      className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="py-6 px-6">{position.id}</td>
                      <td className="py-6 px-6">
                        <div className="flex items-center gap-2">
                          <Image
                            src="/earn/tether.svg"
                            alt="USDT"
                            width={24}
                            height={24}
                          />
                          <span className="font-medium">{position.amount}</span>
                        </div>
                      </td>
                      <td className="py-6 px-6">{position.duration}</td>
                      <td className="py-6 px-6 font-medium">{position.apy}</td>
                      <td className="py-6 px-6">{position.days}</td>
                      <td className="py-6 px-6">{position.accrued}</td>
                      <td className="py-6 px-6">{position.claimable}</td>
                      <td className="py-6 px-6">
                        <div className="flex gap-2 justify-end">
                          <button
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                              position.id === 1
                                ? "bg-[#FC8220] text-white"
                                : "border border-[#FC8220] text-[#FC8220] hover:bg-[#FC8220] hover:text-white"
                            }`}
                          >
                            Claim
                          </button>
                          <button className="px-6 py-2 rounded-full text-sm font-medium bg-[#362E94] text-white hover:bg-[#2a2377] transition-colors">
                            Unstake
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                : history.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="py-6 px-6">{item.id}</td>
                      <td className="py-6 px-6">
                        <div className="flex items-center gap-2">
                          <Image
                            src="/earn/tether.svg"
                            alt="USDT"
                            width={20}
                            height={20}
                          />
                          {item.amount}
                        </div>
                      </td>
                      <td className="py-6 px-6">{item.duration}</td>
                      <td className="py-6 px-6">{item.apy}</td>
                      <td className="py-6 px-6">{item.days}</td>
                      <td className="py-6 px-6">{item.earned}</td>
                      <td className="py-6 px-6">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            item.status === "Pending"
                              ? "bg-[#F8F9FF] text-[#362E94]"
                              : "bg-[#FFF5ED] text-[#FC8220]"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">{item.time}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">My Referral</h2>
          <div className="flex gap-2 bg-[#F8F9FF] p-1 rounded-full">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                referralTab === "In Progress"
                  ? "bg-[#362E94] text-white"
                  : "text-gray-600"
              }`}
              onClick={() => setReferralTab("In Progress")}
            >
              In Progress
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                referralTab === "Claimed"
                  ? "bg-[#362E94] text-white"
                  : "text-gray-600"
              }`}
              onClick={() => setReferralTab("Claimed")}
            >
              Claimed
            </button>
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-[32px] shadow-[0_6px_16px_rgba(46,35,150,0.06)]">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="text-gray-500 text-sm border-b">
                <th className="text-left py-6 px-6">#</th>
                <th className="text-left py-6 px-6">Referred users</th>
                {referralTab === "In Progress" ? (
                  <>
                    <th className="text-left py-6 px-6">Referred TVL</th>
                    <th className="text-left py-6 px-6">Started Date</th>
                    <th className="text-left py-6 px-6">Accrued</th>
                    <th className="text-left py-6 px-6">Claimable</th>
                    <th className="text-right py-6 px-6"></th>
                  </>
                ) : (
                  <>
                    <th className="text-left py-6 px-6">Claimed</th>
                    <th className="text-left py-6 px-6">Time</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {referralTab === "In Progress"
                ? referrals.map((referral) => (
                    <tr
                      key={referral.id}
                      className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="py-6 px-6">{referral.id}</td>
                      <td className="py-6 px-6 font-medium">{referral.user}</td>
                      <td className="py-6 px-6">Lorem</td>
                      <td className="py-6 px-6">2025/05/16</td>
                      <td className="py-6 px-6">
                        {referral.id === 1
                          ? "100"
                          : referral.id === 2
                          ? "1000"
                          : referral.id === 3
                          ? "500"
                          : "1200"}
                      </td>
                      <td className="py-6 px-6">{referral.claimed}</td>
                      <td className="py-6 px-6">
                        <div className="flex justify-end">
                          <button className="px-6 py-2 rounded-full text-sm font-medium bg-[#FC8220] text-white hover:bg-[#e67415] transition-colors">
                            Claim
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                : referrals.map((referral) => (
                    <tr
                      key={referral.id}
                      className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="py-6 px-6">{referral.id}</td>
                      <td className="py-6 px-6 font-medium">{referral.user}</td>
                      <td className="py-6 px-6">{referral.claimed}</td>
                      <td className="py-6 px-6">{referral.time}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end items-end w-full">
          <button className="w-fit mt-8 px-10 py-4 bg-[#362E94] text-white rounded-full font-medium hover:bg-[#2a2377] transition-colors">
            Generate My Referral Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
