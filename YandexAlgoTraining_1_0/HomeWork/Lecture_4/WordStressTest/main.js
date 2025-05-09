const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const [N, ...words] = fileContent.toString().trim().split(/\r?\n/);

const result = checkWordStress(N, words);
fs.writeFileSync("output.txt", result.toString());

//185ms, 31.32Mb
function checkWordStress(N, words) {
    const dict = {};
    const exercises = words[words.length - 1].split(' ');
    const len = Number(N);

    function findStressedVowels(arr, str) {
        const letters = str.split('');

        for (let i = 0; i < letters.length; i++) {
            if (letters[i].charCodeAt(0) === letters[i].toUpperCase().charCodeAt(0)) {
                arr.push(i);
            }
        }
        return arr
    }

    for (let i = 0; i < len; i++) {
        let key = words[i].toLowerCase();
        if (!dict.hasOwnProperty(key)) {
            dict[key] = [];
        }
        findStressedVowels(dict[key], words[i]);
    }

    let mistakes = 0;

    for (let i = 0; i < exercises.length; i++) {
        let currWord = exercises[i].toLowerCase();
        let strArr = findStressedVowels([], exercises[i]);

        if (!dict.hasOwnProperty(currWord)) {
            if (strArr.length !== 1) {
                mistakes++;
            }
        } else {
            if (strArr.length !== 1) {
                mistakes++;
            } else {
                let isCorrect = false;
                for (let j = 0; j < dict[currWord].length; j++) {
                    if (dict[currWord][j] === strArr[0]) {
                        isCorrect = true;
                        break;
                    }
                }
                if (!isCorrect) {
                    mistakes++;
                }
            }
        }
    }
    return mistakes;
}

