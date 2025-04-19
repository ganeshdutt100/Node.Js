const express = require("express");
const app = express();
const path = require("path");
const rootDir = require("./utils/pathUtils");

const homeRouter = require("./routes/homeRouter");

app.use(homeRouter);

app.listen(3004, () => {
  console.log("Server is listening on port 3004");
});
