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
  },

  addEvent: function(eventData) {
    console.log(eventData)
    return axios.post("/api/event/addevent", eventData);
  },

  getAllEvents: function(eventData) {
    console.log(eventData)
    return axios.get("/api/event/getallevents")
  }

};
