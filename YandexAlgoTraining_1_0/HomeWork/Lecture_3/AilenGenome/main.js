const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const [genomeA, genomeB] = fileContent.toString().trim().split(/\r?\n/);

const result = calculateSimilarity(genomeA, genomeB);
fs.writeFileSync("output.txt", result.toString());

//112ms, 15.82Mb
function calculateSimilarity(genomeA, genomeB) {
    const genomeArrA = genomeA.split("");
    const genomeArrB = genomeB.split("");
    const genomeSetA = {};
    const genomeSetB = {};

    for (let i = 1; i <= genomeArrA.length - 1; i += 2) {
        genomeArrA[i - 1] = genomeArrA[i - 1] + genomeArrA[i];
        genomeArrA[i] = genomeArrA[i] + genomeArrA[i + 1];
    }
    for (let k = 1; k <= genomeArrB.length - 1; k += 2) {
        genomeArrB[k - 1] = genomeArrB[k - 1] + genomeArrB[k];
        genomeArrB[k] = genomeArrB[k] + genomeArrB[k + 1];
    }
    genomeArrA.length--;
    genomeArrB.length--;

    for (let j = 0; j < genomeArrA.length; j++) {
        if (!genomeSetA.hasOwnProperty(genomeArrA[j])) {
            genomeSetA[genomeArrA[j]] = 0;
        }
        genomeSetA[genomeArrA[j]]++;
    }
    for (let l = 0; l < genomeArrB.length; l++) {
        if (!genomeSetB.hasOwnProperty(genomeArrB[l])) {
            genomeSetB[genomeArrB[l]] = 1;
        }
    }

    let totalIntersection = 0;

    for (const key in genomeSetB) {
        if (genomeSetA.hasOwnProperty(key)) {
            totalIntersection += genomeSetA[key];
        }
    }
    return totalIntersection;
}