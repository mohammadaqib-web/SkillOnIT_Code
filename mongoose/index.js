const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./models/userModel");
// const { userModel } = require("./models/userModel");

const app = express();

const url =
  "mongodb+srv://mohdaqib918_db_user:Q6RbefrbTM766en4@cluster0.2kehpe7.mongodb.net/?appName=Cluster0";

async function DBConnect() {
  try {
    await mongoose.connect(url);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
}

async function createUser() {
  try {
    await userModel.create({
      firstName: "P",
      lastName: "Parker",
      phoneNumber: 9348573,
      password: "sdkjfhkj@ejhf2",
    });
    console.log("New user created");
  } catch (error) {
    console.log(error);
  }
}
// createUser();

// async function findUsers() {
//   try {
//     const users = await userModel.findOne({
//       phoneNumber: 9348573,
//     });
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// }
// findUsers();

async function updateUser() {
  try {
    const update = await userModel.findOneAndUpdate(
       "6a3fa213d420a60ed78a02d3" ,
      { $set: { phoneNumber: 1234567890 } },
    );
    console.log(update);
    
  } catch (error) {
    console.log(error);
  }
}

updateUser()

app.listen(5000, () => {
  console.log("Server is running on PORT 5000");
  DBConnect();
});
