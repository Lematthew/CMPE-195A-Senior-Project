import React from 'react';
import {useContext, useState, useRef, useEffect} from 'react'
import AuthContext from '../Context/AuthProvider'
import {FaTrashAlt} from 'react-icons/fa'
import axios from '../Database/axios'
import context from 'react-bootstrap/esm/AccordionContext';
import { faker } from '@faker-js/faker';
import "./styles/Driver.css";

const Driver = () => { 

    const ORDERS_URL = '/orders/all';
    const ORDERS_INCOMPLETE_URL = '/orders/incomplete';
    const ORDERS_OUTGOING_URL = '/orders/update';

    const Context   = useContext(AuthContext);

    const errRef                = useRef();
    const [success, setSuccess] = useState(false);

    useEffect(()=>{
        const run = async (e) => {

            if (Context.deniedOrders.deny) {
            try{
                const response = await axios.get(ORDERS_INCOMPLETE_URL)
        
                if(response) {
                    localStorage.setItem('orders', JSON.stringify(response.data));
                    console.log(response.data);
                    setSuccess(true)

                    let denyOrder = Context.deniedOrders;
                    denyOrder.deny = true;

                    localStorage.setItem('deniedOrders', JSON.stringify(denyOrder))
                }
            } catch (err) {
                console.log(err);
            }
        }
        run();
        }
    }, [success])

    const handleDelete = (request) => {
        let requests = Context.orders;
        requests.splice(requests.indexOf(request), 1);
        localStorage.setItem('orders', JSON.stringify(requests));
        window.location.reload(false);
    }

    const handleAccept = (request) => {

        const run = async (e) => {
            try{
                const response = await axios.put(ORDERS_OUTGOING_URL, JSON.stringify({
                    'order_hash': request.order_hash,
                    'status': 'INCOMPLETE',
                    'merchant_id': request.merchant_id
                }), 
                {
                    'headers': {
                        'Content-Type': 'application/json'
                    }
                });
        
                if(response) {
                    console.log(response);
                }
            } catch (err) {
                console.log(err);
            }
        }
        run();
    }

    const renderRequest = (request) => {
        return (            
        <div className='driver-request'>
            <img />
            <h3>{request.full_name}</h3>
            <p>{request.address}</p>
            <a className='driver-confirm' onClick={() => handleAccept(request)} href='/Driver/222'>Accept</a>
            <span onClick={() => handleDelete(request)} className='driver-deny'>Deny</span>
        </div>
        );
      };

    return (
        <main className='driver-main'>
            {Context.orders.map(request => {
                return (renderRequest(request))
            })}
        </main>
    )
};

export default Driver;