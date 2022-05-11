import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { Card, Button} from 'react-bootstrap';
import AuthContext from '../Context/AuthProvider'
import axios from '../Database/axios';
import  './styles/Admin.css'
import Aos from 'aos';

const Admin = () => {

    return (
        <main className='admin-main'>
            <div className='leftside-admin'>
                <span className='admin-profile'></span>
                <h1>Manage Products</h1>
                <h1>Edit Profile</h1>
                <h1>Edit Store Information</h1>
            </div>
            <div className='rightside-admin'>
                <h1>Incoming Orders</h1>
                <div className='order-box'></div>
                <h1>Outgoing Orders</h1>
                <div className='order-box'>
                    <div className='admin-outgoing'>
                        <h3>Matthew Le</h3>
                    </div>
                    <div className='admin-outgoing'></div>
                </div>
            </div>
        </main>
    )
};

export default Admin;