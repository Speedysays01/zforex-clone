import React from 'react';
import { FaWallet } from "react-icons/fa";
import RecentDeposits from '../components/RecentDeposits';

const balances = [
  { id: "175154", type: "BASIC", amount: "$0.00" },
  { id: "320235", type: "BASIC", amount: "$0.00" },
  { id: "303419", type: "ECN", amount: "$0.00" },
  { id: "408312", type: "ECN", amount: "$0.00" },
];

const Withdraw = () => {
  return (
    <div className="ml-64 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Withdraw Funds</h2>
        <h3 className="text-md text-gray-800 font-semibold">
          Withdraw funds from your trading account to your preferred payment method.
        </h3>
      </div>

      {/* Flex row for two cards side by side */}
      <div className="flex gap-6">

        {/* Withdraw Form */}
        <div className="w-1/2 bg-white/50 backdrop-blur-md rounded-2xl shadow border border-gray-200 p-6">
          {/* Select Account */}
          <div className="mb-4">
            <h3 className="font-bold text-xl">Select Account</h3>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Account to withdraw from
            </label>
            <select className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none">
              <option>175154 (BASIC)</option>
              <option>320235 (BASIC)</option>
              <option>330419 (ECN)</option>
              <option>408312 (ECN)</option>
            </select>
          </div>

          {/* Account Info */}
          <div className="bg-white/50 backdrop-blur-md rounded-2xl shadow border border-gray-200 p-6">
            <h3 className="text-lg font-semibold mb-2">Selected Account Details</h3>
            <p>Account ID: <span className="text-gray-500">175154</span></p>
            <p>Account Type: <span className="text-gray-500">Basic</span></p>
            <p>Available Balance: <span className="text-gray-500">$0.00</span></p>

            <button className="mt-4 w-4/5 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200">
              Next <span className="text-white text-lg">→</span>
            </button>
          </div>
        </div>

        {/* Available Balance Card */}
        <div className="w-1/2 bg-white/50 backdrop-blur-md rounded-2xl shadow border border-gray-200 p-6">
          <h3 className="text-xl font-semibold mb-8">Available Balance</h3>

          <div className="space-y-4">
            {balances.map((acc) => (
              <div
                key={acc.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-xl bg-white"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <FaWallet />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      {acc.id} ({acc.type})
                    </p>
                    <p className="text-xs text-gray-500">Available for withdrawal</p>
                  </div>
                </div>
                <p className="font-bold text-gray-800">{acc.amount}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
      <div className="mt-6">
      <RecentDeposits/>
      </div>
    </div>
  );
};

export default Withdraw;
