// Creating a goose schema

const mongoose = require("mongoose");

const emailSchema = new mongoos.schema({
  eventHappening: { type: event, type: boolean, required: true },
  
  
});

module.exports = mongoose.model("Email", emailSchema);
