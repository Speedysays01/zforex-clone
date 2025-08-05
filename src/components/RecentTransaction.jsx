import React from "react";
import { FaArrowDown, FaRedoAlt } from "react-icons/fa";

const transactions = [
  {
    type: "Deposit",
    status: "Rejected",
    id: "175154",
    method: "E-Wallet",
    time: "Aug 4, 12:35 PM",
    amount: "+$200.00",
  },
  {
    type: "Deposit",
    status: "Rejected",
    id: "408312",
    method: "E-Wallet",
    time: "Aug 4, 07:14 AM",
    amount: "+$2,000.00",
  },
];

const RecentTransactions = () => {
  return (
    <div className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-sm max-w-3xl mx-auto mt-10 pb-[125px]">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white">
            <FaArrowDown className="text-xl" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Transactions
            </h2>
            <p className="text-sm text-gray-500">
              Latest activity on your accounts
            </p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700 transition-all duration-200 hover:scale-105 hover:bg-gray-300
">
          <FaRedoAlt />
        </button>
      </div>

      {/* Filter buttons */}
      <div className="flex gap-2 mb-5 ">
        <button className="px-4 py-1 text-sm rounded-full bg-blue-600 text-white font-medium transition-all duration-200 hover:scale105">
          All (2)
        </button>
        <button className="px-4 py-1 text-sm rounded-full bg-gray-100 text-gray-700 transition-all duration-200 hover:scale-105 hover:bg-gray-300
">
          Deposit
        </button>
        <button className="px-4 py-1 text-sm rounded-full bg-gray-100 text-gray-700 transition-all duration-200 hover:scale-105 hover:bg-gray-300
">
          Withdrawal
        </button>
        <button className="px-4 py-1 text-sm rounded-full bg-gray-100 text-gray-700 transition-all duration-200 hover:scale-105 hover:bg-gray-300
">
          Transfer
        </button>
      </div>

      {/* Transaction List */}
      <div className="space-y-4 ">
        {transactions.map((tx, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-xl p-4 flex justify-between items-center bg-white/80 hover:shadow-sm transition-all transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md hover:ring-2 hover:ring-blue-500 hover:backdrop-blur-sm"
          >
            <div className="flex items-start gap-3">
              {/* Icon */}
              <div className="mt-1">
                <FaArrowDown className="text-green-500 text-lg" />
              </div>
              {/* Info */}
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                  {tx.type}
                  <span className="text-xs bg-red-100 text-red-500 px-2 py-0.5 rounded-full font-medium">
                    {tx.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  {tx.id} • {tx.method}
                </p>
                <p className="text-xs text-gray-400 mt-1">{tx.time}</p>
              </div>
            </div>
            {/* Amount */}
            <div className="text-green-600 font-semibold text-sm whitespace-nowrap">
              {tx.amount} <span className="text-gray-400 ml-1">&gt;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
