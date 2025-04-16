const fs = require('fs');
const path = require("path");
const fileContent = fs.readFileSync("input.txt", "utf8");
const nums = fileContent.toString().trim().split(" ").map(v => Number(v));
const result = findTwoMaximums(nums);
fs.writeFileSync("output.txt", result.toString());

function findTwoMaximums(nums) {
    let max1 = Math.max(nums[0], nums[1]);
    let max2 = Math.min(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        let temp = max1;
        let curr = nums[i];
        if (curr > max1) {
            max2 = temp;
            max1 = curr;
        } else if (curr > max2) {
            max2 = curr;
        }
    }
    return [max1, max2];
}
