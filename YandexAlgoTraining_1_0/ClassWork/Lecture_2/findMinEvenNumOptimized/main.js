const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const nums = fileContent.trim().split(' ').map(value => parseInt(value, 10));
const result = findMinEvenNumber1(nums);
fs.writeFileSync('output.txt', result.toString(), 'utf8');

function findMinEvenNumber(nums) {
    let isFoundAt = false;
    let ans = nums[0];
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] % 2 === 0 && !isFoundAt) {
            if (nums[j] < ans) {
                ans = nums[j];
                isFoundAt = true;
            }
        }
    }
    return ans;
}

//Сохраняем не значение минимального чётного числа, а индекс в массиве
function findMinEvenNumber1(nums) {
    let isFoundAt = false;
    let ans = 0;
    for (let k = 0; k < nums.length; k++) {
        if (nums[k] % 2 === 0 && !isFoundAt) {
            if (nums[ans] > nums[k]) {
                ans = k;
                isFoundAt = true;
            }
        }
    }
    return nums[ans];
}

