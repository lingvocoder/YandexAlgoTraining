const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
const [a, b, n, m] = fileContent.toString().split("\n").map(input => {
    return parseInt(input);
});

function countTrains(a, b, n, m) {
    let min1 = (a + 1) * (n - 1) + 1;
    let max1 = (a + 1) * (n - 1) + 1 + 2 * a;
    let min2 = (b + 1) * (m - 1) + 1;
    let max2 = (b + 1) * (m - 1) + 1 + 2 * b;
    let minAns = Math.max(min1, min2);
    let maxAns = Math.min(max1, max2);
    if (maxAns < minAns) return -1;
    return `${minAns} ${maxAns}`
}

//Без дополнительных коэффициентов
function countTrains1(a, b, n, m) {
    let min1 = a * (n - 1) + n;
    let max1 = a * (n + 1) + n;
    let min2 = b * (m - 1) + m;
    let max2 = b * (m + 1) + m;
    let minAns = min1 > min2 ? max1 : min2;
    let maxAns = max1 < max2 ? max1 : max2;
    if (maxAns < minAns) return -1;
    return `${minAns} ${maxAns}`;
}

const result = countTrains(a, b, n, m);

fs.writeFileSync("output.txt", result.toString());