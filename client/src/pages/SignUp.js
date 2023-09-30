import "./SignUp.css";

import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isHost, setIsHost] = useState(false);

  // create an account
  async function handleSubmit(e) {
    e.preventDefault();
    const newUser = JSON.stringify({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      isHost: isHost,
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
    } catch (err) {
      console.log(err);
      console.log("there was an error ");
    }
  }

  return (
    <div className="main_containr">
      <h1 className="heading"> Make An Account! </h1>
      <form className="main_container" onSubmit={handleSubmit}>
        <label className="input_heading"> First Name </label>
        <input
          className="input"
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Jane"
          onChange={(e) => setFirstName(e.target.value)}
        ></input>

        <label className="input_heading"> Last Name </label>
        <input
          className="input"
          type="text"
          name="lastName"
          placeholder="Jane"
          onChange={(e) => setLastName(e.target.value)}
        ></input>

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

        <label className="input_heading"> Host? </label>
        <input
          className="input"
          type="checkbox"
          placeholder="enter password"
          onChange={() => setIsHost((prev) => !prev)}
        ></input>

        <input className="submit_button" type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default SignUp;
