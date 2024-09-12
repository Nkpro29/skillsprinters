import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};

const signUp = async (req, res) => {
  try {
    const { name, password, confirmPassword, email, role } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({
        status: "fail",
        message: "password not matched.",
      });
    }

    let user = await User.findOne({ email });
    if (user != null) {
      return res.status(400).json({
        status: "fail",
        message: "user is already registered.",
      });
    }
    console.log("user==>", user);

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashpasword ==> ", hashedPassword);
    const newUser = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
      role: role,
    });

    console.log("newUser ==>", newUser);

    const token = signToken(email);
    console.log("token ==> ", token);

    return res.status(200).json({
      status: "success",
      message: "user registered successfully.",
      token: token,
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "internal server error",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "please enter email and password.",
      });
    }

    const user = await User.findOne({ email }).select("+password"); // check the user on the basis of email.
    const correctPassword = await bcrypt.compare(`${password}`, user.password);
    if (!user || !correctPassword) {
      return res.status(401).json({
        status: "fail",
        message: "incorrect email or password",
      });
    }
    const token = signToken(email);

    return res.status(200).json({
      status: "success",
      message: "user logged in successfully.",
      token: token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "fail",
      message: "internal server error",
      error: error,
    });
  }
};

const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `User role:${req.user.role} is not authorized to access this route`,
      });
    }
    next();
  };
};

export default { signUp, login };
