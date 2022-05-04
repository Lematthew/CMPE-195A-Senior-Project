import React, { useContext } from 'react';
import AuthContext from '../Context/AuthProvider'
import "./styles/About.css";

const About = () => {

    const Context  = useContext(AuthContext)

  
    return(
  <main style={{ padding: "1rem 0" }} className='about-main'> 
    <pre>

      <p>ID:{Context.auth.id}</p>
      <p>role: {Context.auth.role}</p>
      <p>verified: {String(Context.auth.verified)}</p>
    </pre>
  </main>
    )
};
export default About;