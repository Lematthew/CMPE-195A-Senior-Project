import { createContext, useState } from "react";
import { faker } from '@faker-js/faker';

const AuthContext = createContext({});

const defaultCart = [

    // {
    //     id: 431,
    //     name: 'Dog',
    //     quantity: 2,
    //     price: 9.00,
    //     merchant_id:4002

    // },

    // {
    //     id: 67352,
    //     name: 'Cats',
    //     quantity: 4,
    //     price: 1.00,
    //     merchant_id:4002
        


    // },

    // { 
    //     id: 5323,
    //     name:'Motivation to work on senior project ',
    //     quantity: 100,
    //     price: 2.00,
    //     merchant_id:4002

    // },

    // { 
    //     id: 4251,
    //     name: 'Sandwhich',
    //     quantity: 50,
    //     price: 3.00,
    //     merchant_id:4002

    // }
]

const defaultOrders = [
];

const currentCart = JSON.parse(localStorage.getItem('shoppinglist'));
const currentUser = JSON.parse(localStorage.getItem('user'));
const currentOrders = JSON.parse(localStorage.getItem('orders'));
const currentDelivery = JSON.parse(localStorage.getItem('selecteduser'));
const currentDeniedOrders = JSON.parse(localStorage.getItem('deniedorders'));


export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(currentUser?.id != null ? currentUser : {'verified': false});
    const [cart, setCart] = useState(currentCart?.length ? currentCart : defaultCart);
    const [orders, setOrders] = useState(currentOrders?.length ? currentOrders : defaultOrders);
    const [delivery, setDelivery] = useState(currentDelivery?.length ? currentDelivery : {'delivering': false});
    const [deniedOrders, setDeniedOrders] = useState(currentDeniedOrders ? {'deny': false}: {'deny': false});

    return (
        <AuthContext.Provider value={{ auth, setAuth, cart, setCart, orders, setOrders, delivery, setDelivery, deniedOrders, setDeniedOrders }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
