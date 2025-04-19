const http = require("http");
const logical = require("./logical");
const printData = require("./printData");

const server = http.createServer((req, res) => {
  console.log(req.url, req.headersSent, req.method);
  logical();
  printData();
});

const PORT = 3009;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
