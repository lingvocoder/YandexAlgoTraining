const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const nums = fileContent.toString().trim().split(' ');
const readArray = (seq, separator) => seq.trim().split(separator).map(value => Number(value));
const result = sortMarks(nums);
fs.writeFileSync('output.txt', result.toString(), 'utf8');

function sortMarks(num) {
    let resArr = new Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; i++) {
        resArr[nums[i]]++;
    }
    let writer = 0;

    for (let j = 0; j < resArr.length; j++) {
        let counter = resArr[j];

        while (counter > 0) {
            nums[writer] = j;
            writer++;
            counter--;
        }
    }
    return nums;
}

//Математический подход
function sortCount(nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    let writer = 0;
    let resArr = new Array(max - min + 1).fill(0);

    for (let i = 0; i < nums.length; i++) {
        resArr[nums[i] - min]++;
    }
    for (let val = 0; val < resArr.length; val++) {
        let curr = resArr[val];
        while (curr--) {
            nums[writer++] = val + min;
        }
    }
    return nums;
}
//Интуитивный подход
function sortCount(arr) {
    let max = arr[0];
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        min = arr[i] < min ? arr[i] : min;
        max = arr[i] > max ? arr[i] : max;
    }

    let len = (max - min) + 1;
    let countDigits = new Array(len).fill(0);

    for (let i = 0; i < arr.length; i++) {
        countDigits[arr[i] - 1]++;
    }

    let currPos = 0;

    for (let j = 0; j < countDigits.length; j++) {
        let counter = countDigits[j];
        while (counter) {
            arr[currPos++] = j + 1;
            counter--;
        }
    }
    return arr;
}