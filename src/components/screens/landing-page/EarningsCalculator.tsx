"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
// import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import RewardsChart from "./RewardsChartProps";

export default function EarningsCalculator() {
  const [stakingAmount, setStakingAmount] = useState<number>(10000);
  const [isETH, setIsETH] = useState<boolean>(false);
  const [expectedPrice, setExpectedPrice] = useState<number>(2400.48);
  const [stakingTime, setStakingTime] = useState({
    years: 1,
    months: 0,
    days: 0,
  });

  // Add ETH conversion rate
  const ethRate = 2710.48; // Example ETH/USD rate

  // Toggle between ETH and USD
  const toggleCurrency = () => {
    setIsETH(!isETH);
    // Convert the amount when switching
    setStakingAmount(isETH ? stakingAmount * ethRate : stakingAmount / ethRate);
  };

  // Calculate earnings based on staking amount and time periods
  const calculateEarnings = (days: number): number => {
    const annualRate = 0.3; // 30% annual return
    const dailyRate = annualRate / 365;
    return stakingAmount * Math.pow(1 + dailyRate, days);
  };

  const earnings = {
    days30: calculateEarnings(30),
    days90: calculateEarnings(90),
    days180: calculateEarnings(180),
    days365: calculateEarnings(365),
  };

  // Format currency
  const formatCurrency = (value: number): string => {
    return value.toFixed(5);
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Your Future <span className="text-[#6B5BD2]">Earnings</span> At A
            Glance
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-4">
            Grow Your Savings With Up To 30% Annual Returns-Secure And
            Effortless.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-4 sm:gap-6 lg:gap-8">
          {/* Left Card */}
          <Card className="p-4 sm:p-6 lg:p-8 shadow-[0_6px_16px_rgba(46,35,150,0.06)] rounded-[24px] sm:rounded-[32px] w-full lg:w-[40%] bg-white">
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 mb-4">
                <h2 className="text-base sm:text-lg font-semibold">Enter Staking Amount</h2>
                <div 
                  className="flex items-center gap-2 bg-[#F8F9FF] rounded-full p-1 cursor-pointer self-start sm:self-auto"
                  onClick={toggleCurrency}
                >
                  <span className={`text-xs px-2 sm:px-3 py-1 rounded-full transition-colors duration-200 ${
                    !isETH ? "bg-white text-[#6B5BD2] font-medium" : "text-gray-500 hover:text-gray-700"
                  }`}>
                    USD
                  </span>
                  <span className={`text-xs px-2 sm:px-3 py-1 rounded-full transition-colors duration-200 ${
                    isETH ? "bg-white text-[#6B5BD2] font-medium" : "text-gray-500 hover:text-gray-700"
                  }`}>
                    ETH
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="bg-[#F8F9FF] flex items-center justify-center px-4 rounded-l-2xl border-0">
                  <span className="text-gray-500">{isETH ? "Ξ" : "$"}</span>
                </div>
                <Input
                  type="number"
                  value={stakingAmount}
                  onChange={(e) => setStakingAmount(Number(e.target.value))}
                  className="rounded-l-none rounded-r-2xl border-0 bg-[#F8F9FF] h-12"
                />
              </div>
              <div className="text-right text-xs text-gray-500 mt-2">
                {isETH 
                  ? `$${(stakingAmount * ethRate).toFixed(2)}`
                  : `${(stakingAmount / ethRate).toFixed(5)} ETH`
                }
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {[
                { label: "30-Days Earnings", value: earnings.days30 },
                { label: "90-Days Earnings", value: earnings.days90 },
                { label: "180-Days Earnings", value: earnings.days180 },
                { label: "365-Days Earnings", value: earnings.days365 },
              ].map((item, index) => (
                <div key={index}>
                  <Label className="text-sm font-medium">{item.label}</Label>
                  <div className="flex mt-1">
                    <div className="bg-[#F8F9FF] flex items-center justify-center px-4 rounded-l-2xl border-0">
                      <span className="text-gray-500">$</span>
                    </div>
                    <Input
                      type="text"
                      value={formatCurrency(item.value)}
                      readOnly
                      className="rounded-l-none rounded-r-2xl border-0 bg-[#F8F9FF] h-12"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Right Card */}
          <Card className="p-4 sm:p-6 lg:p-8 shadow-[0_6px_16px_rgba(46,35,150,0.06)] rounded-[24px] sm:rounded-[32px] w-full lg:w-[60%] bg-white">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-base sm:text-lg font-semibold mb-4">Rewards Over Time</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <Label className="text-xs sm:text-sm text-gray-500 mb-2 block">
                    Expected Price After 1 Month
                  </Label>
                  <Input
                    type="number"
                    value={expectedPrice}
                    onChange={(e) => setExpectedPrice(Number(e.target.value))}
                    className="rounded-xl sm:rounded-2xl border-0 bg-[#F8F9FF] h-10 sm:h-12"
                  />
                </div>
                <div>
                  <Label className="text-xs sm:text-sm text-gray-500 mb-2 block">Staking Time</Label>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {[
                      { value: stakingTime.years, unit: "y", max: undefined },
                      { value: stakingTime.months, unit: "m", max: 11 },
                      { value: stakingTime.days, unit: "d", max: 30 },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <Input
                          type="number"
                          value={item.value}
                          onChange={(e) =>
                            setStakingTime({
                              ...stakingTime,
                              [["years", "months", "days"][index]]: Number(e.target.value),
                            })
                          }
                          className="text-center rounded-2xl border-0 bg-[#F8F9FF] h-12"
                          min={0}
                          max={item.max}
                        />
                        <span className="ml-2 text-sm text-gray-500">{item.unit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[200px] sm:h-[250px] lg:h-[300px] relative">
              <RewardsChart
                stakingAmount={stakingAmount}
                stakingTime={stakingTime}
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-4 sm:mt-6">
              <div className="flex items-center">
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#6B5BD2] mr-2"></div>
                <span className="text-xs sm:text-sm text-gray-600">Compounded</span>
              </div>
              <div className="flex items-center">
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#FC8220] mr-2"></div>
                <span className="text-xs sm:text-sm text-gray-600">Non-Compounded</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
