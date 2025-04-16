const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const [word, string] = fileContent.toString().trim().split('\n');
const result = findMisprint(word, string);
fs.writeFileSync('output.txt', result.toString(), 'utf8');


function findMisprint(w, string) {
    let dict = {};
    let isFound = false;
    let strArr = string.split(' ');

    for (let i = 0; i < strArr.length; i++) {
        let word = strArr[i];
        if (!dict.hasOwnProperty(word)) {
            dict[word] = [];
        }
        for (let j = 0; j < word.length; j++) {
            let str = word.slice(0, j).concat(word.slice(j + 1));
            if (dict[word].indexOf(str) === -1) {
                dict[word].push(str);
            }
        }
    }

    for (const key in dict) {
        for (const word of dict[key]) {
            if (word === w) {
                isFound = key;
            }
        }
    }
    return isFound;

}
