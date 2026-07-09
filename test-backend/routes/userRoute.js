const express = require("express");
const {
  createUser,
  getAllUsers,
  loginUser,
} = require("../controllers/userController");
const router = express.Router();

router.post("/", createUser);
router.post("/login", loginUser);
router.get("/getAllUsers", getAllUsers);

module.exports = router;
