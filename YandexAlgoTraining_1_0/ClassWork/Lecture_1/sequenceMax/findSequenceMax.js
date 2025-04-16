const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const nums = fileContent.toString().trim().split(' ').map(elem => parseInt(elem, 10));
const result = findSequenceMax(nums);
fs.writeFileSync('output.txt', result.toString(), 'utf8');

function findSequenceMax(nums) {
    if (nums.length === 0) return 0;
    let maxValue = nums[0];
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] > maxValue) maxValue = nums[j];
    }
    return maxValue;
}
