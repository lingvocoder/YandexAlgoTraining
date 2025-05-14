const fs = require('fs');
const fileContents = fs.readFileSync('input.txt', 'utf8');
const words = fileContents.toString().trim().split(/\s+/g);

const result = countWords2(words);
fs.writeFileSync("output.txt", result.toString());

//284ms, 55.11Mb
function countWords(words) {
    const dict = {};
    let resArr = [];

    for (let i = 0; i < words.length; i++) {
        if (!dict.hasOwnProperty(words[i])) {
            dict[words[i]] = [];
        }
        if (words[i] !== '') {
            dict[words[i]].push([i, dict[words[i]].length]);
        }
    }

    for (const key in dict) {
        for (let j = 0; j < dict[key].length; j++) {
            resArr[dict[key][j][0]] = dict[key][j][1];
        }
    }
    return resArr.join(' ');
}

//174ms,25.96Mb
function countWord1(words) {
    let dict_all = [];
    let numbers = [];
    for (let i = 0; i < words.length; i++) {
        dict_all[words[i]] = 0;
    }
    for (let i = 0; i < words.length; i++) {
        numbers.push(dict_all[words[i]]);
        dict_all[words[i]] += 1;
    }

    if (numbers.length === 0) return '';
    return numbers.join(' ');
}

//159ms, 23.74Mb
function countWords2(words) {
    const dict = {};

    for (let i = 0; i < words.length; i++) {

        if (!dict.hasOwnProperty(words[i])) dict[words[i]] = 0;
        else {
            dict[words[i]]++;
        }
    }

    for (let k = words.length - 1; k >= 0; k--) {
        if (words[k] !== '') {
            words[k] = dict[words[k]]--;
        }
    }
    return words.join(' ');
}
