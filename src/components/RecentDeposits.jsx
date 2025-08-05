import React from "react";

const deposits = [
  {
    date: "Aug 4, 2025",
    method: "Crypto Wallet",
    amount: "$200.00",
    account: "175154",
    status: "Rejected",
  },
  {
    date: "Aug 4, 2025",
    method: "Crypto Wallet",
    amount: "$2000.00",
    account: "408312",
    status: "Rejected",
  },
];

const RecentDeposits = () => {
  return (
    <div className="bg-white/50 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-sm max-w-6xl mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Recent Deposits
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead>
            <tr className="border-b">
              <th className="py-2 pr-4">Date</th>
              <th className="py-2 pr-4">Method</th>
              <th className="py-2 pr-4">Amount</th>
              <th className="py-2 pr-4">Account</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {deposits.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 pr-4">{item.date}</td>
                <td className="py-3 pr-4">{item.method}</td>
                <td className="py-3 pr-4">{item.amount}</td>
                <td className="py-3 pr-4">{item.account}</td>
                <td className="py-3">
                  <span className="text-xs font-medium text-red-700 bg-red-100 px-3 py-1 rounded-full">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentDeposits;
