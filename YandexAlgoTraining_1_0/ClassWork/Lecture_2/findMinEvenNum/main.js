const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const nums = fileContent.trim().split(' ').map(value => parseInt(value, 10));
const result = findMinEvenNumber(nums);
fs.writeFileSync('output.txt', result.toString(), 'utf8');

function findMinEvenNumber(nums) {
    let isFoundAtIndex = -1;

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] % 2 === 0) {
            if (isFoundAtIndex === -1 || nums[j] < isFoundAtIndex ) {
                isFoundAtIndex = nums[j];
            }
        }
    }
    return isFoundAtIndex;
}
