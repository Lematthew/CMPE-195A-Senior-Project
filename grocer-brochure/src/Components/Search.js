import React, { useContext } from 'react';
import AuthContext from '../Context/AuthProvider'
import "./styles/About.css";
import data from './data';



const Search = () => {

    
          
  
  
    return(
  <main style={{ padding: "1rem 0" }} className='about-main'> 
    

      <p>Search Result

      <div class="card">
          <div class="leftside-card">
            <img src= {'costcoLogo.png'} alt="Error Missing Image"/>
          </div>
          <div class="rightside-card">
            <p>Costco</p>
            <span class="rating">
              <p class="rating-number">4.7</p>
            </span>
          </div>
        </div>
    





      </p>
    

    
 
      



    
  </main>
  
  
    )
  

  
};
export default Search;