const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (username.length < 3) {
      return res
        .status(400)
        .json({ message: "Username atleast contain 3 letters" });
    }

    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Please provide valid email" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password should be atleast of 6 characters" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    if (!hashedPassword) {
      return res
        .status(400)
        .json({ message: "Error occured while creating user" });
    }

    const user = await UserModel.create({
      username,
      email,
      password: hashedPassword,
    });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Error occured while creating user" });
    }
    // console.log(user._id, user);
    // let id = user.id.replace("new ObjectId('", "");
    // id = user.id.replace("')", "");

    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    if (!token) {
      return res
        .status(400)
        .json({ message: "Error occured while creating user" });
    }
    return res.status(201).json({
      message: "User created successfully",
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and Password are mandatory" });
    }

    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid Email" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password should be atleast of 6 characters" });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email not registered with us" });
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    if (!token) {
      return res
        .status(400)
        .json({ message: "Error occured" });
    }

    return res.status(200).json({message:"Login Successful",token})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  signUp,
  logIn
};
