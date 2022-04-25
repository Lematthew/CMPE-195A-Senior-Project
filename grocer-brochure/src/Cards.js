import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from './Database/axios';
import "./Cards.css";

const Cards = () => {
    const navigate = useNavigate();
    const PRODUCTS_URL = "/product/merchantsall";
    const [merchantInfo, setMerchantInfo] = useState('');
    const [success, setSuccess] = useState(false);

    const changeRoute = (store) => {
      navigate(`/StorePage/${store}`, {
        title: store
      });
    };
    useEffect(()=>{

      const run = async (e) => {
        try {
          const merchantData = await axios.get(PRODUCTS_URL, null)
          // console.log(JSON.stringify(merchantData?.data));

          setMerchantInfo(merchantData);
          if (merchantInfo != '') {
            setSuccess(true)
          }
          console.log(merchantInfo.data)
        } catch (e) {

        }
      }
      if(!success)
      run();
    }, [merchantInfo])
    
    const renderCard = (card) => {
      return (
        <div class="card" onClick={() => changeRoute(card.id)}>
          <div class="leftside-card">
            { <img src={card.image1_path} alt={card.title}/> }
          </div>
          <div class="rightside-card">
            <p>{card.merchant_name}</p>
            <span class="rating">
              <p class="rating-number">4.7</p>
            </span>
          </div>
        </div>
      );
    };

      return (
        <> {success ? (
          <div className = "card-container">
            {merchantInfo.data.map(renderCard)}
          </div>
        ) : (
          <div>
            <h1>Loading</h1>
          </div>
        )} 
        </>
      );
};

export default Cards