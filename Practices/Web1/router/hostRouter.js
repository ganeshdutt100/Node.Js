const express = require("express");
const { url } = require("inspector");
const path = require("path");
const hostRouter = express.Router();

hostRouter.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../html/form.html"));
});
hostRouter.post("/contact-us", (req, res, next) => {
  console.log(req.body);

  res.sendFile(path.join(__dirname, "../html/successFile.html"));
});

module.exports = hostRouter;
