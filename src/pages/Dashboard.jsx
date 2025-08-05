import DashboardHeader from '../components/DashboardHeader';
import StatCard from '../components/StatCard';

const Dashboard = () => {
  return (
    <div className="ml-64 mt-20 p-6 transition-all duration-300">
      {/* Header Section */}
      <DashboardHeader />

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard label="Total Balance" value="$0.00" color="blue" icon="💳" />
        <StatCard label="Total Deposits" value="$0.00" color="green" icon="📥" />
        <StatCard label="Total Withdrawals" value="$0.00" color="red" icon="📤" />
        <StatCard label="MT5 Accounts" value="4" color="purple" icon="💼" />
      </div>

      {/* Other sections here */}
    </div>
  );
};

export default Dashboard;
