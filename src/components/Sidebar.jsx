import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome, FaMoneyBillAlt, FaExchangeAlt, FaHistory, FaUserPlus,
  FaList, FaTrophy, FaChartLine, FaUserFriends, FaUserTie,
  FaChartBar, FaPercent, FaBars
} from 'react-icons/fa';

// Define routes for each label
const menuItems = [
  { icon: <FaHome />, label: 'Dashboard', path: '/' },
  { icon: <FaMoneyBillAlt />, label: 'Deposit', path: '/deposit' },
  { icon: <FaExchangeAlt />, label: 'Withdraw', path: '/withdraw' },
  { icon: <FaExchangeAlt />, label: 'Transfer', path: '/transfer' },
  { icon: <FaHistory />, label: 'Transaction History', path: '/transactions' },
  { icon: <FaUserPlus />, label: 'Open New Account', path: '/open-account' },
  { icon: <FaList />, label: 'Account List', path: '/accounts' },
  { icon: <FaTrophy />, label: 'Trading Contest', path: '/contest' },
  { icon: <FaChartLine />, label: 'Trading Platforms', path: '/platforms' },
  { icon: <FaUserFriends />, label: 'Refer A Friend', path: '/refer' },
  { icon: <FaUserTie />, label: 'IB Account', path: '/ib-account' },
  { icon: <FaChartBar />, label: 'Partner Dashboard', path: '/partner' },
  { icon: <FaPercent />, label: 'IB Commission', path: '/commission' },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className={`fixed top-0 left-0 h-screen z-20 transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
      {/* Gradient Blobs Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-72 h-44 bg-purple-300 opacity-70 rounded-3xl blur-xl animate-blob1 top-[-4rem] left-[-4rem]"></div>
        <div className="absolute w-24 h-24 bg-pink-300 opacity-70 rounded-3xl blur-xl animate-blob2 top-[90%] left-[10%]"></div>
        <div className="absolute w-44 h-24 bg-blue-300 opacity-70 rounded-3xl blur-xl animate-blob2 top-[50%] left-[40%]"></div>
      </div>

      {/* Glass Container */}
      <div className="h-full backdrop-blur-lg bg-white/10 border-r border-white/30 shadow-md text-gray-800 px-4 py-6 overflow-y-auto rounded-tr-3xl rounded-br-3xl no-scrollbar transition-all duration-300">

        {/* Header with Toggle */}
        <div className="h-20 flex items-center border-b border-gray-700 mb-4 relative">
          {!collapsed && (
            <div className="ml-8 text-2xl font-bold tracking-wide">
              ZForexLive
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="top-4 text-xl p-2 hover:text-indigo-500 transition-all z-30 ml-auto"
          >
            <FaBars />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="space-y-2 max-h-[calc(100vh-100px)] pr-1">
          {menuItems.map((item, index) => (
            <Link to={item.path} key={index}>
              <NavItem
                icon={item.icon}
                label={item.label}
                active={location.pathname === item.path}
                collapsed={collapsed}
              />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, active, collapsed }) => (
  <div
    className={`flex items-center gap-3 px-2 py-3 rounded-lg cursor-pointer text-sm font-medium transition-all
      ${
        active
          ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow'
          : 'text-gray-700 hover:bg-gradient-to-r from-indigo-500 to-purple-500 hover:text-white hover:shadow-lg'
      }
      ${collapsed ? 'justify-center' : ''}
    `}
  >
    <span className="text-xl">{icon}</span>
    {!collapsed && <span className="text-base">{label}</span>}
  </div>
);

export default Sidebar;
