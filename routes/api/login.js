const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// Matches with "/api/login"
router.route("/").get(loginController.findAll);

// Matches /api/newuser
router.route("/newuser").post(loginController.newUser);

// Matches with "/api/login/:id"

module.exports = router;
