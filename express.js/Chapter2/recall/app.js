const express = require("express");
const userRouter = require("./routes/userRoutes");
const hostRouter = require("./routes/hostRoutes");
const app = express();
const port = 3003;

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
app.use(userRouter);
app.use(hostRouter);

app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`);
});
