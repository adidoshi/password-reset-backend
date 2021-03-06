const express = require("express");
const router = express.Router();

const {
  register,
  login,
  forgetPassword,
  resetPassword,
} = require("../controllers/auth");

router.post("/register", register);

router.post("/login", login);

router.post("/forgotpassword", forgetPassword);

router.put("/resetpassword/:resetToken", resetPassword);

module.exports = router;
