import React from "react";


const RecentTransfers = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Recent Transfers</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm text-gray-700">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 font-medium text-gray-900">Date</th>
              <th className="px-4 py-2 font-medium text-gray-900">From</th>
              <th className="px-4 py-2 font-medium text-gray-900">To</th>
              <th className="px-4 py-2 font-medium text-gray-900">Amount</th>
              <th className="px-4 py-2 font-medium text-gray-900">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5" className="text-center text-gray-500 px-4 py-6">
                No recent transfers found.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransfers;
