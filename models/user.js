const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now },
  profile: {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String }
  }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
