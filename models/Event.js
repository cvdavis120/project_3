const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: String,
  startDate: String,
  endDate: String,
  eventID: { type: String, index: { unique: true } },
  booked: false,
  user: String
});

module.exports = mongoose.model("event", EventSchema);
