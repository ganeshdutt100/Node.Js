const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
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
              margin-top: 1rem;
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
        
            <a href="/calculator" class="calculator-link">Open Calculator</a>
          </div>
        </body>
      </html>
      `);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
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
                text-align: center;
              }
              .input-group {
                margin-bottom: 1.5rem;
              }
              input[type="number"] {
                padding: 12px;
                border: 1px solid #ddd;
                border-radius: 4px;
                width: 100%;
                font-size: 16px;
                transition: border-color 0.3s;
              }
              input[type="number"]:focus {
                outline: none;
                border-color: #1a73e8;
              }
              input[type="number"]::placeholder {
                color: #757575;
              }
              button {
                background-color: #1a73e8;
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 4px;
                cursor: pointer;
                width: 100%;
                font-size: 16px;
                font-weight: 500;
                transition: background-color 0.3s;
              }
              button:hover {
                background-color: #1557b0;
              }
              h1 {
                color: #1a73e8;
                margin-bottom: 2rem;
                font-size: 1.8rem;
              }
            </style>
          </head>
          <body>
            <form class="calculator-form" action="/calculate" method="POST">
              <h1>Welcome to Calculator App</h1>
              <div class="input-group">
                <input type="number" name="num1" placeholder="Enter first number" required>
              </div>
              <div class="input-group">
                <input type="number" name="num2" placeholder="Enter second number" required>
              </div>
              <button type="submit">Calculate</button>
            </form>
          </body>
        </html>
        `
    );
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write(`
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
            .container {
              text-align: center;
              padding: 2rem;
              background-color: white;
              border-radius: 10px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            h1 {
              font-size: 6rem;
              color: #1a73e8;
              margin: 0;
            }
            p {
              font-size: 1.5rem;
              color: #5f6368;
              margin: 1rem 0;
            }
            a {
              display: inline-block;
              padding: 12px 24px;
              background-color: #1a73e8;
              color: white;
              text-decoration: none;
              border-radius: 5px;
              font-weight: bold;
              transition: background-color 0.3s;
            }
            a:hover {
              background-color: #1557b0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>404</h1>
            <p>Page Not Found</p>
            <a href="/">Go to Home</a>
          </div>
        </body>
      </html>
      `);
    return res.end();
  }
};

exports.requestHandler = requestHandler;
