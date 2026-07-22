const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const imageRoutes = require("./routes/imageRoutes");

app.use(express.json());
app.use(cors());

app.use("/imageUpload", imageRoutes);

async function DB() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database connected");
}

app.listen(5000, () => {
  console.log("Server is running onn PORT 5000");
  DB();
});
