const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("I am a middleware function");
  next();
});
app.use((req, res, next) => {
  console.log("I am a middleware function 1 or bar ");
  next();
});
app.get("/", (req, res) => {
  res.send("Hello World! i am Ganesh dutt ");
});
app.get("/about", (req, res, next) => {
  return next(new Error("error aa gya"));
  res.send("about page hain ye ");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

let port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
