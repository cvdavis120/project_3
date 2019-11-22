const router = require("express").Router();
const eventController = require("../../controllers/eventController");

// for /api/event/addevent
router.route("/addevent").post(eventController.addEvent);

router.route("/getallevents").get(eventController.getAllEvents);

module.exports = router;
