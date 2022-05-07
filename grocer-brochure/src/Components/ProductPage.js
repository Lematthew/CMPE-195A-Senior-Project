/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import "./styles/About.css";
import { Button, Alert } from 'react-bootstrap';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import AuthContext from '../Context/AuthProvider';
import axios from '../Database/axios';


const ProductPage = () => {

    const IMAGE_PATH = "/Images/"
    const ImageName = "costcoChicken.jpg"
    const path = "../Images/applefruit.png"
    const path2 = IMAGE_PATH.concat(ImageName)
    const params = useParams();

    const [Product, setProduct] = useState({"Nothing": true});
    const [success, setSuccess] = useState(false);
    const Context = useContext(AuthContext)

    const PRODUCTS_URL = "product/specificProduct"

    useEffect(()=>{

        const run = async (e) => {
          try {
            const productData = await axios.post(PRODUCTS_URL, JSON.stringify({
              'merchant_id': params.merchant_id,
              'id': params.id
            }),
            {
              headers: {'Content-Type': 'application/json'}
            });
            setProduct(productData.data[0]);
            if (Product !== '') { 
                setSuccess(true)

            }
          } catch (e) { }
       }
        if(!success)
        run();
      }, [params.id, Product, success, params.merchant_id])


  
    return(
        
    <main><body>
    <div className="container d-grid">
    <Alert key="success"variant="success" show = {false}>
            Added Item to cart!
    </Alert>
    <h1> Product Information</h1>
        <div className="row">
            <div className="col-sm-6">
                <div className="p-3 border bg-light">
                 <img src= {IMAGE_PATH.concat(Product.image_path)} alt="Missing Image"
                 style ={{
                     "width": 500,
                     "height":480,
                     "flex": 1
                 }} ></img>
                </div>
            </div>
            <div className="col-sm-6 d-grid gap-" style={{ "font-size": "40px" }}>
                <p>Product Name: {Product.name} </p>
                <p>Price: ${Product.price}</p> 
                <p>Description: </p>
                <div className="p-3 border bg-light">
                     <p style={{"font-size":"24px"}}>{Product.description}</p>
                </div>
                <div class="form-group">
                <label for="exampleFormControlSelect1">Amount</label>
                <select class="form-control" id="item_quantity" style={{ "font-size": "24px" }}>
                    <option value = '1'>1</option>
                    <option value = '2'>2</option>
                    <option value = '3'>3</option>
                    <option value = '4'>4</option>
                    <option value = '5'>5</option>
                </select>
                </div>

            </div>
        </div>

        <div className="row my-custom-row justify-content-center align-items-center" style= {{"margin-top": "50px"}}>

            <Button variant="success" size="lg" onClick={console.log(params.merchant_id)}>
                     Add To Cart
            </Button>
        </div>
    </div>
    </body>
    </main>
    )
};
export default ProductPage;