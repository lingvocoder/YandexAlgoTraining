const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const seq = fileContent.trim().split('');
const result = RLE(seq);
fs.writeFileSync('output.txt', result.toString(), 'utf8');


function RLE(string) {
    let strArr = string.split('');
    let lastSym = strArr[0];
    let lastPos = 0;
    let resArr = [];

    for (let i = 0; i <= strArr.length - 1; i++) {
        if (strArr[i] !== lastSym) {
            resArr.push(i - lastPos > 1 ? lastSym.concat(i - lastPos) : lastSym);
            lastSym = strArr[i];
            lastPos = i;
        }
    }
    resArr.push(strArr[lastPos].concat(strArr.length - lastPos))
    return resArr.join('')
}
// С дополнительной функцией для упаковки строки
function RLE(strArr) {
    let res = [];
    let dist = 1;
    let prev = 0;

    function packStr(str, num) {
        return num > 1 ? `${str}${num}` : `${str}`;
    }

    for (let i = 1; i < strArr.length; i++) {
        if (strArr[i] !== strArr[i - 1]) {
            dist = i - prev;
            res.push(packStr(strArr[i - 1], dist));
            prev = i;
        }
    }
    res.push(packStr(strArr[prev], strArr.length - prev));
    return res.join('');
}