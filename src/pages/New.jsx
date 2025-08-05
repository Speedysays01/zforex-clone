import React from "react";

const accountTypes = [
  {
    name: "CLASSIC",
    leverages: ["1:100", "1:200", "1:300", "1:400", "1:500"],
  },
  {
    name: "ECN",
    leverages: ["1:100", "1:200", "1:300", "1:400", "1:500"],
  },
  {
    name: "STANDARD",
    leverages: ["1:100", "1:200", "1:300", "1:400", "1:500"],
  },
];

const New = () => {
  return (
    <div className="ml-64 min-h-screen flex flex-col items-center justify-start py-10 px-4 bg-white/50 backdrop-blur-md rounded-2xl shadow border border-gray-200">
      {/* New Account Setup button */}
      <button className="bg-blue-100 text-blue-700 font-medium text-sm px-4 py-1 rounded-full mb-4 hover:bg-blue-200 transition-all">
        📈New Account Setup
      </button>

      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-black mb-2">
        Open New Trading Account
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Create a new trading account to diversify your trading strategy and explore new opportunities.
      </p>

      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 relative w-full max-w-6xl">
        {accountTypes.map((type, idx) => (
          <div
            key={type.name}
            className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm border border-gray-100 flex flex-col items-center"
          >
            <h2 className="text-xl font-semibold mb-4">{type.name}</h2>
            <ul className="space-y-2 mb-6 w-full">
              {type.leverages.map((lev) => (
                <li key={lev} className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✔</span>
                  leverage {lev}
                </li>
              ))}
            </ul>
            <button className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition">
              Select
            </button>
          </div>
        ))}
      </div>

      {/* Slider navigation arrows */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow hover:bg-gray-100 cursor-pointer">
        <span className="text-xl">&larr;</span>
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow hover:bg-gray-100 cursor-pointer">
        <span className="text-xl">&rarr;</span>
      </div>

      {/* Slider dots */}
      <div className="flex items-center justify-center mt-8 space-x-2">
        <div className="w-4 h-2 rounded-full bg-blue-500"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-6xl border border-gray-100">
  <h2 className="text-2xl font-semibold text-gray-900 mb-1">Account Configuration</h2>
  <p className="text-gray-500 mb-6">Configure your account settings and trading parameters</p>

  {/* Form Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    {/* Leverage Dropdown */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Leverage Ratio</label>
      <select className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400">
        <option>Choose leverage...</option>
        <option>1:100</option>
        <option>1:200</option>
        <option>1:300</option>
        <option>1:400</option>
        <option>1:500</option>
      </select>
    </div>

    {/* Account Type Dropdown */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Account Type</label>
      <select className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400">
        <option>Choose account type...</option>
        <option>Classic</option>
        <option>ECN</option>
        <option>Standard</option>
      </select>
    </div>

    {/* Trading Platform (Read-only) */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Trading Platform</label>
      <input
        type="text"
        value="Fazo Liquidity Corp"
        readOnly
        className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-100 text-gray-700 cursor-not-allowed"
      />
    </div>
  </div>

  {/* Info Box */}
  <div className="bg-blue-50 border border-blue-100 text-blue-700 rounded-lg p-4 mb-6 text-sm">
    <strong className="block mb-1">ℹ Account Creation Process</strong>
    Your new trading account will be created instantly upon submission. You can fund it from your existing accounts or make a new deposit once the account is active.
  </div>

  {/* Submit Button */}
  <button className="w-full bg-blue-600 text-white text-lg font-medium py-3 rounded-xl hover:bg-blue-700 transition">
    Create Trading Account
  </button>
</div>

    </div>
  );
};

export default New;
