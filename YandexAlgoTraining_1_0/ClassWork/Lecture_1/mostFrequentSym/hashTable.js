const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const arr = fileContent.toString().trim().split(' ');
const result = findMostFrequentSym(arr);
fs.writeFileSync('output.txt', result.toString(), 'utf8');

function findMostFrequentSym(strArr) {
    let dict = {};
    let ansFrequency = 0;
    let ansSym = '';
    for (let i = 0; i < strArr.length; i++) {
        if (!dict.hasOwnProperty(strArr[i])) {
            dict[strArr[i]] = 0;
        }
        dict[strArr[i]]++;
    }
    for (const dictKey in dict) {
        if(dict[dictKey] > ansFrequency) {
            ansFrequency = dict[dictKey];
            ansSym = dictKey;
        }
    }
    return [ansSym, ansFrequency];
}