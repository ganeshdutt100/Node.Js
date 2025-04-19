const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("First middleware", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("second middleware", req.url, req.method);
  next();
});

// app.use((req, res, next) => {
//   console.log("third middleware", req.url, req.method);
//   res.send("i am third middleware");
//   next();
// });
app.get("/", (req, res) => {
  console.log("handling / for get ");
  res.send("Hello World!");
});
app.get("/contact-us", (req, res, next) => {
  //   console.log("handling / for get for contact us  ");
  res.send(`<h1>i am contact page </h1>

  <form action="/contact-us" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <br>
    <label for="gender">Gender:</label>
    <select id="gender" name="gender">
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
    <br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    <br>
    <input type="submit" value="Submit">
  </form>
    

    `);
});

app.post("/contact-us", (req, res, next) => {
  console.log("handling / for post for contact us  ", req.url, req.method);

  res.send("form submitted successfully");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`);
});
