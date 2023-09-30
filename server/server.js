const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");
require("dotenv/config");
const Event = require("./Event.js");
const User = require("./User.js");

const app = express();

let user = { email: "", totalHours: 10 };

mongoose
  .connect(process.env.DB_CONNECTION)
  .then((result) => {
    console.log("Connected to Database");

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));

app.use(cors());

app.use(bodyParser.json());

// Parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/test", (req, res) => {
  console.log(req.body);
  res.status(200).send("hello");
});

app.post("/signin", async (req, res) => {
  const response = await User.findOne({ email: req.body.email });
  if (response !== null) {
    const match = await bcrypt.compare(req.body.password, response.password);
    if (match) {
      console.log("match");
      user = { email: response.email, totalHours: response.totalHours };
      res.status(200).json({ status: 200 });
    } else {
      console.log("wrong pass");
      res.status(404).send({
        error: "auth failed",
      });
    }
  } else {
    console.log("not found");
    res.status(404).send({
      error: "auth failed",
    });
  }
});

app.post("/signup", async (req, res) => {
  console.log("request", req.body);
  const response = await User.findOne({ email: req.body.email });
  if (response === null) {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        console.log(err);
      }
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash,
        isHost: req.body.isHost,
        totalHours: 0,
      });
      newUser.save();
      console.log("Account successfully created");
    });
    res
      .status(200)
      .json({ message: "Account successfully created", status: 200 });
  } else {
    console.log("Account creation unsuccessful");
    res.status(404).json({
      message: "Email already in use",
      status: 404,
    });
  }
});

app.post("/planevent", async (req, res) => {
  const hours = Math.abs(req.body.endTime - req.body.startTime);
  console.log("differnce in hours:", hours);
  const newEvent = new Event({
    host: user.email,
    mod: req.body.mod,
    streamer: req.body.streamer,
    broadcaster: req.body.broadcaster,
    description: req.body.description,
    facilitator: req.body.facilitator,
    date: req.body.date,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    url: req.body.url,
    categories: req.body.categories,
    eventName: req.body.eventName,
  });
  newEvent.save();
  console.log("users total hours:", user.totalHours);
  console.log("difference in hours", hours);
  const newHours = user.totalHours + hours;
  const response = await User.findOneAndUpdate(
    { email: user.email },
    { totalHours: newHours }
  );
  user = { email: user.email, totalHours: newHours };
  res.status(200).json({ message: "successful" });
  console.log("Event successfully added");
});

app.post("/checkevent", async (req, res) => {
  const newEventInterval = {
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    date: req.body.date,
  };
  const matchingDates = await Event.find({ date: newEventInterval.date });
  matchingDates.forEach((event) => {
    const startTime = event.startTime;
    const endTime = event.endTime;
    if (
      newEventInterval.endTime >= startTime &&
      newEventInterval.endTime <= endTime || newEventInterval.startTime <= endTime &&
      newEventInterval.startTime <= startTime
    ) {
      res.status(200).json({ conflict: true });
    }
  });
  res.status(200).json({ conflict: false });
});

app.get("/getEvents", async (req, res) => {
  const events = await Event.find().catch((err) => console.log(err));

  res.status(200).json(events);
});

app.get("/getEmptyEvents", async (req, res) => {
  const emptyEvents = await Event.find({
    $or: [
      { host: "" },
      { mod: "" },
      { streamer: "" },
      { broadcaster: "" },
      { facilitator: "" },
    ],
  });
  if (emptyEvents.length === 0) {
    res.status(200).json({ emptyEvents: [] });
  } else {
    res.status(200).json({ emptyEvents: emptyEvents });
  }
});

app.post("/volunteer", async (req, res) => {
  const volunteerInfo = { eventID: req.body.eventID, role: req.body.role };
  if (volunteerInfo.role === "mod") {
    const response = await Event.findOneAndUpdate(
      { _id: volunteerInfo.eventID },
      { mod: user.email }
    );
    res.status(200);
  } else if (volunteerInfo.role === "facilitator") {
    const response = await Event.findOneAndUpdate(
      { _id: volunteerInfo.eventID },
      { facilitator: user.email }
    );
    res.status(200);
  } else if (volunteerInfo.role === "streamer") {
    const response = await Event.findOneAndUpdate(
      { _id: volunteerInfo.eventID },
      { streamer: user.email }
    );
    res.status(200);
  } else if (volunteerInfo.role === "broadcaster") {
    const response = await Event.findOneAndUpdate(
      { _id: volunteerInfo.eventID },
      { broadcaster: user.email }
    );
    res.status(200);
  }
});



// email list
// app.post("/emaillist", async (req, res) => {
//   // email object that contains the email as well as params for sending
//   const emailBody = { emailAddress, email };

//   // check if the incoming data is even an email
//   if (!email) {
//     return res.status(400).json({ "Error: Not an email "})
//   } 

//   // return email body if it's an email
//   return res.status(200).json(emailBody)
// })


app.get("/totalhours", async (req, res) => {
  const volunteers = await User.find({});
  let sum = 0;
  volunteers.forEach((user) => {
    sum = sum + user.totalHours;
  });
  res.status(200).json({ totalHours: sum });
});

app.get("/user", (req, res) => {
  if (user.email != "") {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "no user logged in" });
  }
});

app.get("/getuser", async (req, res) => {
  if (user.email != "") {
    const response = await User.findOne({ email: user.email });
    res.status(200).send(response);
  } else {
    res.status(404);
  }
});

// Recommendations
app.post("/recommendations", async (req, res) => {
  
})

