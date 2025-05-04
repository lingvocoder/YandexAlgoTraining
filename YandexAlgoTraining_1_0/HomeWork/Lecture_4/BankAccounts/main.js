const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const [n, c, k, p] = fileContent.toString().trim().split(/\r?\n/);


const result = calcKeyboardResource1(n, c, k, p);
fs.writeFileSync("output.txt", result.toString());