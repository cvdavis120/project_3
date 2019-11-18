const mongoose = require("mongoose");

const { Schema } = mongoose;

const AdminSchema = new Schema({
  fullName: String,
  firstName: String,
  lastName: String,
  email: String,
  account_type: String,
  googleID: {
    type: Schema.Types.ObjectId,
    unique: true
  },
  super: { type: Boolean, required: true },
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  workSpace: { type: String },
  dateJoined: { type: Date, default: Date.now }
});

const Admin = mongoose.model("admin", AdminSchema);

module.exports = Admin;

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const AdminSchema = new Schema({
//   adminID: {
//     type: Schema.Types.ObjectId,
//     unique: true
//   },
//   super: { type: Boolean, required: true },
//   username: { type: String, required: true, index: { unique: true } },
//   password: { type: String, required: true },
//   workSpace: { type: String },
//   profile: {
//     firstName: { type: String },
//     lastName: { type: String },
//     email: { type: String }
//   },
//   dateJoined: { type: Date, default: Date.now }
// });

// const Admin = mongoose.model("admin", AdminSchema);

// module.exports = Admin;
