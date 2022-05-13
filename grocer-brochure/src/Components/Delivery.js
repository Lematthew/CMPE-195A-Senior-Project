import React from 'react';
import {useContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import AuthContext from '../Context/AuthProvider'
import axios from '../Database/axios';
import "./styles/Delivery.css";

const Delivery = () => {

    const ORDERS_URL = '/orders/driver';

    const Context   = useContext(AuthContext);
    const params = useParams();

    const [success, setSuccess] = useState(false);
    const [acceptedOrder, setAcceptedOrder] = useState({});
    const [fullName, setFullName] = useState('');
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [address, setAddress] = useState('');


    useEffect(() => {
        const run = async (e) => {

            const response = await axios.get(ORDERS_URL);

            if (response) {
                setAcceptedOrder(response.data[0]);

                if (response.data.length > 0) {
                    setFullName(response.data[0].full_name);
                    setProductName(response.data[0].name);
                    setQuantity(response.data[0].quantity);
                    setAddress(response.data[0].address);
                    setSuccess(true);
                }
            }
        }
        if(!success)
            run();
    }, [success])

    const renderDelivery = () => {
            return <div className='delivery-box'>
                <h1>Delivering For: {params.full_name}</h1>
                <h2>Obtain Item: {productName} x {quantity}</h2>
                <h2>Drive to: {acceptedOrder.address}</h2>
            </div>
    }

    return (
        <main>        
             {success ? (
                <div>
                    {renderDelivery()}
                </div>
                ) : (
                  <div>
                    <h1>Loading</h1>
                  </div>
                )} 
        </main>
    )
};

export default Delivery;