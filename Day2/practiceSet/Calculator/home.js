const http = require("http");
const path = require("./calculatorLink");

const server = http.createServer(path);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
