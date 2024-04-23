const express = require("express");
const {
  getEvents,
  getSingleEvent,
  postEvent,
  updateEvent,
  deleteEvent,
  newInfo,
  
} = require("../controllers/mainController");
const router = express.Router();

router.get("/", getEvents);
router.get("/:id", getSingleEvent);
router.post("/",postEvent)
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);
router.get("/info",newInfo);

module.exports = router;
