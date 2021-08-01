const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
  console.log(req.body);
  //create a user
  const user = {
    name: req.body.name,
    email: req.body.email,
  };
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    return res.status(200).json({ user: user });
  } catch (error) {
    res.send("Failed");
  }
};
