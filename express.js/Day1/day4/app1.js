// External Module
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded data

app.get("/", (req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);
  //res.send("<p>Came from First Middleware</p>");
  next();
});

app.get("/submit-details", (req, res) => {
  console.log("Came in GET /submit-details", req.url, req.method);
  res.send(`
    <form action="/submit-details" method="POST">
      <input type="text" name="username" placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
  `);
});
app.post("/submit-details", (req, res, next) => {
  const username = req.body.username;
  console.log("Came in POST /submit-details", req.url, req.method);
  console.log("Submitted Username:", username);
  res.send(`<p>Welcome, ${username}! Thanks for submitting the form.</p>`);
});

app.use("/", (req, res, next) => {
  console.log("Came in another middleware", req.url, req.method);
  res.send("<p>Came from another Middleware</p>");
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
