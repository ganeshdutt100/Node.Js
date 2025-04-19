//  core module
const path = require("path");
// external modules
const express = require("express");

//local modules
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");

// Local Modules
// const hostRouter = require("");
const app = express();
const port = 3000;

// Middleware chunks
app.use(express.urlencoded());
// Routes
app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port at http://localhost:${port}`);
});
