const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const [a1, b1, a2, b2] = fileContent.toString().trim().split(" ").map(value => Number(value));
const result = calcMinArea(a1, b1, a2, b2);
fs.writeFileSync("output.txt", result.toString());

//45ms, 5.39Mb
function calcMinArea(a1, b1, a2, b2) {
    let side1 = a1 + a2;
    let side2 = Math.max(b1, b2);

    let side7 = b1 + b2;
    let side8 = Math.max(a1, a2);

    let side3 = a1 + b2;
    let side4 = Math.max(b1, a2);

    let side5 = b1 + a2;
    let side6 = Math.max(a1, b2);

    const dimensions = {
        [side1 * side2]: [side1, side2],
        [side3 * side4]: [side3, side4],
        [side5 * side6]: [side5, side6],
        [side7 * side8]: [side7, side8],
    }
    const [key, [a, b]] = Object.entries(dimensions)[0]
    return `${a} ${b}`;
}

//45ms, 5.26Mb
function calcMinArea1(a1, b1, a2, b2) {
    let dimensionsArr = [
        {
            a: a1 + a2,
            b: b1 > b2 ? b1 : b2,
            get area() {
                return this.a * this.b
            }
        },
        {
            a: b1 + b2,
            b: a1 > a2 ? a1 : a2,
            get area() {
                return this.a * this.b
            }
        },
        {
            a: a1 + b2,
            b: b1 > a2 ? b1 : a2,
            get area() {
                return this.a * this.b
            }
        },
        {
            a: b1 + a2,
            b: a1 > b2 ? a1 : b2,
            get area() {
                return this.a * this.b
            }
        }
    ]
    let {a, b, area: minArea} = dimensionsArr[0];
    let res = [a, b];

    for (let i = 0; i < dimensionsArr.length; i++) {
        const [a, b, area] = Object.values(dimensionsArr[i]);

        if (area < minArea) {
            minArea = area;
            res[0] = a;
            res[1] = b;
        }
    }

    return `${res[0]} ${res[1]}`;
}