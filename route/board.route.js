const express = require("express");
const boardRouter = express.Router();
const { BoardModel } = require("../model/board.model");

//Get API
boardRouter.get("", async (req, res) => {
  try {
    const data = await BoardModel.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send({ msg: "Bad Request" });
  }
});

// Post API
boardRouter.post("", async (req, res) => {
  const payload = req.body;
  try {
    const data = new BoardModel(payload);
    await data.save();
    res.status(200).send({ msg: "Board data added" });
  } catch (err) {
    res.status(400).send({ msg: "Bad Request" });
  }
});

module.exports = { boardRouter };
