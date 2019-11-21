const router = require("express").Router();
const scheduleRoutes = require("./schedule");
const loginRoutes = require("./login");
// Login routes
router.use("/login", loginRoutes);
router.use("/event", scheduleRoutes);

module.exports = router;
