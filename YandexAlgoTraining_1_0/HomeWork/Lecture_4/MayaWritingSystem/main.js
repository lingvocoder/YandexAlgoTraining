const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const [l, w, str] = fileContent.toString().trim().split(/\r?\n/);

const result = calcWordEntries(l, w, str);
fs.writeFileSync("output.txt", result.toString());

// Пытался визуализировать процесс создания окна и его скольжения по массиву
// Естественно, на данном шаге я не думал об оптимизации алгоритма

function calcWordEntries(l, w, str) {
    let [wLen, sLen] = l.split(' ').map(Number);
    const wArr = w.split('');
    const sArr = str.split('');
    const wFreq = {};
    let freqArr = [];

    for (let i = 0; i < wLen; i++) {
        if (!wFreq.hasOwnProperty(wArr[i])) {
            wFreq[wArr[i]] = (wFreq[wArr[i]] || 0) + 1;
        }
    }

    const wKeys = Object.keys(wFreq).length;

    for (let k = 0; k <= sLen - wLen; k++) {
        let count = 0;
        let win = {};//создаем словарь текущего окна

        while (count < wLen) {
            if (!win[sArr[k + count]]) {
                win[sArr[k + count]] = 1;
            } else {
                win[sArr[k + count]]++;
            }
            count++;
        }
        freqArr.push(win);
    }
    console.log(freqArr);

    //Если кол-во ключей в текущем словаре не совпадает с кол-вом ключей в контрольном словаре, то удаляем такой словарь из массива
    for (let i = 0; i < freqArr.length; i++) {
        let currLen = Object.keys(freqArr[i]).length;

        if (currLen !== wKeys) {
            freqArr[i] = freqArr[freqArr.length - 1];
            freqArr.length--;
            i--;
        }
    }
    console.log(freqArr);

    let total = 0;
    for (let k = 0; k < freqArr.length; k++) {
        let curr = freqArr[k];
        let cnt = 0;

        for (const fr in curr) {
            if (wFreq[fr] && wFreq[fr] === curr[fr]) {
                cnt++;
            }
        }
        if (cnt === wKeys) {
            total++;
        }
    }
    return total
}


function calcWordEntries1(l, w, str) {
    let [wLen, sLen] = l.split(' ').map(Number);
    const wArr = w.split('');
    const sArr = str.split('');
    const wFrequency = {};
    const sFrequency = {};

    for (let i = 0; i < wLen; i++) {
        wFrequency[wArr[i]] = (wFrequency[wArr[i]] || 0) + 1;
    }

    let total = 0;
    let matchCount = 0;
    const targetMatches = Object.keys(wFrequency).length;

    for (let i = 0; i < wLen; i++) {
        const char = sArr[i];
        sFrequency[char] = (sFrequency[char] || 0) + 1;

        if (wFrequency[char] && sFrequency[char] === wFrequency[char]) {
            matchCount++;
        } else if (wFrequency[char] && sFrequency[char] === wFrequency[char] + 1) {
            matchCount--;
        }
    }

    if (matchCount === targetMatches) {
        total++;
    }


    for (let k = 1; k <= sLen - wLen; k++) {
        const leftChar = sArr[k - 1];
        const rightChar = sArr[k + wLen - 1];

        if (wFrequency[leftChar] && sFrequency[leftChar] === wFrequency[leftChar]) {
            matchCount--;
        }
        sFrequency[leftChar]--;
        if (wFrequency[leftChar] && sFrequency[leftChar] === wFrequency[leftChar]) {
            matchCount++;
        }
        if (sFrequency[leftChar] === 0) {
            delete sFrequency[leftChar];
        }

        if (wFrequency[rightChar] && sFrequency[rightChar] === wFrequency[rightChar]) {
            matchCount--;
        }
        sFrequency[rightChar] = (sFrequency[rightChar] || 0) + 1;
        if (wFrequency[rightChar] && sFrequency[rightChar] === wFrequency[rightChar]) {
            matchCount++;
        }

        if (matchCount === targetMatches) {
            total++;
        }
    }

    return total;
}
