const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
const [x, y, z] = fileContent.toString().split(" ").map(input => parseInt(input));

const result = defineDate(x, y, z);

fs.writeFileSync("output.txt", result.toString());

function defineDate(x, y, z) {
    x = 1 <= x <= 31 ? x : 0;
    y = 1 <= y <= 31 ? y : 0;
    z = 1970 <= z <= 2069 ? z : 0;
    let ans;

    if (x > 12 || y > 12) {
        ans = 1;
    } else if (x === y) {
        ans = 1;
    } else {
        ans = 0;
    }

    return ans;
}

