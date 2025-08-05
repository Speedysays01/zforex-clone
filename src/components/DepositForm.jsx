import React from "react";

const DepositForm = () => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white/50 backdrop-blur-md rounded-2xl shadow border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Deposit Details</h2>

      {/* Select Account */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Select Account</label>
        <select className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none">
          <option>175154 (BASIC)</option>
        </select>
      </div>

      {/* Amount */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
        <div className="relative">
          <span className="absolute left-3 top-3 text-gray-400">$</span>
          <input
            type="text"
            placeholder="Enter amount"
            className="w-full pl-7 pr-3 py-3 border rounded-lg bg-gray-100 focus:outline-none"
          />
        </div>
        <p className="text-xs text-gray-400 mt-1">No Minimum deposit</p>
      </div>

      {/* Transaction ID */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Transaction ID *</label>
        <input
          type="text"
          placeholder="Enter your transaction ID"
          className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none"
        />
      </div>

      {/* Upload Proof */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Upload Proof of Payment (PDF, JPG, JPEG, PNG)
        </label>
        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          className="w-full p-3 border rounded-lg bg-gray-100 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700"
        />
      </div>

      {/* Submit Button */}
      <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all">
        Submit Deposit Request
      </button>
    </div>
  );
};

export default DepositForm;
