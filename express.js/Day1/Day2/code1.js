const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("Hello, World! ");
});
app.get("/about", (req, res) => {
  res.send("Hello, about! ");
});
app.get("/contact", (req, res) => {
  res.send("Hello, contact! ");
});
app.get("/project", (req, res) => {
  res.send("Hello, project! ");
});
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
