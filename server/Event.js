// Creating a goose schema

const mongoose = require("mongoose");

const eventSchema = new mongoos.schema({
  host: { type: User },
  mod: { type: User },
  streamer: { type: User },
  broadcaster: { type: User },
  facilitator: { type: User },
  description: { type: String, required: true },
  date: { type: String, required: true },
});

module.exports = mongoose.model("Event", eventSchema);
