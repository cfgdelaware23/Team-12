const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

let user = { email: "" };

mongoose
  .connect(process.env.DB_CONNECTION)
  .then((result) => {
    console.log("Connected to Database");

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/signin", async (req, res) => {
  const response = await User.findOne({ email: req.body.email });
  if (response !== null) {
    const match = await bcrypt.compare(req.body.password, response.password);
    if (match) {
      console.log("match");
      user = { email: req.body.email };
      res.status(200).json({});
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

app.post("/planevent", (req, res) => {
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
  console.log("Event successfully added");
});

app.post("/checkevent", async (req, res) => {
  const newEventInterval = {
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    date: req.body.date,
  };
  const matchingDates = await Movie.find({ date: interval.date });
  matchingDates.forEach((event) => {
    const startTime = event.startTime;
    const endTime = event.endTime;
    if (
      newEventInterval.endTime > startTime &&
      newEventInterval.startTime < endTime
    ) {
      res.status(200).json({ conflict: true });
    }
  });
  res.status(200).json({ conflict: false });
});
