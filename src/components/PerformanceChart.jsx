import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Scatter,
  YAxis,
} from "recharts";
import dayjs from "dayjs";

// Generate dummy 30-day data
const data = Array.from({ length: 30 }, (_, i) => ({
  date: dayjs().subtract(29 - i, "day").format("MMM D"),
  deposits: 0,
  withdrawals: 0,
  transactions: 0,
  dotY: 0, // Dummy dot value
}));

// Custom tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-xl shadow text-sm border border-gray-300">
        <p className="font-semibold">{label}</p>
        <p>Deposits: $0</p>
        <p>Withdrawals: $0</p>
        <p>Transactions: 0</p>
      </div>
    );
  }
  return null;
};

const PerformanceChart = () => {
  return (
    <div className="w-full h-[380px] rounded-2xl p-4 bg-white/50 shadow border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">
        Last 30 Days Activity
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
        >
          {/* Grid lines */}
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />

          {/* X-axis */}
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={true}
          />

          {/* Y-axis */}
          <YAxis
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: "#f97316", strokeWidth: 2 }}
            domain={[0, 16]}
            ticks={[0, 4, 8, 12, 16]}
            tickFormatter={(value) => `$${value}`}
          />

          {/* Tooltip */}
          <Tooltip content={<CustomTooltip />} cursor={false} />

          {/* Orange dots */}
          <Scatter dataKey="dotY" fill="#f97316" shape="circle" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
