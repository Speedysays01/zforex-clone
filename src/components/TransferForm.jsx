import React from "react";

const TransferForm = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Transfer Form</h2>

      {/* From Account */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          From Account
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 bg-gray-100 cursor-not-allowed"
          disabled
        >
          <option>408312 (ECN) - $0.00</option>
        </select>
      </div>

      {/* Swap Icon */}
      <div className="flex justify-center items-center mb-4">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-300">
          <span className="text-gray-500 text-lg">↔</span>
        </div>
      </div>

      {/* To Account */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          To Account
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 bg-gray-100 cursor-not-allowed"
          disabled
        >
          <option>303419 (ECN) - $0.00</option>
        </select>
      </div>

      {/* Amount */}
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Amount
        </label>
        <input
          type="text"
          placeholder="$ Enter amount"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400"
        />
        <p className="text-xs text-gray-500 mt-1">Minimum transfer: $10</p>
      </div>

      {/* Info Note */}
      <div className="bg-blue-50 text-blue-600 text-sm px-4 py-2 rounded-lg mb-4 flex items-center">
        <svg
          className="w-4 h-4 mr-2 text-blue-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z"
          />
        </svg>
        Transfers between accounts are processed instantly.
      </div>

      {/* Transfer Button */}
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">
        Transfer Funds
      </button>
    </div>
  );
};

export default TransferForm;
