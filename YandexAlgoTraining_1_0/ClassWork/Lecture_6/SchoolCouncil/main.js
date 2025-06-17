const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const [N, K] = fileContent.toString().trim().split(' ').map(Number);
const result = leftBinarySearch(N, K);
fs.writeFileSync('output.txt', result.toString(), 'utf8');

function leftBinarySearch(N, K) {
    let m;
    let l = 0;
    let r = N;

    function checkEndowment(m, N, K) {
        return (K + m) * 3 >= N + m;
    }

    while (l < r) {
        m = Math.floor((l + r) / 2);
        if (checkEndowment(m, N, K)) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    return l;
}