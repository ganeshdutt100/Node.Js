const fs = require("fs");

fs.readFile("./Day1/Files/code2File.txt", "utf8", (err, data) => {
  if (err) {
    console.error("File read error: " + err);
    return;
  }
  console.log(data);
});
fs.writeFile("./Day1/Files/code2File.txt", "hey i am Ganesh Dutt", (err) => {
  if (err) throw err;
  console.log("File created successfully!");
});
