import React from 'react'
import { UserData,UserData3 } from "../Data"
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import {GrFormRefresh} from 'react-icons/gr'
import Sidebar from './Sidebar';

import BarChart from "./BarChart";
import LineChart from './LineChart';
import Header from './Header';


const Statistics = () => {
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
            borderColor: "red",
            borderWidth: 0.5,
          },
          {
            
            label: "Users Gained",
            data: UserData3.map((data) => data.userGain),
            backgroundColor: [
              "rgba(249,115,22,1)",
              "rgba(249,115,22,0.6)",
    
            ],
            borderColor: "red",
            borderWidth: 0.5,
          },
         
        ],
      });

      const [toggle,setToggle] = useState(false);

      function refreshHandler()
      {
        setToggle(!toggle)
      }
  

  return (

    <div className='h-screen w-full flex'>
    <Sidebar />

    <div className='w-full h-srceen'>
        <Header/>
        <hr className='border border-gray-200'/>
        <div>

        </div>
        <div className=' w-full h-full flex lg:flex-row flex-col '>
           <div className='w-full h-full lg:w-3/5' >

               <div className='border-gray-300 border  rounded-lg bg-white flex flex-col  m-2' style={{ height: "280px" }}>

                <p className='mx-4 text-2xl pt-1 tracking-wide font-semibold text-gray-500'>OverAll</p>
                <div className='flex items-center justify-center h-5/6'>
                  <LineChart chartData={userData} />
                </div>

              </div>

               <div className='border-gray-300 border  rounded-lg bg-white flex flex-col  m-2' style={{ height: "280px" }}>

                <p className='mx-4 text-2xl pt-1 tracking-wide font-semibold text-gray-500'>Actual Billing Per Month</p>
                <div className='flex items-center justify-center h-5/6' >
                  <BarChart chartData={userData} />
                </div>

              </div>

        </div>

        <div className='lg:w-2/5 w-full'>
            <div className='bg-white mx-8 mt-2 rounded-2xl'>
                <p className='font-semibold mx-4 text-3xl flex justify-center p-5'>Automatic Mail Sent &nbsp; <span className='flex items-center'> <GrFormRefresh onClick={refreshHandler}/></span></p>
               
                <div className='flex justify-center'>

                </div>


              <div className={`${(!toggle) ?'hidden' :"flex"}  justify-evenly `}>


              <div className='flex-col   '>
                 

                  
                 <div className='flex mx-4 mt-1   '>
                 <FaUserCircle className='mt-2' size={30} color='blue'/>
                 <div className='mx-2'>
                 <p className='font-semibold text-gray-500 px-2 flex justify-center'>Avery Devis &nbsp; &nbsp;<span className='text-gray-300 font-normal'>5 min</span>  </p>
                  <p  className='flex justify-center text-gray-400 mb-2'>Clint payment done  &nbsp; </p>

                  <hr className='border border-gray-200 mt-1 w-full'/>
                  
                 </div>
                  
                 </div>

                 <div className='flex mx-4 mt-1 '>
                 <FaUserCircle className='mt-2' size={30} color='blue'/>
                 <div className='mx-2'>
                 <p className='font-semibold text-gray-500 px-2 flex justify-center'>David Eliv &nbsp; &nbsp;<span className='text-gray-300 font-normal'>5 min</span>  </p>
                  <p  className='flex justify-center text-gray-400 mb-2'>Clint payment done  &nbsp; </p>

                  <hr className='border border-gray-200 mt-1 w-full'/>
                  
                 </div>
                  
                 </div>


                 <div className='flex mx-4 mt-1 '>
                 <FaUserCircle className='mt-2' size={30} color='blue'/>
                 <div className='mx-2'>
                 <p className='font-semibold text-gray-500 px-2 flex justify-center'>Jhon Sena; &nbsp;<span className='text-gray-300 font-normal'>5 min</span>  </p>
                  <p  className='flex justify-center text-gray-400 mb-2'>Clint payment done  &nbsp; </p>

                  <hr className='border border-gray-200 mt-1 w-full'/>
                  
                 </div>
                  
                 </div>


                 <div className='flex mx-4 mt-1 '>
                 <FaUserCircle className='mt-2' size={30} color='blue'/>
                 <div className='mx-2'>
                 <p className='font-semibold text-gray-500 px-2 flex justify-center'>Shubham Devis &nbsp; &nbsp;<span className='text-gray-300 font-normal'>5 min</span>  </p>
                  <p  className='flex justify-center text-gray-400 mb-2'>Clint payment done  &nbsp; </p>

                  <hr className='border border-gray-200 mt-1 w-full'/>
                  
                 </div>
                  
                 </div>

   
               </div>


               <div>

               </div>

              </div>

            

             <div className={`${(toggle) ?'hidden' :"flex"}  justify-evenly `}>


              <div className='flex-col   '>
                 

                  
                 <div className='flex mx-4 mt-1   '>
                 <FaUserCircle className='mt-2' size={30} color='blue'/>
                 <div className='mx-2'>
                 <p className='font-semibold text-gray-500 px-2 flex justify-center'>Shivanshu Devis &nbsp; &nbsp;<span className='text-gray-300 font-normal'>5 min</span>  </p>
                  <p  className='flex justify-center text-gray-400 mb-2'>Clint payment done  &nbsp; </p>

                  <hr className='border border-gray-200 mt-1 w-full'/>
                  
                 </div>
                  
                 </div>

                 <div className='flex mx-4 mt-1 '>
                 <FaUserCircle className='mt-2' size={30} color='blue'/>
                 <div className='mx-2'>
                 <p className='font-semibold text-gray-500 px-2 flex justify-center'>David Eliv &nbsp; &nbsp;<span className='text-gray-300 font-normal'>5 min</span>  </p>
                  <p  className='flex justify-center text-gray-400 mb-2'>Clint payment done  &nbsp; </p>

                  <hr className='border border-gray-200 mt-1 w-full'/>
                  
                 </div>
                  
                 </div>


                 <div className='flex mx-4 mt-1 '>
                 <FaUserCircle className='mt-2' size={30} color='blue'/>
                 <div className='mx-2'>
                 <p className='font-semibold text-gray-500 px-2 flex justify-center'>Jhon Sena; &nbsp;<span className='text-gray-300 font-normal'>5 min</span>  </p>
                  <p  className='flex justify-center text-gray-400 mb-2'>Clint payment done  &nbsp; </p>

                  <hr className='border border-gray-200 mt-1 w-full'/>
                  
                 </div>
                  
                 </div>


                 <div className='flex mx-4 mt-1 '>
                 <FaUserCircle className='mt-2' size={30} color='blue'/>
                 <div className='mx-2'>
                 <p className='font-semibold text-gray-500 px-2 flex justify-center'>Shubham Devis &nbsp; &nbsp;<span className='text-gray-300 font-normal'>5 min</span>  </p>
                  <p  className='flex justify-center text-gray-400 mb-2'>Clint payment done  &nbsp; </p>

                  <hr className='border border-gray-200 mt-1 w-full'/>
                  
                 </div>
                  
                 </div>

   
               </div>


               <div>

               </div>

              </div>

              
                
                <p className='font-semibold mx-4 flex justify-around text-blue-500 p-3'>Show more...</p>



            </div>
            <div className='mt-8'>
                <div className='bg-orange-600 mx-8 mt-2 rounded-2xl flex-col justify-items-start opacity-90	' style={{height: "160px"}}>
                <p className='font-semibold mx-4 flex   text-2xl  text-white pt-6 '>Number of Automatic <br/> Generated Mails </p>
                <p className='font-semibold mx-4 flex   text-3xl text-white mt-4'>36</p>
                </div>

            </div>


        </div>
        </div>

      
    </div>

  </div>
  )
}

export default Statistics
