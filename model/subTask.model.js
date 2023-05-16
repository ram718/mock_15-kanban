const mongoose = require("mongoose");

const subTaskSchema = mongoose.Schema(
  {
    title: String,
    isCompleted: Boolean,
  },
  { versionKey: false }
);

const SubTaskModel = mongoose.model("subTask", subTaskSchema);

module.exports = { SubTaskModel };
