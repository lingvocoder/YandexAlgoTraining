const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
const [a, b, c] = fileContent.toString().trim().split("\n");

const result = isTriangle(parseInt(a), parseInt(b), parseInt(c));
fs.writeFileSync("output.txt", result.toString());

//81ms, 5.66Mb
function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a ? 'YES' : 'NO';
}

function isTriangle2(a, b, c) {
    if (a + b > c) return 'YES';
    if (b + c > a) return 'YES';
    if (a + c > b) return 'YES';
    else return 'NO';
}


//С флагом 57ms, 5.13Mb
function isTriangle3(a, b, c) {
    let isTriangle = false;

    if (a + b > c && b + c > a && a + c > b) {
        isTriangle = true;
    }
    return isTriangle ? 'YES' : 'NO';
}