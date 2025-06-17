const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const coordsArr = fileContent.toString().trim().split('\n');
const result = countBeatingRooks(coordsArr);
fs.writeFileSync('output.txt', result.toString(), 'utf8');

function countBeatingRooks(coords) {
    const rooksInRow = {};
    const rooksInCol = {};

    function addRook(rookSet, key) {
        if (!rookSet.hasOwnProperty(key)) {
            rookSet[key] = 0;
        }
        rookSet[key]++;
    }

    function countPairs(rookSet) {
        let pairs = 0;
        for (const key in rookSet) {
            pairs += rookSet[key] - 1;
        }
        return pairs;
    }

    for (let i = 0; i < coords.length; i++) {
        let [row, col] = coords[i].split(' ');//Координаты ладьи
        addRook(rooksInRow, row);//Добавляем номер ряда
        addRook(rooksInCol, col);//Добавляем номер столбца
    }
    return countPairs(rooksInCol) + countPairs(rooksInRow);
}