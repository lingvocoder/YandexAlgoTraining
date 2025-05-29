const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const [range, nums] = fileContent.toString().trim().split('\n');
const result = calcPrefixSum(range, nums);
fs.writeFileSync('output.txt', result.toString(), 'utf8');


function calcPrefixSum(range, nums) {
    nums = nums.split(' ').map(num => Number(num));
    let resArr = new Array(nums.length + 1).fill(0);

    for (let i = 1; i < nums.length + 1; i++) {
        resArr[i] = resArr[i - 1] + nums[i - 1]
    }
    const rangeSum = rsq(range, resArr);
    return `${rangeSum}\n${resArr.join(' ')}`;
}

function rsq(range, arr) {
    const [left, right] = range.split(' ').map(v => Number(v));
    return arr[right] - arr[left];
}
