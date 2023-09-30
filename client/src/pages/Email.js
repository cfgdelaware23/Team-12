import React from 'react';
import './Email.css';
import Navbar from '../components/Navbar/navbar';

import { useState } from "react";


function Email() {
    return (
        <>
            <Navbar />
            <body>
            <div class="container">
        
        <form action="#" method="post" class = "form">
         <div class = "title"><h2>Simple Vertical Form</h2></div>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required></input>
            </div>
            <div class="form-group">
                <label for="email">Email Address:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" required></input>
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" placeholder="Write your message" rows="6" required></textarea>
            </div>
            <div class="form-group">
                <button type="submit" class="btn">Submit</button>
            </div>
        </form>
    </div>
            </body>
        </>
    );
}

export default Email;
