const express = require("express");
const upload = require("../middlewares/upload");
const { uploadImageCon } = require("../controllers/imageController");
const router = express.Router();

router.post("/", upload.single("image"), uploadImageCon);

module.exports = router;
