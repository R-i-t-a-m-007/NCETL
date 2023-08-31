import React from 'react'
import {useState} from 'react'
import {MdSearch,MdMic} from "react-icons/md"
import Sidebar from './Sidebar';

const DashNavbar = () => {

    const [toggle,setToggle] = useState(false);

    function clickHandler()
    {
      setToggle(!toggle)
    }


  return (
    // <div className=' mt-5 mb-5 flex justify-between'>
    //   <div className=' flex lg:mx-12 md:mx-6 sm:mx:3 '>
    //   <p className='sm:text-3xl text-[20px] font-bold py-1 cursor-pointer flex'>DashBoard</p>
    //   </div>

    //   <div className='flex justify-evenly  '>
    //     <div className=' text-white mx-10'>

        // <div className="container flex mx-auto">
        //     <div class="flex border-2 rounded">
        //     <input type="text"  className="px-2 py-1 lg:w-80 w-40" placeholder="Search..." />
        //         <button className="flex items-center justify-center px-4 border-r">
        //             <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
        //                 viewBox="0 0 24 24">
        //                 <path
        //                     d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
        //                 </path>
        //             </svg>
        //         </button>
              
        //     </div>
        // </div>

    //     </div>

    //     <div>
    //     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Generate Reports</button>
    //     </div>
    //   </div>
    // </div>
    <nav className='sm:px-16 px-6 w-full flex items-center py-3 mb-5 mt-5 '>
    

    <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
  

            <div className='flex items-center gap-2'>

                    

                <h1 className=' text-3xl font-bold py-1 cursor-pointer flex'>Dashboard</h1>
            </div>

            <div className='list-none hidden md:flex flex-row gap-6'>


                {/* <div className="  hover:text-white text-[20px]  p-2  cursor-pointer">Home</div> */}

                {/* <div className="container flex mx-auto">
            <div class="flex border-2 rounded">
            <input type="text"  className="px-2 py-1 lg:w-80 w-40" placeholder="Search..." />
                <button className="flex items-center justify-center px-4 border-r">
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                        </path>
                    </svg>
                </button>
              
            </div>
        </div> */}

        <div className='flex bg-white rounded-2xl items-center'>
      <MdSearch size={28}/><input type="text" className='bg-white h-10 px-5  pr-10 rounded-3xl text-sm focus:outline-none' placeholder=' Search Here...' /> <MdMic size={28}/>
      
          
            {/* <button className='bg-white absolute right-0 top-0 mt-3 mr-4'>
            <svg className="w-5 h-12" fill="#000000" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                        </path>
            </svg>
            </button> */}
           

        </div>

                <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 border border-blue-700 rounded-3xl">Generate Reports</button>
               

            </div>

            
          <div className='md:hidden flex flex-1 justify-end items-center'>
            
            <img src={` ${(toggle)? "close.svg" : "menu.svg"}`} alt='menu' className='w-[28px] h-[28px] bg-black rounded p-1 object-contain' onClick={clickHandler} />

            <div className={`${(!toggle) ?'hidden' :"flex"}  p-6 black-gradient opacity-70 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

                <div  className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                        <div className="  font-poppins text-white font-medium cursor-pointer text-[16px] "><button> Generate Reports</button> </div>
                        <div className="  font-poppins  text-white  font-medium cursor-pointer text-[16px] ">Search Here</div>
                       
                </div>

            </div>

        </div>


    </div>
    </nav>




  )
}

export default DashNavbar
