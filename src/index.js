import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RawDataProvider from './contexts/RawDataProvider';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
<script src="https://kit.fontawesome.com/96440d645d.js" crossorigin="anonymous"></script>
root.render(
  <BrowserRouter>
    <React.StrictMode>
    <RawDataProvider>
      <App />
    </RawDataProvider>
  </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
