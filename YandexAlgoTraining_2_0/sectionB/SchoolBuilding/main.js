const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
const [N, nums] = fileContent.toString().split("\n");
const readInt = (param) => parseFloat(param);
const readArray = (seq, separator) => seq.trim().split(separator).map(value => Number(value));

function getSchoolCoords(n, array) {
    let housesNums = readArray(array, ' ');
    let len = readInt(n);
    return housesNums[Math.floor(len / 2)];
}


const result = getSchoolCoords(N, nums);
fs.writeFileSync("output.txt", result.toString());
