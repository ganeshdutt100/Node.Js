const calculatePage = "./calculatorPage.js";
const calculating = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f2f5;
          }
          .container {
            text-align: center;
            padding: 2rem;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          h1 {
            color: #1a73e8;
            margin-bottom: 1rem;
          }
          .calculator-link {
            display: inline-block;
            padding: 12px 24px;
            background-color: #1a73e8;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            transition: background-color 0.3s;
          }
          .calculator-link:hover {
            background-color: #1557b0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome to Calculator App</h1>
          <p>Click below to start calculating!</p>
          <a href="/calculatorPage.js" class="calculator-link">Open Calculator</a>
        </div>
      </body>
    </html>
    `);
  res.end();
};

module.exports = calculating;
