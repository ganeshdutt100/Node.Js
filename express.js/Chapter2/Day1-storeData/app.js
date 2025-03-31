const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// landing page
app.get("/", (req, res) => {
  console.log("handling / for get ");
  res.send(`
     <h1>Welcome to Home Page</h1>
    <a href="/contact-us"><button>Contact Us</button></a>
    `);
});

// contact form
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

// data boyd chunks
app.use(bodyParser.urlencoded());

// process form data
app.post("/contact-us", (req, res, next) => {
  console.log(
    "handling / for post for contact us  ",
    req.url,
    req.method,
    req.body
  );
  res.send(`
    <h1> We will contact you Shortly </h1>
    <button><a href="/">Back to Home</a></button>
    `);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`);
});
