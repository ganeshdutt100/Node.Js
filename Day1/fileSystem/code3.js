const fs = require("fs");

// Append Data to a file------
fs.appendFile("./Day1/Files/example.txt", "This is appended data.", (err) => {
  if (err) throw err;
  console.log("Data appended successfully!");
});

// rename file
fs.rename(
  "./Day1/Files/example.txt",
  "./Day1/Files/RenameExample.txt",
  (err) => {
    if (err) throw err;
    console.log("File renamed successfully!");
  }
);
