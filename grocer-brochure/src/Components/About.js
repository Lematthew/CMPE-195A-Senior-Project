import React from 'react';
import "./styles/About.css";

const About = () => {


  
    return(
  <main style={{ padding: "1rem 0" }} className='about-main'> 
    <h2>This is A Senior Project For SJSU </h2>
    <p>By Vishnu Adda, Matthew Le, Alexis Chan</p>

    <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  </main>
    )
};
export default About;