const mongoose = require("mongoose")
const type = ""
const { Schema } = mongoose;

const EmployeeSchema = new Schema({

  fullName: String,
  firstName: String,
  lastName: String,
  email: String,
  accountType: String

})

mongoose.model("employee", EmployeeSchema)