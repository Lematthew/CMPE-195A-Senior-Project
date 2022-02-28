import React from 'react';
import {useRef, useState,useEffect,useContext} from 'react'
import AuthContext from '../Context/AuthProvider'
import axios from '../Database/axios'
const Login = () => {

  const LOGIN_URL = '/user/specific'

  const {setAuth} = useContext(AuthContext);
  const {cart,setCart} = useContext(AuthContext);
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
 
    if(response.data.verified){
      setSuccess(response);
      setAuth({user,pwd});
      setUser('');
      setPwd('');
    }
    else
      setErrMsg('Incorrect info')
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
    <section>
      <p ref = {errRef} className={errMsg ? "errmsg" : "offscreen"} 
      aria-live ="assertive">{errMsg}</p>
      <h1>Login In</h1>

      <form onSubmit = {handleSubmit}>
        <label htmlFor ="username" >Username:</label>
        <input
          type = "text" 
          id= "username" 
          ref = {userRef}
          autoComplete = "off"
          onChange = {(e) => setUser(e.target.value)}
          value = {user}
          required
        />
      <label htmlFor ="password" >Password:</label>
        <input
          type = "password" 
          id= "password" 
          ref = {userRef}
          autoComplete = "off"
          onChange = {(e) => setPwd(e.target.value)}
          value = {pwd}
          required
        />

        <button>Login In</button>
      </form>
      <p>Need an Account? <br />
        <span className ="line">
          <a href='/'>Sign Up</a>
        </span>
      </p> 

    </section>

  )}
  </>
  )
}

export default Login;