const Event = require("../models/event");

// const { createError } = require("../utils/error");

//register
exports.getEvent = async (req, res, next) => {
  try {
    const event = await Event.find().populate("");
    res.status(200).json(event);
  } catch (err) {
    console.log(err);
  }
};

//login
exports.postEvent = async (req, res, next) => {
  console.log(req.body);
  const { title, description, label, day } = req.body;
  try {
    const event = new Event({
      title,
      description,
      label,
      day,
    });
    const saveEvent = await event.save();
    res.status(200).json(saveEvent);
  } catch (err) {
    console.log(err);
  }
};
