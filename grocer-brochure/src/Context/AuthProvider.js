import { createContext, useState } from "react";

const AuthContext = createContext({});

const defaultCart = [

    {
        id: 431,
        name: 'Dog',
        Quantity: 2,
        price: 9.00


    },

    {
        id: 67352,
        name: 'Cats',
        Quantity: 4,
        price: 1.00


    },

    { 
        id: 5323,
        name:'Motivation to work on senior project ',
        Quantity: 100,
        price: 2.00

    },

    { 
        id: 4251,
        name: 'Sandwhich',
        Quantity: 50,
        price: 3.00

    }
]

const currentCart = JSON.parse(localStorage.getItem('shoppinglist'));

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({'verified': false});
    const [cart, setCart] = useState(currentCart?.length ? currentCart : defaultCart);

    return (
        <AuthContext.Provider value={{ auth, setAuth, cart, setCart }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
