const express = require("express");
const {
  userLogin,
  userSignup,
  userfInfo,
  getUsers,
} = require("../controllers/loginController");

const router = express.Router();

router.post("/login", userLogin);
router.post("/signup", userSignup);
router.get("/getinfo", userfInfo);
router.get("/getusers", getUsers)

module.exports = router;
