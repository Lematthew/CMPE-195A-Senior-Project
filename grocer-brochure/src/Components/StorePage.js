import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import AuthContext from '../Context/AuthProvider'
import axios from '../Database/axios';
import  './styles/StorePage.css'

function StorePage () {

  const params = useParams();
  const PRODUCTS_URL = '/product/specific';
  const [Products, setProducts] = useState([]);
  const [success, setSuccess] = useState(false);
  const Context = useContext(AuthContext)

  useEffect(()=>{
    const run = async (e) => {
      try {
        const productData = await axios.post(PRODUCTS_URL, JSON.stringify({
          'merchant_id': params.id
        }),
        {
          headers: {'Content-Type': 'application/json'}
        });
        setProducts(productData.data);
        if (Products !== '') { setSuccess(true)}
      } catch (e) { }
   }
    if(!success)
    run();
  }, [params.id, Products, success])

  const handleAdd = (id,Quantity) => {
    var Item2Add = Products.find(product => product.id === id)

    Item2Add.Quantity = 34
    console.log(Item2Add)
    var newCart = []

    if(cartContains(Item2Add)){
      newCart = Context.cart.map((item) => item.id === id ? { ...item, Quantity:  item.Quantity + Item2Add.Quantity } : item);
    }
    else{
      console.log(Item2Add)
    newCart = [...Context.cart, Item2Add]
    }
    Context.setCart(newCart)
    localStorage.setItem('shoppinglist', JSON.stringify(newCart));
}

const cartContains = (product) => { 
    return Context.cart.some(cartItem => cartItem.id === product.id)
}

  const renderCard = (product) => {
    return (
      <div className="card" key = {product.id}>
        <div className="leftside-card">
          {/* <img src={card.image} alt={card.title}/> */}
        </div>
        <div className="rightside-card">
          <h3>{product.name}</h3>
          <button onClick = {() => handleAdd(product.id,5)}>Add to Cart</button>
        </div>
      </div>
    );
  };

  //#region View
  return (
      <main style={{ padding: "1rem 0" }}>
      <h2>This is a Store Page for {params.id}!</h2>
      <div>
        <> {success ? (
          <div className = "card-container">
            {Products.map((item) => renderCard (item))}
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

  //#endregion
}

export default StorePage;