const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const lines = fileContent.toString().trim().split("\n");
const n = parseInt(lines[0]);
const nums = lines[1].split(" ").map(Number);
const x = parseInt(lines[2]);

const result = findClosestNumber(n, nums, x);
fs.writeFileSync("output.txt", result.toString());

//49ms, 5.39Mb
function findClosestNumber(n, nums, x) {
    let minDistance = Math.abs(x - nums[0]);
    let closestElement = nums[0];

    for (let i = 1; i < n; i++) {
        let distance = Math.abs(nums[i] - x);

        if (distance < minDistance) {
            minDistance = distance;
            closestElement = nums[i];
            
            if (distance === 0) break;
        }
    }
    return closestElement;
}

function findClosestNumber1(n, nums, x) {
    let minDiff = Math.abs(x - nums[0]);
    let pos = 0;
    let diff = 0;

    for (let i = 0; i < n; i++) {
        diff = Math.abs(x - nums[i]);

        if (diff < minDiff) {
            minDiff = diff;
            pos = i;
        }
    }
    return nums[pos];
}

//С помощью флага и дополнительной проверки 53ms, 5.41Mb
function findClosestNumber2(n, nums, x) {

    let isFoundAtIndex = -1;
    let diff = 0;
    let minDiff = Math.abs(x - nums[0]);

    for (let i = 0; i < n; i++) {
        diff = Math.abs(x - nums[i]);

        if (diff < minDiff) {
            minDiff = diff;
            isFoundAtIndex = i;
        } else if (diff === minDiff && isFoundAtIndex === -1) {
            isFoundAtIndex = i;
        }
    }
    return nums[isFoundAtIndex];
}

