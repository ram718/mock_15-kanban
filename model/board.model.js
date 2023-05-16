const mongoose = require("mongoose");

const boardSchema = mongoose.Schema(
  {
    name: String,
    tasks: [],
  },
  { versionKey: false }
);

const BoardModel = mongoose.model("board", boardSchema);

module.exports = { BoardModel };
