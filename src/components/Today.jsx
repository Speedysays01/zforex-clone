import React from "react";
import { FaArrowDown, FaArrowUp, FaExchangeAlt, FaUserPlus, FaChartLine } from "react-icons/fa";
import PerformanceChart from "./PerformanceChart"
import IbSection from '../components/IbSection';
import RecentTransactions from "./RecentTransaction";
import AccountActivity from "./AcountActivity";

const colorMap = {
  green: {
    bg: "from-green-100 to-green-200",
    text: "text-green-700",
    border: "border-green-300",
    bar: "bg-green-400",
  },
  red: {
    bg: "from-red-100 to-red-200",
    text: "text-red-700",
    border: "border-red-300",
    bar: "bg-red-700",
  },
  yellow: {
    bg: "from-yellow-100 to-yellow-200",
    text: "text-yellow-700",
    border: "border-yellow-300",
    bar: "bg-yellow-400",
  },
  purple: {
    bg: "from-purple-100 to-purple-200",
    text: "text-purple-700",
    border: "border-purple-300",
    bar: "bg-purple-700",
  },
};

const Today = () => {
  const cards = [
    { label: "Deposits", value: "$0", change: "+0.0%", icon: <FaArrowUp />, color: "green" },
    { label: "Withdrawals", value: "$0", change: "+0.0%", icon: <FaArrowDown />, color: "red" },
    { label: "Transactions", value: "0", change: "+0.0%", icon: <FaExchangeAlt />, color: "yellow" },
    { label: "IB Partners", value: "0", change: "+0.0%", icon: <FaUserPlus />, color: "purple" },
  ];

  const todayStats = [
    { label: "Deposits", value: "$0", color: "text-green-600" },
    { label: "Withdrawals", value: "$0", color: "text-red-600" },
    { label: "Transactions", value: "0", color: "text-blue-600" },
    { label: "Net Flow", value: "$0", color: "text-green-600" },
  ];

  return (
    <div className="ml-72 mr-6 bg-white/50 rounded-2xl p-6 shadow border border-gray-200 space-y-8">
      
      {/* ======= Header Section ======= */}
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-full">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 3v14h14v-2H5V3H3zm4 4h10v2H7V7zm0 4h10v2H7v-2z" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Daily Performance Trends</h2>
            <p className="text-sm text-gray-500">Last 30 days activity overview</p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <button className="px-4 py-1 rounded-full bg-blue-600 text-white font-medium">All</button>
          <button className="px-4 py-1 rounded-full bg-gray-100 text-gray-700">Financial</button>
          <button className="px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">Line</button>
          <button className="px-4 py-1 rounded-full bg-gray-100 text-gray-700">Area</button>
          <button className="px-4 py-1 rounded-full bg-gray-100 text-gray-700">Mixed</button>
          <select className="px-4 py-1 rounded-full border border-gray-300 text-gray-700 bg-white">
            <option>30 Days</option>
            <option>7 Days</option>
            <option>1 Day</option>
          </select>
          <button className="px-4 py-1 rounded-full bg-blue-600 text-white">🔁 Refresh</button>
        </div>
      </div>

      {/* ======= Card Grid ======= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map(({ label, value, change, icon, color }, idx) => {
          const { bg, text, border, bar } = colorMap[color];
          return (
            <div
              key={idx}
              className={`relative p-4 h-[130px] rounded-2xl bg-gradient-to-br ${bg} ${text} border-2 ${border} flex flex-col justify-between transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md`}
            >
              <div className={`absolute top-1 left-0 h-[96%] w-[4px] rounded-3xl ${bar}`} />
              <div className="flex items-center gap-2 text-sm font-medium">{icon} {label}</div>
              <div className="flex justify-between items-end">
                <div className="text-2xl font-bold">{value}</div>
                <div className="text-sm font-semibold">{change}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ======= Today's Performance ======= */}
      <div className="bg-white/60 mt-6 px-6 py-4 rounded-2xl shadow border border-gray-100">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Header */}
          <div className="flex items-center gap-2 text-gray-600 text-lg font-medium">
            <FaChartLine className="text-blue-400" />
            <span>Today's</span>
            <span className="font-semibold text-black">Performance</span>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full lg:w-auto text-center">
            {todayStats.map(({ label, value, color }, index) => (
              <div key={index} className="space-y-1">
                <div className={`text-xl font-bold ${color}`}>{value}</div>
                <div className="text-sm text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PerformanceChart/>
    <div className="flex flex-col lg:flex-row gap-6">
  <div className="w-full lg:w-1/2">
    <RecentTransactions />
  </div>
  <div className="w-full lg:w-1/2">
    <AccountActivity />
  </div>
</div>

    </div>
  );
};

export default Today;
