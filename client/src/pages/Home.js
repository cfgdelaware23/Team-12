import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/navbar";
import Calendar from "../components/calendar";

import React, { useState, useEffect, useMemo} from "react";

function Home() {
  const [totalVolunteerHours, setTotalVolunteerHours] = useState(0);
  const [totalEvents, setTotalEvents] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0)
  // const [recommendedEvents, setRecommendedEvents] = useState([]);
  // const [userPreferences, setUserPreferences] = useState([]);

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

  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      email: "ashleyjoyetheridge@gmail.com",
    }),
  };

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

  useEffect(() => {
    // Fetch the total volunteer hours
    fetch("http://localhost:3001/totalhours")
      .then((response) => response.json())
      .then((data) => {
        setTotalVolunteerHours(data.totalHours);
      })
      .catch((error) => {
        console.error(error);
      });
    // Fetch the total number of events
    // Fetch the total number of events
    fetch("http://localhost:3001/getEvents")
      .then((response) => response.json())
      .then((data) => {
        setTotalEvents(data.length);
      })
      .catch((error) => {
        console.error(error);
      });
    // Fetch the total number of users
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => {
        setTotalUsers(data.length);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
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
            <h2> Total of Volunteer Hours: </h2>
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
