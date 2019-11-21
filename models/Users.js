//create a mongoose model class
const mongoose = require("mongoose")

const { Schema } = mongoose;

const UserSchema = new Schema({

  email: String,
  account_type: String,
  firstName: String,
  lastName: String,
  fullName: String,
  dateJoined: String

})

mongoose.model("users", UserSchema)