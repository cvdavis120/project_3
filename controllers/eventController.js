const db = require("../models");
// Defining methods for the UsersController

module.exports = {
  addEvent: function(req, res) {
    console.log(req.body);
    db.Event.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getAllEvents: function(req, res) {
    db.Event.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
