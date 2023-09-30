import './EventData.css';
import Navbar from '../components/Navbar/navbar';
import React, { useState, useEffect } from 'react';

function EventData() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const options = {
        method: 'GET',
        mode: 'cors',
      };

      try {
        const response = await fetch('http://localhost:3001/getEvents', options);
        const data = await response.json();
        setEvents(data);

        
   ;


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);







  return (
    <>
      <Navbar />
      <h1>Event Data</h1>
      <div className="data">
        <table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Host</th>
              <th>Volunteers</th>
              <th>Streamer</th>
              <th>Broadcaster</th>
              <th>Facilitator</th>
              <th>Moderator</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                <td>{event.eventName}</td>
                <td>{event.host}</td>
                <td>{event.volunteers}</td>
                <td>{event.streamer}</td>
                <td>{event.broadcaster}</td>
                <td>{event.facilitator}</td>
                <td>{event.moderator}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default EventData;
