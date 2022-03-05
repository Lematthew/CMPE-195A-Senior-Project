import React from 'react';
import StoreCardsSafeway from './StoreCardsSafeway';
import slider from './Slider';
import Slider from './Slider';

const SafewayPage = () => (
  <main style={{ padding: "1rem 0" }}>
  <h2>Welcome to safeway!</h2>
  <div>
    <Slider/>
    <StoreCardsSafeway/> 
  </div>
</main>
);

export default SafewayPage;