const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
const [nF, nD] = fileContent.toString().split("\n");
const readInt = (param) => parseFloat(param);
const readArray = (seq, separator) => seq.trim().split(separator).map(value => Number(value));


function findDiploma(nF, nD) {
    let folders = readInt(nF);
    let diplomas = readArray(nD, ' ');

    let maxDiplomas = diplomas[0];
    let totalDiplomas = 0;

    for (let i = 0; i < diplomas.length; i++) {
        if (diplomas[i] > maxDiplomas) {
            maxDiplomas = diplomas[i];
        }
        totalDiplomas += diplomas[i];
    }
    return totalDiplomas - maxDiplomas;
}


const result = findDiploma(nF, nD);
fs.writeFileSync("output.txt", result.toString());
