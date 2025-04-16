const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const nums = fileContent.toString().trim().split(" ").map(v => Number(v));
const result = isIncreasingSequence1(nums);
fs.writeFileSync("output.txt", result.toString());

//67ms, 6.04Mb
function isIncreasingSequence(nums) {
    let counter = 0;
    for (let i = 1; i < nums.length; i++) {
        counter += nums[i] > nums[i - 1] ? 1 : -1;
    }
    return counter === nums.length - 1 ? 'YES' : 'NO';
}

//50ms, 5.41Mb
function isIncreasingSequence1(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            return 'NO'
        }
    }
    return 'YES'
}
