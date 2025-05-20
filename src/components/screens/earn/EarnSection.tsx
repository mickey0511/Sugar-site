import React from 'react';

type Product = {
  id: number;
  name: string;
  duration: string;
  apy: string;
  tvl: string;
};

const EarnSection = () => {
  const products: Product[] = [
    { id: 1, name: 'USDT', duration: '30 Days', apy: '30%', tvl: '100' },
    { id: 2, name: 'USDT', duration: '90 Days', apy: '22%', tvl: '1000' },
    { id: 3, name: 'USDT', duration: '180 Days', apy: '18%', tvl: '500' },
    { id: 4, name: 'USDT', duration: '365 Days', apy: '13%', tvl: '1200' },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Earn</h1>
        <h2 className="text-xl font-semibold text-gray-700">Product</h2>
      </div>

      {/* Search bar - you can implement the functionality later */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#362E94] focus:border-transparent"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Table container with horizontal scroll on mobile */}
      <div className="overflow-x-auto pb-4">
        <div className="min-w-[600px] md:w-full">
          {/* Table */}
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-medium text-gray-500">#</th>
                <th className="text-left py-4 px-4 font-medium text-gray-500">Stoke</th>
                <th className="text-left py-4 px-4 font-medium text-gray-500">Duration</th>
                <th className="text-left py-4 px-4 font-medium text-gray-500">APY</th>
                <th className="text-left py-4 px-4 font-medium text-gray-500">TVL</th>
                <th className="text-left py-4 px-4 font-medium text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-4">{product.id}</td>
                  <td className="py-4 px-4 font-medium">{product.name}</td>
                  <td className="py-4 px-4">{product.duration}</td>
                  <td className="py-4 px-4 text-[#362E94] font-semibold">{product.apy}</td>
                  <td className="py-4 px-4">{product.tvl}</td>
                  <td className="py-4 px-4">
                    <button className="bg-[#362E94] text-white px-4 py-2 rounded-lg hover:bg-[#2a2377] transition-colors">
                      Deposit
                    </button>
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