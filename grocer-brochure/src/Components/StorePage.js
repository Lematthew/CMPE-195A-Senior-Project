import React from 'react';
import { useParams } from 'react-router-dom';

const StorePage = () =>{ 
  const params = useParams()

  return (
  <main style={{ padding: "1rem 0" }}>
  <h2>This is a Store Page!</h2>

  <label>{params.id}</label>
  </main>
  );
}
export default StorePage;