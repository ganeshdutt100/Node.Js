const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// check karna hain code
app.get("/", (req, res) => {
  fs.readdir(`./files`, (err, files) => {
    if (err) {
      console.log(err);
      return res.render("index", { files: [] }); // fallback to empty array
    }
    res.render("index", { files });
  });
});

app.post("/create", (req, res) => {
  //   console.log(req.body);
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.details,
    (err) => {
      if (err) {
        console.log(err);
      }
      res.redirect("/");
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`);
});
