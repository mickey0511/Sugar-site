"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
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
    <section className="py-12 md:py-20 lg:py-24">
      <div className="max-w-[1440px] px-8 mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            Your Future <span className="text-indigo-600">Earnings</span> At A
            Glance
          </h1>
          <p className="text-gray-600 mt-2">
            Grow Your Savings With Up To 30% Annual Returns-Secure And
            Effortless.
          </p>
        </div>

        <div className="flex md:flex-row flex-col w-full gap-6">
          <Card className="p-6 shadow-md md:w-[40%] w-full">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Enter Staking Amount</h2>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs ${!isETH ? "font-bold" : ""}`}>
                    UDC
                  </span>
                  <Switch
                    checked={isETH}
                    onCheckedChange={setIsETH}
                    id="currency-toggle"
                  />
                  <span className={`text-xs ${isETH ? "font-bold" : ""}`}>
                    ETH
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="bg-gray-100 flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300">
                  <span className="text-gray-500">$</span>
                </div>
                <Input
                  type="number"
                  value={stakingAmount}
                  onChange={(e) => setStakingAmount(Number(e.target.value))}
                  className="rounded-l-none"
                />
              </div>
              <div className="text-right text-xs text-gray-500 mt-1">
                3.68939 ETH
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium">30-Days Earnings</Label>
                <div className="flex mt-1">
                  <div className="bg-gray-100 flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300">
                    <span className="text-gray-500">$</span>
                  </div>
                  <Input
                    type="text"
                    value={formatCurrency(earnings.days30)}
                    readOnly
                    className="rounded-l-none bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium">90-Days Earnings</Label>
                <div className="flex mt-1">
                  <div className="bg-gray-100 flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300">
                    <span className="text-gray-500">$</span>
                  </div>
                  <Input
                    type="text"
                    value={formatCurrency(earnings.days90)}
                    readOnly
                    className="rounded-l-none bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium">180-Days Earnings</Label>
                <div className="flex mt-1">
                  <div className="bg-gray-100 flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300">
                    <span className="text-gray-500">$</span>
                  </div>
                  <Input
                    type="text"
                    value={formatCurrency(earnings.days180)}
                    readOnly
                    className="rounded-l-none bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium">365-Days Earnings</Label>
                <div className="flex mt-1">
                  <div className="bg-gray-100 flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300">
                    <span className="text-gray-500">$</span>
                  </div>
                  <Input
                    type="text"
                    value={formatCurrency(earnings.days365)}
                    readOnly
                    className="rounded-l-none bg-gray-50"
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-md md:w-[60%] w-full">
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-4">Rewards Over Time</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <Label className="text-xs text-gray-500">
                    Expected Price After 1 Month
                  </Label>
                  <Input
                    type="number"
                    value={expectedPrice}
                    onChange={(e) => setExpectedPrice(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label className="text-xs text-gray-500">Staking Time</Label>
                  <div className="grid grid-cols-3 gap-2 mt-1">
                    <div className="flex items-center">
                      <Input
                        type="number"
                        value={stakingTime.years}
                        onChange={(e) =>
                          setStakingTime({
                            ...stakingTime,
                            years: Number(e.target.value),
                          })
                        }
                        className="text-center"
                        min={0}
                      />
                      <span className="ml-1 text-xs">y</span>
                    </div>
                    <div className="flex items-center">
                      <Input
                        type="number"
                        value={stakingTime.months}
                        onChange={(e) =>
                          setStakingTime({
                            ...stakingTime,
                            months: Number(e.target.value),
                          })
                        }
                        className="text-center"
                        min={0}
                        max={11}
                      />
                      <span className="ml-1 text-xs">m</span>
                    </div>
                    <div className="flex items-center">
                      <Input
                        type="number"
                        value={stakingTime.days}
                        onChange={(e) =>
                          setStakingTime({
                            ...stakingTime,
                            days: Number(e.target.value),
                          })
                        }
                        className="text-center"
                        min={0}
                        max={30}
                      />
                      <span className="ml-1 text-xs">d</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64">
              <RewardsChart
                stakingAmount={stakingAmount}
                expectedPrice={expectedPrice}
                stakingTime={stakingTime}
              />
            </div>

            <div className="flex justify-center mt-4 space-x-6">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
                <span className="text-xs">Compounded</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-orange-400 mr-2"></div>
                <span className="text-xs">Non-Compounded</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
