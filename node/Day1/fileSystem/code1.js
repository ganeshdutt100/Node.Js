const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head>
        <title>My Server</title>
      </head>
      <body>
        <h1>Welcome to my Server!</h1>
        <p>This is a simple server created using Node.js.</p>
      </body>
    </html>
  `);
  res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
