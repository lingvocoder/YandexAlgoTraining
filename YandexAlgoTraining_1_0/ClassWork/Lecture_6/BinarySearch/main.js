const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const [N, nums] = fileContent.toString().trim().split(/\r?\n/);
const result = leftBinarySearch(N, nums);
fs.writeFileSync('output.txt', result.toString(), 'utf8');

//"Левый" бинарный поиск
function leftBinarySearch(N, nums) {
    nums = nums.split(' ').map(num => Number(num));
    let m;
    let l = 0;
    let r = nums.length - 1;

    function check(m, checkParams) {
        return nums[m] >= Number(checkParams);
    }

    while (l < r) {
        m = Math.floor((l + r) / 2);// Используем округление, чтобы избежать десятичной дроби
        if (check(m, N)) {// Всё хорошо (найденное слово > искомого (мы ищем первое подходящее значение)
            r = m;// двигаем правую границу
        } else {// Всё плохо (найденное слово < искомого
            l = m + 1;// двигаем левую границу
        }
    }
    return nums[l] === Number(N) ? l : -1;
}

//"Правый" бинарный поиск
function rightBinarySearch(N, nums) {
    nums = nums.split(' ').map(num => Number(num));
    let m;
    let l = 0;
    let r = nums.length - 1;

    function check(m, checkParams) {
        return nums[m] <= Number(checkParams);
    }

    while (l < r) {
        m = Math.floor((l + r + 1) / 2);
        if (check(m, N)) {// Всё плохо (найденное слово < искомого (мы ищем последнее подходящее значение)
            l = m;// двигаем левую границу
        } else {// Всё хорошо (найденное слово > искомого
            r = m - 1
        }
    }
    return l;
}
