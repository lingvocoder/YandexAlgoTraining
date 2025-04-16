const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const nums = fileContent.toString().trim().split(" ").map(v => Number(v));
const result = getAllMaxProducts(nums);
fs.writeFileSync("output.txt", result.toString());

function getAllMaxProducts(nums) {
    let [max3, max2, max1] = nums.slice(0, 3).sort((a, b) => b - a);
    let [min2, min1] = [max1, max2];
    for (let i = 3; i < nums.length; i++) {

        if (nums[i] < min2) {
            min1 = min2;
            min2 = nums[i];
        } else if (nums[i] < min1) {
            min1 = nums[i];
        } else if (nums[i] > max3) {
            max1 = max2;
            max2 = max3;
            max3 = nums[i];
        } else if (nums[i] > max2) {
            max1 = max2;
            max2 = nums[i];
        } else if (nums[i] > max1) {
            max1 = nums[i];
        }
    }

    let maxProduct1 = max1 * max2 * max3;
    let maxProduct2 = min1 * min2 * max3;
    let limits = maxProduct1 >= maxProduct2 ? [max3, max2, max1] : [max3, min2, min1];
    return limits.join(' ');
}

//K-я статистика последовательности
function kthRearrange(seq, left, right, k) {
    left = 0;
    right = seq.length - 1;
    while (left < right) {
        let x = Math.round(seq[right + left] / 2);
        let eqxFirst = left;
        let qtxFirst = left;

        for (let i = left; i < right + 1; i++) {
            let curr = seq[i];
            if (curr === x) {
                seq[i] = seq[qtxFirst];
                seq[qtxFirst] = curr;
                qtxFirst++;
            } else if (curr < x) {
                seq[i] = seq[qtxFirst];
                seq[qtxFirst] = seq[eqxFirst];
                seq[eqxFirst] = curr;
                qtxFirst++;
                eqxFirst++;
            }
        }
        if (k < eqxFirst) {
            right = eqxFirst - 1;
        } else if (k >= qtxFirst) {
            left = qtxFirst;
        } else {
            return
        }
    }
}

const seq = [3, 5, 1, 7, 9, 0, 9, -3, 10];
// console.log(kthRearrange(seq,0,9,8));