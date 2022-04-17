import React from 'react';
import {useContext, useState, useRef} from 'react'
import AuthContext from '../Context/AuthProvider'
import {FaTrashAlt} from 'react-icons/fa'
import axios from '../Database/axios'
import context from 'react-bootstrap/esm/AccordionContext';
import "./styles/Delivery.css";

const Delivery = () => {
    return (
        <main>
            <div className='directions-box'>
                <p className='direction-miles'>0.7 miles</p>
                <p>East Santa Clara Street</p>
            </div>
        </main>
    )
};

export default Delivery;