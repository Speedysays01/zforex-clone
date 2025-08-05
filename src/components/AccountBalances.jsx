import React from "react";

const accountData = [
  { id: "408312", type: "ECN", balance: "$0.00" },
  { id: "303419", type: "ECN", balance: "$0.00" },
  { id: "320235", type: "BASIC", balance: "$0.00" },
  { id: "175154", type: "BASIC", balance: "$0.00" },
];

const AccountBalances = () => {
  return (
    <div className="bg-white/50 backdrop-blur-md rounded-2xl shadow border border-gray-200 p-6 max-w-xl mx-auto overflow-y-auto max-h-[500px]">
      <h2 className="text-xl font-semibold mb-4">Account Balances</h2>

      <div className="space-y-4">
        {accountData.map((acc) => (
          <div
            key={acc.id}
            className="flex items-center justify-between border border-gray-200 bg-white rounded-2xl p-4"
          >
            <div>
              <p className="font-bold text-md">{acc.id}</p>
              <p className="text-sm text-blue-600 mt-1">Available Balance</p>
            </div>

            <div className="text-right space-y-1">
              <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-semibold">
                {acc.type}
              </span>
              <p className="text-black font-bold text-lg">{acc.balance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountBalances;
