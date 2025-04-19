const http = require("http");
const calculating = require("./calculatorLink");
const calculator = require("./calculatorPage");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    calculating(req, res);
  } else if (req.url === "/calculator") {
    calculator(req, res);
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
