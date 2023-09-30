import "./SignUp.css";
import logo from "../pages/images/logo.png";

import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isHost, setIsHost] = useState(false);
  const [isSocial, setIsSocial] = useState(false);
  const [isEducational, setIsEducational] = useState(false);
  const [isReligion, setIsReligion] = useState(false);
  const [isHealth, setIsHealth] = useState(false);
  const [isTech, setIsTech] = useState(false);
  const [isArt, setIsArt] = useState(false);

  

  // create an account
  async function handleSubmit(e) {
    e.preventDefault();

    var selectedCounter = 0;
    const selections = [];
    // checks if only three options are selected
    if (isSocial) 
    {
      selectedCounter++;
      selections.push("Social")
    }
    if (isEducational) 
    {
      selectedCounter++;
      selections.push("Education")
    }
    if (isReligion) 
    {
      selectedCounter++;
      selections.push("Religion")
    }
    if (isHealth){
      
        selectedCounter++;
        selections.push("Health")
      
    }

    if (isTech)
    {
      selectedCounter++;
      selections.push("Technology")
    }
    if (isArt) {
      selectedCounter++;
      selections.push("Art")
    }

    if (selectedCounter === 3){
      const newUser = JSON.stringify({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        isHost: isHost,
        categories: selections,
      });
      console.log(newUser);
  
      const options = {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: newUser,
      };
      try {
        const response = await fetch("http://localhost:3001/signup", options);
        const result = await response.json();
        console.log(result);
        window.location.href = '/';
      } catch (err) {
        console.log(err);
        console.log("there was an error ");
      }

    }


  }

  return (
    <div className='main_containr'>
    <div className='header_bar'>
      <img src={logo} className='logo'></img>
      <h1 className='heading'> Create An Account </h1>
    </div>
    
     <form className='main_container' onSubmit={handleSubmit}>
      
      <div className='name_entry'>
        <div className='vertical_name_stack'>
          <label className='input_heading'> First Name </label>
          <input className='input' type='text' 
            id='firstName' name='firstName' placeholder='Jane'
            onChange={(e) => setFirstName(e.target.value)}></input>
        </div>
        <div className='vertical_name_stack'>
          <label className='input_heading'> Last Name </label>
          <input className='input' type='text' 
          name='lastName' placeholder='Jane'
          onChange={(e) => setLastName(e.target.value)}></input>
        </div>
      </div>

      <div className='name_entry'>
        <div className='vertical_name_stack'>
          <label className='input_heading'> Email </label>
          <input className='input'id='email' name='email' placeholder='enter email'
          onChange={(e) => setEmail(e.target.value)} type="email"></input>
        </div>
        <div className='vertical_name_stack'>
          <label className='input_heading'> Password </label>
          <input className='input' type='password' 
            id='password' name='password' placeholder='enter password'
            onChange={(e) => setPassword(e.target.value)}></input>
        </div>
      </div >
      
      <div className='name_entry'>
      <label className='input_heading'> Check if you are a host:  </label>
      <input className='input' type='checkbox' 
          onChange={
            (e) => setIsHost(e.target.value)}></input>
        
      </div>

      <h1> Pick 3 topics</h1>
        <div className="horizontal_stack">
          <div className="vertical_name_stack">
            <div className="vertical_name_stack">
              <label className='input_heading'> Education </label>
              <input
              className="input"
              type="checkbox"
              onChange={() => setIsEducational((prev) => !prev)}
            ></input>
            </div>
          </div>

          <div className="vertical_name_stack">
              <label className='input_heading'> Technology </label>
              <input
            className="input"
            type="checkbox"
            onChange={() => setIsTech((prev) => !prev)}
          ></input>
          </div>

          <div className="vertical_name_stack">
              <label className='input_heading'> Art </label>
              <input
            className="input"
            type="checkbox"
            onChange={() => setIsArt((prev) => !prev)}
          ></input>
          </div>

          <div className="vertical_name_stack">
              <label className='input_heading'> Health </label>
              <input
            className="input"
            type="checkbox"
            onChange={() => setIsHealth((prev) => !prev)}
          ></input>
          </div>


          <div className="vertical_name_stack">
              <label className='input_heading'> Religion </label>
              <input
            className="input"
            type="checkbox"
            onChange={() => setIsReligion((prev) => !prev)}
          ></input>
          </div>

          <div className="vertical_name_stack">
              <label className='input_heading'> Social </label>
              <input
            className="input"
            type="checkbox"
            onChange={() => setIsSocial((prev) => !prev)}
          ></input>
          </div>

        </div>

        <input className="submit_button" type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default SignUp;
