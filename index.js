const express = require("express");
const app = express();
const { connection } = require("./db");
require("dotenv").config();
const cors = require("cors");
const { userRouter } = require("./route/user.route");
const { boardRouter } = require("./route/board.route");
const { taskRouter } = require("./route/task.route");

app.use(express.json());
app.use(cors());

app.use("", userRouter);
app.use("/board", boardRouter);
app.use("/task", taskRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log(`App is running at port ${process.env.port}`);
  } catch (err) {
    console.log(err);
  }
});
