const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const [val, nums] = fileContent.split('\n');
const readInt = (param) => parseFloat(param);
const readArray = (seq, separator) => seq.trim().split(separator).map(value => parseInt(value, 10));
const result = findElementInSequence(val, nums);
fs.writeFileSync('output.txt', result.toString(), 'utf8');

function findElementInSequence(val, nums) {
    const seq = readArray(nums, ' ');
    const value = readInt(val);

    let isFoundAtIndex = -1;
    for (let j = seq.length; j > 0 ; j--) {
        if (seq[j] === value && isFoundAtIndex === -1 ) {
            isFoundAtIndex = j;
        }
    }
    return isFoundAtIndex;
}