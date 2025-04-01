const path = require("path");
const rootDir = require("../utils/pathUtils");

const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "/html/home.html"));
});

module.exports = userRouter;
