import React from "react";

const ibs = [
  { name: "John Doe", email: "john@example.com", time: "2 hours ago" },
  { name: "Jane Smith", email: "jane@example.com", time: "5 hours ago" },
  { name: "Michael Lee", email: "michael@example.com", time: "1 day ago" },
  { name: "Sara Khan", email: "sara@example.com", time: "2 days ago" },
  { name: "Ravi Patil", email: "ravi@example.com", time: "3 days ago" },
];

const IBCard = ({ name, email, time }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex items-center gap-4 p-3 rounded-xl border border-gray-200 hover:shadow-sm transition-all bg-white/70 backdrop-blur-sm">
      <div className="w-12 h-8 bg-indigo-500 text-white flex items-center justify-center font-semibold text-sm rounded-xl">
        {initials}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-800">{name}</p>
        <p className="text-xs text-gray-500">{email}</p>
      </div>
      <p className="text-xs text-gray-400">{time}</p>
    </div>
  );
};

const IbSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      {/* Left Card */}
      <div className="bg-white/50 backdrop-blur-sm p-5 rounded-2xl border border-gray-200 shadow-sm">
        <div className="mb-4">
          <h3 className="text-base font-semibold text-gray-700">
            Top Performing IBs
          </h3>
          <p className="text-xs text-gray-500">Based on user performance</p>
        </div>
        <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {ibs.map((ib, index) => (
            <IBCard key={index} {...ib} />
          ))}
        </div>
      </div>

      {/* Right Card */}
      <div className="bg-white/50 backdrop-blur-sm p-5 rounded-2xl border border-gray-200 shadow-sm">
        <div className="mb-4">
          <h3 className="text-base font-semibold text-gray-700">
            Recently Registered IBs
          </h3>
          <p className="text-xs text-gray-500">New accounts in last 7 days</p>
        </div>
        <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {ibs.map((ib, index) => (
            <IBCard key={index} {...ib} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IbSection;
