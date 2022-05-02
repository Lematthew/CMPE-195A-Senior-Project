import React from 'react';
import "./styles/About.css";

const ProductPage = () => {


  
    return(
  <main style={{ padding: "1rem 0" }} className='about-main'> 
  <div className='container'></div>
        <div className="row">
            <div class="col-sm-12 col-md-6 col-lg-2">Col One</div>
            <div class="col-sm-12 col-md-6 col-lg-8">Col Two</div>
        </div>

        <div className="row">
            <div class="col-sm-6 order-sm-2">Col One</div>
            <div class="col-sm-6 order-sm-1">Col Two</div>
        </div>

        <div className="row">
            <div class="col-sm-4 offset-2">Col One</div>
            <div class="col-sm-4 offset-1">Col Two</div>
        </div>
  </main>
    )
};
export default ProductPage;