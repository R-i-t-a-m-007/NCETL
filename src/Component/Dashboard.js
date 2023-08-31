import React from 'react'
import DashNavbar from './DashNavbar'
import BillingCards from './BillingCards'
import { MdHeight } from 'react-icons/md';
import { UserData, UserData2 } from "../Data"
import { useState } from 'react';
import Sidebar from './Sidebar';

import BarChart from "./BarChart";

import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart"

const Dashboard = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(249,115,22,1)",
              "rgba(249,115,22,0.6)",
    
            ],
            borderColor: "",
            borderWidth: "",
          },
        ],
      });
    
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
  


      <div className=' w-full'>
  <DashNavbar />

  <div className='flex flex-col'>
  <BillingCards/>



  <div className='flex   lg:flex-row  flex-col w-full '>

    <div className=' flex flex-row lg:w-1/3 w-full' >

      <div className='w-full flex flex-col lg:flex-col md:flex-row md:justify-evenly' >
       
        <div className='m-2 w-full'  style={{ height: "200px" }}>
          <p>Pre-commited Billing Projection</p>
          <hr className='border w-4/5 mt-1 border-neutral-300' />
          <div className='flex justify-center h-5/6'>
            <DoughnutChart chartData={userData2} />
          </div>
        </div>

        <div className='m-2 w-full' style={{ height: "200px" }}>
          <p>Billing Notification</p>
          <hr className='border w-3/5 border-neutral-300' />
          <div className='flex justify-center h-5/6' >
            <PieChart chartData={userData2} />
          </div>
        </div>




      </div>

      {/* <div className='w-full'  style={{height:"200px"}}>

</div>
*/}




    </div>

    <div className='sm:grid xs:grid grid-cols-2 w-full ' >

      <div className='border-black border  rounded-lg bg-white flex flex-col  m-2' style={{ height: "200px" }}>

        <p className='font-semibold mx-4'>Actual Billing Per Month</p>
        <div className='flex items-center justify-center h-5/6'>
          <BarChart chartData={userData} />
        </div>

      </div>


      <div className='border-black border  rounded-lg bg-white flex flex-col  m-2' style={{ height: "200px" }}>

        <p className='font-semibold mx-4'>Number of Mail Generated</p>
        <div className='flex items-center justify-center h-5/6 '>
          <BarChart chartData={userData} />
        </div>

      </div>
      <div className='border-black border  rounded-lg bg-white flex flex-col  m-2' style={{ height: "200px" }}>

        <p className='font-semibold mx-4'>Total Billing Per Month</p>
        <div className='flex items-center justify-center h-5/6 ' >
          <BarChart chartData={userData} />
        </div>

      </div>
      <div className='border-black border  rounded-lg bg-white flex flex-col  m-2' style={{ height: "200px" }}>

        <p className='font-semibold mx-4'>Income Source Per Month</p>
        <div className='flex items-center justify-center h-5/6 ' >
          <BarChart chartData={userData} />
        </div>

      </div>



    </div>
  </div>



  </div>
  


</div>




   

   </div>

    
    

   
  )
}

export default Dashboard
