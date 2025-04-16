const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const data = fileContent.toString().trim().split("\n");
const readArray = (seq, separator) => seq.trim().split(separator).map(value => Number(value));
const params = readArray(data[0], ' ');
let coords = [];
for (let i = 1; i < data.length; i++) {
    coords[i - 1] = data[i];
}

const result = swipeMines(params, coords);
fs.writeFileSync("output.txt", result.toString());

//Некоторая оптимизации 56ms, 5.41mb
function swipeMines(params, coords) {
    const [N, M, K] = params;
    let field = [];
    let res = '';

    for (let i = 0; i < N + 2; i++) {//+2 добавляет рамку слева и справа
        field[i] = new Array(M + 2).fill(1);
    }

    for (let i = 1; i < K + 1; i++) {
        let [row, col] = coords[i - 1].split(' ');
        field[row][col] = '*';
    }

    let di = [1, 1, 1, 0, 0, -1, -1, -1];//матрица переходов для строк
    let dj = [-1, 0, 1, -1, 1, -1, 0, 1];//матрица переходов для колонок
    let counter = 0;

    for (let i = 1; i < N + 1; i++) {
        for (let j = 1; j < M + 1; j++) {
            if (field[i][j] !== '*') {
                for (let k = 0; k < 8; k++) {// 8 соседних ячеек (указываем кол-во проверяемых ячеек)
                    if (field[i + di[k]][j + dj[k]] === '*') {
                        counter++;
                    }
                    field[i][j] = counter;
                }
                counter = 0;
            }
        }
    }


    for (let i = 1; i < N + 1; i++) {
        for (let j = 1; j < M + 1; j++) {
            res += `${field[i][j]} `;
        }
        res = res.trim() + '\n';
    }
    return res.trim();
}


// Без оптимизаций 41ms, 5.03mb
function swipeMines1(params, coordsArr) {
    const [N, M, K] = params;
    const coords = coordsArr;

    let field = [];
    let res = '';
    for (let i = 0; i < N + 2; i++) {
        let row = [];

        for (let j = 0; j < M + 2; j++) {
            row[j] = 1;
        }
        field.push(row);
    }
    for (let i = 1; i < K + 1; i++) {
        let [row, col] = coords[i - 1].split(' ');
        let currRow = field[row];
        currRow[col] = '*';
        field[row] = currRow;
    }

    let di = [1, 1, 1, 0, 0, -1, -1, -1];
    let dj = [-1, 0, 1, -1, 1, -1, 0, 1];
    let counter = 0;

    for (let i = 1; i < N + 1; i++) {
        for (let j = 1; j < M + 1; j++) {
            if (field[i][j] !== '*') {
                for (let k = 0; k < 8; k++) {
                    if (field[i + di[k]][j + dj[k]] === '*') {
                        counter++;
                    }
                    field[i][j] = counter;
                }
                counter = 0;
            }
        }
    }

    for (let i = 1; i < N + 1; i++) {
        for (let j = 1; j < M + 1; j++) {
            res += `${field[i][j]} `;
        }
        res = res.trim() + '\n';
    }
    return res.trim();
}


function createMineField(N, M, K, coords) {

    let field = '';
    for (let i = 1; i < N + 1; i++) {
        let row = [];

        for (let j = 1; j < M + 1; j++) {
            row[j - 1] = `${0}`;
        }
        field += row.join('') + '\n';
    }
    field = field.trim().split('\n');

    for (let i = 1; i < K + 1; i++) {
        let [row, col] = coords[i - 1];
        let currRow = field[row - 1].split('');
        currRow[col - 1] = '*';
        field[row - 1] = currRow.join('');
    }
    field = field.join('\n');
    return field;

}

console.log(createMineField(4, 4, 4, ['1 3', '2 1', '4 2', '4 4']));