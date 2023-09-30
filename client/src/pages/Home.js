import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/navbar";
import Calendar from "../components/calendar";

import React, { useState, useEffect } from "react";

function Home() {
  const [totalVolunteerHours, setTotalVolunteerHours] = useState(0);
  const [totalEvents, setTotalEvents] = useState(50000);
  const [totalUsers, setTotalUsers] = useState(2);
  // const [recommendedEvents, setRecommendedEvents] = useState([]);
  // const [userPreferences, setUserPreferences] = useState([]);

<<<<<<< HEAD
  // const options = {
  //   method: "POST",
  //   mode: "cors",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json;charset=UTF-8",
  //   },
  //   body: JSON.stringify({
  //     email: "abcd@gmail.com",
  //   }),
  // };
=======
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      email: "ashleyjoyetheridge@gmail.com"
    }),
  };
>>>>>>> SelectPreferences

  // get user preferences & find recommended events
  // useEffect(() => {
  //   fetch("http://localhost:3001/getUserPreferences", options)
  //     //.then((response) => response.json())
  //     .then((data) => {
  //       // set user preferences
  //       console.log(data.categories);
  //       setUserPreferences(data.categories);
  //       // post request for recommendation api
  //       const options = {
  //         method: "POST",
  //         mode: "cors",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json;charset=UTF-8",
  //         },
  //         body: JSON.stringify({
  //           categories: userPreferences,
  //         }),
  //       };
  //       // fetch recommendation api
  //       fetch("http://localhost:3001/getUserPreferences", options)
  //         .then((response) => response.json())
  //         .then((data) => {
  //           setRecommendedEvents(data.events);
  //           console.log(recommendedEvents.length);
  //           // generates random range of 10 events to be presented
  //           // or if length is less than 10, then all recommended
  //           // events are presented
  //           if (recommendedEvents.length > 5) {
  //             var startingValue = Math.random(0, recommendedEvents.length - 5);
  //             setRecommendedEvents(
  //               recommendedEvents.slice(startingValue, startingValue + 5)
  //             );
  //           }
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //         });
  //     });
  // });
  // get recommended user events

<<<<<<< HEAD
  useEffect(() => {
    // Fetch the total volunteer hours
    fetch("/api/volunteer-hours")
      .then((response) => response.json())
      .then((data) => {
        setTotalVolunteerHours(data.totalHours);
      })
      .catch((error) => {
        //console.error(error);
      });

    // Fetch the total number of events
    fetch("/api/total-events")
      .then((response) => response.json())
      .then((data) => {
        setTotalEvents(data.totalEvents);
      })
      .catch((error) => {
        //console.error(error);
      });

    // Fetch the total number of users
    fetch("/api/total-users")
      .then((response) => response.json())
      .then((data) => {
        setTotalUsers(data.totalUsers);
      })
      .catch((error) => {
        //console.error(error);
      });
  }, []);
=======

  
  // useEffect(() => {
  //   // Fetch the total volunteer hours 
  //   fetch('/api/volunteer-hours')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setTotalVolunteerHours(data.totalHours);
  //     })
  //     .catch((error) => {
  //       //console.error(error);
  //     });

  //   // Fetch the total number of events
  //   fetch('/api/total-events')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setTotalEvents(data.totalEvents);
  //     })
  //     .catch((error) => {
  //       //console.error(error);
  //     });

  //   // Fetch the total number of users 
  //   fetch('/api/total-users')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setTotalUsers(data.totalUsers);
  //     })
  //     .catch((error) => {
  //       //console.error(error);
  //     });
  // }, [])
>>>>>>> SelectPreferences
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div class="row">
          <div className="dashboardCards">
            <h2> Number of Events: {totalEvents}</h2>
            <h3> {totalEvents} </h3>
          </div>
          <div className="dashboardCards">
            <h2> Number of Users: </h2>
            <h3> {totalUsers} </h3>
          </div>
          <div className="dashboardCards">
            <h2> Number of Volunteer Hours: </h2>
            <h3> {totalVolunteerHours} </h3>
          </div>
        </div>
      </div>
      <div class="calendar">
        <Calendar />
      </div>
    </>
  );
}

export default Home;
