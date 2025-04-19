const { outputRequest } = require("./output");
const requestHandler = (req, res) => {
  // console.log("file data loaded");
  // declayer for main file
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      `
      
      <h1>this is a request handler file </h1>
      <a href="/calculator">Calculator</a>
      
      `
    );
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <h1>this is a calculator page </h1>
      <form action="/calculator-result" method="POST">
        <input type="number" name="num1" placeholder="Enter first number">
        <select name="operator">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="number" name="num2" placeholder="Enter second number">
        <button type="submit">Calculate</button>
      </form>
    `);
    return res.end();
  } else if (req.url === "/calculator-result" && req.method === "POST") {
    outputRequest(req, res);
  }

  // 404 page
  else {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <h1>404 Page Not Found</h1>
      <p>The requested URL ${req.url} was not found.</p>
    `);
  }
};

exports.requestHandler = requestHandler;
