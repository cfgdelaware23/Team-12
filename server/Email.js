// Creating a goose schema

const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  eventHappening: { type: event, type: boolean, required: true },
  
  
});

module.exports = mongoose.model("Email", emailSchema);
