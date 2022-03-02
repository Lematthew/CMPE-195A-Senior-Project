import React from "react";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import CostcoPage from "./CostcoPage";


const StoreCardsWalgreens = () => {
    const cardInfo = [
        {
            image: "../Images/bananaPicture.jpg",
            title: "Banana",
            price: "$1.49",
            text: "Add To Card",
            pageLink: "CostcoPage"
        },
        {
            image: "../Images/costcoChicken.jpg",
            title: "Chicken",
            price: "$7.99",
            text: "Add To Card",
            pageLink: "CostcoPage"
        },
        {
          image: "../Images/applefruit.png",
          title: "Apple",
          price: "$0.99",
          text: "Add To Card",
          pageLink: "CostcoPage"
        },
        {
          image: "../Images/applefruit.png",
          title: "Apple",
          price: "$0.99",
          text: "Add To Card",
          pageLink: "CostcoPage"
        },
        {
          image: "../Images/applefruit.png",
          title: "Apple",
          price: "$0.99",
          text: "Add To Card",
          pageLink: "CostcoPage"
        },
        {
          image: "../Images/applefruit.png",
          title: "Apple",
          price: "$0.99",
          text: "Add To Card",
          pageLink: "CostcoPage"
        },
        {
          image: "../Images/applefruit.png",
          title: "Apple",
          price: "$0.99",
          text: "Add To Card",
          pageLink: "CostcoPage"
        },
        {
          image: "../Images/applefruit.png",
          title: "Apple",
          price: "$0.99",
          text: "Add To Card",
          pageLink: "CostcoPage"
        },
        {
          image: "../Images/applefruit.png",
          title: "Apple",
          price: "$0.99",
          text: "Add To Card",
          pageLink: "CostcoPage"
        },
        {
          image: "../Images/applefruit.png",
          title: "Apple",
          price: "$0.99",
          text: "Add To Card",
          pageLink: "CostcoPage"
        },
        {
          image: "../Images/applefruit.png",
          title: "Apple",
          price: "$0.99",
          text: "Add To Card",
          pageLink: "CostcoPage"
        },
        {
          image: "../Images/applefruit.png",
          title: "Apple",
          price: "$0.99",
          text: "Add To Card",
          pageLink: "CostcoPage"
        },
        {
          image: "../Images/applefruit.png",
          title: "Apple",
          price: "$0.99",
          text: "Add To Card",
          pageLink: "CostcoPage"
        },
        {
          image: "../Images/applefruit.png",
          title: "Apple",
          price: "$0.99",
          text: "Add To Card",
          pageLink: "CostcoPage"
        },
        {
          image: "../Images/applefruit.png",
          title: "Apple",
          price: "$0.99",
          text: "Add To Card",
          pageLink: "CostcoPage"
        },
        {
          image: "../Images/applefruit.png",
          title: "Apple",
          price: "$0.99",
          text: "Add To Card",
          pageLink: "CostcoPage"
        },
        {
          image: "../Images/applefruit.png",
          title: "Apple",
          price: "$0.99",
          text: "Add To Card",
          pageLink: "CostcoPage"
        },
        {
          image: "../Images/applefruit.png",
          title: "Apple",
          price: "$0.99",
          text: "Add To Card",
          pageLink: "CostcoPage"
        },
        {
          image: "../Images/applefruit.png",
          title: "Apple",
          price: "$0.99",
          text: "Add To Card",
          pageLink: "CostcoPage"
        },
        {
          image: "../Images/applefruit.png",
          title: "Apple",
          price: "$0.99",
          text: "Add To Card",
          pageLink: "CostcoPage"
        },
        {
          image: "../Images/applefruit.png",
          title: "Apple",
          price: "$0.99",
          text: "Add To Card",
          pageLink: "CostcoPage"
        },
        {
          image: "../Images/applefruit.png",
          title: "Apple",
          price: "$0.99",
          text: "Add To Card",
          pageLink: "CostcoPage"
        },
        {
          image: "../Images/applefruit.png",
          title: "Apple",
          price: "$0.99",
          text: "Add To Card",
          pageLink: "CostcoPage"
        },
        {
          image: "../Images/applefruit.png",
          title: "Apple",
          price: "$0.99",
          text: "Add To Card",
          pageLink: "CostcoPage"
        },
        {
          image: "../Images/applefruit.png",
          title: "Apple",
          price: "$0.99",
          text: "Add To Card",
          pageLink: "CostcoPage"
        }

        
        
    ];
    const renderCard = (card, index) => {
        return (
     
          <ReactBootStrap.Card style={{ width: "18rem" }} key={index} >
            <ReactBootStrap.Card.Img variant="top" src={card.image} />
            <ReactBootStrap.Card.Body>
              <ReactBootStrap.Card.Title>{card.title}</ReactBootStrap.Card.Title>
              <ReactBootStrap.Card.Title>{card.price}</ReactBootStrap.Card.Title>
              <ReactBootStrap.Button variant="primary" href = {card.pageLink}>{card.text}</ReactBootStrap.Button>
            </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>
          
        );
      };

      return (
        
      <div className = "App">
        <Row xs={1} md={3} className="g-4">
          {cardInfo.map(renderCard)}
          </Row>
          </div>
      );



    
};

export default StoreCardsWalgreens