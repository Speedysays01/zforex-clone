import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import BlobBackground from './components/BlobBackground';

function App() {
  return (
    <>
      <BlobBackground /> {/* placed outside flex wrapper */}
      <div className="flex relative z-10">
        <Sidebar />
        <div className="flex-1">
          <Topbar />
          <Dashboard />
        </div>
      </div>
    </>
  );
}


export default App;
