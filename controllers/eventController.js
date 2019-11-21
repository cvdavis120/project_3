const db = require("../models");
// Defining methods for the UsersController

module.exports = {
  addEvent: function(req, res) {
    db.Event.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
