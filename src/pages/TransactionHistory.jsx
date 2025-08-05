import React from "react";

const TransactionHistory = () => {
  return (
    <div className="ml-64 mx-auto bg-white rounded-xl shadow-md p-6 mt-6">
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-full md:w-1/2">
          <svg
            className="w-5 h-5 text-gray-400 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 11a6 6 0 1 0-12 0 6 6 0 0 0 12 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full outline-none text-sm"
          />
        </div>
        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 w-full md:w-1/3">
          <option>All Transactions</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-700">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 font-semibold text-left">Date & Time</th>
              <th className="px-4 py-2 font-semibold text-left">Type</th>
              <th className="px-4 py-2 font-semibold text-left">Description</th>
              <th className="px-4 py-2 font-semibold text-left">Amount</th>
              <th className="px-4 py-2 font-semibold text-left">Account</th>
              <th className="px-4 py-2 font-semibold text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr className="border-b">
              <td className="px-4 py-3">Aug 4, 2025, 1:04 PM</td>
              <td className="px-4 py-3">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Deposit
                </span>
              </td>
              <td className="px-4 py-3">E-Wallet Deposit</td>
              <td className="px-4 py-3 text-green-600 font-semibold">
                +$200.00
              </td>
              <td className="px-4 py-3">175154</td>
              <td className="px-4 py-3">
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                  Rejected
                </span>
              </td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td className="px-4 py-3">Aug 4, 2025, 9:55 AM</td>
              <td className="px-4 py-3">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Deposit
                </span>
              </td>
              <td className="px-4 py-3">E-Wallet Deposit</td>
              <td className="px-4 py-3 text-green-600 font-semibold">
                +$2000.00
              </td>
              <td className="px-4 py-3">408312</td>
              <td className="px-4 py-3">
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                  Rejected
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm text-gray-700">
        <div className="mb-2 md:mb-0">
          Showing <span className="text-blue-600 font-medium">1 to 2</span> of 2
          transactions
        </div>

        <div className="flex items-center gap-2">
          <span>Rows per page:</span>
          <select className="border border-gray-300 rounded-md px-2 py-1 text-sm">
            <option>20</option>
          </select>

          <button
            disabled
            className="px-3 py-1 rounded-md bg-gray-100 text-gray-400 cursor-not-allowed"
          >
            Previous
          </button>

          <button className="px-3 py-1 rounded-md bg-blue-600 text-white font-medium">
            1
          </button>

          <button
            disabled
            className="px-3 py-1 rounded-md bg-gray-100 text-gray-400 cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
