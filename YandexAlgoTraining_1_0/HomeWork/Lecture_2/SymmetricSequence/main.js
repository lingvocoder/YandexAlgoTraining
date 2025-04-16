const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const [len, nums] = fileContent.toString().split("\n");
const readArray = (seq, separator) => seq.trim().split(separator).map(value => parseInt(value, 10));

const result = isSymmetricSequence(len, nums);
fs.writeFileSync("output.txt", result.toString());

function isSymmetricSequence(len, nums) {
    let seq = readArray(nums, ' ');
    let resArr = [];

    for (let i = 0; i < len; i++) {
        let leftReader = i;
        let rightReader = len - 1;

        while (seq[leftReader] === seq[rightReader] && leftReader <= rightReader) {
            leftReader++;
            rightReader--;
        }

        if (leftReader > rightReader) {

            for (let j = i - 1; j >= 0; j--) {
                resArr.push(seq[j]);
            }
            return resArr.length ? `${resArr.length}\n${resArr.join(' ')}` : 0;
        }
    }
    return resArr.length ? `${resArr.length}\n${resArr.join(' ')}` : 0;
}
