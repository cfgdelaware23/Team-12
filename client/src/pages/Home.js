import './Home.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/navbar';
import Calendar from '../components/calendar';

import React, { useState, useEffect } from 'react';

function Home() {
  const [totalVolunteerHours, setTotalVolunteerHours] = useState(0);
  const [totalEvents, setTotalEvents] = useState(50000);
  const [totalUsers, setTotalUsers] = useState(2);

  useEffect(() => {
    // Fetch the total volunteer hours 
    fetch('/api/volunteer-hours')
      .then((response) => response.json())
      .then((data) => {
        setTotalVolunteerHours(data.totalHours);
      })
      .catch((error) => {
        console.error(error);
      });

    // Fetch the total number of events
    fetch('/api/total-events')
      .then((response) => response.json())
      .then((data) => {
        setTotalEvents(data.totalEvents);
      })
      .catch((error) => {
        console.error(error);
      });

    // Fetch the total number of users 
    fetch('/api/total-users')
      .then((response) => response.json())
      .then((data) => {
        setTotalUsers(data.totalUsers);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])
  return (
    <> 
      <Navbar /> 
      <h1>Home Page</h1>
      <div className="dashboard">
        <div className="dashboardCards">
          <h2> Number of Events: {totalEvents}</h2>
        </div>
        <div className="dashboardCards">
          <h2> Number of Users: {totalUsers} </h2>
        </div>
        <div className="dashboardCards">
          <h2> Number of Volunteer Hours: {totalVolunteerHours} </h2>
        </div>
      </div>
      <Calendar /> 

    </>
  );
}

export default Home;