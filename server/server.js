const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

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

      res.status(200).json({
        email: response.email,
        apiKey: response.apiKey,
        registrationDate: response.registrationDate,
      });
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

      // wait for schema
      const newUser = new User({
        email: req.body.email,
        password: hash,
        registrationDate: new Date().toString(),
      });
      newUser.save();
      console.log("Account successfully created");
    });
    res.status(200).json({ message: "it worked", status: 200 });
  } else {
    console.log("Account creation unsuccessful");
    res.status(404).json({
      message: "Email already in use",
      status: 404,
    });
  }
});

// app.post("/planevent", async (req, res) => {
//     const response = await User.findOne({ email: req.body.email });
//     if (response !== null) {
//       const match = await bcrypt.compare(req.body.password, response.password);
//       if (match) {
//         console.log("match");

//         res.status(200).json({
//           email: response.email,
//           apiKey: response.apiKey,
//           registrationDate: response.registrationDate,
//         });
//       } else {
//         console.log("wrong pass");
//         res.status(404).send({
//           error: "auth failed",
//         });
//       }
//     } else {
//       console.log("not found");
//       res.status(404).send({
//         error: "auth failed",
//       });
//     }
//   });
