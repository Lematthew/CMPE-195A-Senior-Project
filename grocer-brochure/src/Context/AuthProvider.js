import { createContext, useState } from "react";

const AuthContext = createContext({});

const defaultCart = [

    {
        id: 1,
        item: 'Dog',
        Quantity: 2,
        checked: false
    },

    {
        id: 2,
        item: 'Cats',
        Quantity: 4,
        checked: false
    },

    { 
        id: 3,
        item:'Motivation to work on senior project ',
        Quantity: 100,
        checked: false
    },

    { 
        id: 4,
        item: 'Sandwhich',
        Quantity: 50,
        checked: false
    }
]

const currentCart = JSON.parse(localStorage.getItem('shoppinglist'));

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [cart, setCart] = useState(currentCart?.length ? currentCart : defaultCart);

    return (
        <AuthContext.Provider value={{ auth, setAuth, cart, setCart }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
