import SelectPayment from '../components/SelectPayment'
import DepositForm from '../components/DepositForm'
import RecentDeposits from '../components/RecentDeposits'

import React from 'react'

const Deposit = () => {
  return (
    <div className='ml-64'>
      <h1 className='text-2xl font-medium'>Deposite Funds</h1>
      <h2 className='text-sm font-medium text-gray-500'>Add funds to your trading account using one of the available payment methods.</h2>
    <div className='  flex gap-2 p-2  '>
      <div className="w-full lg:w-1/2">   <SelectPayment/></div>
<div className="w-full lg:w-1/2 ">   <DepositForm/></div>

    </div>

<RecentDeposits/>
 
    </div>
  )
}

export default Deposit