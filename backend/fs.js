const fs = require("fs");

fs.readFile("test.txt", "utf-8", (err, data) => {
  if (err) {
    return console.log("Error:", err);
  }
  console.log(data);
});

fs.writeFile("test.txt", `My name is John`, (err) => {
  if (err) return console.log(err);
  console.log("File written");
});

fs.appendFile("test.txt", "New line appended", (err) => {
  if (err) return console.log(err);
  console.log("File written");
});

fs.unlink("test.txt", (err) => {
  if (err) return console.log(err);
  console.log("File deleted successfully");
});

fs.rename("test.txt", "new.txt", (err) => {
  if (err) return console.log(err);
  console.log("File renamed successfully");
});

fs.mkdir("sample", (err) => {
  if (err) return console.log(err);
  console.log("Folder created");
});

fs.rmdir("sample", (err) => {
  if (err) return console.log(err);
  console.log("Folder deleted");
});
