const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const arr = fileContent.toString().trim().split(' ');
const result = findMostFrequentSym(arr);
fs.writeFileSync('output.txt', result.toString(), 'utf8');

function findMostFrequentSym(strArr) {
    let resArr = [];
    let ansFrequency = 0;
    let ansIdx = 0;
    for (let i = 0; i < strArr.length; i++) {
        let currMax = 0;
        for (let j = i; j < strArr.length; j++) {
            if (strArr[j] === strArr[i]) {
                currMax++;
            }
        }
        if (currMax > ansFrequency) {
            ansFrequency = currMax;
            ansIdx = i;
        }
    }
    resArr.push(ansFrequency, strArr[ansIdx].charAt(0));
    return resArr;
}