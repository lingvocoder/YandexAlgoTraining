const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const seq = fileContent.trim().split('');
const result = RLE(seq);
fs.writeFileSync('output.txt', result.toString(), 'utf8');


function RLE(strArr) {
    let resArr = [];
    for (let i = 0; i <= strArr.length - 1; i++) {

        let counter = 0;
        let ans = strArr[i];

        for (let j = i; j <= strArr.length - 1; j++) {
            if (strArr[i] !== strArr[j]) {
                break;
            }
            counter++;
        }
        i += counter - 1;
        resArr.push(counter > 1 ? ans.concat(counter) : ans);
    }
    return resArr.join('');
}
