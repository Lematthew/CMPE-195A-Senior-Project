import React from 'react';
import {useContext} from 'react'
import AuthContext from '../Context/AuthProvider'
import {FaTrashAlt} from 'react-icons/fa'
import axios from '../Database/axios'
import context from 'react-bootstrap/esm/AccordionContext';


const Cart = () => {

const ORDERS_URL = '/orders/specific'
const Context = useContext(AuthContext)
var hash  = require('object-hash');



const handleCheck = (id) => {
  const listItems = Context.cart.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
  Context.setCart(listItems);
  localStorage.setItem('shoppinglist', JSON.stringify(listItems));
}

const handleDelete = (id) => {
  const listItems = Context.cart.filter((item) => item.id !== id);
  Context.setCart(listItems);
  localStorage.setItem('shoppinglist', JSON.stringify(listItems));
}

const handleAdd = (id) => {
    const Item2Add = Products.find(product => product.id === id)
    var newCart = []

    if(cartContains(Item2Add)){
      newCart = Context.cart.map((item) => item.id === id ? { ...item, Quantity: item.Quantity + Item2Add.Quantity } : item);
    }
    else{
    newCart = [...Context.cart, Item2Add]
    }
    Context.setCart(newCart)
    console.log(newCart)
    localStorage.setItem('shoppinglist', JSON.stringify(newCart));
}

const cartContains = (product) => { 

     return Context.cart.some(cartItem => cartItem.id === product.id)

}

const handleHash = () => {

    console.log(calculateTotal())
    /*
    console.log(JSON.stringify({
        'hash': hash(Context.cart),
        'cart': Context.cart
    }))
    */
}

const handleSubmit = (id) => {
    const Item2Add = Products.find(product => product.id === id)
    const newCart = [...Context.cart, Item2Add]
    Context.setCart(newCart)
    console.log(newCart)
    localStorage.setItem('shoppinglist', JSON.stringify(newCart));
}

const calculateTotal = () =>{
    var total = 0;
    Context.cart.map((item) => total += item.price * item.Quantity)
    return total
}
  
const Products = [

    {
        id: 32532,
        name: 'Dog',
        Quantity: 2,
        price: 2.30
    },

    {
        id: 5326,
        name: 'Apples',
        Quantity: 2,
        price: 4.00
    }
]

const testID = 5326;


    return (
        <main>
            {Context.cart.length ? (
                <ul>
                    {Context.cart.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                                onDoubleClick={() => handleCheck(item.id)}
                            >({item.id}) {item.name}</label>
                            <label>----Quantity{item.Quantity} </label>
                            <FaTrashAlt
                                onClick={() => handleDelete(item.id)}
                                role="button"
                                tabIndex="0"
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}

        <button onClick = {() => handleAdd(testID)}>Add Item</button>
        <button onClick = {() => handleHash()}>Hash Button :^)</button>
        </main>
    )
}


export default Cart;