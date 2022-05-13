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
import CheckOut from './Components/CheckOut.js';
import Driver from './Components/Driver.js';
import Delivery from './Components/Delivery.js';
import ProductPage from './Components/ProductPage.js';
import Admin from './Components/Admin';
import NewProductPage from './Components/NewProductPage';
import Confirmation from './Components/Confirmation.js';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
  <AuthProvider>
  <Navbar/>
   <Routes>
      <Route path="/" element={<App />} />
      <Route path="Login" element={<Login />} />
      <Route path="About" element={<About />} />
      <Route path="StorePage/:id" element={<StorePage/>} />
      <Route path="Confirmation" element={<Confirmation/>} />
      <Route path="Signup" element={<SignUp/>} />
      <Route path="Checkout" element={<CheckOut/>} />
      <Route path="Driver" element={<Driver/>} />
      <Route path="Driver/:id" element={<Delivery/>} />
      <Route path="Admin" element={<Admin/>}/>
      <Route path="StorePage/:merchant_id/:id" element={<ProductPage/>} />
      <Route path="StorePage/:merchant_id/create" element={<NewProductPage/>} />
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
