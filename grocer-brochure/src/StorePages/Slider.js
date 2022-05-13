import React from 'react'
import {Carousel} from 'react-bootstrap'
const Slider = (Card) => {

    return (
        <>
         <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      class="d-block mx-auto"
      src="/Images/market.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      class="d-block mx-auto"
      src="/Images/fruitsimage.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/Images/foodpanimage.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>   
        </>
    )
}

export default Slider
