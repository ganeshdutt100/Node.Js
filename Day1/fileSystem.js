const { isUtf8 } = require("buffer");
const fs = require("fs");

fs.readFile("./Day1/Files/example.txt", isUtf8, (err, data) => {
  if (err) {
    console.error("File read error: " + err);
    return;
  }
  console.log("File read successfully!" + data);
});
// fs.writeFileSync("./Day1/Files/example.txt", "Hello world!", (err) => {
//   if (err) {
//     console.error("File write error", err);
//     return;
//   }
//   console.log("File written successfully!");
// });
