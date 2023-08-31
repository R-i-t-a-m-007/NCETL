import React from 'react'

import {BiSolidDollarCircle} from"react-icons/bi"
import {GiNetworkBars} from "react-icons/gi"
import {ImMail4} from "react-icons/im"
import {FaCheckCircle} from "react-icons/fa"

const BillingCards = () => {
  return (
    <div className='grid gap-2 lg:grid-cols-4 md:grid-cols-2 w-full bg-gray-100 h-1/6 mt-10'>
      <div className='mx-3 p-1 px-2 '>
        <BiSolidDollarCircle size={28}/>
        <p>Receivable</p>
        <p>Total payment received</p>
        <p className='text-xl font-semibold text-cyan-600'>$250,000.00</p>
      </div>

      <div className='mx-1 p-1 px-2 border rounded-xl bg-white'>
      <GiNetworkBars size={28}/>
      
        <p>Total Billing vs Actual Billing</p>
        <p  className='text-xl font-semibold text-cyan-600'>36.3%</p>
      </div>


      <div className='mx-1 p-1 px-2 border rounded-xl bg-white'>
      <ImMail4 size={28}/>
      
        <p>  Number of automatic generated mails</p>
        <p  className='text-xl font-semibold text-cyan-600'>36</p>
      </div>


      <div className='mx-1 p-1 px-2 border rounded-xl bg-white'>
      <FaCheckCircle size={28}/>
     
        <p>Revenue projections</p>
        <p>Total Sales</p>
        <p  className='text-xl font-semibold text-cyan-600'> 29</p>
      </div>
    </div>
  )
}

export default BillingCards
