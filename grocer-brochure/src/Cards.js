import React from "react";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import CostcoPage from "./StorePages/CostcoPage";
import SafewayPage from "./StorePages/SafewayPage";
import WalgreensPage from "./StorePages/WalgreensPage";

const Cards = () => {
    const cardInfo = [
        {
            image: "./costcoLogo.png",
            title: "Costco",
            text: "Shop Costco",
            pageLink: "CostcoPage"
        },
        {
            image: "./safewayLogo.png",
            title: "Safeway",
            text: "Shop Safeway",
            pageLink: "SafewayPage"
        },
        {
          image: "./cvs.jpg",
          title: "CVS",
          text: "Shop CVS",
          pageLink: "CvsPage"
      }, 
      {
        image: "./walgreens-logo.jpg",
        title: "Walgreens",
        text: "Shop Walgreens",
        pageLink: "WalgreensPage"
      },
      {
        image: "./costcoLogo.png",
        title: "Costco",
        text: "Shop Costco",
        pageLink: "CostcoPage"
    },
    {
        image: "./safewayLogo.png",
        title: "Safeway",
        text: "Shop Safeway",
        pageLink: "SafewayPage"
    },
    {
      image: "./cvs.jpg",
      title: "CVS",
      text: "Shop CVS",
      pageLink: "CvsPage"
  }, 
  {
    image: "./walgreens-logo.jpg",
    title: "Walgreens",
    text: "Shop Walgreens",
    pageLink: "WalgreensPage"
  },
  {
    image: "./costcoLogo.png",
    title: "Costco",
    text: "Shop Costco",
    pageLink: "CostcoPage"
},
{
    image: "./safewayLogo.png",
    title: "Safeway",
    text: "Shop Safeway",
    pageLink: "SafewayPage"
},
{
  image: "./cvs.jpg",
  title: "CVS",
  text: "Shop CVS",
  pageLink: "CvsPage"
}, 
{
image: "./walgreens-logo.jpg",
title: "Walgreens",
text: "Shop Walgreens",
pageLink: "WalgreensPage"
},
{
  image: "./costcoLogo.png",
  title: "Costco",
  text: "Shop Costco",
  pageLink: "CostcoPage"
},
{
  image: "./safewayLogo.png",
  title: "Safeway",
  text: "Shop Safeway",
  pageLink: "SafewayPage"
},
{
image: "./cvs.jpg",
title: "CVS",
text: "Shop CVS",
pageLink: "CvsPage"
}, 
{
image: "./walgreens-logo.jpg",
title: "Walgreens",
text: "Shop Walgreens",
pageLink: "WalgreensPage"
},
{
  image: "./costcoLogo.png",
  title: "Costco",
  text: "Shop Costco",
  pageLink: "CostcoPage"
},
{
  image: "./safewayLogo.png",
  title: "Safeway",
  text: "Shop Safeway",
  pageLink: "SafewayPage"
},
{
image: "./cvs.jpg",
title: "CVS",
text: "Shop CVS",
pageLink: "CvsPage"
}, 
{
image: "./walgreens-logo.jpg",
title: "Walgreens",
text: "Shop Walgreens",
pageLink: "WalgreensPage"
},
{
  image: "./costcoLogo.png",
  title: "Costco",
  text: "Shop Costco",
  pageLink: "CostcoPage"
},
{
  image: "./safewayLogo.png",
  title: "Safeway",
  text: "Shop Safeway",
  pageLink: "SafewayPage"
},
{
image: "./cvs.jpg",
title: "CVS",
text: "Shop CVS",
pageLink: "CvsPage"
}, 
{
image: "./walgreens-logo.jpg",
title: "Walgreens",
text: "Shop Walgreens",
pageLink: "WalgreensPage"
},

        
        
    ];
    const renderCard = (card, index) => {
        return (
     
          <ReactBootStrap.Card style={{ width: "18rem" }} key={index} >
            <ReactBootStrap.Card.Img variant="top" src={card.image} />
            <ReactBootStrap.Card.Body>
              <ReactBootStrap.Card.Title>{card.title}</ReactBootStrap.Card.Title>
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

export default Cards