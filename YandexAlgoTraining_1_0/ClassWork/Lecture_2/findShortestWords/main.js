const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const wordSequence = fileContent.trim().split(' ').map(value => value.toLowerCase());
const result = findShortestWords(wordSequence);
fs.writeFileSync('output.txt', result.toString(), 'utf8');


function findShortestWords(words) {
    let minLen = words[0].length;
    let writer = 0;
    let resArr = [];

    for (let j = 0; j < words.length; j++) {
        const currLen = words[j].length;
        if (currLen < minLen) {
            minLen = currLen;
        }
    }

    for (let i = 0; i < words.length; i++) {
        const currLen = words[i].length;
        if (currLen === minLen) {
            resArr[writer++] = words[i];
        }
    }
    return resArr.join(' ');
}