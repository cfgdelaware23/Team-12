// Creating a goose schema

const mongoose = require("mongoose");

const emailListSchema = new mongoose.Schema({
    emailAddress: { type: String, required: true, unique: true },
    subscribed: { type: boolean },
    
    
});

module.exports = mongoose.model("EmailList", emailSchema);
