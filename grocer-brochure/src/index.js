import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import {AuthProvider} from './Context/AuthProvider'

import Login from './Components/Login.js';
import About from './Components/About.js';
import StorePage from './Components/StorePage.js'; 
import SignUp from './Components/SignUp.js';
import CostcoPage from './Components/CostcoPage.js';
import SafewayPage from './StorePages/SafewayPage.js';
import CvsPage from './Components/CvsPage.js';
import WalgreensPage from './StorePages/WalgreensPage.js';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
  <AuthProvider>
  <Navbar/>
   <Routes>
      <Route path="/" element={<App />} />
      <Route path="Login" element={<Login />} />
      <Route path="About" element={<About />} />
      <Route path="StorePage" element={<StorePage/>} />
      <Route path="Signup" element={<SignUp/>} />
      <Route path="CostcoPage" element={<CostcoPage/>} />
      <Route path="SafewayPage" element={<SafewayPage/>}/>
      <Route path="CvsPage" element={<CvsPage/>}/>
      <Route path="WalgreensPage" element={<WalgreensPage/>}/>
    </Routes>
    </AuthProvider>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
