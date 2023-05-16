const express = require("express");
const taskRouter = express.Router();
const { TaskModel } = require("../model/task.model");

// Post API
taskRouter.post("", async (req, res) => {
  const payload = req.body;
  try {
    const data = new TaskModel(payload);
    await data.save();
    res.status(200).send({ msg: "Task added" });
  } catch (err) {
    res.status(400).send({ msg: "Bad Request" });
  }
});

// Get API
taskRouter.get("", async (req, res) => {
  try {
    const data = await TaskModel.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send({ msg: "Bad Request" });
  }
});

module.exports = { taskRouter };
