import axios from "axios";

export default {
  // Gets user login page
  userLogin: function () {
    return axios.get("/api/login");
  },

  //adds new user to db
  newUser: function () {
    return axios.post("api/newUser")
  }
};
