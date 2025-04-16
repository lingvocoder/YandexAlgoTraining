const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const [n, nums] = fileContent.toString().trim().split("\n");
const readInt = (param) => parseFloat(param);
const readArray = (seq, separator) => seq.trim().split(separator).map(value => parseInt(value, 10));
const result = calcPlace(n, nums);

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

