const calculator = (req, res) => {
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
              .calculator-form {
                background: white;
                padding: 2rem;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              }
              .input-group {
                margin-bottom: 1rem;
              }
              input[type="number"] {
                padding: 8px;
                border: 1px solid #ddd;
                border-radius: 4px;
                width: 200px;
              }
              button {
                background-color: #1a73e8;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 4px;
                cursor: pointer;
                width: 100%;
              }
              button:hover {
                background-color: #1557b0;
              }
            </style>
          </head>
          <body>
            <form class="calculator-form" action="/calculate" method="POST">
              <div class="input-group">
                <input type="number" name="num1" placeholder="Enter first number" required>
              </div>
              <div class="input-group">
                <input type="number" name="num2" placeholder="Enter second number" required>
              </div>
              <button type="submit">Calculate Sum</button>
            </form>
          </body>
        </html>
        `
  );
  res.end();
};

module.exports = calculator;
