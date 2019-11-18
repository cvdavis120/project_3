import axios from "axios";

export default {
  // Gets user login page
  userLogin: function(userData) {
    return axios.get("/api/login", userData);
  },

  //adds new user to db
  newUser: function(userData) {
    return axios.post("/api/newuser", userData);
  }
};
