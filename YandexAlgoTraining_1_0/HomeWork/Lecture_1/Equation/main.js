const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const [a, b, c] = fileContent.toString().trim().split("\n").map(v => Number(v));
const result = solveEquation(a, b, c);
fs.writeFileSync("output.txt", result.toString());

function solveEquation(a, b, c) {

    if (c < 0) {
        return 'NO SOLUTION';
    }
    if (a === 0) {
        return c ** 2 === b ? 'MANY SOLUTIONS' : 'NO SOLUTION';
    }

    const x = (c ** 2 - b) / a;

    if (!Number.isInteger(x)) return 'NO SOLUTION';

    return x;
}
