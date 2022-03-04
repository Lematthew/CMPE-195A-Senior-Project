import React from "react";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import "./Cards.css";

const Cards = () => {
    const navigate = useNavigate();
    const changeRoute = (store) => {
      navigate(`/StorePage/${store}`, {
        title: store
      });
    };
    const cardInfo = [
        {
            image: "./costcoLogo.png",
            title: "Costco",
            text: "Shop Costco for groceries, tech, and much more!",
            rating: 4.7
        },
        {
            image: "./safewayLogo.png",
            title: "Safeway",
            text: "Shop Safeway for groceries and fresh pastries",
            rating: 4.7
        },
        {
            image: "./safewayLogo.png",
            title: "Safeway",
            text: "Shop Safeway for groceries and fresh pastries",
            rating: 4.7
        },
        {
            image: "./safewayLogo.png",
            title: "Safeway",
            text: "Shop Safeway for groceries and fresh pastries",
            rating: 4.7
        },
        {
            image: "./safewayLogo.png",
            title: "Safeway",
            text: "Shop Safeway for groceries and fresh pastries",
            rating: 4.7
        },
        {
            image: "./safewayLogo.png",
            title: "Safeway",
            text: "Shop Safeway for groceries and fresh pastries",
            rating: 4.7
        },
        {
            image: "./safewayLogo.png",
            title: "Safeway",
            text: "Shop Safeway for groceries and fresh pastries",
            rating: 4.7
        },
        {
            image: "./safewayLogo.png",
            title: "Safeway",
            text: "Shop Safeway for groceries and fresh pastries",
            rating: 4.7
        }
        
        
        
    ];
    const renderCard = (card, index) => {
        return (
          <div class="card" onClick={() => changeRoute(card.title)}>
            <div class="leftside-card">
              <img src={card.image} alt={card.title}/>
            </div>
            <div class="rightside-card">
              <p>{card.text}</p>
              <span class="rating">
                <p class="rating-number">{card.rating}</p>
              </span>
            </div>
          </div>
          
        );
      };
      return (
        
        <div className = "card-container">
          {cardInfo.map(renderCard)}
        </div>
      );
};

export default Cards