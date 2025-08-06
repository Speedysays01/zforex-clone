import React from "react";
import { FaLock } from "react-icons/fa";

const accountList = [
  {
    id: "175154",
    name: "DIVYESH Katariya",
    type: "BASIC",
    platform: "Fazo Liquidity Corp",
    leverage: "1:200",
    balance: "$0.00",
    equity: "$0.00",
    profitLoss: "+$0.00",
    status: "Active",
  },
  {
    id: "320235",
    name: "DIVYESH Katariya",
    type: "BASIC",
    platform: "Fazo Liquidity Corp",
    leverage: "1:200",
    balance: "$0.00",
    equity: "$0.00",
    profitLoss: "+$0.00",
    status: "Active",
  },
  {
    id: "303419",
    name: "DIVYESH Katariya",
    type: "ECN",
    platform: "Fazo Liquidity Corp",
    leverage: "1:500",
    balance: "$0.00",
    equity: "$0.00",
    profitLoss: "+$0.00",
    status: "Active",
  },
  {
    id: "408312",
    name: "DIVYESH Katariya",
    type: "ECN",
    platform: "Fazo Liquidity Corp",
    leverage: "1:500",
    balance: "$0.00",
    equity: "$0.00",
    profitLoss: "+$0.00",
    status: "Active",
  },
];

const AccountList = () => {
  return (
    <div className="ml-64 px-10 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            My Trading Accounts
          </h2>
          <p className="text-gray-500 text-sm">
            Manage and monitor all your trading accounts.
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium">
          Open New <span className="text-white font-semibold">Account</span>
        </button>
      </div>

      {/* Account Table */}
      <div className="bg-white/50 backdrop-blur-md shadow border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-9 bg-white font-semibold text-gray-700 px-6 py-3 text-sm">
          <div className="col-span-1">Account</div>
          <div className="col-span-2">Name</div>
          <div className="col-span-1">Type</div>
          <div className="col-span-2">Platform</div>
          <div className="col-span-1">Leverage</div>
          <div className="col-span-1">Balance</div>
          <div className="col-span-1">Equity</div>
          <div className="col-span-1">Profit/Loss</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-1">Actions</div>
        </div>

        {accountList.map((acc, i) => (
          <div
            key={i}
            className="grid grid-cols-11 px-6 py-4 text-sm items-center border-t border-gray-100 bg-white hover:bg-gray-50 transition"
          >
            <div className="col-span-1 font-bold">{acc.id}</div>
            <div className="col-span-2">{acc.name}</div>
            <div className="col-span-1">{acc.type}</div>
            <div className="col-span-2">{acc.platform}</div>
            <div className="col-span-1">{acc.leverage}</div>
            <div className="col-span-1">{acc.balance}</div>
            <div className="col-span-1">{acc.equity}</div>
            <div className="col-span-1 text-green-600 font-semibold">
              {acc.profitLoss}
            </div>
            <div className="col-span-1">
              <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">
                {acc.status}
              </span>
            </div>
           
          </div>
        ))}
      </div>

      {/* Footer Summary + Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Summary */}
        <div className="bg-white/50 backdrop-blur-md p-6 rounded-2xl border border-gray-200">
          <h3 className="font-semibold text-lg mb-4">Account Summary</h3>
          <div className="flex justify-between py-2 text-sm">
            <span className="text-gray-600">Total Balance</span>
            <span className="text-black font-semibold">$0.00</span>
          </div>
          <div className="flex justify-between py-2 text-sm">
            <span className="text-gray-600">Total Equity</span>
            <span className="text-black font-semibold">$0.00</span>
          </div>
          <div className="flex justify-between py-2 text-sm">
            <span className="text-gray-600">Total Profit/Loss</span>
            <span className="text-green-600 font-semibold">+$0.00</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/50 backdrop-blur-md p-6 rounded-2xl border border-gray-200">
          <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="w-full border border-gray-300 rounded-lg py-2 text-sm font-medium hover:bg-gray-100">
              Deposit Funds
            </button>
            <button className="w-full border border-gray-300 rounded-lg py-2 text-sm font-medium hover:bg-gray-100">
              Withdraw Funds
            </button>
            <button className="w-full border border-gray-300 rounded-lg py-2 text-sm font-medium hover:bg-gray-100">
              Internal Transfer
            </button>
            <button className="w-full border border-gray-300 rounded-lg py-2 text-sm font-medium hover:bg-gray-100">
              Download Platform
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountList;
