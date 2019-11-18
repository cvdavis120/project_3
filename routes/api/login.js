const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// Matches with "/api/login"
router.route("/").get(loginController.logInUser);

// Matches /api/newuser
router.route("/newuser").post(loginController.newUser);

// Matches with "/api/admin/:id"
// router.route("/admin").post(loginController.findById);

module.exports = router;
