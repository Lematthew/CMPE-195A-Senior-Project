import React from 'react';
import {useRef, useState,useEffect,useContext} from 'react'
import AuthContext from '../Context/AuthProvider'
import axios from '../Database/axios'
import  './styles/Login.css'

const Login = () => {

  const LOGIN_URL = '/user/specific'

  const {setAuth} = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  

  const [user,setUser] = useState('');
  const[pwd,setPwd] = useState('');
  const [errMsg,setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(()=> {

    userRef.current.focus();

  },[])

  useEffect(()=> {
;
    setErrMsg('');

  },[user,pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post(LOGIN_URL, 
        JSON.stringify({
          'email': user,
          'hashed_password': pwd
          }),
          {
            headers: {'Content-Type': 'application/json'},

          })
    console.log(JSON.stringify(response?.data));
    setAuth({user,pwd});
    setUser('');
    setPwd('');
    setSuccess(true);
    } catch(err){
        if(!err?.response){
          setErrMsg('No Response from Server');
        }
        else if(err.response?.status === 400){
          setErrMsg('Missing Username or password');
        }
        else if(err.Response?.status === 401){
          setErrMsg("Unauthorized")
        }
        else {
          setErrMsg('Login Failed')
        }

    }
  }


  return(
    <> {success ? (
        <section>
            <h1>You are logged in!</h1>
            <br />
            <p>
                <a href="/">Go to Home</a>
            </p>
        </section>
    ) : (
    <section class="login-section">
      <p ref = {errRef} className={errMsg ? "errmsg" : "offscreen"} 
      aria-live ="assertive">{errMsg}</p>
      <div class="login-component">
      <h1>Login In</h1>

      <form onSubmit = {handleSubmit} class="login-form">
        <input
          type = "text" 
          id= "username"
          placeholder="Username" 
          ref = {userRef}
          autoComplete = "off"
          onChange = {(e) => setUser(e.target.value)}
          value = {user}
          required
        />
        <input
          type = "password" 
          id= "password" 
          placeholder="Password"
          ref = {userRef}
          autoComplete = "off"
          onChange = {(e) => setPwd(e.target.value)}
          value = {pwd}
          required
        />

        <button>Log In</button>
      </form>
      <div class="need-account">
        <p>Need an Account? <br />
        </p>
        <span className ="line">
        <a href='/Signup'>Sign Up</a>
        </span>
      </div>
      </div>
    </section>

  )}
  </>
  )
}

export default Login;