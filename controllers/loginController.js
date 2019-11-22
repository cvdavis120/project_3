const db = require("../models");
// Defining methods for the UsersController

module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  newAdmin: function(req, res) {
    console.log(req.body);
    db.Admin.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  logInUser: function(req, res) {
    // console.log("login user req data: ", req.body);
    db.Admin.findOne({ email: req.body.username })
      .then(data => {
        if (
          data.email === req.body.username &&
          data.password === req.body.password
        ) {
          res.json(data);
        } else {
          console.log("nooo");
        }
      })
      .catch(err => res.status(422).json(err));
  }
};
