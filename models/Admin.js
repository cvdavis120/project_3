const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  adminID: {
    type: Schema.Types.ObjectId,
    unique: true
  },
  super: { type: Boolean, required: true },
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  workSpace: { type: String },
  profile: {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String }
  },
  dateJoined: { type: Date, default: Date.now }
});

const Admin = mongoose.model("admin", AdminSchema);

module.exports = Admin;
