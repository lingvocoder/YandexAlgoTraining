const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const nums = fileContent.trim().split(' ').map(value => parseInt(value, 10));
const result = findFilledCavities(nums);
fs.writeFileSync('output.txt', result.toString(), 'utf8');

function findFilledCavities(nums) {
    let divide = 0;
    let localMaxL = 0;
    let localMaxR = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[divide]) divide = i;
    }

    for (let i = 0; i < divide; i++) {
        if (nums[i] > localMaxL) {
            localMaxL = nums[i];
        }
        sum += localMaxL - nums[i];
    }

    for (let i = nums.length - 1; i > divide; i--) {
        if (nums[i] > localMaxR) {
            localMaxR = nums[i];
        }
        sum += localMaxR - nums[i];
    }

    return sum;
}
