const express = require("express");
const userRouter = express.Router();
const { UserModel } = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// SignUp API
userRouter.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  try {
    if (user) {
      res.status(400).send({ msg: "User already exists" });
    } else {
      bcrypt.hash(password, 5, async (err, hash) => {
        const data = new UserModel({ email, password: hash });
        await data.save();
        res.status(200).send({ msg: "User is registered" });
      });
    }
  } catch (err) {
    res.status(400).send({ msg: "Bad Request" });
  }
});

//SignIn API
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  try {
    if (user) {
      bcrypt.compare(password, user.password, async (err, result) => {
        if (result) {
          res.status(200).send({
            msg: "Login Successfull",
            token: jwt.sign({ userID: user._id }, "masai"),
          });
        } else {
          res.status(400).send({ msg: "Wrong Credentials" });
        }
      });
    } else {
      res.status(400).send({ msg: "Register first" });
    }
  } catch (err) {
    res.status(400).send({ msg: "Bad Request" });
  }
});

module.exports = { userRouter };
