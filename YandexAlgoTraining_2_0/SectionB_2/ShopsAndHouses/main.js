const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
const nums = fileContent.toString().trim().split(" ").map(input => parseInt(input));

function findMinDistToShop(nums) {
    let shopPos = -Infinity;
    let shopDistArr = new Array(nums.length).fill(0);
    let maxDist = 0;
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === 2) {
            shopPos = i;
        }
        if (nums[i] === 1) {
            shopDistArr[i] = i - shopPos;
        }
    }
    shopPos = Infinity;

    for (let i = nums.length - 1; i >= 0; i--) {
        let minDist = nums[i];
        if (nums[i] === 2) {
            shopPos = i;
        }
        if (nums[i] === 1) {
            console.log(shopPos - i);
            minDist = Math.min(shopPos - i, shopDistArr[i]);
            maxDist = Math.max(maxDist, minDist);
        }
    }
    return maxDist;
}

const result = findMinDistToShop(nums);

fs.writeFileSync("output.txt", result.toString());
