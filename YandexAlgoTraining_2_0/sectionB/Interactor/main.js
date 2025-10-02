const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
const [r, i, c] = fileContent.toString().split("\n").map(input => parseInt(input));

const result = insertBricksIntoWhole(r, i, c);

fs.writeFileSync("output.txt", result.toString());

function insertBricksIntoWhole(r, i, c) {
    let verdict;
    r = -128 <= r <= 127 ? r : 0;
    i = 0 <= i <= 7 ? i : 0;
    c = 0 <= c <= 7 ? c : 0;

    if (i === 0) {
        verdict = r !== 0 ? 3 : c;
    }

   else if (i === 1) {
        verdict = c;
    }

    else if (i === 4) {
        verdict = r !== 0 ? 3 : 4;
    }

    else if (i === 6) {
        verdict = 0;
    }

    else if (i === 7) {
        verdict = 1;
    }
    else {
        verdict = i;
    }

    return verdict;
}

