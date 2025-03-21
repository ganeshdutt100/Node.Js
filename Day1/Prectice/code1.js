// const fs = require("fs");

// fs.writeFile(
//   "./Day1/Prectice/files/fileData.txt",
//   "Hello this is from node js ",
//   (err) => {
//     if (err) throw err;
//     console.log("File created successfully!");
//   }
// );

// fs.readFile("./Day1/Prectice/files/fileData.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("File read successfully: ", data);
// });

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.headersSent, req.method);

  res.setHeader("Content-Type", "text/html");
  res.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Form</title>
    </head>
    <body>
      <form action="/submit" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br><br>
        <label for="gender">Gender:</label>
        <select id="gender" name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select><br><br>
        <input type="submit" value="Submit">
      </form>
    </body>
    </html>
  `);
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
