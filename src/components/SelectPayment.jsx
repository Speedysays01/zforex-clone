import React from "react";
import { FaWallet, FaArrowRight , FaRedoAlt } from "react-icons/fa";
const SelectPayment = () => {
  return (
    <div className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-sm max-w-3xl mx-auto mt-10 pb-[400px] -mt-1">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
          
       
            <h2 className="text-lg font-semibold text-gray-800">
              Select Payment Method
            </h2>
         
         
       
        <button className="text-gray-500 hover:text-gray-700 transition-all duration-200 hover:scale-105 hover:bg-gray-300
">
          <FaRedoAlt />
        </button>
      </div>

     

      {/* Transaction List */}
      <div className="space-y-4 ">
    
          <div
    
            className="border border-gray-200 rounded-xl p-4 flex justify-between items-center bg-white/80 hover:shadow-sm transition-all transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md hover:ring-2 hover:ring-blue-500 hover:backdrop-blur-sm flex  w-[100%]"
          >
            <div className="flex items-start gap-3  w-[100%]">
               <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-6">
        <FaWallet className="text-xl" />
      </div>
              <div>
                <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                  <h2>E Wallet</h2>
                 
                </div>
                <p className="text-sm text-gray-500">
                  <h3>Deposit using crypto or digital wallets</h3>
                </p>
          
              </div>
                  <FaArrowRight className="text-gray-400 text-lg justify-end" />
            </div>
          
          </div>
    
      </div>
    </div>
  );
};

export default SelectPayment
