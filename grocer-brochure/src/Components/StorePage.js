import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../Database/axios';
import  './styles/StorePage.css'

function StorePage () {
  const params = useParams();
  const PRODUCTS_URL = '/product/specific';
  const [productInfo, setProductInfo] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(()=>{

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
      <div class="card">
        <div class="leftside-card">
          {/* <img src={card.image} alt={card.title}/> */}
        </div>
        <div class="rightside-card">
          <p>{card.name}</p>
        </div>
      </div>
    );
  };

  return (
      <main style={{ padding: "1rem 0" }}>
      <h2>This is a Store Page for {params.id}!</h2>
      <div>
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