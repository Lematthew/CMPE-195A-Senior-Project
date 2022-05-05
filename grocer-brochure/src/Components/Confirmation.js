import React from 'react';
import "./styles/Confirmation.css";
import Card from 'react-bootstrap/Card';

const Confirmation = () => (
    
  <main style={{ padding: "1rem 0" }} className='confirmation-main'> 
  <div class= 'newCard'>
      <Card>
    <Card.Img variant="top" src="/deliveryPhoto.jpg"/>
    <Card.Body>
      <Card.Text>
        <strong>
        Thank you for your order. Your groceries will
        be delivered soon.

        ETA: 30 Min - 1 Hour
        
        </strong> 
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
  </main>
);
export default Confirmation;