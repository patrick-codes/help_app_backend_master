const asyncHandler = require("express-async-handler");
const userDetails = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { request } = require("express");

module.exports = {
  userLogin: asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({message:"All fields required ..!!"});      
      throw new Error("All fields required ..!!");
    }
    const user = await userDetails.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          user:{
            username: user.username,
            email: user.email,
            id: user.id
          }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "60m" }
      );
      res.status(200).json({ accessToken });
    } else {
      res.status(401).json({message:"Email or Password not Valid"});
      throw new Error("Email or Password not Valid");
    }
  }),

  userSignup: asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
  
    if (!username || !email || !password) {
      res.status(400).json({ message: "All fields are required..!!" });
      throw new Error("All fields are required..!!");
    }
  
    const userAvailable = await userDetails.findOne({ email });
    if (userAvailable) {
      res.status(401).json({ message: "User already Registered" });
      throw new Error("User already Registered");
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const user = await userDetails.create({
      username,
      email,
      password: hashedPassword,
    });
  
    if (user) {
      const accessToken = jwt.sign(
        {
          user: {
            username: user.username,
            email: user.email,
            id: user._id,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "60m" }
      );
  
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        accessToken,
      });
    } else {
      res.status(400).json({ message: "Details Not Valid" });
      throw new Error("Details Not Valid");
    }
  }),
  
  userfInfo: asyncHandler(async (req, res) => {
    res.status(200).send("current user info..");
  }),

  getUsers: asyncHandler(async (req, res)=>{
    const getusers = await userDetails.find();
    res.status(200).send(getusers);
  })
};
