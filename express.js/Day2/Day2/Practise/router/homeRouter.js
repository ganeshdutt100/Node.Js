const express = require("express");
const homeRouter = express.Router();
const path = require("path");
const rooDir = require("../utils/pathUtils");

homeRouter.get("/", (req, res) => {
  res.sendFile(path.join(rooDir, "html/home.html"));
});

module.exports = homeRouter;
