const express = require("express");
const router = express.Router();
const { registerUser,loginUser,updateUserProfile } = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");
router.post("/register", registerUser);
router.post("/login", loginUser);
router.route('/profile').post(protect,updateUserProfile)

module.exports = router;
