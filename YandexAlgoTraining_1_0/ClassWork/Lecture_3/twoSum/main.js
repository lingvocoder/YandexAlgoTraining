const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const [nums, k] = fileContent.toString().trim().split('\n');
const readArray = (seq, separator) => seq.trim().split(separator).map(value => Number(value));
const readInt = (param) => parseFloat(param);

const result = twoSumLinear(nums, k);
fs.writeFileSync('output.txt', result.toString(), 'utf8');


const twoSum = (numbers, target) => {
    const nums = readArray(nums, ' ');
    target = readInt(k);
    let left = 0;
    let right = nums.length - 1;
    let resArr = [];

    for (let i = 0; i <= nums.length - 1; i++) {
        let sum = nums[left] + nums[right];
        if (target === sum) {
            resArr.push(left + 1, right + 1);
            break;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return resArr;
}

// HashTable
function sumOfTwo(nums, k) {
    nums = readArray(nums, ' ');
    k = readInt(k);
    let hashTable = {};
    let ans = false;

    for (let i = 0; i < nums.length; i++) {
        let diff = k - nums[i];
        if (hashTable.hasOwnProperty(diff)) {
            ans = true;
        }
        hashTable[nums[i]] = diff;
    }
    return ans;
}

// Nested cycles
const twoSumQuadratic = function (nums, target) {
    nums = readArray(nums, ' ');
    target = readInt(k);
    let resArr = [];

    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            let next = nums[j];

            if (curr + next === target) {
                resArr.push(i, j);
            }
        }
    }
    return resArr;
};

// HashTable
function twoSumLinear(nums, target) {
    nums = readArray(nums, ' ');
    target = readInt(k);
    let store = {};

    for (let i = 0; i < nums.length; i++) {
        if (store[nums[i]]) return `${nums[i]} ${target - nums[i]}`;
        else {
            store[target - nums[i]] = nums[i];
        }
    }
    return `0 0`;
}

