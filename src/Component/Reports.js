import React from 'react'
import BillingReportCards from './BillingReportCards'
import { useDashboardRef } from '../contexts/DashboardContext';

import DoughnutChart from './DoughnutChart'
import Sidebar from './Sidebar';
import PieChart from './PieChart'
import { UserData2 } from "../Data"
import { useState } from 'react';
import Header from './Header';


const Reports = () => {

    const dashboardRef = useDashboardRef();
    const [userData2, setUserData2] = useState({
        labels: UserData2.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData2.map((data) => data.userGain),
            backgroundColor: [
              "rgba(249,115,22,0.8)",
              "rgba(249,115,22,0.4)",
    
            ],
            borderColor: "",
            borderWidth: "",
          },
        ],
      });


  return (

    <div className='h-screen w-full flex'>
    <Sidebar />
    <div className='w-full h-srceen'>
      <Header />
      <hr className='border border-gray-200'/>
      <div className='flex flex-col'>
         <BillingReportCards dashboardRef={dashboardRef} />

         <div className='sm:grid xs:grid grid-cols-2 w-full mt-6  mb-8 gap-4'>
            <div className='  w-11/12 lg:mx-10 m-3 p-3 bg-white rounded-xl' style={{ height: "330px" }}  >
                    <p className='text-2xl pt-1 tracking-wide font-semibold text-gray-500'>Pre-commited Billing Projection</p>
                    <hr className='border w-4/5 mt-1 border-neutral-300' />
                    <div className='flex mt-2 justify-center lg:h-5/6 h-2/3'>
                        <DoughnutChart  chartData={userData2} />
                    </div>
            </div>
            
            <div className=' w-11/12 m-3 p-3 bg-white rounded-xl'  style={{ height: "330px" }}>
                    <p className='text-2xl pt-1 tracking-wide font-semibold text-gray-500'>Billing Notification</p>
                    <hr className='border w-3/5 border-neutral-300' />
                    <div className='flex justify-center lg:h-5/6 h-2/3' >
                        <PieChart chartData={userData2} />
                    </div>
            </div>
                
        </div>

       </div>
    </div>

</div>


 
  )
}

export default Reports
