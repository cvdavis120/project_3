//create a mongoose model class
const mongoose = require("mongoose")

const { Schema } = mongoose;

const UserSchema = new Schema({

  fullName: String,
  firstName: String,
  lastName: String,
  email: String,
  account_type: String


})

mongoose.model("users", UserSchema)