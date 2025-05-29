const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const [K, nums] = fileContent.toString().trim().split(/\r?\n/);
const result = countPairsBiggerThan1(K, nums);
fs.writeFileSync('output.txt', result.toString(), 'utf8');

//Интуитивное решение. Сложность O(n^2)
function countPairsBiggerThan(K, nums) {
    let counter = 0;
    nums = nums.split(' ').map(num => Number(num));

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] - nums[i] > Number(K)) {
                counter++;
            }
        }
    }
    return counter;
}


function countPairsBiggerThan1(K, nums) {
    let counter = 0;
    let last = 0;
    const sortedNums = nums.split(' ').map(num => Number(num)).sort((a, b) => a - b);

    for (let i = 0; i < sortedNums.length; i++) {

        while (last < sortedNums.length && (sortedNums[last] - sortedNums[i]) <= Number(K)) {
            last++;
        }
        counter += sortedNums.length - last;
    }
    return counter;
}
