const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const [nums, value] = fileContent.toString().trim().split("\n");
const readInt = (param) => parseFloat(param);
const readArray = (seq, separator) => seq.trim().split(separator).map(value => Number(value));

//57ms, 5.27Mb
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
        if (keysTotal[key] < 0) {
            res.push(key);
        }
    }
    return res.length;

}
//51ms, 5.29Mb
function addKyeBoardButton1(nums, value) {
    let keys = Number(nums.split(' ').join(''));
    let number = Number(value);
    let resArr = [];
    let countArr = new Array(10).fill(0);

    for (let j = 0; j < countArr.length; j++) {
        while (keys > 0) {
            let lastDigit = keys % 10;
            countArr[lastDigit]++;
            keys = Math.floor(keys / 10);
        }
    }
    let numberStr = number.toString().split('').map(value => Number(value));

    //Хотя здесь сложность O(n^2), но оба массива короткие (10 символов и 5 символов соответственно), поэтому алгоритм не потеряет в скорости
    for (let i = 0; i < countArr.length; i++) {
        let currIdx = 0;
        if (countArr[i] !== 0) {
             currIdx = numberStr.indexOf(i);
            if (currIdx !== -1) {
                numberStr.splice(currIdx, 1);
                i--;
            }
        }
    }

    for (let j = 0; j < numberStr.length; j++) {
        if (numberStr[j] !== numberStr[j - 1]) {
            resArr.push(numberStr[j]);
        }
    }
    return resArr.length > 0 ? resArr.length : 0;

}


const result = addKyeBoardButton1(nums, value);
fs.writeFileSync("output.txt", result.toString());