const fs = require('fs');
const fileContent = fs.readFileSync( "input.txt", "utf8");
const str = fileContent.toString().trim().split(/[ \n]+/);

function countUniqueWords(strArr) {
    let hashMap = {};
    for (let i = 0; i < strArr.length; i++) {
        if (!hashMap.hasOwnProperty(strArr[i]) && strArr[i].length) {
            hashMap[strArr[i]] = 1;
        }
    }
    return Object.keys(hashMap).length;
}


const result = countUniqueWords(str);
fs.writeFileSync("output.txt", result.toString());