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

    const outgoingJSON = JSON.stringify({'merchant_id': Context.auth.id});

    useEffect(()=>{
        const run = async (e) => {
            console.log('admin run')
            try{
                console.log(outgoingJSON)
                const response = await axios.get(OUTGOING_URL, outgoingJSON);

                console.log(response.data);
            } catch (err) {
                console.log(err);
            }
        }
        run();
    }, [success])

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
            </div>
        </main>
    )
};

export default Admin;