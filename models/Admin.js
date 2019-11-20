const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  fullName: String,
  firstName: String,
  lastName: String,
  email: String,
  account_type: String,
  super: { type: Boolean },
  username: { type: String, index: { unique: true } },
  password: { type: String },
  workSpace: { type: String },
  dateJoined: { type: Date, default: Date.now }
});

module.exports = mongoose.model("admin", AdminSchema);
