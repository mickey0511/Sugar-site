import React from "react";

const stats = [
  {
    label: "Total IDO Volume",
    value: "50,000",
    unit: "USDT",
    icon: "💰",
  },
  {
    label: "Total Token Supply",
    value: "10,000,000,000,000",
    unit: "",
    icon: "📈",
  },
  {
    label: "Total Deposit",
    value: "50,000",
    unit: "USDT",
    icon: "💳",
  },
  {
    label: "IDO Amount",
    value: "500,000,000,000",
    unit: "SUG",
    icon: "💵",
  },
  {
    label: "FDV",
    value: "1,000,000",
    unit: "USDT",
    icon: "💎",
  },
  {
    label: "IDO Amount",
    value: "5.00%",
    unit: "",
    icon: "🌎",
  },
  {
    label: "Mint Price",
    value: "0.0000001",
    unit: "USDT/SUG",
    icon: "💲",
  },
];

const LaunchpadStats = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto p-4 md:p-8 bg-[#f9fafb] rounded-xl shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Row 1 */}
        {stats.slice(0, 3).map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between bg-[#eef2ff] p-4 rounded-xl shadow-[0_6px_16px_rgba(46,35,150,0.06)] min-h-[120px]"
          >
            <div className="flex items-center gap-2 text-[#362E94] text-sm font-medium">
              <span>{stat.icon}</span>
              <span>{stat.label}</span>
            </div>
            <div className="text-end">
              <div className="text-2xl font-bold text-gray-900">
                {stat.value}
              </div>
              {stat.unit && (
                <div className="text-sm text-gray-600">{stat.unit}</div>
              )}
            </div>
          </div>
        ))}

        {/* Row 2 */}
        {stats.slice(3, 6).map((stat, idx) => (
          <div
            key={idx + 3}
            className="flex flex-col justify-between bg-[#eef2ff] p-4 rounded-xl shadow-[0_6px_16px_rgba(46,35,150,0.06)] min-h-[120px]"
          >
            <div className="flex items-center gap-2 text-[#362E94] text-sm font-medium">
              <span>{stat.icon}</span>
              <span>{stat.label}</span>
            </div>
            <div className="text-end">
              <div className="text-2xl font-bold text-gray-900">
                {stat.value}
              </div>
              {stat.unit && (
                <div className="text-sm text-gray-600">{stat.unit}</div>
              )}
            </div>
          </div>
        ))}

        {/* Row 3 - 2 columns */}
        <div className="col-span-1 flex flex-col justify-between bg-[#eef2ff] p-4 rounded-xl shadow-[0_6px_16px_rgba(46,35,150,0.06)] min-h-[120px]">
          <div className="flex items-center gap-2 text-[#362E94] text-sm font-medium">
            <span>{stats[6].icon}</span>
            <span>{stats[6].label}</span>
          </div>
          <div className="text-end">
            <div className="text-2xl font-bold text-gray-900">
              {stats[6].value}
            </div>
            {stats[6].unit && (
              <div className="text-sm text-gray-600">{stats[6].unit}</div>
            )}
          </div>
        </div>

        <div className="col-span-1 row-span-2 bg-[#eef2ff] p-4 rounded-xl shadow-[0_6px_16px_rgba(46,35,150,0.06)] flex flex-col gap-3 justify-between min-h-[240px]">
          <label className="text-sm font-medium text-gray-700">FDV</label>
          <input
            type="text"
            className="rounded-xl border border-[#362E94] p-2 focus:outline-none"
          />
          <label className="text-sm font-medium text-gray-700">
            Mint Price
          </label>
          <input
            type="text"
            className="rounded-xl border border-[#362E94] p-2 focus:outline-none"
          />
          <button className="bg-[#362E94] text-white rounded-full py-2 mt-auto">
            Launchpad Contract
          </button>
        </div>
      </div>
    </div>
  );
};

export default LaunchpadStats;
