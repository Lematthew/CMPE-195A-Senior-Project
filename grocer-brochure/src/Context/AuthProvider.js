import { createContext, useState } from "react";

const AuthContext = createContext({});

const defaultCart = [

    {
        id: 431,
        name: 'Dog',
        quantity: 2,
        price: 9.00,
        merchant_id:4002

    },

    {
        id: 67352,
        name: 'Cats',
        quantity: 4,
        price: 1.00,
        merchant_id:4002
        


    },

    { 
        id: 5323,
        name:'Motivation to work on senior project ',
        quantity: 100,
        price: 2.00,
        merchant_id:4002

    },

    { 
        id: 4251,
        name: 'Sandwhich',
        quantity: 50,
        price: 3.00,
        merchant_id:4002

    }
]

const defaultUser = {
    id: 900
}

const currentCart = JSON.parse(localStorage.getItem('shoppinglist'));
const currentUser = JSON.parse(localStorage.getItem('user'));
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({id: "", verified: false});
    const [cart, setCart] = useState(currentCart?.length ? currentCart : defaultCart);

    return (
        <AuthContext.Provider value={{ auth, setAuth, cart, setCart }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
