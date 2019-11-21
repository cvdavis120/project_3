import axios from "axios";

export default {
  // Gets user login page
  userLogin: function(userData) {
    console.log(userData);
    return axios.post("/api/login/checkLoggedIn", userData);
  },

  //adds new user to db
  adminSignUp: function(userData) {
    console.log(userData);
    return axios.post("/api/login/newadmin", userData);
  }
};
