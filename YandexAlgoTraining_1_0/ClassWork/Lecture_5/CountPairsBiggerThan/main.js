const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const [K, nums] = fileContent.toString().trim().split(/\r?\n/);
const result = countPairsBiggerThan1(K, nums);
fs.writeFileSync('output.txt', result.toString(), 'utf8');

//Интуитивное решение. Сложность O(N^2)
function countPairsBiggerThan(K, nums) {
    let counter = 0;
    nums = nums.split(' ').map(num => Number(num)).sort((a, b) => a - b);

    for (let l = 0; l < nums.length; l++) {
        for (let r = l + 1; r < nums.length; r++) {
            if (nums[r] - nums[l] > Number(K)) {
                counter++;
            }
        }
    }
    return counter;
}


function countPairsBiggerThan1(K, nums) {
    let counter = 0;
    let right = 0;
    const sortedNums = nums.split(' ').map(num => Number(num)).sort((a, b) => a - b);

    for (let left = 0; left < sortedNums.length; left++) {
        //Двигаем правый указатель до тех пор, пока разница значений текущего элемента и элемента на левой границе <= K
        //Как только разница стала равной или больше K, можем остановиться, так все последующие значения буду удовлетворять условию
        while (right < sortedNums.length && (sortedNums[right] - sortedNums[left]) <= Number(K)) {
            right++;
        }
        counter += sortedNums.length - right;
    }
    return counter;
}
