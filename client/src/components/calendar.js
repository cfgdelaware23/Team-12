import 'rsuite/dist/rsuite-no-reset.min.css';
import React from 'react';
import {Calendar} from 'rsuite';
import{useState, useEffect} from 'react'
function MyCalendar() {
  const [eventData, setEventData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const options = {
        method: 'GET',
        mode: 'cors',
      };
      try {
        const response = await fetch('http://localhost:3001/getEvents', options);
        const data = await response.json();
        const events = {};

        data.forEach((event) => {
          const date = event.date.substring(0, 10);
          const name = event.eventName;

          if (!events[date]) {
            events[date] = [];
          }

          events[date].push(name);
        });

        setEventData(events);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const renderCustomCell = (date) => {
    const formattedDate = date.toISOString().split('T')[0];

    if (eventData[formattedDate]) {
      return (
        <div className="custom-cell event">
          {eventData[formattedDate].map((eventName) => (
            <div key={eventName}>{eventName}</div>
          ))}
        </div>
      );
    }

    return (
      <div className="custom-cell">
      </div>
    );
  };

  return (
    <div className="custom-calendar">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Calendar renderCell={renderCustomCell} />
      )}
    </div>
  );
}

export default MyCalendar;