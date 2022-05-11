import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import {useContext, useState, useRef} from 'react'
import AuthContext from '../Context/AuthProvider'
import {FaTrashAlt} from 'react-icons/fa'
import axios from '../Database/axios'
import context from 'react-bootstrap/esm/AccordionContext';
import "./styles/Delivery.css";
import { Card } from 'react-bootstrap';

const Delivery = () => {
    return (
        <main>
            <div className='directions-box'>
                <p className='direction-miles'>0.7 miles</p>
                <ProgressBar animated now={45} />
                <Card>
                <Card.Img variant="top" src="/Maps.jpg"/>
                </Card>

                <strong>East Santa Clara Street</strong>
            </div>
        </main>
    )
};

export default Delivery;