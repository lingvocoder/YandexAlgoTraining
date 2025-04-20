const fs = require('fs');
const fileContent = fs.readFileSync( "input.txt", "utf8");
const strArr = fileContent.toString().trim().split(/[ \n|\r]+/);

const result = countUniqueWords(strArr);
fs.writeFileSync("output.txt", result.toString());

function countUniqueWords(strArr) {
    let hashMap = {};
    for (let i = 0; i < strArr.length; i++) {
        if (!hashMap.hasOwnProperty(strArr[i]) && strArr[i].length) {
            hashMap[strArr[i]] = 1;
        }
    }
    return Object.keys(hashMap).length;
}
