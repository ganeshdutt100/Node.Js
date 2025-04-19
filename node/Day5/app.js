const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.headersSent, req.method);
  res.setHeader("Content-Type", "text/html");
  res.write(
    `
        <html>
        <head>
        <title>My First Page</title>
        </head>
        <body>
        <h1>Hello from my Node.js Server!</h1>
        </body>
        </html>

        `
  );
  res.end();
});
const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
