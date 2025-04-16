const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const [N, K, M] = fileContent.toString().trim().split(" ").map(v => Number(v));
const result = makeDetails(N, K, M);
fs.writeFileSync("output.txt", result.toString());

function makeDetails(N, K, M) {

    let totalDetails = 0;
    let remainder = 0;

    for (let i = 0; i < Math.floor((N + remainder) / K); i++) {

        remainder += K >= M ? K % M : 0;
        totalDetails += Math.floor(K / M);
    }
    return totalDetails;

}

function calcDetails1(N, K, M) {
    let totalDetails = 0;
    while (N > 1) {
        let remainder = N >= K ? K % M : 0;
        N += remainder;
        totalDetails += remainder === 0 ? 0 : Math.floor(K / M);
        N -= K;
    }
    return totalDetails;
}

function calcDetails2(N, K, M) {
    let totalDetails = 0;

    while (N >= K) {
        let remainder = K >= M ? K % M : 0;
        N += remainder;
        totalDetails += Math.floor(K / M);
        N -= K;
    }
    return totalDetails;
}

//49ms, 5.41Mb
function calcDetails3(N, K, M) {
    let totalDetails = 0;
    let remainder = 0;
    let i = N;

    for (; i >= K; i += remainder, i -= K) {
        remainder = K >= M ? K % M : 0;
        totalDetails += Math.floor(K / M);
    }
    return totalDetails;
}

console.log(makeDetails(14, 5, 3));//4
console.log(makeDetails(10, 5, 2));//4
console.log(makeDetails(13, 5, 3));//3
console.log(makeDetails(1, 1, 2));//0
console.log(makeDetails(164, 5, 3));//54