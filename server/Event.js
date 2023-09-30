// Creating a goose schema

const mongoose = require("mongoose");

const eventSchema = new mongoos.schema({
  host: { type: User },
  mod: { type: User },
  streamer: { type: User },
  broadcaster: { type: User },
  description: { type: String, required: true },
  facilitator: { type: User },
  date: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  url: { type: String, required: true },
  categories: { type: [String] },
  eventName: { type: String, required: true },
});

module.exports = mongoose.model("Event", eventSchema);
