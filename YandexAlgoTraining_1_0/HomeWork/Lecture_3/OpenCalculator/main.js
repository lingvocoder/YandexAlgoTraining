const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const [nums, value] = fileContent.toString().split("\n");
const readInt = (param) => parseFloat(param);
const readArray = (seq, separator) => seq.trim().split(separator).map(value => Number(value));

function addKyeBoardButton(nums, value) {
    let keys = readArray(nums, ' ');
    let val = readInt(value).toString().split('');
    let keysTotal = {};
    let res = [];

    for (let i = 0; i < keys.length; i++) {
        if (!keysTotal.hasOwnProperty(keys[i])) {
            keysTotal[keys[i]] = 1;
        }
    }
    for (let j = 0; j < val.length; j++) {
        if (!keysTotal.hasOwnProperty(val[j])) {
            keysTotal[val[j]] = -1;
        }
    }

    for (const key in keysTotal) {
        if(keysTotal[key] < 0) {
            res.push(key);
        }
    }
    return res.length;

}


const result = addKyeBoardButton(nums, value);
fs.writeFileSync("output.txt", result.toString());