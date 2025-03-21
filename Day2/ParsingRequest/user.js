const fs = require("fs");

const userRequestHandler = (req, res) => {
  if (req.url === "/") {
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
                background-color: #f5f5f5;
              }
              .form-container {
                background: white;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              }
              .form-group {
                margin-bottom: 20px;
              }
              label {
                display: block;
                margin-bottom: 5px;
                color: #333;
              }
              input[type="text"],
              input[type="email"],
              textarea {
                width: 100%;
                padding: 8px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 14px;
              }
              textarea {
                resize: vertical;
              }
              input[type="submit"] {
                background-color: #4CAF50;
                color: white;
                padding: 10px 20px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 16px;
              }
              input[type="submit"]:hover {
                background-color: #45a049;
              }
            </style>
          </head>
          <body>
            <div class="form-container">
              <form action="/submit" method="POST">
                <div class="form-group">
                  <label for="name">Name:</label>
                  <input type="text" id="name" name="name" required>
                </div>
                
                <div class="form-group">
                  <label for="email">Email:</label>  
                  <input type="email" id="email" name="email" required>
                </div>
                
                <div class="form-group">
                  <label for="message">Message:</label>
                  <textarea id="message" name="message" rows="4"></textarea>
                </div>
                
                <input type="submit" value="Submit">
              </form>
            </div>
          </body>
        </html>
            `);
    return res.end();
  }

  //   start congrats submit form
  else if (req.url.toLowerCase() === "/submit" && req.method === "POST") {
    // user se data file main save karna

    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);

      // Add error handling for file writing
      try {
        const params = new URLSearchParams(parsedBody);
        const bodyObject = Object.fromEntries(params);
        console.log(bodyObject);
        fs.writeFileSync(
          "./Day2/userInput/userData.json",
          JSON.stringify(bodyObject)
        );

        // Move the response inside the end event handler
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
                        background-color: #f0f8f0;
                      }
                      .success-container {
                        text-align: center;
                        padding: 40px;
                        background: white;
                        border-radius: 10px;
                        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                        max-width: 500px;
                        width: 90%;
                      }
                      .success-icon {
                        color: #4CAF50;
                        font-size: 64px;
                        margin-bottom: 20px;
                      }
                      h1 {
                        color: #2e7d32;
                        margin-bottom: 15px;
                      }
                      p {
                        color: #666;
                        font-size: 18px;
                        line-height: 1.6;
                        margin-bottom: 25px;
                      }
                      .back-button {
                        background-color: #4CAF50;
                        color: white;
                        padding: 12px 25px;
                        text-decoration: none;
                        border-radius: 5px;
                        font-size: 16px;
                        transition: background-color 0.3s;
                      }
                      .back-button:hover {
                        background-color: #45a049;
                      }
                    </style>
                  </head>
                  <body>
                    <div class="success-container">
                      <div class="success-icon">✓</div>
                      <h1>Thank You!</h1>
                      <p>Your message has been successfully submitted. We appreciate your feedback and will get back to you soon.</p>
                      <a href="/" class="back-button">Back to Home</a>
                    </div>
                  </body>
                </html>
                `);
        res.end(); // Add res.end() here
      } catch (error) {
        console.error("Error processing form data:", error);
        res.statusCode = 500;
        res.end("Internal Server Error");
      }
    });

    // Remove the response code from here as it's moved inside the end event handler
    return; // Add return statement to prevent further execution
  }

  //   now starting else condtion
  else {
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
                  background-color: #f5f5f5;
                }
                .container {
                  text-align: center;
                  padding: 40px;
                  background: white;
                  border-radius: 10px;
                  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }
                h1 {
                  font-size: 72px;
                  margin: 0;
                  color: #333;
                }
                p {
                  color: #666;
                  font-size: 18px;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <h1>404</h1>
                <p>Page Not Found</p>
              </div>
            </body>
          </html>
        `);
    res.end();
  }
};

module.exports = userRequestHandler;
