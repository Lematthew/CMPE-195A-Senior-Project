import React from 'react';
import {useContext, useState, useRef} from 'react'
import AuthContext from '../Context/AuthProvider'
import {FaTrashAlt} from 'react-icons/fa'
import axios from '../Database/axios'
import context from 'react-bootstrap/esm/AccordionContext';
import "./styles/Checkout.css";


const Cart = () => {

const ORDERS_URL = '/orders/create'
const Context = useContext(AuthContext)
var hash  = require('object-hash');

const errRef                = useRef();
const [errMsg,setErrMsg]    = useState('');

const calculateTotal = () =>{
    var total = 0;
    Context.cart.map((item) => total += item.price * item.quantity)
    return total
}

const handleDelete = (id) => {
    const listItems = Context.cart.filter((item) => item.id !== id);
    Context.setCart(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

const generateJSON = () => {
    const total = calculateTotal()

    var hashItem = Context.cart
    hashItem[4] = Date.now().toString()

    const hash_order = hash(hashItem)
    hashItem.pop()

    return(JSON.stringify({
        'order_hash': hash_order,
        'total': total,
        'user_id': 2,
        'cart': Context.cart
    }))
}


const quantityChange = (id, quantity) => {
    var newCart = []

    newCart = Context.cart.map((item) => item.id === id ? { ...item, Quantity: quantity } : item);
    Context.setCart(newCart)
    console.log(newCart)
    localStorage.setItem('shoppinglist', JSON.stringify(newCart));
}

const handleCheckout = async (e) => {
    var hashItem = Context.cart
    hashItem[4] = Date.now().toString()
    hashItem.pop()
    e.preventDefault();

    try{
      const response = await axios.post(ORDERS_URL,  generateJSON(),          {
        headers: {'Content-Type': 'application/json'},
      })
 
    if(response){
        console.log(response.body.message)
    }
    else
      setErrMsg('Incorrect info')
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
                            <span>${item.price * item.quantity}</span>
                            <FaTrashAlt
                                onClick={() => handleDelete(item.id)}
                                role="button"
                                tabIndex="0"
                            />
                        </li>
                    ))}
                    <label>Your total: ${calculateTotal()}</label>
                    <button className='checkout-button' onClick={handleCheckout}>Checkout</button>
                </ul>
            ) : (
                <p style={{ marginTop: '2rem' }}>Your cart is empty.</p>
            )}
        </main>
    )
}


export default Cart;