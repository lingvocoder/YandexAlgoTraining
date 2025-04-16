const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const nums = fileContent.toString().trim().split(" ").map(v => Number(v));
const result = getAllMaximums(nums);
fs.writeFileSync("output.txt", result.toString());


function getAllMaximums(nums) {
    let counter = 0;
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
            counter++;
        }
    }
    return counter;
}
