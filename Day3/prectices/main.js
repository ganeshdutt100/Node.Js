const http = require("http");
const { handlerRequest } = require("./handler");

const server = http.createServer(handlerRequest);
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
