import React from "react";
import { FaChartLine, FaArrowUp, FaArrowDown, FaSync, FaSearch } from "react-icons/fa";

const TradingContest = () => {
  return (
    <div className="p-8 ml-64 ">
      {/* Header */}
      <div className=" flex justify-between items-start mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Trading Contest
          </h2>
          <p className="text-sm text-gray-500">View and monitor all your account trades in real-time.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white px-4 py-2 border border-gray-200 shadow-sm rounded-lg hover:bg-gray-100 transition">
            <FaSync />
            Refresh
          </button>
          <div className="text-xs text-gray-500">Updated: 2:51:16 PM</div>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white/50 backdrop-blur-md border rounded-xl p-5 shadow-sm flex items-center gap-4">
          <div className="text-blue-500 text-xl">
            <FaChartLine />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Trades</p>
            <p className="text-xl font-semibold text-gray-800">0</p>
          </div>
        </div>
        <div className="bg-white/50 backdrop-blur-md border rounded-xl p-5 shadow-sm flex items-center gap-4">
          <div className="text-green-500 text-xl">
            <FaArrowUp />
          </div>
          <div>
            <p className="text-sm text-gray-500">Profitable</p>
            <p className="text-xl font-semibold text-green-600">0</p>
          </div>
        </div>
        <div className="bg-white/50 backdrop-blur-md border rounded-xl p-5 shadow-sm flex items-center gap-4">
          <div className="text-red-500 text-xl">
            <FaArrowDown />
          </div>
          <div>
            <p className="text-sm text-gray-500">Loss Trades</p>
            <p className="text-xl font-semibold text-red-500">0</p>
          </div>
        </div>
        <div className="bg-white/50 backdrop-blur-md border rounded-xl p-5 shadow-sm flex items-center gap-4">
          <div className="text-purple-500 text-xl">
            <FaChartLine />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total P&amp;L</p>
            <p className="text-xl font-semibold text-green-600">$0.00</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white/50 backdrop-blur-md border rounded-xl ">
      <div className="flex items-center gap-4 mb-4 p-2 ">
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-full shadow hover:bg-blue-700">
          <FaChartLine />
          All Trades (0)
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-full hover:bg-gray-100">
          <FaArrowUp />
          Open (0)
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-full hover:bg-gray-100">
          <FaArrowDown />
          Closed (0)
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-4 p-2">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search by symbol, account, or account name..."
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur placeholder:text-gray-400 text-sm"
        />
      </div>

      {/* Table Headers */}
      <div className="grid grid-cols-10 bg-white font-semibold text-gray-500 text-sm px-6 py-3 border-t border-b border-gray-200 p-2">
        <div>ACCOUNT</div>
        <div>SYMBOL</div>
        <div>TYPE</div>
        <div>OPEN TIME</div>
        <div>OPEN PRICE</div>
        <div>CLOSE TIME</div>
        <div>CLOSE PRICE</div>
        <div>VOLUME</div>
        <div>P&amp;L</div>
        <div>STATUS</div>
      </div>

      {/* No trades found */}
      <div className="flex flex-col items-center justify-center text-center p-10 text-gray-500">
        <FaChartLine className="text-3xl mb-2" />
        <p className="text-sm font-medium">No trades found</p>
      </div>
      </div>
    </div>
  );
};

export default TradingContest;
