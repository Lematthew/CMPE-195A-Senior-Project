import React from 'react';
import {useContext} from 'react'
import AuthContext from '../Context/AuthProvider'
import {FaTrashAlt} from 'react-icons/fa'
import axios from '../Database/axios'
import context from 'react-bootstrap/esm/AccordionContext';


const Cart = () => {

const ORDERS_URL = '/orders/specific'
const Context = useContext(AuthContext)

console.log(Context.cart)


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
    const newCart = [...Context.cart, Item2Add]
    Context.setCart(newCart)
    console.log(newCart)
    localStorage.setItem('shoppinglist', JSON.stringify(newCart));
}
  
const Products = [

    {
        id: 1,
        item: 'Dog',
        Quantity: 2,
        checked: false
    },

    {
        id: 5,
        item: 'New Item',
        Quantity: 2,
        checked: false
    }
]

const testID = 5;


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
                            >{item.item}</label>
                            <label>----- {item.Quantity}</label>
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
        </main>
    )
}


export default Cart;