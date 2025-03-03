const fs = require("fs");

// Append Data to a file------
fs.appendFile("./Day1/Files/example.txt", "This is appended data.", (err) => {
  if (err) throw err;
  console.log("Data appended successfully!");
});
