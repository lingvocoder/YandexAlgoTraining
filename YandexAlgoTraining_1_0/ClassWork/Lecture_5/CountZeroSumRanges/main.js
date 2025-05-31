const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const nums = fileContent.toString().trim().split(' ').map(num => Number(num));
const result = countZeroSumRanges2(nums);
fs.writeFileSync('output.txt', result.toString(), 'utf8');


//Наивный подход. Сложность O(N^3)
function countZeroSumRanges(nums) {
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let rangeSum = 0;
            for (let k = i; k < j; k++) {
                rangeSum += nums[k];
            }
            if (rangeSum === 0) {
                total++;
            }
        }
    }
    return total;
}

//Сложность O(N^2)
function countZeroSumRanges1(nums) {
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        let rangeSum = 0
        for (let j = i; j < nums.length; j++) {
            rangeSum += nums[j];
            if (rangeSum === 0) {
                total++;
            }
        }
    }
    return total;
}
//Сложность O(N)
function countZeroSumRanges2(nums) {
    let prefixSumCache = {0: 1};
    let currSum = 0;
    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        if (!prefixSumCache.hasOwnProperty(currSum)) {
            prefixSumCache[currSum] = 0;
        } else {
            prefixSumCache[currSum]++;
        }
    }
    console.log(prefixSumCache);
    return countRanges(prefixSumCache);
}

function countRanges(prefixSumCache) {
    let countRanges = 0;

    for (const prefixSum in prefixSumCache) {
        let currSum = prefixSumCache[prefixSum];
        countRanges += currSum * (currSum - 1) / 2;
    }
    return countRanges;
}


