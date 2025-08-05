// src/components/Topbar.jsx
const Topbar = () => {
  return (
    <div className="fixed left-64 top-0 right-0 h-20 z-10 backdrop-blur-lg bg-white/20 border-b border-white/30 flex items-center justify-between px-6 shadow-md overflow-hidden">
      {/* Blobs Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-24 h-44 bg-purple-300 opacity-70 rounded-3xl blur-3xl animate-blob1 top-[-3rem] left-[10%]"></div>
        <div className="absolute w-72 h-44 bg-blue-300 opacity-70 rounded-3xl blur-3xl animate-blob2 top-[2rem] left-[60%]"></div>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search"
        className="w-[500px] px-4 py-2 ml-[200px] text-sm bg-white/70 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      {/* User Info */}
      <div className="flex items-center space-x-4">
        <div className="text-right">
          <div className="text-sm font-semibold text-gray-800">Divyesh Katariya</div>
          <div className="text-xs text-gray-600">katariyadivu8200@gmail.com</div>
        </div>
        <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold text-sm">
          DK
        </div>
      </div>
    </div>
  );
};

export default Topbar;
