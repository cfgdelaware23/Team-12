import React, { useState, useEffect } from 'react';
import Card from '../components/Card/Card';

function VolunteerSignUp() {
  const [cards, setCards] = useState([]);

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    getAllEvents();
  }, []);

  const getAllEvents = () => {
    fetch('/api/getEmptyEvents')
      .then((response) => response.json())
      .then((data) => {
        setCards(data); // Assuming the data is an array of cards
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="options">
      {cards.map((event) => (
        <Card key={event.id} event={event} />
      ))}
    </div>
  );
}

export default VolunteerSignUp;





