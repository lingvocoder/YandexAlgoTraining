const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const words = fileContent.toString().trim().split(/\s+/g);

const result = findMostFrequentWord(words);
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