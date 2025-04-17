const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const data = fileContent.toString().trim().split("\n");
const [n, m] = data[0].split(' ').map(n => Number(n));
const cubes = data.slice(1).toString().trim().split(",").map(n => Number(n));

const result = countCubesColors(n, m, cubes);
fs.writeFileSync("output.txt", result.toString());

//419ms, 71.89Mb
function countCubesColors(n, m, cubes) {
    const AnnColorSet = {};
    const BoryaColorSet = {};

    for (let a = 0; a <= n - 1; a++) {
        if (!AnnColorSet.hasOwnProperty(cubes[a])) {
            AnnColorSet[cubes[a]] = 1;
        }
    }

    for (let b = cubes.length - m; b < cubes.length; b++) {
        if (!BoryaColorSet.hasOwnProperty(cubes[b])) {
            BoryaColorSet[cubes[b]] = 1;
        }
    }

    let writer = 0;
    const interSection = [];
    let AnnColorSetRest = [];
    let BoryaColorSetRest = [];

    for (let color in AnnColorSet) {
        if (BoryaColorSet.hasOwnProperty(color)) {
            interSection[writer++] = color;
        } else {
            AnnColorSetRest.push(color);
        }
    }
    for (let color in BoryaColorSet) {
        if (!AnnColorSet.hasOwnProperty(color)) {
            BoryaColorSetRest.push(color);
        }
    }
    return `${interSection.length}\n${interSection.join(' ')}\n${AnnColorSetRest.length}\n${AnnColorSetRest.join(' ')} \n${BoryaColorSetRest.length}\n${BoryaColorSetRest.join(' ')}`;
}
//428ms, 52.01Mb
function countCubesColors1(n,m, cubes) {
    const AnnSet = {};
    const BoryaSet = {};

    for (let a = 0; a <= n - 1; a++) {
        if (!AnnSet.hasOwnProperty(cubes[a])) {
            AnnSet[cubes[a]] = 1;
        }
    }

    for (let b = cubes.length - m; b < cubes.length; b++) {
        if (!BoryaSet.hasOwnProperty(cubes[b])) {
            BoryaSet[cubes[b]] = 1;
        }
    }

    const resArr = [];
    let writer = 0;

    for (let color in AnnSet) {
        if (BoryaSet.hasOwnProperty(color)) {
            resArr[writer++] = color;
            delete AnnSet[color];
            delete BoryaSet[color];
        }
    }
    const AnnSetArr = Object.keys(AnnSet);
    const BoryaSetArr = Object.keys(BoryaSet);
    return `${resArr.length}\n${resArr.join(' ')}\n${AnnSetArr.length}\n${AnnSetArr.join(' ')} \n${BoryaSetArr.length}\n${BoryaSetArr.join(' ')}`;
}
//427ms, 72.54Mb
function countCubesColors2(n, m, cubes) {
    const AnnColorSet = {};
    const BoryaColorSet = {};

    for (let a = 0; a <= n - 1; a++) {
        if (!AnnColorSet.hasOwnProperty(cubes[a])) {
            AnnColorSet[cubes[a]] = 1;
        }
    }

    for (let b = n; b < n + m; b++) {
        if (!BoryaColorSet.hasOwnProperty(cubes[b])) {
            BoryaColorSet[cubes[b]] = 1;
        }
    }

    const interSection = [];
    let writer = 0;

    for (let color in AnnColorSet) {
        if (BoryaColorSet.hasOwnProperty(color)) {
            interSection[writer++] = color;
            delete AnnColorSet[color];
            delete BoryaColorSet[color];
        }
    }
    const AnnColorSetArr = Object.keys(AnnColorSet);
    const BoryaColorSetArr = Object.keys(BoryaColorSet);
    let AnnSetLen = n - interSection.length;
    let BoryaSetLen = m - interSection.length;
    return `${interSection.length}\n${interSection.join(' ')}\n${AnnSetLen}\n${AnnColorSetArr.join(' ')} \n${BoryaSetLen}\n${BoryaColorSetArr.join(' ')}`;
}

