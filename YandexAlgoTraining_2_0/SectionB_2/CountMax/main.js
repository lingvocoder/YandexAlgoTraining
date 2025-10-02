const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
const nums = fileContent.toString().trim().split("\n").map(input => parseInt(input,10));


function countMaxOccurrences(nums) {
    let max = 0;
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === max) {
            counter++;
        }
    }
    return counter;
}

const result = countMaxOccurrences(nums);

fs.writeFileSync("output.txt", result.toString());
