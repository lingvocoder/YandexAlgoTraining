const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const [range, nums] = fileContent.toString().trim().split('\n');
const result = countZeros(range, nums);
fs.writeFileSync('output.txt', result.toString(), 'utf8');


//Наивный подход. Сложность в худшем случае O(n)
function countZeros(range, nums) {
    const [left, right] = range.split(' ').map(num => Number(num));
    nums = nums.split(' ').map(num => Number(num));
    let counter = 0;

    for (let i = left; i < right; i++) {
        if (nums[i] === 0) {
            counter++;
        }
    }
    return counter;
}

function countZeros1(range, nums) {
    const [left, right] = range.split(' ').map(num => Number(num));
    nums = nums.split(' ').map(num => Number(num));
    let resArr = new Array(nums.length + 1).fill(0);

    for (let i = 1; i < nums.length + 1; i++) {
        if (nums[i - 1] === 0) {
            resArr[i] = resArr[i - 1] + 1;
        } else {
            resArr[i] = resArr[i - 1];
        }
    }
    return resArr[right] - resArr[left];
}
