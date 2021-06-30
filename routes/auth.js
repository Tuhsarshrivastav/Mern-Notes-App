const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/authController");
router.route("/register", registerUser).post();

module.exports = router;
