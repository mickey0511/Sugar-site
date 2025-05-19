"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import ApexCharts to avoid SSR issues
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface RewardsChartProps {
  stakingAmount: number;
  expectedPrice: number;
  stakingTime: {
    years: number;
    months: number;
    days: number;
  };
}

export default function RewardsChart({
  stakingAmount,
//   expectedPrice,
  stakingTime,
}: RewardsChartProps) {
  const [mounted, setMounted] = useState(false);

  // Calculate total days
  const getTotalDays = () => {
    return (
      stakingTime.years * 365 + stakingTime.months * 30 + stakingTime.days ||
      365
    ); // Default to 365 if 0
  };

  // Generate chart data
  const generateChartData = () => {
    const totalDays = getTotalDays();
    const dataPoints = 50; // Number of points to plot
    const interval = totalDays / dataPoints;

    const compoundedData = [];
    const nonCompoundedData = [];
    const categories = [];

    const annualRate = 0.3; // 30% annual return
    const dailyRate = annualRate / 365;

    // Add some randomness to make the chart look more realistic
    const randomFactor = () => 0.9 + Math.random() * 0.2; // Between 0.9 and 1.1

    for (let i = 0; i <= dataPoints; i++) {
      const day = Math.floor(i * interval);
      const compounded =
        stakingAmount * Math.pow(1 + dailyRate, day) * randomFactor();
      const nonCompounded =
        stakingAmount * (1 + dailyRate * day) * randomFactor();

      compoundedData.push(compounded);
      nonCompoundedData.push(nonCompounded);

      if (i === 0) {
        categories.push("Today");
      } else if (i === dataPoints) {
        categories.push(
          `${totalDays > 365 ? Math.floor(totalDays / 365) : 1} years`
        );
      } else if (i === Math.floor(dataPoints / 2)) {
        categories.push("1y");
      } else {
        categories.push("");
      }
    }

    return {
      compoundedData,
      nonCompoundedData,
      categories,
    };
  };

  const { compoundedData, nonCompoundedData, categories } = generateChartData();

  // Chart options
  const chartOptions: unknown = {
    chart: {
      type: "area",
      height: 350,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#6366f1", "#fb923c"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 100],
      },
    },
    markers: {
      size: 0,
      hover: {
        size: 5,
      },
    },
    xaxis: {
      categories: categories,
      labels: {
        style: {
          fontSize: "10px",
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value: number) => {
          if (value >= 1000) {
            return "$" + (value / 1000).toFixed(1) + "k";
          }
          return "$" + value.toFixed(0);
        },
        style: {
          fontSize: "10px",
        },
      },
    },
    tooltip: {
      y: {
        formatter: (value: number) => "$" + value.toFixed(2),
      },
    },
    annotations: {
      points: [
        {
          x: "Today",
          y: stakingAmount,
          marker: {
            size: 5,
            fillColor: "#6366f1",
            strokeColor: "#fff",
            radius: 2,
          },
          label: {
            borderColor: "#6366f1",
            offsetY: 0,
            style: {
              color: "#fff",
              background: "#6366f1",
              fontSize: "10px",
            },
            text: "$" + stakingAmount.toFixed(2),
          },
        },
        {
          x: categories[Math.floor(categories.length / 3)],
          y: nonCompoundedData[Math.floor(nonCompoundedData.length / 3)],
          marker: {
            size: 5,
            fillColor: "#fb923c",
            strokeColor: "#fff",
            radius: 2,
          },
          label: {
            borderColor: "#fb923c",
            offsetY: 0,
            style: {
              color: "#fff",
              background: "#fb923c",
              fontSize: "10px",
            },
            text:
              "$" +
              nonCompoundedData[
                Math.floor(nonCompoundedData.length / 3)
              ].toFixed(2),
          },
        },
        {
          x: categories[Math.floor(categories.length / 3)],
          y: compoundedData[Math.floor(compoundedData.length / 3)],
          marker: {
            size: 5,
            fillColor: "#6366f1",
            strokeColor: "#fff",
            radius: 2,
          },
          label: {
            borderColor: "#6366f1",
            offsetY: 0,
            style: {
              color: "#fff",
              background: "#6366f1",
              fontSize: "10px",
            },
            text:
              "$" +
              compoundedData[Math.floor(compoundedData.length / 3)].toFixed(2),
          },
        },
      ],
    },
    grid: {
      borderColor: "#f1f1f1",
      row: {
        colors: ["transparent", "transparent"],
        opacity: 0.5,
      },
    },
    legend: {
      show: false,
    },
  };

  const chartSeries = [
    {
      name: "Compounded",
      data: compoundedData,
    },
    {
      name: "Non-Compounded",
      data: nonCompoundedData,
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div className="h-full flex items-center justify-center">
        Loading chart...
      </div>
    );

  return (
    <div className="h-full">
      {typeof window !== "undefined" && (
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="area"
          height="100%"
        />
      )}
    </div>
  );
}
