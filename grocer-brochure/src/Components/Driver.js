import React from 'react';
import {useContext, useState, useRef} from 'react'
import AuthContext from '../Context/AuthProvider'
import {FaTrashAlt} from 'react-icons/fa'
import axios from '../Database/axios'
import context from 'react-bootstrap/esm/AccordionContext';
import "./styles/Driver.css";

const Driver = () => {

    const render = (status: Status) => {
        return <h1>{status}</h1>;
      };

    return (
        <main className='driver-main'>
            <div className='driver-request'>
                <img />
                <h3>USER_NAME</h3>
                <p>ADDRESS</p>
                <a className='driver-confirm' href='/Driver/222'>Accept</a>
                <span className='driver-deny'>Deny</span>
            </div>
        </main>
    )
};

export default Driver;