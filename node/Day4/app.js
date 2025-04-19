const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.headersSent, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
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
      `);
  } else if (req.url === "/submit" && req.method === "POST") {
    let body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      // console.log(body);
    });

    req.on("end", () => {
      let data = Buffer.concat(body).toString();
      console.log(data);

      try {
        let parsedData = new URLSearchParams(data);
        let obj = Object.fromEntries(parsedData);
        console.log(obj);

        fs.writeFileSync(
          "./Day1/parsingRequest/userResponse/userData.json",
          JSON.stringify(obj)
        );

        res.setHeader("Content-Type", "text/html");
        res.write(`
          <h1>Form submitted successfully</h1>
        `);
      } catch (err) {
        console.error("Error parsing data: ", err);
      }
    });
  }
});

server.listen(3000, () => {
  console.log("Server is running  at http://localhost:3000");
});
