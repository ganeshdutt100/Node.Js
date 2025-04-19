const express = require("express");
const contactRouter = express.Router();
const path = require("path");
const rooDir = require("../utils/pathUtils");

contactRouter.get("/", (req, res) => {
  res.sendFile(path.join(rooDir, "html/contact-us.html"));
});

module.exports = contactRouter;
