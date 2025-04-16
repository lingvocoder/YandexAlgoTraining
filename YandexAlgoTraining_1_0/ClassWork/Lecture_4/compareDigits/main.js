const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const [numA, numB] = fileContent.toString().trim().split(' ');
const result = compareNums(numA, numB);
fs.writeFileSync('output.txt', result.toString(), 'utf8');

function compareNums(num1, num2) {
    function countDigits(num) {
        let countArr = new Array(10).fill(0);
        while (num > 0) {
            let lastDigit = num % 10;//Получаем последнюю цифру
            countArr[lastDigit] += 1;//Добавляем её в массив для подсчёта
            num = Math.floor(num / 10);//
        }
        return countArr;
    }

    let digitsA = countDigits(num1);
    let digitsB = countDigits(num2);
    for (let i = 0; i < 10; i++) {
        if (digitsA[i] !== digitsB[i]) {
            return false
        }
    }
    return true
}
