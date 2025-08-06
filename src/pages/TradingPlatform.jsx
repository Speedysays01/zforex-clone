import React from "react";
import { FaGooglePlay, FaApple, FaDesktop, FaGlobe } from "react-icons/fa";

const TradingPlatform = () => {
  return (
    <div className="p-8 ml-64 -mt-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">
          Trading Platforms
        </h2>
        <p className="text-sm text-gray-500">Download and access from all platforms.</p>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Trade on{" "}
        <span className="bg-orange-500 text-white px-3 py-1 rounded-md inline-block">
          world class
        </span>{" "}
        Platform
      </h1>

      {/* Subtitle */}
      <p className="text-sm text-gray-600 mb-8 max-w-3xl">
        Ultra fast trade execution, No dealing desk, no requotes, Wide selection of Expert Advisors
        supported &amp; Trading from a smartphone or tablet
      </p>

      {/* Download Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-10">
        <div className="bg-gray-100 rounded-xl p-6 flex items-center gap-4 hover:bg-gray-200 transition">
          <FaGooglePlay className="text-2xl text-black" />
          <div>
            <p className="text-sm text-gray-500">Download From</p>
            <p className="text-lg font-semibold text-gray-900">Play Store</p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-xl p-6 flex items-center gap-4 hover:bg-gray-200 transition">
          <FaApple className="text-2xl text-black" />
          <div>
            <p className="text-sm text-gray-500">Download From</p>
            <p className="text-lg font-semibold text-gray-900">App Store</p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-xl p-6 flex items-center gap-4 hover:bg-gray-200 transition">
          <FaDesktop className="text-2xl text-black" />
          <div>
            <p className="text-sm text-gray-500">Download For</p>
            <p className="text-lg font-semibold text-gray-900">Desktop &amp; Mac</p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-xl p-6 flex items-center gap-4 hover:bg-gray-200 transition">
          <FaGlobe className="text-2xl text-black" />
          <div>
            <p className="text-sm text-gray-500">Access Via</p>
            <p className="text-lg font-semibold text-gray-900">Web Platform</p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-sm font-medium rounded-full transition">
        Start Trading Now
      </button>
    </div>
  );
};

export default TradingPlatform;
