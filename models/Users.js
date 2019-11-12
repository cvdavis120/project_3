//create a mongoose model class
const mongoose = require("mongoose")

const { Schema } = mongoose;

const UserSchema = new Schema({
  googleId: String,
  fullName: String,
  firstName: String,
  lastName: String,
  email: String,


})

mongoose.model("users", UserSchema)