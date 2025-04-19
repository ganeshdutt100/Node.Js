const sumRequestHandler = (req, res) => {
  console.log("In sum request handler", req.url);

  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });

  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);

    const boydObj = Object.fromEntries(params);
    console.log(boydObj);
    const result = Number(boydObj.num1) + Number(boydObj.num2);
    console.log(result);

    res.setHeader("Content-Type", "text/html");
    res.write(
      `
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                background-color: #f0f2f5;
              }
              .result-container {
                background: white;
                padding: 2rem;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                text-align: center;
              }
              .result {
                font-size: 3rem;
                color: #1a73e8;
                margin: 1rem 0;
              }
              .back-button {
                display: inline-block;
                padding: 12px 24px;
                background-color: #1a73e8;
                color: white;
                text-decoration: none;
                border-radius: 4px;
                font-weight: 500;
                transition: background-color 0.3s;
              }
              .back-button:hover {
                background-color: #1557b0;
              }
            </style>
          </head>
          <body>
            <div class="result-container">
              <h2>Result</h2>
              <h2>The sum of ${boydObj.num2} and ${boydObj.num1}, </h2>
            
              <div class="result">${result}</div>
              <a href="/calculator" class="back-button">Calculate Again</a>
            </div>
          </body>
        </html>
      `
    );

    return res.end();
  });
};
exports.sumRequestHandler = sumRequestHandler;
