// Creating a goose schema

const mongoose = require("mongoose");

const userSchema = new mongoos.schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  // unique email
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: Number, required: true },
  isHost: { type: Boolean, required: true },
  totalHours: { type: Number, required: true },
  

});

module.exports = mongoose.model("User", userSchema);
