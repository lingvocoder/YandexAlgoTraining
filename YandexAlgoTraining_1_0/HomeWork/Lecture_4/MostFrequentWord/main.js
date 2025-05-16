const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const words = fileContent.toString().trim().split(/\s+/g);

const result = findMostFrequentWord1(words);
fs.writeFileSync("output.txt", result.toString());

//227ms, 34.00Mb
function findMostFrequentWord(words) {
    const dict = {};
    for (let i = 0; i < words.length; i++) {
        if (!dict.hasOwnProperty(words[i])) {
            dict[words[i]] = 1;
        } else {
            dict[words[i]]++;
        }
    }
    let maxFrequency = 0;
    let ans = '';
    for (const word in dict) {

        if (dict[word] > maxFrequency) {
            maxFrequency = dict[word];
            ans = word
        }
        if (maxFrequency === dict[word] && word < ans) {
            ans = word
        }
    }
    return ans
}

//191ms, 32.45Mb
function findMostFrequentWord1(words) {
    const dict = {};
    for (let i = 0; i < words.length; i++) {
        if (!dict.hasOwnProperty(words[i])) {
            dict[words[i]] = 1;
        } else {
            dict[words[i]]++;
        }
    }
    let maxFrequency = 0;
    let ans = '';

    for (let k = words.length - 1; k >= 0; k--) {
        let currWord = words[k];
        let currFrequency = dict[words[k]];

        if (currFrequency > maxFrequency) {
            maxFrequency = currFrequency;
            ans = currWord;
        }
        if (maxFrequency === currFrequency && currWord < ans) {
            ans = currWord;
        }
    }
    return ans;
}