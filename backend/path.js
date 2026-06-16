const path = require("path");

let pathCreated = path.join("Sample", "script.js");
console.log(pathCreated);

let ext = path.extname("new.js");
// if (ext != ".pdf") {
//   return console.log("File is not in pdf format");
// }

let dir = path.dirname("fs.js")
console.log(dir);

let base = path.basename("fs.js")
console.log(dir);

