const router = require("express").Router();
const scheduleRoutes = require("./schedule");

// Login routes
router.use("/login", loginRoutes);
router.use("/event", scheduleRoutes);

module.exports = router;
