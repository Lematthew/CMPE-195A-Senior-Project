import React from 'react';
import { useParams } from 'react-router-dom';

const StorePage = () =>{ 
  
  const id = useParams();
  
  
  return (
  <main style={{ padding: "1rem 0" }}>
  <h2>This is a Store Page! </h2>
  </main>
  );
}
export default StorePage;