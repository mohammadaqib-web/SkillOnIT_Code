const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());

async function DB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    console.log("Database connected!");
  } catch (error) {
    console.log(error);
  }
}

app.use("/api/v1/user", userRoute);

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Server is running" });
});

app.listen(5000, () => {
  console.log("Server is running on PORT 5000");
  DB();
});
