const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
const [N, i, j] = fileContent.toString().split(" ").map(input => parseInt(input));

const result = calcNumberOfStations(N, i, j);

fs.writeFileSync("output.txt", result.toString());

function calcNumberOfStations(N, i, j) {
    let clockWise = Math.abs(i - j) - 1;
    let counterClockWise = N - clockWise - 2
    return Math.min(clockWise, counterClockWise);
}

