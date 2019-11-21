const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// Matches with "/api/login"
router.route("/").get(loginController.logInUser);
// router.route("/").get(loginController.findAll);

// Matches /api/login/newadmin
router.route("/newadmin").post(loginController.newAdmin);



// Matches with "/api/admin/:id"
// router.route("/admin").post(loginController.findById);

module.exports = router;
