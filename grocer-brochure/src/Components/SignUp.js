import React from 'react';
import {useRef, useState,useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Context/AuthProvider'
import axios from '../Database/axios'
import './styles/SignUp.css'

const SIGNUP_URL = '/user/create'


const SignUp = () => {
  //#region Params
  const {setAuth} = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  //Singup Fields
  const [name,setName] = useState('');
  const [user,setUser] = useState('');
  const [pwd,setPwd] = useState('');
  const [address,setAdress] = useState('');
  const [city,setCity] = useState('');
  const [zipcode,setZipcode] = useState('');
  const [role,setRole] = useState('Customer');
  


  const [errMsg,setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  //#endregion
  //#region UseEffect
  useEffect(()=> {

    userRef.current.focus();

  },[])

  useEffect(()=> {
    setErrMsg('');
  },[user,pwd])
  //#endregion

  //TODO: Finish creating submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post(SIGNUP_URL, 
        JSON.stringify({
          'full_name': name,
          'email': user,
          'hashed_password': pwd,
          'address': address,
          'city': city,
          'zipcode': zipcode,
          'role': role
          }),
          {
            headers: {'Content-Type': 'application/json'},

          })


    if(response.data.verified){
      setSuccess(response);
      navigate('/Login')
    }
    else
      setErrMsg('Insufficient info')
    } catch(err){
        if(!err?.response){ setErrMsg('No Response from Server');  }
        else if(err.response?.status === 400){setErrMsg('Missing Username or password');}
        else if(err.Response?.status === 401){setErrMsg("Unauthorized")}
        else {setErrMsg('Login Failed') }
    }
  }


  return(
    <> {success ? (
        <section>
            <h1>You have signed up!</h1>
            <br />
            <p>
                <a href="/">Go to Home</a>
            </p>
        </section>
    ) : (
    <section class="signup-section">
      <p ref = {errRef} className={errMsg ? "errmsg" : "offscreen"} 
      aria-live ="assertive">{errMsg}</p>
      <div class="signup-component">
      <h1>Sign Up</h1>

      <form onSubmit = {handleSubmit} class="signup-form">
        <div class="signup-inputs">
        <input
          type = "text" 
          id= "name"
          placeholder="Full Name"
          ref = {userRef}
          autoComplete = "off"
          onChange = {(e) => setName(e.target.value)}
          // value = {user}
          required
        />
        <input
          type = "text" 
          id= "email" 
          placeholder="Email"
          ref = {userRef}
          autoComplete = "off"
          onChange = {(e) => setUser(e.target.value)}
          // value = {user}
          required
        />
        <input
          type = "password" 
          id= "password" 
          placeholder="Password"
          ref = {userRef}
          autoComplete = "off"
          onChange = {(e) => setPwd(e.target.value)}
          // value = {pwd}
          required
        />
        <input
          type = "text" 
          id= "username" 
          placeholder="City"
          ref = {userRef}
          autoComplete = "off"
          onChange = {(e) => setCity(e.target.value)}
          // value = {user}
          required
        />
        <input
          type = "text" 
          id= "zip" 
          placeholder="ZIP"
          ref = {userRef}
          autoComplete = "off"
          onChange = {(e) => setZipcode(e.target.value)}
          // value = {pwd}
          required
        />
        <input
          type = "text" 
          id= "address" 
          placeholder="Street Address"
          ref = {userRef}
          autoComplete = "off"
          onChange = {(e) => setAdress(e.target.value)}
          // value = {user}
          required
        />
      <select value = {role} name="roles" onChange={(e) => setRole(e.target.value)}>
        <option value="Customer">Customer</option>
        <option value="Driver">Driver</option>
        <option value="Merchant">Merchant</option>
      </select>

        </div>
        <button>Sign Up</button>
      </form>
      <div class="need-account">
        <p>Already have an account ? <br />
          <span className ="line">
            <a href='/login'>Login</a>
          </span>
        </p>
      </div>
      </div> 
    </section>
  )}
  </>
  )
}

export default SignUp;