// Creating a goose schema

const mongoose = require("mongoose");

<<<<<<< HEAD
const eventSchema = new mongoose.schema({
=======
const eventSchema = new mongoose.Schema({
>>>>>>> b73d6612ad0bba6a667c8e1226124bd8035aff78
  host: { type: String },
  mod: { type: String },
  streamer: { type: String },
  broadcaster: { type: String },
  description: { type: String, required: true },
  facilitator: { type: String },
  date: { type: String, required: true },
  startTime: { type: Number, required: true },
  endTime: { type: Number, required: true },
  url: { type: String, required: true },
  categories: { type: [String] },
  eventName: { type: String, required: true },
  volunteers: { type: String }, 
});

module.exports = mongoose.model("Event", eventSchema);