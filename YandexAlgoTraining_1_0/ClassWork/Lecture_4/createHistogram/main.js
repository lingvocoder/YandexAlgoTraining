const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const str = fileContent.toString();
const result = createHistogram(str);
fs.writeFileSync('output.txt', result.toString(), 'utf8');

function createHistogram(str) {
    let strArr = str.split('');
    let symHashTable = {};
    let mostFrequentSym = 0;
    let resStr = '';

    //Подсчитываем частотность символов
    for (let j = 0; j < strArr.length; j++) {
        if (!symHashTable.hasOwnProperty(strArr[j])) {
            symHashTable[strArr[j]] = 0;
        }
        symHashTable[strArr[j]]++;
        mostFrequentSym = Math.max(mostFrequentSym, symHashTable[strArr[j]]);
    }
    let sortedSyms = Object.keys(symHashTable).sort();//Создаём массив символов

//Итерируемся по массиву символов от самого часто встречающегося вниз
    for (let i = mostFrequentSym; i > 0; i--) {
        for (const sym of sortedSyms) {
            resStr += symHashTable[sym] >= i ? '#' : '_';
        }
        resStr += '\n'
    }
    return `${resStr},${sortedSyms.join('')}`;
}
