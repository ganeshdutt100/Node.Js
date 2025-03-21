const handleRequest = (req, res) => {
  console.log(req.url, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <h1>this is  a normal file </h1>
    `);
};

exports.handleRequest = handleRequest;
