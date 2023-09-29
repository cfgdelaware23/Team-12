import './Login.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';



function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()


  


  function handleSubmit() {
    fetch('/api/signin' + new URLSearchParams({
      email: email,
      password: password,
  }))
    .then(response => response.json()).then(() => {
      navigate('/')
    })
    .catch(() =>
      {
       //setLoggedIn(false)
       navigate('/')
       
      }
    )
  }
  
  
  
  return (
    <div className='main_container'>
      <h1 className='heading'> Log In </h1>
       <form className='main_container' onSubmit={handleSubmit}>
          <label className='input_heading'> Email </label>
          <input className='input'id='email' name='email' placeholder='enter email'
          onChange={
            (e) => setEmail(e.target.value)} type="email"></input>
  
          <label className='input_heading'> Password </label>
          <input className='input' type='password' 
            id='password' name='password' placeholder='enter password'
            onChange={
              (e) => setPassword(e.target.value)}></input>

          <input className='submit_button' type="submit" value="Submit"></input>
       </form>

       
    </div>

  );
}

export default Login;