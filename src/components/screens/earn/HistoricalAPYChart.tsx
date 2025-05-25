"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { ApexOptions } from "apexcharts";

const chartOptions: ApexOptions = {
  chart: {
    type: "line",
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  xaxis: {
    categories: [
      "3/17",
      "3/19",
      "3/21",
      "3/23",
      "3/25",
      "3/27",
      "3/29",
      "3/31",
      "4/2",
      "4/4",
      "4/6",
      "4/8",
      "4/10",
      "4/12",
      "4/14",
      "4/16",
      "4/18",
      "4/20",
      "4/22",
      "4/24",
      "4/26",
      "4/28",
      "4/30",
      "5/2",
      "5/4",
      "5/6",
      "5/8",
      "5/10",
      "5/12",
      "5/14",
    ],
    labels: {
      style: { colors: "#888" },
    },
  },
  yaxis: {
    labels: {
      formatter: (val: number) => `${val.toFixed(1)}%`,
      style: { colors: "#888" },
    },
    reversed: true,
  },
  stroke: {
    curve: "straight",
    colors: ["#1E1BFF"],
  },
  grid: {
    borderColor: "#eee",
  },
};

const chartSeries = [
  {
    name: "APY",
    data: [
      28.2, 30.2, 29.5, 28.7, 30.4, 28.3, 31.3, 30.3, 32.3, 31.4, 30.9, 32.3,
      30.8, 31.2, 30.4, 31.1, 29.9, 30.4, 30.0, 30.6, 30.1, 30.9, 30.2, 30.8,
      30.1, 30.7, 29.7, 28.3, 29.9,
    ],
  },
];

const HistoricalAPYChart = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24">
      <div className="max-w-[1280px] px-4 sm:px-6 lg:px-20 mx-auto">
        <div className="w-full flex flex-col items-center justify-center py-12">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-6"
          >
            <span className="text-indigo-600">Historical</span> 60-Days APY
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full bg-white rounded-3xl shadow-[0_6px_16px_rgba(46,35,150,0.06)] p-4"
          >
            <ApexChart
              options={chartOptions}
              series={chartSeries}
              type="line"
              height={350}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HistoricalAPYChart;
