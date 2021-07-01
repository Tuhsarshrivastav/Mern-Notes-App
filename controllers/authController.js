const Auth = require("../models/authModel");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
module.exports.registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  if (!name | !email | !password | !pic) {
    return res.status(402).json({
      status: false,
      message: "Please fill all the fields",
    });
  }
  const userExists = await Auth.findOne({ email });
  if (userExists) {
    return res.status(400).json({
      status: false,
      message: "User already exists",
    });
  }
  const user = await Auth.create({
    name,
    email,
    password,
    pic,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    return res.status(400).json({
      status: false,
      message: "Something went wrong",
    });
  }
});
module.exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await Auth.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    return res.status(400).json({
      status: false,
      message: "Something went wrong",
    });
  }
});
module.exports.updateUserProfile = asyncHandler(async (req, res) => {
  const user = await Auth.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.pic = req.body.pic || user.pic;

    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      pic: updatedUser.pic,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404).json({
      status: false,
      message: "User not found",
    });
  }
});
