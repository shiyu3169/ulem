var mongoose = require("mongoose");

var EventSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    start: String,
    end: String,
    venue: String,
    address: String
  },
  { collection: "event" }
);

module.exports = EventSchema;
