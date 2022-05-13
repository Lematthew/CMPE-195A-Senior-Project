import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from './Database/axios';
import "./Cards.css";
import { Badge } from "react-bootstrap";

const Cards = () => {
    const navigate = useNavigate();
    const PRODUCTS_URL = "/product/merchantsall";
    const [merchantInfo, setMerchantInfo] = useState('');
    const [success, setSuccess] = useState(false);

      
  const IMAGE_PATH = "/Images/"


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
          console.log(merchantInfo);
          if (merchantInfo != '') {
            setSuccess(true)
          }
          // console.log(merchantInfo.data)
        } catch (e) {

        }
      }
      if(!success)
      run();
    }, [merchantInfo])
    
    const renderCard = (card) => {
      return (
        <div class="card" onClick={() => changeRoute(card.admin_id)}>
          <div class="leftside-card">
            <img src= {IMAGE_PATH.concat(card.image1_path)} alt="Error Missing Image"/>
          </div>
          <div class="rightside-card">
            <p style = {{'font-size': '36px'}}>{card.merchant_name}</p>
            <span class="rating">
              <p class="rating-number">{Math.floor(Math.random() * 500)/100 }</p>
            </span>
            {card.is_local ? (<div>
                  <Badge pill bg="success" style={{'font-size': '16px'}}>
                    LOCAL 
                  </Badge>
                  </div>
              ):(<div>

              </div>)
              }
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