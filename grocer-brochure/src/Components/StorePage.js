import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../Database/axios';
import  './styles/StorePage.css';
import {Carousel} from 'react-bootstrap';
import Slider from '../StorePages/Slider.js';
import aos from 'aos'
import Aos from 'aos';

function StorePage () {
  const params = useParams();
  const PRODUCTS_URL = '/product/specific';
  const [productInfo, setProductInfo] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(()=>{

    Aos.init({duration: 2000});

    const run = async (e) => {
      try {
        const productData = await axios.post(PRODUCTS_URL, JSON.stringify({
          'merchant_id': params.id
        }),
        {
          headers: {'Content-Type': 'application/json'}
        });
        console.log(JSON.stringify(productData?.data));

        setProductInfo(productData);
        if (productInfo != '') {
          setSuccess(true)
        }
        console.log(productInfo.data)
      } catch (e) {

      }
    }

    run();
  }, [productInfo])

  const renderCard = (card) => {
    return (
      <div data-aos ="fade-up" class="card">
        <div data-aos = "fade-up" class="leftside-card">
          {/* <img src={card.image} alt={card.title}/> */}
        </div>
        <div data-aos ="fade-up" class="rightside-card">
          <h3>{card.name}</h3>
          <button>Add to Cart</button>
        </div>
      </div>
    );
  };

  return (
      <main style={{ padding: "1rem 0" }}>
      <h2>This is a Store Page for {params.id}!</h2>
      <div>
        <Slider/>
        <> {success ? (
          <div className = "card-container">
            {productInfo.data.map(renderCard)}
          </div>
          ) : (
            <div>
              <h1>Loading</h1>
            </div>
          )} 
        </>
      </div>
      </main>
  );
}

export default StorePage;