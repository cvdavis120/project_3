//create a mongoose model class
const mongoose = require("mongoose")

const { Schema } = mongoose;

const UserSchema = new Schema({
  googleId: String,
  personsName: String

})

mongoose.model("users", UserSchema)