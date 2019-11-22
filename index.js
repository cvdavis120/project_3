const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./server/config/keys.js");
const bodyParser = require("body-parser");

require("./models/Users");
require("./models/Admin");
require("./services/passport");
require("./models/Event")

const app = express();
//pass into the function the address of the mongo instance
mongoose.connect(keys.mongoURI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//generates a new application that represents a running express app
const routes = require("./routes");
app.use(routes);
//middleware, using cookies to handle authentication
app.use(
  //call cookieSession and provide a configuration object, 1st property is how long this cookie can exist in the browser before it expires.2nd property is a key that will be used to encrypt cookie
  cookieSession({
    //we want the cookie to last 45 days
    maxAge: 45 * 24 * 60 * 60 * 1000,
    //passed in from keys file
    keys: [keys.cookieKey]
  })
);

//tell passport to use cookies to manage authentication
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//valid JS. when we require the authRoutes file it returns a function and then we immediately call that function with the app object. app is passed into the arrow function, we attach the 2 route handlers to it
require("./routes/authRoutes")(app);

//Heroku will inject environment variables
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT);

// const express = require("express");

// const mongoose = require("mongoose");

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Define middleware here
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// // Add routes, both API and view

// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/adminsDB");

// // Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
