const express = require("express");
const app = express();
const port = 3000;

// userRoutee
const userRouter = require("./router/userRouter");
const hostRouter = require("./router/hostRouter");
const path = require("path");

app.use(express.urlencoded());

app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "./html/pageNotFound.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port at http://localhost:${port}`);
});
