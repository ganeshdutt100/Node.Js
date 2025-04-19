const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded());

app.get("/", (req, res, next) => {
  console.log("First middleware", req.url, req.method);
  res.send("<p>First Middleware</p>");
});
app.get("/form", (req, res, next) => {
  res.send(`
    <form action="/form" method="POST">
      <input type="text" name="username" placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
  `);
});
app.post("/form", (req, res, next) => {
  const username = req.body.username;
  console.log(username);

  res.send(`
    <p>Form submitted successfully!</p>
    <p>Welcome, ${username}! Thanks for submitting the form.</p>
  `);
});

app.listen(port);
