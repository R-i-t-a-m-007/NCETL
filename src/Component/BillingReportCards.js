import React from 'react'
import {BiSolidDollarCircle} from"react-icons/bi"
import {GiNetworkBars} from "react-icons/gi"
import {ImMail4} from "react-icons/im"
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const BillingReportCards = ({ dashboardRef }) => {
    const handleDownloadClick = () => {
      if (!dashboardRef || !dashboardRef.current) {
        console.error("Dashboard element not found.");
        return;
      };
      html2canvas(dashboardRef.current).then((canvas) => {
        const pdf = new jsPDF();
        const imgData = canvas.toDataURL('image/png');
  
        pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // Adjust width and height as needed
        pdf.save('dashboard-report.pdf');
      });
    };
  
  return (
    
    <div className='grid lg:grid-cols-3 md:grid-cols-2 w-full text-gray-600 h-1/6 lg:mt-5 mt-2'>
     <div className='lg:mx-10  mx-3 p-1 px-2 mt-2 bg-white rounded-xl w-11/12 lg:w-10/12'>
        <BiSolidDollarCircle size={42}/>
        <p className='text-xl pt-1'>Receivable</p>
        <p className='text-xl pb-2  '>Total payment received</p>
        <p className='text-2xl p-1 font-semibold  text-blue-500'>$250,000.00</p>
      </div>

      <div className='px-2 md:mx-1 sm:mx-1  mt-2  rounded-xl flex  '>
        <div className=' p-1 px-2 border w-1/2 rounded-xl bg-white '>
        <GiNetworkBars size={42}/>
        
            <p className='text-xl pt-1'>Total Billing</p>
            <p className='text-xl pb-2'>Generation</p>
            <p  className='text-2xl p-1 font-semibold  text-blue-500'>36.2%</p>
        </div>

        <div className='lg:mx-6 mx-4 p-1 px-2 border w-1/2 rounded-xl bg-white'>
        <ImMail4 className='mt-3' size={42}/>
        
            <p  className='text-xl pt-2'>Total Collections</p>
            <p  className='text-2xl p-1 pt-4 font-semibold  text-blue-500'>36</p>
        </div>

      </div>

      <div className='px-2 mx-1 mt-2  rounded-xl flex justify-center items-center align-center '>

      <button className="bg-orange-400 hover:bg-orange-500  text-white font-semibold text-xl py-2 w-1/2 border rounded-xl h-5/12" onClick={handleDownloadClick}>Download <br/> Reports</button>
               

      </div>
    
      
    </div>
  )
}

export default BillingReportCards
