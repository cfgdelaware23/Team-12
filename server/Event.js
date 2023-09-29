// Creating a goose schema 

const mongoose = require("mongoose")

const eventSchema = new mongoos.schema({
    host: { type: User },
    mod: { type: User },
    streamer: { type: User },
    broadcaster: { type: User },
    description: { type: true, required: true},
    facilitator: { type: User },
    date: { type: String, required: true}    
})

module.exports = mongoose.model("Event", userSchema)

