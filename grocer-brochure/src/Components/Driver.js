import React from 'react';
import {useContext, useState, useRef} from 'react'
import AuthContext from '../Context/AuthProvider'
import {FaTrashAlt} from 'react-icons/fa'
import axios from '../Database/axios'
import context from 'react-bootstrap/esm/AccordionContext';
import { faker } from '@faker-js/faker';
import "./styles/Driver.css";

const Driver = () => {

    const requests = [1, 2, 3, 4, 5]; 

    const renderRequest = () => {
        return (            
        <div className='driver-request'>
            <img />
            <h3>{faker.name.firstName()}</h3>
            <p>{faker.address.streetAddress()}</p>
            <a className='driver-confirm' href='/Driver/222'>Accept</a>
            <span className='driver-deny'>Deny</span>
        </div>
        );
      };

    return (
        <main className='driver-main'>
            {requests.map(request => {
                return (renderRequest())
            })}
        </main>
    )
};

export default Driver;