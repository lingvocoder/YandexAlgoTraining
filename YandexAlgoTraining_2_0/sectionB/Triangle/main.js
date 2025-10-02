const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
const [d, coords] = fileContent.toString().split("\n");
const readInt = (param) => parseFloat(param);
const readArray = (seq, separator) => seq.trim().split(separator).map(value => Number(value));

function isPointBelong(d, coords) {
    d = readInt(d);
    coords = readArray(coords, ' ');

    let [[ax, ay], [bx, by], [cx, cy]] = [[0, 0], [d, 0], [0, d]];
    let [dx, dy] = coords;

    if (dx <= d && dy <= d - dx && dy <= d && dx >= 0 && dy >= 0) return 0;

    let distA = Math.floor(Math.sqrt((dx - ax) ** 2 + (dy - ay) ** 2));
    let distB = Math.floor(Math.sqrt((dx - bx) ** 2 + (dy - by) ** 2));
    let distC = Math.floor(Math.sqrt((dx - cx) ** 2 + (dy - cy) ** 2));
    let minDist = Math.min(distA, distB, distC);

    if (minDist >= distA) {
        return 1;
    } else if (minDist >= distB) {
        return 2;
    } else if (minDist >= distC) {
        return 3;
    } else if (minDist === distB || minDist === distC) {
        return distB < distC ? distB : distC;
    }
}


const result = isPointBelong(d, coords);
fs.writeFileSync("output.txt", result.toString());