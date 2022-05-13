import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { Card, Button} from 'react-bootstrap';
import AuthContext from '../Context/AuthProvider'
import axios from '../Database/axios';
import  './styles/Admin.css'
import Aos from 'aos';

const Admin = () => {

    const IMAGE_PATH = "/Images/"

    const OUTGOING_URL = '/orders/outgoing';

    const Context   = useContext(AuthContext);
    const [success, setSuccess] = useState(false);
    const [outgoingOrders, setOutgoingOrders] = useState({});

    useEffect(()=>{
        const run = async (e) => {
            try{
                const response = await axios.get(OUTGOING_URL, {
                    params: {
                        'merchant_id': Context.auth.id 
                    }
                });
                
                setOutgoingOrders(response.data)

                console.log(outgoingOrders);
            } catch (err) {
                console.log(err);
            }
        }
        run();
        console.log(`orders: ${outgoingOrders}`);
    }, [success])

    const handleThing = () => {
        console.log(outgoingOrders);

        const groups = [...new Set(outgoingOrders.map(q => q.order_hash))];

        const groupProducts =
        groups.map( group => 
                outgoingOrders.filter(order => order.order_hash = group));

        console.log(groupProducts);
    };

    return (
        <main className='admin-main'>
            <div className='leftside-admin'>
                <img src= {IMAGE_PATH.concat('/safeWayLogo.png')} alt="Error Missing Image"/>
                <h1>Manage Products</h1>
                <h1>Edit Profile</h1>
                <h1>Edit Store Information</h1>
            </div>
            <div className='rightside-admin'>
                <h1>Incoming Orders</h1>
                <div className='order-box'>
                </div>
                <h1>Outgoing Orders</h1>
                <div className='order-box'>
                    <div className='admin-outgoing'>
                        <h3>Johnathan Smith</h3>
                    </div>
                </div>
                <button onClick={() => handleThing()}>Do thing</button>
            </div>
        </main>
    )
};

export default Admin;