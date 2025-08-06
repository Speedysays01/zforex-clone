// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import BlobBackground from './components/BlobBackground';
import Withdraw from './pages/Withdraw';
import Transfer from './pages/Transfer';
import TransactionHistory from './pages/TransactionHistory';
import New from './pages/New'; // if you have a New component, otherwise remove this import
import AccountList from './pages/AccountList';
import TradingContest from './pages/TradingContest';
import TradingPlatform from './pages/TradingPlatform'; // if you have this page, otherwise remove this import
import ReferralProgram from './pages/RefrralProgram';

// Pages
import Dashboard from './pages/Dashboard';
import Deposit from './pages/Deposit'; // make sure you have this
import Today from './components/Today'; // if you want this as a route, otherwise remove
import PerformanceChart from './components/PerformanceChart'; // optional

function App() {
  return (
    <Router>
      <BlobBackground /> {/* Background stays outside */}
      <div className="flex relative z-10">
        <Sidebar />
        <div className="flex-1">
          <Topbar />
          <div className="p-6 ml-0 mt-20"> {/* Adjust padding/margin if needed */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/deposit" element={<Deposit />} />
              {/* Optional routes if needed */}
              <Route path="/withdraw" element={<Withdraw />} />
              <Route path="/transfer" element={<Transfer />} />
              <Route path="/transactions" element={<TransactionHistory />} />
               <Route path="/open-account" element={<New />} />
                   <Route path="/accounts" element={<AccountList />} />
                     <Route path="/contest" element={<TradingContest />} />
                      <Route path="/platforms" element={<TradingPlatform/>} />
                       <Route path="/refer" element={<ReferralProgram/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
