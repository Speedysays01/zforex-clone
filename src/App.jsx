// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import BlobBackground from './components/BlobBackground';

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
              <Route path="/today" element={<Today />} />
              <Route path="/performance" element={<PerformanceChart />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
