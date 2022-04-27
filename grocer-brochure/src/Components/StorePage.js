import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import AuthContext from '../Context/AuthProvider'
import axios from '../Database/axios';
import  './styles/StorePage.css'
import {Carousel} from 'react-bootstrap';
import Slider from '../StorePages/Slider.js';
import aos from 'aos'
import Aos from 'aos';
//github branch

function StorePage () {

  const params = useParams();
  const PRODUCTS_URL = '/product/specific';
  const [Products, setProducts] = useState([]);
  const [success, setSuccess] = useState(false);
  const Context = useContext(AuthContext)

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
        setProducts(productData.data);
        if (Products !== '') { setSuccess(true)}
      } catch (e) { }
   }
    if(!success)
    run();
  }, [params.id, Products, success])

  const handleAdd = (id,quantity) => {
    var Item2Add = Products.find(product => product.id === id)

    Item2Add.quantity = quantity
    console.log(Item2Add)
    var newCart = []

    if(cartContains(Item2Add)){
      newCart = Context.cart.map((item) => item.id === id ? { ...item, quantity:  item.quantity + Item2Add.quantity } : item);
    }
    else{
      console.log(Item2Add)
    newCart = [...Context.cart, Item2Add]
    }
    Context.setCart(newCart)
    console.log(newCart)
    localStorage.setItem('shoppinglist', JSON.stringify(newCart));
}

const cartContains = (product) => { 
    return Context.cart.some(cartItem => cartItem.id === product.id)
}

  const renderCard = (product) => {
    product.quantity = 1;
    return (
      <div data-aos ="fade-up" className="card" key = {product.id}>
        <div className="leftside-card">
          {/* <img src={card.image} alt={card.title}/> */}
        </div>
        <div data-aos ="fade-up" className="rightside-card">
          <h3>{product.name}</h3>
          <div class="form-group">
          <label for="exampleFormControlSelect1">Amount</label>
          <select class="form-control" id="item_quantity" onChange={(e) => product.quantity = e.target.value}>
            <option value = '1'>1</option>
            <option value = '2'>2</option>
            <option value = '3'>3</option>
            <option value = '4'>4</option>
            <option value = '5'>5</option>
          </select>
        </div>
        <div data-aos ="fade-up" className="rightside-card-store">
          <div className="price-store">
            <p>${product.price}</p>
          </div>
          <div className="name-add-store">
            <h3>{product.name}</h3>
            <button onClick = {() => handleAdd(product.id,product.quantity)}>Add to Cart</button>
          </div>
        </div>
      </div>
    );
  };

  //#region View
  return (
      <main style={{ padding: "1rem 0" }}>
      <h2>This is a Store Page for {params.id}!</h2>
      <div>
      <Slider/>
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