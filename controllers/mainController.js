//@added asyncHandler to handle the async errors
//without neccesary writing a Throw Catch Function
const asyncHandler = require("express-async-handler");
const pageevents = require("../models/eventsModel");


module.exports = {
  getEvents: asyncHandler(async (req, res) => {
    const events = await pageevents.find();
    res.status(200).json(events);
  }),

  getSingleEvent: asyncHandler(async (req, res) => {
    const events = await pageevents.findById(req.params.id);

    if (!events) {
      res.status(404);
      throw new Error("events Not Found");
    }
    res.status(200).json(events);
  }),


  postEvent: asyncHandler(async (req, res) => {
    //console.log(req.body);
    const { title, subtitle, date, venue } = req.body;
    if (!title || !subtitle || !date || !venue) {
      res.status(400);
      throw new Error("All fields are mandatory");
    }
    const events = await pageevents.create({
      title,
      subtitle,
      date, 
      venue,
    });
    res.status(200).json(events);
  }),

  updateEvent: asyncHandler(async (req, res) => {
    const events = await pageevents.findById(req.params.id);
    if (!events) {
      res.status(404);
      throw new Error("events Not Found");
    }
    const updateEvent = await pageevents.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updateEvent);
  }),

  deleteEvent: asyncHandler(async (req, res) => {
    const events = await pageevents.findById(req.params.id);
    if (!events) {
      res.status(404);
      throw new Error("events Not Found");
    }
    await pageevents.deleteOne();
    res.status(200).json(events);
  }),

  newInfo: asyncHandler(async (req, res) => {
    res.status(200).json({ 
      id: "345",
      title: "Boateng Patrick",
      department: "ITE",
      level: "300",
      message: "Infomation Succesfully Fetched" });
  }),
};
