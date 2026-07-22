const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoute");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/post", postRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

async function dbConnection() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
}

app.listen(5000, () => {
  console.log("Server is runnning on PORT 5000");
  dbConnection();
});
