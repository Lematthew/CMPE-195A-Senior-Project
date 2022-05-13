import React from 'react';
import {useContext, useState, useRef} from 'react'
import AuthContext from '../Context/AuthProvider'
import {FaTrashAlt} from 'react-icons/fa'
import axios from '../Database/axios'
import context from 'react-bootstrap/esm/AccordionContext';
import "./styles/Checkout.css";
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout'


const Cart = () => {

const ORDERS_URL = '/orders/create'
const Context = useContext(AuthContext)
var hash  = require('object-hash');

const errRef                = useRef();
const [errMsg,setErrMsg]    = useState('');
const navigate = useNavigate()

const calculateTotal = () =>{
    var total = 0;
    Context.cart.map((item) => total += item.price * item.quantity)
    total = (Math.round(total * 100) / 100).toFixed(2);
    return total
}

const handleDelete = (id) => {
    const listItems = Context.cart.filter((item) => item.id !== id);
    Context.setCart(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

const generateJSON = () => {
    const total = calculateTotal();

    var hashItem = Context.cart
    hashItem[Context.cart.length] = Date.now().toString()

    const hash_order = hash(hashItem);
    hashItem.pop();

    return(JSON.stringify({
        'order_hash': hash_order,
        'total': total,
        'user_id': Context.auth.id,
        'cart': Context.cart
    }))
}

const emptyCart = () => {
  var listItems ={}
  Context.setCart(listItems);
  localStorage.setItem('shoppinglist', JSON.stringify(listItems));
}


const quantityChange = (id, quantity) => {
    var newCart = {}

    newCart = Context.cart.map((item) => item.id === id ? { ...item, Quantity: quantity } : item);
    Context.setCart(newCart)
    console.log(newCart)
    localStorage.setItem('shoppinglist', JSON.stringify(newCart));
}

const handleCheckout = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post(ORDERS_URL,  generateJSON(),          {
        headers: {'Content-Type': 'application/json'},
      })
    if(response.data.success){
      emptyCart()
      navigate('/confirmation')
    }
    else{
      setErrMsg('Incorrect info')
    }
    } catch(err){
        if(!err?.response){
          setErrMsg('No Response from Server');
        }
        else if(err.response?.status === 400){
          setErrMsg('Unable to checkout');
        }
        else if(err.Response?.status === 401){
          setErrMsg("Unauthorized")
        }
        else {
          setErrMsg('Checkout Failed')
        }
    }
  }


    return (
        <main className='checkout-main'>
            <h1 className='checkout-h1'>Check Out!</h1>
            {Context.cart.length ? (
                <ul className='checkout-list'>
                    {Context.cart.map((item) => (
                        <li className="item" key={item.id}>
                            <label className='checkout-item'>{item.name}</label>
                            <input   
                                type='tel'   
                                defaultValue={item.quantity} 
                                className='checkout-quantity' 
                                maxLength={2}
                                onChange={(e) => quantityChange(item.id, e.target.value)}
                            />
                            <span>${(Math.round((item.price * item.quantity) * 100) / 100).toFixed(2)}</span>
                            <FaTrashAlt
                                onClick={() => handleDelete(item.id)}
                                role="button"
                                tabIndex="0"
                            />
                        </li>
                    ))}  
                    <label>Your total: ${calculateTotal()}</label>
                    <div>
                    <button className='checkout-button' onClick={(e) => handleCheckout(e)}>Checkout</button>
                    <button className='checkout-button' onClick={(e) => window.open("https://buy.stripe.com/test_14k4i435Bfk7cFy3cd")}>Edit Payment</button>
                    </div>
                </ul>
            ) : (
                <p style={{ marginTop: '2rem' }}>Your cart is empty.</p>
            )}
        </main>
    )
}


export default Cart;