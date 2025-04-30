const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const [N, ...languages] = fileContent.toString().trim().split(/\r?\n/);

const result = findLanguageGroups(N, languages);
fs.writeFileSync("output.txt", result.toString());