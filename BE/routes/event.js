const express = require("express");
const { getEvent, postEvent } = require("../controllers/event");

const router = express.Router();

//REGISTER
router.get("/", getEvent);

//LOGIN
router.post("/", postEvent);

module.exports = router;
