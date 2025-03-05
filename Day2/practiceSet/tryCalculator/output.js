const fs = require("fs");
const outputRequest = (req, res) => {
  console.log("Request received:", req.method, req.url);

  const body = [];
  req.on("data", (chunk) => body.push(chunk));
  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    // console.log("Request body:", body);

    const params = new URLSearchParams(bodyStr);
    console.log("Request params:", params);

    const bodyObject = Object.fromEntries(params);
    console.log("Request body object:", bodyObject);

    const result = Number(bodyObject.num1) + Number(bodyObject.num2);
    console.log("OutPut : ", result);
    try {
      fs.writeFileSync(
        "calculatorData.txt", // Simplified path
        JSON.stringify(bodyObject)
      );
      console.log("File written successfully");
    } catch (error) {
      console.error("Error writing file:", error);
    }
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <h1>${result}</h1>
        `);
    return res.end();
  });
};
exports.outputRequest = outputRequest;
