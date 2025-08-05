import React from 'react'
import AccountBalances from '../components/AccountBalances'
import TransferForm from '../components/TransferForm'
import RecentTransfers from '../components/RecentTransfers'

const Transfer = () => {
  return (
    <div>
        <div className='ml-64'>
      <h1 className='text-2xl font-medium'>Deposite Funds</h1>
      <h2 className='text-sm font-medium text-gray-500'>Add funds to your trading account using one of the available payment methods.</h2>
    <div className="flex gap-2 mt-4">
         <div className="w-full lg:w-1/2">       <TransferForm/></div>
              <div className="w-full lg:w-1/2">   <AccountBalances/></div>
   
  
    </div >
    <RecentTransfers/>
    </div>
    </div>
  )
}

export default Transfer