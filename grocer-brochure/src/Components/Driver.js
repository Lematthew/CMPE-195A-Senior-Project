import React from 'react';
import {useContext, useState, useRef, useEffect} from 'react'
import AuthContext from '../Context/AuthProvider'
import axios from '../Database/axios'
import "./styles/Driver.css";
import { Button } from 'react-bootstrap';
import context from 'react-bootstrap/esm/AccordionContext';

const Driver = () => { 

    const ORDERS_URL = '/orders/all';
    const ORDERS_INCOMPLETE_URL = '/orders/incomplete';
    const ORDERS_OUTGOING_URL = '/orders/update';

    const Context   = useContext(AuthContext);

    const errRef                = useRef();
    const [success, setSuccess] = useState(false);

    useEffect(()=>{
        const run = async (e) => {

                try{
                    const response = await axios.get(ORDERS_INCOMPLETE_URL)
            
                    if(response) {
                        Context.setOrders(response.data);
                        localStorage.setItem('orders', JSON.stringify(response.data));
                        setSuccess(true)
                        
                        Context.deniedOrders = true;
                        localStorage.setItem('deniedOrders', JSON.stringify({deny: true}))
                    }
                } catch (err) {
                    console.log(err);
                }
            
        }
   
        if(!success)
        run();
    }, [success])

    const handleDelete = (e,request) => {
        let requests = Context.orders;
        requests.splice(requests.indexOf(request), 1);
        localStorage.setItem('orders', JSON.stringify(requests));
        window.location.reload(false)
    }

    const handleAccept = (request) => {

        const run = async (e) => {
            try{
                const response = await axios.put(ORDERS_OUTGOING_URL, JSON.stringify({
                    'order_hash': request.order_hash,
                    'status': 'OUTGOING',
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
        <div className='driver-request' key = {request.order_hash}>
            <div className='driver-img'><img /></div>
            <div className='driver-h3'><h3 >{request.full_name}</h3></div>
            <div className='driver-p'><p>{request.address}</p></div>
            <div className='driver-button'><a className='driver-confirm' onClick={() => handleAccept(request)} href='/Driver/222'>Accept</a></div>
            <div className='driver-button'><span onClick={() => handleDelete(request)} className='driver-deny'>Deny</span></div>
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