import React, { useState, useEffect } from "react";
import "./Profile.css";
import Navbar from "../components/Navbar/navbar";
import Calendar from "../components/calendar";
//import { Calendar } from 'rsuite';
//import 'rsuite/dist/rsuite-no-reset.min.css';

import pic from "./images/headshot.jpg";

function Profile() {
  const email = localStorage.getItem("user");
  console.log(email);
  const [showProfile, setShowProfile] = useState(true);
  const [data, setData] = useState([]);

  const handleTabClick = (tab) => {
    if (tab === "Profile") {
      setShowProfile(true);
    } else {
      setShowProfile(false);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch data from your backend API
        const response = await fetch("http://localhost:3001/getuser"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="all">
        <div className="profile-container">
          <aside>
            <div className="navbar">
              <div className="logo">
                <img src={pic} alt="Profile Pic" />
              </div>
              <div className="name">
                <span>Mary Ann</span>
              </div>
              <nav>
                <ul>
                  <li
                    className={`select ${showProfile ? "active" : ""}`}
                    name="home"
                    onClick={() => handleTabClick("Profile")}
                  >
                    Profile
                  </li>
                  <li
                    className={!showProfile ? "active" : ""}
                    name="about"
                    onClick={() => handleTabClick("Calendar")}
                  >
                    Calendar
                  </li>
                </ul>
              </nav>
            </div>
          </aside>

          <main>
            <div className={`card ${showProfile ? "active" : ""}`} data-home>
              <div className="title">Profile</div>
              <div className="content">
                <div className="box">Address</div>
                <div className="box">Phone Number</div>
                <div className="box">Email: {email}</div>
                <div className="box">Interests</div>
                <div className="box">Member since ...</div>
                <div className="box">
                  Total Volunteering Hours: {data.totalHours}{" "}
                </div>
              </div>
            </div>

            <div className={`card ${!showProfile ? "active" : ""}`} data-about>
              <div className="title">Calendar</div>
              <div className="calendar-profile">
                <Calendar />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Profile;
