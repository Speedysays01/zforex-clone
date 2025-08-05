import { useEffect, useState } from 'react';
import { FaPlus, FaSync } from 'react-icons/fa';

const DashboardHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [refreshCountdown, setRefreshCountdown] = useState(5);

  // Simulate refresh countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setRefreshCountdown((prev) => {
        if (prev === 1) {
          setCurrentTime(new Date());
          return 5;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-blue-100/40 backdrop-blur-md p-4 rounded-2xl shadow flex flex-col md:flex-row md:items-center md:justify-between mb-6">
      {/* Left Side */}
      <div>
        <h2 className="text-3xl font-bold text-blue-700">Dashboard</h2>
        <p className="text-gray-700 flex items-center gap-2 mt-1">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          Welcome back! Here's your trading overview.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4 md:mt-0">
        <div className="text-sm text-gray-600 text-right">
          <div>
            Last updated: {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </div>
          <div>Next refresh in: {refreshCountdown}s</div>
        </div>

        <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-xl shadow transition">
          <FaPlus /> Open Account
        </button>

        <button className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-500 hover:brightness-110 text-white font-semibold px-4 py-2 rounded-xl shadow transition">
          <FaSync /> Refresh
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
