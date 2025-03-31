const path = require("path");

const express = require("express");
const hostRouter = express.Router();

// local modules
const rootDir = require("../utils/pathUtil.js");

hostRouter.get("/add-homes", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "addHome.html"));
});
hostRouter.post("/add-homes", (req, res, next) => {
  console.log(req.body);

  // res.sendFile(path.join(__dirname, "../", "views", "homeAdded.html"));
  res.sendFile(path.join(rootDir, "views", "homeAdded.html"));
});
module.exports = hostRouter;
