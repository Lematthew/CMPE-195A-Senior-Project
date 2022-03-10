import React from 'react';
import {useRef, useState,useEffect,useContext} from 'react'
import AuthContext from '../Context/AuthProvider'
import axios from '../Database/axios'

const LOGIN_URL = '/user/create'


const SignUp = () => {
  //#region Params
  const {setAuth} = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [name,setName] = useState('');
  const [user,setUser] = useState('');
  const [pwd,setPwd] = useState('');
  
  const [address,setAdress] = useState('');
  const [city,setCity] = useState('');
  const [zipcode,setZipcode] = useState('');


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
      const response = await axios.post(LOGIN_URL, 
        JSON.stringify({
          'full_name': name,
          'email': user,
          'hashed_password': pwd,
          'address': address,
          'city': city,
          'zipcode': zipcode
          }),
          {
            headers: {'Content-Type': 'application/json'},

          })
    if(response.data.verified){
      setSuccess(response);
      setAuth({user,pwd});
    }
    else
      setErrMsg('Insuffienct info')
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
            <h1>You have signed up!</h1>
            <br />
            <p>
                <a href="/">Go to Home</a>
            </p>
        </section>
    ) : (
    <section>
      <p ref = {errRef} className={errMsg ? "errmsg" : "offscreen"} 
      aria-live ="assertive">{errMsg}</p>
      <h1>Sign Up</h1>

      <form onSubmit = {handleSubmit}>
      <label htmlFor ="name" >Name:</label>
        <input
          type = "text" 
          id= "name" 
          ref = {userRef}
          autoComplete = "off"
          onChange = {(e) => setName(e.target.value)}
          value = {user}
          required
        />
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
                <label htmlFor ="city" >City:</label>
        <input
          type = "text" 
          id= "username" 
          ref = {userRef}
          autoComplete = "off"
          onChange = {(e) => setCity(e.target.value)}
          value = {user}
          required
        />
      <label htmlFor ="zipCode" >ZIP:</label>
        <input
          type = "text" 
          id= "password" 
          ref = {userRef}
          autoComplete = "off"
          onChange = {(e) => setZipcode(e.target.value)}
          value = {pwd}
          required
        />
        <label htmlFor ="Address" >Address:</label>
        <input
          type = "text" 
          id= "username" 
          ref = {userRef}
          autoComplete = "off"
          onChange = {(e) => setAdress(e.target.value)}
          value = {user}
          required
        />
      <label htmlFor ="Phone" >Phone:</label>
        <input
          type = "text" 
          id= "password" 
          ref = {userRef}
          autoComplete = "off"
          onChange = {(e) => setPwd(e.target.value)}
          value = {pwd}
          required
        />

        <button>Sign Up</button>
      </form>
      <p>Already have an account ? <br />
        <span className ="line">
          <a href='/login'>Login</a>
        </span>
      </p> 
    </section>
  )}
  </>
  )
}

export default SignUp;