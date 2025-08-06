import React from "react";
import { FaRegCopy, FaShareAlt, FaLightbulb } from "react-icons/fa";

const PartnerAccount = () => {
  const affiliateId = "55C397";
  const referralLink = `https://crm.zforexlive.com/signup/${affiliateId}`;

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <section className="ml-64 min-h-screen py-10 px-4 ">
         <h2 className="text-center text-gray-700 text-lg font-medium mb-2">
          Create Partner Account
        </h2>
      <div className="bg-white rounded-2xl shadow-md w-full max-w-4xl p-6 md:p-10 space-y-6 self-center justify-center mx-auto">
        {/* Title */}
       

        {/* Heading and Subheading */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            👥 Create Partner Account
          </h1>
          <p className="text-sm text-gray-500">
            Manage your referral codes and start earning commissions
          </p>
        </div>

        {/* Affiliate ID */}
        <div>
          <label className="text-sm font-semibold flex items-center gap-1">
            👑 Affiliate ID:
          </label>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="text"
              value={affiliateId}
              readOnly
              className="w-full px-4 py-2 rounded-lg bg-[#f4f3ff] text-gray-800 font-semibold outline-none"
            />
            <button
              onClick={() => handleCopy(affiliateId)}
              className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              <FaRegCopy />
            </button>
          </div>
        </div>

        {/* Referral Link */}
        <div>
          <label className="text-sm font-semibold flex items-center gap-1 mt-4">
            🔗 Your Referral Link:
          </label>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800 font-medium outline-none"
            />
            <button
              onClick={() => handleCopy(referralLink)}
              className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              <FaRegCopy />
            </button>
            <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
              <FaShareAlt />
            </button>
          </div>
        </div>

        {/* Status */}
        <div className="w-full bg-[#f8f6ff] rounded-xl py-6 flex justify-center">
          <div className="text-center">
            <span className="px-6 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition">
              ACTIVE
            </span>
            <p className="text-sm text-gray-600 mt-2">Account Status</p>
          </div>
        </div>

        {/* Tip */}
        <div className="w-full bg-[#f8f8fb] rounded-xl p-4 flex items-start gap-3 border border-gray-200">
          <FaLightbulb className="text-yellow-400 mt-1" />
          <p className="text-sm text-gray-700">
            <strong>Tip</strong><br />
            Share this link with others. When they sign up, they'll automatically be added to your
            network and you'll start earning commissions from their trades.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerAccount;
