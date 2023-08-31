import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  return (
    <header className="bg-white py-4 border-b border-gray-200">
      <div className="flex items-center justify-between px-6">
        <div className=" text-2xl text-gray-800 font-semibold"><FontAwesomeIcon icon={faUser} className="mr-2" />  Welcome User</div>
        <label className="relative inline-flex items-center bg-white border-2 border-gray-300 rounded-lg py-1 px-2 cursor-pointer ml-auto">
          <input type="file" className="hidden text-gray-700 font-semibold" />
          New Upload
        </label>
      </div>
      <hr className="my-4 border-gray-200" />
      <label className="relative inline-flex items-center border-2 border-gray-200 rounded-lg bg-white py-2 px-4 cursor-pointer">
          <span className="mr-2">Select period:</span>
          <div className="mr-2">from:</div>
          <DatePicker
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            onChange={(date) => setstartDate(date)}
            dateFormat="dd/MM/yyyy"
            className="w-28"
          />
          <div className="mr-2">to:</div>
          <DatePicker
            selected={endDate}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            onChange={(date) => setendDate(date)}
            dateFormat="dd/MM/yyyy"
            className="w-28"
          />
        </label>
    </header>
  );
};

export default Header;
