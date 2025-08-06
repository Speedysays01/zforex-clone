import React from "react";
import { FaFacebookF, FaFacebookMessenger, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

const ReferralProgram = () => {
  return (
    <div className="p-8 ml-64">
      {/* Header */} 
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">
          Referral Program
        </h2>
        <p className="text-sm text-gray-500">Invite friends and earn rewards</p>
      </div>

      {/* Container */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Left Image */}
        <div className="p-6 flex justify-center items-center bg-white">
          <img
            src="/refer.png"
            alt="Refer a friend"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Text Section */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">GIVE 10%, GET $10 USD</h2>
          <p className="font-semibold text-gray-700 mb-3">REFER A FRIEND</p>
          <p className="text-sm text-gray-600 mb-6">
            Give your friends 10% off, and earn $10 USD off when they buy. One sharing more happy people
          </p>

          {/* Referral Link */}
          <div className="relative flex items-center mb-6">
            <input
              type="text"
              readOnly
              value="https://crm.zforexlive.com/signup/55C397"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none"
            />
            <button className="absolute right-2 text-blue-600 hover:text-blue-800">
              <FiCopy className="text-xl" />
            </button>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4">
            <button className="bg-[#1877F2] text-white w-10 h-10 rounded-full flex items-center justify-center">
              <FaFacebookF />
            </button>
            <button className="bg-[#0084FF] text-white w-10 h-10 rounded-full flex items-center justify-center">
              <FaFacebookMessenger />
            </button>
            <button className="bg-[#25D366] text-white w-10 h-10 rounded-full flex items-center justify-center">
              <FaWhatsapp />
            </button>
            <button className="bg-[#1DA1F2] text-white w-10 h-10 rounded-full flex items-center justify-center">
              <FaTwitter />
            </button>
          </div>
        </div>
      </div>
      {/* How It Works Section */}
<div className="bg-white p-6 rounded-xl shadow-md mb-6 mt-8">
  <h2 className="text-xl font-bold mb-4">How It Works</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
    <div>
      <div className="flex justify-center mb-2">
        <div className="bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold">1</div>
      </div>
      <p className="font-semibold">Share Your Link</p>
      <p className="text-sm text-gray-600">Copy your unique referral link and share it with friends via email or social media.</p>
    </div>
    <div>
      <div className="flex justify-center mb-2">
        <div className="bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold">2</div>
      </div>
      <p className="font-semibold">Friend Signs Up</p>
      <p className="text-sm text-gray-600">When your friend clicks your link and creates an account, they get 10% off their first deposit.</p>
    </div>
    <div>
      <div className="flex justify-center mb-2">
        <div className="bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold">3</div>
      </div>
      <p className="font-semibold">You Get Rewarded</p>
      <p className="text-sm text-gray-600">Once your friend makes their first deposit, you'll receive $10 USD credited to your account.</p>
    </div>
  </div>
</div>

{/* Referral History Section */}
<div className="bg-white p-6 rounded-xl shadow-md">
  <h2 className="text-xl font-bold mb-4">Your Referral History</h2>
  <p className="text-center text-gray-600 mb-4">You haven't referred anyone yet. Start sharing your link today!</p>
  <div className="flex justify-center">
    <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition-all">
      Share Your Link
    </button>
  </div>
</div>

    </div>
  );
};

export default ReferralProgram;
