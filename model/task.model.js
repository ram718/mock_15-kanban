const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    status: { type: String, enum: ["Todo", "Doing", "Done"], default: "Todo" },
    subtasks: [],
  },
  { versionKey: false }
);

const TaskModel = mongoose.model("task", taskSchema);

module.exports = { TaskModel };
