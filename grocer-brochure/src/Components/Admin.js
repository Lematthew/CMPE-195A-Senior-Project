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
    const [GP, setGP] = useState({});

    useEffect(()=>{
        const run = async (e) => {
            try{
                const response = await axios.get(OUTGOING_URL, {
                    params: {
                        'merchant_id': Context.auth.id 
                    }
                });
                
                setOutgoingOrders(response.data)
                setSuccess(true)
                console.log(outgoingOrders);
            } catch (err) {
                console.log(err);
            }
        }
        run();
        if(success)
         filterOrders()

        console.log(`orders: ${outgoingOrders}`);
    }, [success])

    const filterOrders = () => {
        console.log(outgoingOrders);

        const groups = [...new Set(outgoingOrders.map(q => q.order_hash))];

        const groupProducts =
        groups.map( group => 
                outgoingOrders.filter(order => order.order_hash = group));

        setGP(groupProducts)
        console.log(GP);
    };

    const renderRequest = (request) => {

        if(request.length > 0)
        return (            
        <div className='admin-outgoing'>
            <h2>{request[0].full_name}</h2>
            <div>{request.map(product => renderProduct(product))}</div>
        </div>
        )
        else
             return
      }

      
    const renderProduct = (product) => {
        return (            
        <div>
            <p>{product.name}</p>
        </div>
        );
      };



    return (
        <main className='admin-main'>
             <> {GP.length > -1 ? (
            <><div className='leftside-admin'>
                    <h1>Manage Products</h1>
                    <h1>Edit Profile</h1>
                    <h1>Edit Store Information</h1>
                </div><div className='rightside-admin'>
                        <h1>Outgoing Orders</h1>
                        <div className='order-box'>
                        {GP.map(request => {
                            return (renderRequest(request))
                        })}
                        </div>
                    </div></>
             ) : (
                <div>
                <h1>Loading</h1>
              </div>

             )
            }
            </>  
        </main>
    )
};

export default Admin;