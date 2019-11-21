const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  fullName: String,
  firstName: String,
  lastName: String,
  email: { type: String, index: { unique: true } },
  account_type: String,
  super: { type: Boolean },
  username: { type: String, index: { unique: true } },
  password: { type: String },
  workSpace: { type: String },
  dateJoined: { type: Date, default: Date.now },
  sessions: 0,
  startingWeight: 0,
  currentWeight: 0,
  goalWeight: 0,
  notes: String
});

module.exports = mongoose.model("admin", AdminSchema);
