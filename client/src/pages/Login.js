import './Login.css';

import logo from '../pages/images/logo.png';

import { useState } from 'react';



function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
 
  function handleSubmit() {
    fetch('/api/signin' + new URLSearchParams({
      email: email,
      password: password,
  }))
    .then(response => response.json()).then(() => {
      window.location.href = '/Home';
    })
    .catch(() =>
      {
       setLoggedIn(false)
       window.location.href = '/Home';
       
      }
    )
  }
  
  return (
    <div className='main_container'>
      <div className='header_bar'>
        <img src={logo} className='logo'></img>
        <h1 className='heading'> Log In </h1>

      </div>
      
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