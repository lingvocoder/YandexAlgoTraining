const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const nums = fileContent.toString().trim().split(" ").map(v => Number(v));
const result = getAllMaxProducts(nums);
fs.writeFileSync("output.txt", result.toString());

function getAllMaxProducts(nums) {
    let min1 = nums[0] > nums[1] ? nums[0] : nums[1];
    let min2 = nums[0] < nums[1] ? nums[0] : nums[1];
    let max1 = nums[0] < nums[1] ? nums[0] : nums[1];
    let max2 = nums[0] > nums[1] ? nums[0] : nums[1];

    for (let i = 2; i < nums.length; i++) {

        if (nums[i] < min2) {
            min1 = min2;
            min2 = nums[i];
        } else if (nums[i] < min1) {
            min1 = nums[i];
        } else if (nums[i] > max2) {
            max1 = max2;
            max2 = nums[i];
        } else if (nums[i] > max1) {
            max1 = nums[i];
        }
    }

    let limits = max1 * max2 > min1 * min2 ? [max1, max2] : [min2, min1]
    return limits.join(' ');
}
