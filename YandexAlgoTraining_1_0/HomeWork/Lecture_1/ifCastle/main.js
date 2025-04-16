const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
const [a, b, c, d, e] = fileContent.toString().split("\n").map(input => {
    return parseInt(input);
});

const result = insertBricksIntoWhole(a, b, c, d, e);

//Сортировка пузырьком
function sort2(first, second) {
    if (first < second) return [first, second];
    return [second, first];
}

let [a1, b1] = sort2(a, b);
// let [b1, c1] = sort2(b, c);
// let [a1, b1] = sort2(a, b);
let [d1, e1] = sort2(d, e);
console.log(a1, b1);
// console.log(b1, c1);
console.log(d1, e1);

fs.writeFileSync("output.txt", result.toString());

// 40ms, 5.14Mb
function insertBricksIntoWhole(a, b, c, d, e) {
    let brickSidesSorted = [a, b, c].sort((a, b) => a - b);
    if (brickSidesSorted[0] <= d && brickSidesSorted[1] <= e) {
        return 'YES';
    } else {
        return 'NO';
    }
}

// 42ms, 5.29Mb
function insertBricksIntoWhole(a, b, c, d, e) {
    let min1 = a < b ? a : b;
    let min2 = b < c ? b : c;
    let min = min2 > min1 ? min1 : min2;
    return min <= d && min2 <= e ? 'YES' : 'NO';
}



