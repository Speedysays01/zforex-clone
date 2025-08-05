import React from "react";
import { FaWallet } from "react-icons/fa";

const accounts = [
  {
    id: "408312",
    type: "MT5",
    name: "E-Wallet",
    balance: "$0.00",
    active: false,
    created: "Aug 4, 07:14 AM"
  },
  {
    id: "408313",
    type: "MT5",
    name: "MT5-Standard",
    balance: "$0.00",
    active: false,
    created: "Aug 4, 07:20 AM"
  },
  {
    id: "408314",
    type: "MT5",
    name: "Internal Transfer",
    balance: "$0.00",
    active: true,
    created: "Aug 4, 07:35 AM"
  },
  {
    id: "408315",
    type: "Wallet",
    name: "Personal Wallet",
    balance: "$0.00",
    active: true,
    created: "Aug 4, 07:40 AM"
  }
];

const AccountActivity = () => {
  return (
    <div className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-sm max-w-4xl mx-auto mt-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white">
            <FaWallet className="text-xl" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Account Activity</h2>
            <p className="text-sm text-gray-500">Overview of your account statistics</p>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-6">
        <button className="px-4 py-1 text-sm rounded-full bg-blue-600 text-white font-medium">All (4)</button>
        <button className="px-4 py-1 text-sm rounded-full bg-gray-100 text-gray-700">MT5</button>
        <button className="px-4 py-1 text-sm rounded-full bg-gray-100 text-gray-700">Wallet</button>
        <button className="px-4 py-1 text-sm rounded-full bg-gray-100 text-gray-700">Internal Transfer</button>
      </div>

      {/* Scrollable Account List - Shows 2 cards initially */}
      <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 no-scrollbar px-1 py-2">
        {accounts.map((account) => (
          <div
            key={account.id}
            className="flex justify-between items-center bg-white border border-gray-200 rounded-xl p-4 shadow-sm transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md hover:ring-2 hover:ring-blue-500 hover:backdrop-blur-sm"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-sm font-medium text-gray-800">{account.name}</h4>
                {account.active && (
                  <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                    Active
                  </span>
                )}
              </div>
              <div className="text-sm text-gray-500">{account.id} • {account.type}</div>
              <div className="text-xs text-gray-400 mt-1">{account.created}</div>
            </div>
            <div className="text-right">
              <p className="text-green-600 font-semibold">{account.balance}</p>
              <span className="text-gray-400 text-xs">View &gt;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountActivity;
