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

    const [Product, setProduct] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [success, setSuccess] = useState(false);
    const [show, setShow] = useState(false);
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

      const cartContains = (product) => { 
        return Context.cart.some(cartItem => cartItem.id === product.id)
    }

      const handleAdd = (item,quantity) => {
        var Item2Add = item
        Item2Add.quantity = quantity
        console.log(Item2Add)
        var newCart = []
    
        if(cartContains(Item2Add)){
          newCart = Context.cart.map((item) => item.id === Item2Add.id ? { ...item, quantity:  parseInt(item.quantity) + parseInt(Item2Add.quantity) } : item);
        }
        else{
        newCart = [...Context.cart, Item2Add]
        }
        Context.setCart(newCart)
        localStorage.setItem('shoppinglist', JSON.stringify(newCart));
        setShow(true)
        
    }
  
    return(
        
    <main><body>
    <div className="container d-grid">
    <Alert key="success"variant="success" show = {show} style ={{'font-size': '24px'}}>
            Added Item to cart!
    </Alert>
    <h1> Product Information</h1>
        <div className="row">
            <div className="col-sm-6">
                <div className="p-3 border bg-light">
                 <img src= {IMAGE_PATH.concat(Product.image_path1)} alt="Missing Image"
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
                <select class="form-control" id="item_quantity" style={{ "font-size": "24px" }} onChange={e => setQuantity(e.target.value)}>
                    <option value = '1'>1</option>
                    <option value = '2'>2</option>
                    <option value = '3'>3</option>
                    <option value = '4'>4</option>
                    <option value = '5'>5</option>
                </select>
                </div>

            </div>
        </div>
        <div className="row my-custom-row justify-content-center align-items-center" style= {{"margintop": "50px"}}>
            <Button variant="success" size="lg" style={{'font-size': '36px'}} onClick= { e => handleAdd(Product,quantity)}>
                     Add To Cart
            </Button>
        </div>
    </div>
    </body>
    </main>
    )
};
export default ProductPage;