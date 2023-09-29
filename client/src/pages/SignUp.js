import './SignUp.css';
import { useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [isHost, setIsHost] = useState(false)


  


  function handleSubmit (){
    fetch('/api/create-account' + new URLSearchParams({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      isHost: isHost,
  }))
    .then(response => response.json()).then(() => {
      // add in link to next page!
    })
    .catch(() =>
      {
       setLoggedIn(false);
      }
    )
  }
  
  
  
  return (
    <div className='main_container'>
      <h1 className='heading'> Log In </h1>
       <form className='main_container' onSubmit={handleSubmit}>
        
        <label className='input_heading'> First Name </label>
        <input className='input' type='text' 
              id='firstName' name='firstName' placeholder='Jane'
              onChange={
                (e) => setFirstName(e.target.value)}></input>


      <label className='input_heading'> Last Name </label>
              <input className='input' type='text' 
                    id='lastName' name='lastName' placeholder='Jane'
                    onChange={
                      (e) => setLastName(e.target.value)}></input>
         
         
          <label className='input_heading'> Email </label>
          <input className='input'id='email' name='email' placeholder='enter email'
          onChange={
            (e) => setEmail(e.target.value)} type="email"></input>
  
          <label className='input_heading'> Password </label>
          <input className='input' type='password' 
            id='password' name='password' placeholder='enter password'
            onChange={
              (e) => setPassword(e.target.value)}></input>

          <label className='input_heading'> Host? </label>
          <input className='input' type='checkbox' 
            id='password' name='password' placeholder='enter password'
            onChange={
              (e) => setIsHost(e.target.value)}></input>

          <input className='submit_button' type="submit" value="Submit"></input>
       </form>

       
    </div>

  );
}

export default SignUp;