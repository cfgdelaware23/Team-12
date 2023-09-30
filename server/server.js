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

app.post("/planevent", async (req, res) => {
  const newEvent = new Event({
    host: req.body.host,
  });
});


// getEvents route
// sends a json of all the events 
app.get("/getEvents", async (req, res) => {
  const events = await Event.find()
  .catch((err) => console.log(err))

  res.status(200).json(events)
})

// getEmptyEvents
app.get("/getEmptyEvents", async (req, res) => {
  // find all the attributes that take in a user
  const emptyEvents = await Event.find({ $or: [{ host: "" } , { mod: "" },  { streamer: "" }, {broadcaster: ""}, { facilitator: ""}] })
    if (emptyEvents.length === 0) {
      res.status(200).json({emptyEvents: []})
    } else {
      res.status(200).json({emptyEvents: emptyEvents})
    }
})