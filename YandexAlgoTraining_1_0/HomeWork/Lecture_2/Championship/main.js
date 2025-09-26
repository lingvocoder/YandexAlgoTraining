const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const [n, nums] = fileContent.toString().trim().split("\n");
const readInt = (param) => parseFloat(param);
const readArray = (seq, separator) => seq.trim().split(separator).map(value => parseInt(value, 10));
const distances = readArray(nums, ' ');
const result = findMaxPlace(n, distances);

fs.writeFileSync("output.txt", result.toString());

//85ms, 12.16Mb
function calcPlace(n, nums) {
    let len = readInt(n);
    let seq = readArray(nums, ' ');


    function getBestAttempt(seq) {
        let bestAttempt = seq[0];
        let ans = 0;
        for (let i = 1; i < len; i++) {
            if (seq[i] > bestAttempt) {
                bestAttempt = seq[i];
                ans = i;
            }
        }
        return ans;
    }

    let subArray = seq.slice(getBestAttempt(seq) + 1);

    function getCompetitorBestAttempt(seq) {
        let competitorBest = false;
        let ans = -1;

        for (let i = 0; i < seq.length - 1; i++) {
            if (seq[i] % 10 === 5 && seq[i] > seq[i + 1]) {
                if (!competitorBest || seq[i] > seq[ans]) {
                    competitorBest = true;
                    ans = i;
                }
            }
        }
        return ans;
    }

    const competitorBest = getCompetitorBestAttempt(subArray);

    if (competitorBest === -1) return 0;
    let counter = 1;

    for (let i = 0; i < len; i++) {
        if (seq[i] > subArray[competitorBest]) {
            counter++;
        }
    }
    return counter;
}

//86ms, 12.15Mb
function findMaxPlace(n, distances) {

    let championResult = distances[0];
    let championIndex = 0;

    for (let i = 1; i < n; i++) {
        if (distances[i] > championResult) {
            championResult = distances[i];
            championIndex = i;
        }
    }

    // 🔍 Найти лучшего кандидата среди тех, кто после чемпиона
    let bestCandidate = -1;
    let bestResult = 0;

    for (let i = championIndex + 1; i < n - 1; i++) {
        if (distances[i] % 10 === 5 && distances[i] > distances[i + 1]) {
            if (bestCandidate === -1 || distances[i] > bestResult) {
                bestCandidate = i;
                bestResult = distances[i];
            }
        }
    }

    if (bestCandidate === -1) return 0;

    // 🏆 Вычислить место лучшего кандидата
    let betterAttempts = 0;
    for (let k = 0; k < n; k++) {
        if (distances[k] > distances[bestCandidate]) {
            betterAttempts++;
        }
    }

    return betterAttempts + 1;
}