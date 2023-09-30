// Creating a goose schema

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isHost: { type: Boolean, required: true },
  totalHours: { type: Number, required: true },
});

module.exports = mongoose.model("User", userSchema);
