const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const nums = fileContent.toString().trim().split(' ').map(elem => parseInt(elem, 10));
const result = findSequenceMax(nums);
fs.writeFileSync('output.txt', result.toString(), 'utf8');


// Если речь идёт о сравнении строк, то каждый раз в переменную maxValue будет сохраняться новая строка
// Длина сроки может при этом увеличиваться, что может повлиять на производительность алгоритма
// Поэтому есть смысл сохранять в переменной не строку, а индекс строки

function findSequenceMax(nums) {
    if (nums.length === 0) return 0;
    let maxValue = 0;//сохраняем индекс
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] > nums[maxValue]) maxValue = j;//сравниваем с текущим элементом
    }
    return nums[maxValue];//возвращаем самый большой элемент
}
