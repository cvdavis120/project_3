import axios from "axios";

export default {
  // Gets user login page
  userLogin: function(userData) {
    return axios.get("/api/login", userData);
  },

  //adds new user to db
  adminSignUp: function(userData) {
    return axios.post("/api/login/newadmin", userData);
  }
};
