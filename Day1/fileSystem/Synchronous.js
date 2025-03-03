const fs = require("fs");

try {
  const data = fs.readFileSync("./Day1/Files/SyncFile.txt", "utf8");
  console.log("File read successfully: ", data);
} catch (err) {
  console.error("Error reading file: ", err);
}

// try {
//   const data = fs.writeFileSync(
//     "./Day1/Files/SyncFile.txt",
//     "Hello this message from SyncFile"
//   );
//   console.log("File created successfully!");
// } catch (err) {
//   console.error("Error writing file: ", err);
// }
