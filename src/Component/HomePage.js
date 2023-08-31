import React, { useEffect,useState } from 'react';
import backgroundImage from '../assets/Background-home.jpg';
import Typed from 'typed.js';

const HomePage = ({ onFileUploadSuccess }) => {
    
  useEffect(() => {
    const options = {
      strings: ["Unleash Data's Potential, Without the Code"],
      typeSpeed: 40,
      showCursor: true,
      cursorChar: '_',
      loop: true,
    };

    const typed = new Typed('.typed-text', options);

    return () => {
      typed.destroy();
    };
  }, []);
  const handleFileUpload = () => {
    setTimeout(() => {
        onFileUploadSuccess();
      }, 10000);
    };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-6xl font-bold text-orange-500 mb-4  drop-shadow-2xl ">NCETL</div>
      <div className="text-lg text-gray-700 mb-8">
        <span className="typed-text"></span>
      </div>
      <input
        type="file" onClick={handleFileUpload}
        className="bg-cyan-500 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded-lg
        
        
         focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default HomePage;
