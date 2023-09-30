import React, { useState, useEffect } from 'react';
import Card from '../components/Card/Card';
import './VolunteerSignUp.css';
import Navbar from "../components/Navbar/navbar";
function VolunteerSignUp() {
  const [cards, setCards] = useState([]);
  const [length, setLength] = useState(0);
  
  useEffect(() => {
    fetch('http://localhost:3001/getEmptyEvents')
      .then((response) => response.json())
      .then((data) => {
      
        setCards((prevCards) => [...prevCards, ...data.emptyEvents]);
         
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  async function handleBroad(event)
{
  const newVol = JSON.stringify({
    eventID : event._id,
    role : 'broadcaster',
  });
  console.log(newVol);

  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: newVol,
  };
  try {
    
    console.log("test1")
    const response = await fetch("http://localhost:3001/volunteer", options);
    window.location.href = '/';
  } catch (err) {
    console.log(err);
    console.log("there was an error ");
  }
  window.location.href = '/';
}



async function handleFac(event)
{
  const newVol = JSON.stringify({
    eventID: event._id,
    role: 'facilitator',
  });
  console.log(newVol);

  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: newVol,
  };
  try {
    console.log("test1");
    const response = await fetch("http://localhost:3001/volunteer", options);
    if (response.ok) {
      console.log("Request was successful");
      window.location.href = '/';
    } else {
      console.log("Request failed with status: " + response.status);
    }
  } catch (err) {
    console.error("An error occurred: " + err.message);
  }
  window.location.href = '/';
}

async function handleMod(event) {
  const newVol = JSON.stringify({
    eventID: event._id,
    role: 'moderator',
  });
  console.log(newVol);

  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: newVol,
  };
  try {
    console.log("test1");
    const response = await fetch("http://localhost:3001/volunteer", options);
    if (response.ok) {
      console.log("Request was successful");
      window.location.href = '/';
    } else {
      console.log("Request failed with status: " + response.status);
    }
  } catch (err) {
    console.error("An error occurred: " + err.message);
  }
}

async function handleStream(event)
{
  const newVol = JSON.stringify({
    eventID : event._id,
    role : 'streamer',
  });
  console.log(newVol);

  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: newVol,
  };
  try {
    
    
    const response = await fetch("http://localhost:3001/volunteer", options);
   
  } catch (err) {
    console.log(err);
    console.log("there was an error ");
  }
  window.location.href = '/Home';
}
return (
  <div className="options">
    <Navbar />
    {cards.map((event, index) => (
      <div key={index} className="register">
        <h1>{event.eventName}</h1>
        {event.broadcaster === "" && (
          <button className = "vol" onClick={() => handleBroad(event)}>Broadcaster @ {event.startTime}-{event.endTime}</button>
        )}
        <br></br>
        {event.facilitator === "" && (
          <button className = "vol" onClick={() => handleFac(event)}>Facilitator @ {event.startTime}-{event.endTime}</button>
          
        )}
        {event.streamer === "" && (
          <button className = "vol" onClick={() => handleStream(event)}>Streamer @ {event.startTime}-{event.endTime}</button>
        )}
        {event.moderator === "" && (
          <button className = "vol" onClick={() => handleMod(event)}>Moderator @ {event.startTime}-{event.endTime}</button>
        )}
      </div>
    ))}
  </div>
);}

export default VolunteerSignUp;



