const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const [N, ...words] = fileContent.toString().trim().split(/\r?\n/);

//372ms, 48.68Mb
const result = findSynonym(N, words);
fs.writeFileSync("output.txt", result.toString());

function findSynonym(N, words) {
    const targetWord = words[words.length - 1];
    const dict = {};
    let res = '';

    for (let i = 0; i < N; i++) {
        const [word, syn] = words[i].split(' ');
        if (!dict.hasOwnProperty(word)) {
            dict[word] = syn;
        }
    }
    for (const word in dict) {
        if (word === targetWord) {
            res = dict[word];
        } else if (dict[word] === targetWord) {
            res = word
        }
    }
    return res;
}