const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const [n, nums, x] = fileContent.toString().trim().split("\n");
const result = findClosestMatch(n, nums, x);
fs.writeFileSync("output.txt", result.toString());

function findClosestMatch(n, nums, x) {
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
function findClosestMatch1(n, nums, x) {

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

