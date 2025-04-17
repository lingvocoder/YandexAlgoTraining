const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const nums = fileContent.toString().trim().split(" ").map(v => Number(v));

const result = countDifferentNumbers1(nums);
fs.writeFileSync("output.txt", result.toString(),'utf-8');

function countDifferentNumbers(nums) {
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (!hashMap.hasOwnProperty(nums[i])) {
            hashMap[nums[i]] = 1;
        }
    }
    return Object.keys(hashMap).length;
}
//86ms, 14.01Mb
function countDifferentNumbers1(nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    let len = max - min + 1;
    let countArr = new Array(len).fill(0);
    for (let i = 0; i < nums.length; i++) {
        countArr[nums[i] - min]++;
    }
    let counter = 0;
    for (let i = 0; i < countArr.length; i++) {
        let current = countArr[i];
        if (current !== 0) {
            counter++;
        }
    }
    return counter;
}

