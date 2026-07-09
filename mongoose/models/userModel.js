const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: "String",
    required: true,
    minLength:3
  },
  lastName: {
    type: "String",
    required: true,
  },
  phoneNumber: {
    type: Number,
    unique: true,
    // required: true,
    min: 10
  },
  password: {
    type: "String",
    required: true,
  },
});

const userModel = mongoose.model("UserModel", userSchema);

module.exports = userModel;
