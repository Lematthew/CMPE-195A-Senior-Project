import React from 'react';
import './styles/SignUp.css'

const SignUp = () => (
<section class="signup-section">
      <div class="signup-component">
      <h1>Sign Up</h1>

      <form class="signup-form">
        <input
          type = "text" 
          id= "username"
          placeholder="Username"
          autoComplete = "off"
          required
        />
        <input
          type = "password" 
          id= "password" 
          placeholder="Password"
          autoComplete = "off"
          required
        />

        <button>Sign Up</button>
      </form>
      </div>
    </section>
);

export default SignUp;