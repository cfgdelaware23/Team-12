import 'rsuite/dist/rsuite-no-reset.min.css';
import React from 'react';
import {Calendar} from 'rsuite';
import{useState, useEffect} from 'react'
function MyCalendar() {
  // fetch event data
  const [eventData, setEventData] = useState({}); // Store event data in state

  
  useEffect(() => {

    async function fetchData() {
      const options = {
        method: 'GET',
        mode: 'cors',
      };
      try {
        console.log("hi")
        const response = await fetch('http://localhost:3001/planevent', options);
        console.log(response);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        console.log(eventData);
      }
    }
    fetchData();

    const mockEventData = [
      { date: '2023-09-05', eventName: 'Event 1' },
      { date: '2023-09-10', eventName: 'Event 2' },
    ];

    const processedEventData = {};
    mockEventData.forEach((event) => {
      processedEventData[event.date] = event.eventName;
    });

  }, []);

  const renderCustomCell = (date) => {
    const formattedDate = date.toISOString().split('T')[0];

    return (
      <div className={`custom-cell ${eventData[formattedDate] ? 'event' : ''}`}>
        {eventData[formattedDate]}
      </div>
    );
  };

  return (
    <div className="custom-calendar">
      <Calendar renderCell={renderCustomCell} />
    </div>
  );
}

export default MyCalendar;