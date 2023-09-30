import "./Login.css";

import logo from "../pages/images/logo.png";

import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const user = JSON.stringify({
      email: email,
      password: password,
    });
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: user,
    };
    try {
      const response = await fetch("http://localhost:3001/signin", options);
      const result = await response.json();
      // result should give status code, based on status code handle login
      console.log(result);
    } catch (err) {
      console.log(err);
      console.log("there was an error ");
    }
  }

  return (
    <div className="main_container">
      <div className="header_bar">
        <img src={logo} className="logo"></img>
        <h1 className="heading"> Log In </h1>
      </div>

      <form className="main_container" onSubmit={handleSubmit}>
        <label className="input_heading"> Email </label>
        <input
          className="input"
          id="email"
          name="email"
          placeholder="enter email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        ></input>

        <label className="input_heading"> Password </label>
        <input
          className="input"
          type="password"
          id="password"
          name="password"
          placeholder="enter password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <input className="submit_button" type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default Login;
