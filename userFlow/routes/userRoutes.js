const express = require("express");
const { signUp, logIn } = require("../controllers/userController");
const router = express.Router();

router.post("/signUp",signUp);
router.post("/login",logIn)

module.exports = router