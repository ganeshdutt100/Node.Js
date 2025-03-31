const express = require("express");
const path = require("path");
const rootDir = require("../utils/pathUtil");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "View", "home.html"));
});

module.exports = userRouter;
