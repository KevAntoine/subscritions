const { registerUser } = require("../controllers/userController");
const User = require("../models/User");
var express = require("express");
var router = express.Router();

router.get("/", async (req, res) => {
  const subscribers = await User.find({});
  res.status(200).json(subscribers);
});
router.post("/register", registerUser, function (req, res, next) {});

module.exports = router;

