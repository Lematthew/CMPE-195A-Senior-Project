import React from 'react';
import "./styles/Confirmation.css";
import ProgressBar from 'react-bootstrap/ProgressBar'

const Confirmation = () => (
  <main style={{ padding: "1rem 0" }} className='confirmation-main'> 
  <div class= 'newCard'>

  
  <div class="container">
  <div class="row">
    <div class= "row">
    <img src="/deliveryPhoto.jpg"  style ={{
                         "width": 500,
                         "height":750,
                         "flex": 1
                     }}></img>
    </div>
    <div class= "row">
      <strong ><p style={{'font-size': '50px'}}> 
        Thank you for your order. Your groceries will
        be delivered soon.

        ETA: 30 Min - 1 Hour
        </p>  
        </strong>
        <ProgressBar animated now={30} />
    </div>
    </div>
  </div>
  </div>
  </main>
);
export default Confirmation;