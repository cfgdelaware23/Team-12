// Creating a goose schema
const mongoose = require("mongoose");


const eventSchema = new mongoose.Schema({

  host: { type: String },
  mod: { type: String },
  streamer: { type: String },
  broadcaster: { type: String },
  description: { type: String, required: true },
  facilitator: { type: String },
  date: { type: Object, required: true },
  startTime: { type: Number, required: true },
  endTime: { type: Number, required: true },
  url: { type: String, required: true },
  categories: { type: [String] },
  eventName: { type: String, required: true },
  volunteers: { type: String },
});

module.exports = mongoose.model("Event", eventSchema);
