import React, { useState } from 'react';

const days = Array.from({ length: 30 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (29 - i));
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
});

const DailyHoverChart = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative w-full h-64 bg-white rounded-2xl shadow border border-gray-200 p-4">
      {/* Grid lines */}
      <div className="absolute inset-4 grid grid-cols-30 gap-0">
        {days.map((_, i) => (
          <div
            key={i}
            className="w-full h-full border-l border-gray-300 relative"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Tooltip */}
            {hoveredIndex === i && (
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 bg-white text-sm text-gray-700 shadow-lg border border-gray-200 rounded-md px-4 py-2 z-10 whitespace-nowrap">
                <div className="font-semibold">{days[i]}</div>
                <div>Deposits: <span className="text-green-600 font-medium">$0</span></div>
                <div>Withdrawals: <span className="text-red-500 font-medium">$0</span></div>
                <div>Transactions: <span className="text-yellow-500 font-medium">0</span></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom date labels */}
      <div className="absolute bottom-2 left-4 right-4 flex justify-between text-[10px] text-gray-500">
        {days.map((d, i) => (
          <div key={i} className="w-[3.33%] text-center truncate">
            {i % 2 === 0 ? d : ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyHoverChart;
