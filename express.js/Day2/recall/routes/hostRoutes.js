const express = require("express");
const hostRouter = express.Router();
const path = require("path");
const rootDir = require("../utils/pathUtil");
const fs = require("fs");

hostRouter.get("/add-homes", (req, res, next) => {
  res.sendFile(path.join(rootDir, "View", "form.html"));
});

hostRouter.use(express.urlencoded());
hostRouter.post("/add-homes", (req, res, next) => {
  console.log(req.body);

  res.sendFile(path.join(rootDir, "View", "output.html"));
});

module.exports = hostRouter;
