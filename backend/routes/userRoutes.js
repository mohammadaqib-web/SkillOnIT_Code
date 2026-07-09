const express = require("express");
const { getUsers, getAllUsers } = require("../controllers/users");
const router = express.Router();

router.get("/", getUsers);
router.get("/allUsers", getAllUsers);

module.exports = router