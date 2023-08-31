import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Sidebar from './Component/Sidebar';
import Reports from './Component/Reports';
import Dashboard from './Component/Dashboard';
import Statistics from './Component/Statistics';
import HomePage from './Component/HomePage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { DashboardProvider } from './contexts/DashboardContext';


function App() {

  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const navigate = useNavigate(); 

  const handleFileUploadSuccess = () => {
    setIsFileUploaded(true);

    navigate('/dashboard');
  };



  return (

    <DashboardProvider>
      <div className="h-screen w-full	">
        <Routes>
          <Route path="/" element={<HomePage onFileUploadSuccess={handleFileUploadSuccess} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/statistics" element={<Statistics/>} />
          <Route path="/reports" element={<Reports/>} />
        </Routes>
      </div>
    </DashboardProvider>
  );
}

export default App;
