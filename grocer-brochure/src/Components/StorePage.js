import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { Card, Button} from 'react-bootstrap';
import AuthContext from '../Context/AuthProvider'
import axios from '../Database/axios';
import  './styles/StorePage.css'
import Slider from '../StorePages/Slider.js';
import Aos from 'aos';
import aos from 'aos';

function StorePage () {

  const navigate = useNavigate();
  const params = useParams();
  const PRODUCTS_URL = '/product/specific';
  const [Products, setProducts] = useState([]);
  const [success, setSuccess] = useState(false);
  const Context = useContext(AuthContext)

  const IMAGE_PATH = "/Images/"

  const changeRoute = (productId) => {
    navigate(`/StorePage/${params.id}/${productId}`, { });
  };

  useEffect(()=>{

    Aos.init({duration: 2000});
    const run = async (e) => {
      try {
        const productData = await axios.post(PRODUCTS_URL, JSON.stringify({
          'merchant_id': params.id
        }),
        {
          headers: {'Content-Type': 'application/json'}
        });
        setProducts(productData.data);
        if (Products !== '') { setSuccess(true)}
      } catch (e) { }
   }
    if(!success)
    run();
  }, [params.id, Products, success])

  const handleAdd = (id,quantity) => {
    var Item2Add = Products.find(product => product.id === id)

    Item2Add.quantity = quantity
    console.log(Item2Add)
    var newCart = []

    if(cartContains(Item2Add)){
      newCart = Context.cart.map((item) => item.id === id ?
         { ...item, quantity:  parseInt(item.quantity) + parseInt(Item2Add.quantity) } : item);
    }
    else{
      console.log(Item2Add)
    newCart = [...Context.cart, Item2Add]
    }
    Context.setCart(newCart)
    console.log(newCart)
    localStorage.setItem('shoppinglist', JSON.stringify(newCart));
}

const cartContains = (product) => { 
    return Context.cart.some(cartItem => cartItem.id === product.id)
}

  const renderCard = (product) => {
    product.quantity = 1;
    return (
      <div data-aos ="fade-up" className="card" key ={product.id} onClick={() => changeRoute(product.id)}>
        <div className="leftside-card">
          <div style = {{"justify-content:": "center"}}>
           <img src={IMAGE_PATH.concat(product.image_path1)} alt="MISSING IMAGE"/> 
           </div>
        </div>
        <div data-aos ="fade-up" className="rightside-card">

        <div data-aos ="fade-up" className="rightside-card-store">
          <div className="price-store">
            <p>${product.price}</p>
          </div>
          <div className="name-add-store">
            <h3>{product.name}</h3>
            <button onClick = {() => handleAdd(product.id,product.quantity)}>Add to Cart</button>
          </div>
          <div class="form-group">
          <label for="exampleFormControlSelect1">Amount</label>
          <select class="form-control" id="item_quantity" onChange={(e) => product.quantity = e.target.value}>
            <option value = '1'>1</option>
            <option value = '2'>2</option>
            <option value = '3'>3</option>
            <option value = '4'>4</option>
            <option value = '5'>5</option>
          </select>
        </div>
        </div>
      </div>
      </div>
    );
}

  const renderCard2 = () => {
    return(
     <Card style={{ width: '18rem' }} onClick={() => changeRoute("create")}>
        <Card.Img variant="top" src={IMAGE_PATH.concat("Default-Logo.png")} />
        <Card.Body>
          <Card.Title>Create New Product</Card.Title>
        </Card.Body>
      </Card>
    )
  }

  return (
      <main style={{ padding: "1rem 0" }}>
      <div>
      <Slider/>
        <> {success ? (
          <div className = "card-container">
            {Products.map((item) => renderCard(item))}
            {Context.auth.id == params.id ?  renderCard2(): console.log(params.id) }
        
          </div>
          ) : (
            <div>
              <h1>Loading</h1>
            </div>
          )} 
        </>
        </div>
      </main>
  );
          }
export default StorePage;