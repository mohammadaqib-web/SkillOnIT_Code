const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (firstName.length < 3) {
      return res
        .status(400)
        .json({ message: "Minimum of 3 characters required for first name" });
    }
    if (lastName.length < 3) {
      return res
        .status(400)
        .json({ message: "Minimum of 3 characters required for last name" });
    }
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Email is not valid" });
    }
    if (password.length < 8) {
      return res.status(400).json({
        message: "Minimum of 8 letters/numbers required for password",
      });
    }

    const checkMail = await UserModel.findOne({ email });

    if (checkMail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 16);
    const newUser = await UserModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    if (!newUser) {
      return res.status(400).json({ message: "Error while creating user" });
    }

    return res.status(201).json({ message: "New user created", newUser });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Internal Server Error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email || !password || !emailRegex.test(email) || password.length < 8) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const user = await UserModel.findOne({email});
    if (!user) {
      return res.status(400).json({ message: "Invalid Password or Username" });
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(400).json({ message: "Invalid Password or Username" });
    }

    return res.status(200).json({ message: "Login Successful", user:{
      firstName:user.firstName,
      lastName:user.lastName,
      email:user.email,
      _id:user._id,
    } });
  } catch (error) {
    console.log(error);
    
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();

    if (users.length === 0) {
      return res.status(400).json({ message: "No users present in database" });
    }

    return res.status(200).json({ message: "Users found", users });
  } catch (error) {
    return res.status(400).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  loginUser
};
