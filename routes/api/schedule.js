const router = require("express").Router();
const eventController = require("../../controllers/eventController");

// for /api/event/addevent
router.route("/addevent").get(eventController.addEvent);

module.exports = router;
