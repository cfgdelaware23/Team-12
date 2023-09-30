import React, { useState, useEffect } from 'react';
import Card from '../components/Card/Card';
import './VolunteerSignUp.css';

function VolunteerSignUp() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('localhost:3000/getEmptyEvents')
      .then((response) => response.json())
      .then((data) => {
       
        setCards((prevCards) => [...prevCards, data]); 
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="options">
      {cards.map((event) => (
        <h1>{event.desc}</h1>
      ))}
    </div>
  );
}

export default VolunteerSignUp;



