var mongoose = require("mongoose");

var eventSchema = new mongoose.Schema({
    title: String,
    date: String,
    time: String,
    description: String,
    venue: String
},{ useNewUrlParser: true });

module.exports = mongoose.model("Event",eventSchema);