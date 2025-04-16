const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const seq = fileContent.toString().split(' ');
const result = groupWords(seq);
fs.writeFileSync('output.txt', result.toString(), 'utf8');


function groupWords(seq) {
    let wordSet = {};
    let resArr = [];
    for (let i = 0; i < seq.length; i++) {
        let sorted = seq[i].split('').sort().join('');

        if (!wordSet.hasOwnProperty(sorted)) {
            wordSet[sorted] = [];
        }
        wordSet[sorted].push(sorted);
    }
    for (const wordSetKey in wordSet) {
        resArr.push(wordSet[wordSetKey])
    }
    return resArr;
}
//Без дополнительного массива
function uniteWordsByGroup(arr) {
    let dict = {};
    for (let i = 0; i <= arr.length - 1; i++) {
        let key = arr[i].split('').sort().join('');

        if (!dict.hasOwnProperty(key)) {
            dict[key] = [];
        }
        dict[key].push(arr[i]);
    }
    return Object.values(dict);
}