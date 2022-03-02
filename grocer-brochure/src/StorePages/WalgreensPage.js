import React from 'react';
import StoreCardsWalgreens from './StoreCardsWalgreens';
import WalgreensSlider from './WalgreensSlider'
const WalgreensPage = () => (
  <main style={{ padding: "1rem 0" }}>
  <h2>Welcome to Walgreens!</h2>
  <div>
    <WalgreensSlider/>
    <StoreCardsWalgreens/>

  </div>
</main>
);

export default WalgreensPage;