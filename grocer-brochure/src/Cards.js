import React from "react";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";

const Cards = () => {
    const cardInfo = [
        {
            image: "./costcoLogo.png",
            title: "Costco",
            text: "Shop Costco",
        },
        {
            image: "./safewayLogo.png",
            title: "Safeway",
            text: "Shop Safeway",
        }
        
        
    ];
    const renderCard = (card, index) => {
        return (
     
          <ReactBootStrap.Card style={{ width: "18rem" }} key={index} >
            <ReactBootStrap.Card.Img variant="top" src="holder.js/100px180" src={card.image} />
            <ReactBootStrap.Card.Body>
              <ReactBootStrap.Card.Title>{card.title}</ReactBootStrap.Card.Title>
              <ReactBootStrap.Card.Text>{card.text}</ReactBootStrap.Card.Text>
              <ReactBootStrap.Button variant="primary">Go somewhere</ReactBootStrap.Button>
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

export default Cards