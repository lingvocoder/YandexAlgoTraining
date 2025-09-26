const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const [len, nums] = fileContent.toString().split("\n");
const readArray = (seq, separator) => seq.trim().split(separator).map(value => parseInt(value, 10));

const seq = readArray(nums, ' ');
const result = makeSymmetricSimple(seq);
fs.writeFileSync("output.txt", result.toString());

// Первоначальное решение (неправильное)
function isSymmetricSequence(len, nums) {
    let seq = readArray(nums, ' ');
    let resArr = [];

    for (let i = 0; i < len; i++) {
        let leftReader = i;
        let rightReader = len - 1;

        while (seq[leftReader] === seq[rightReader] && leftReader <= rightReader) {
            leftReader++;
            rightReader--;
        }

        if (leftReader > rightReader) {

            for (let j = i - 1; j >= 0; j--) {
                resArr.push(seq[j]);
            }
            return resArr.length ? `${resArr.length}\n${resArr.join(' ')}` : 0;
        }
    }
    return resArr.length ? `${resArr.length}\n${resArr.join(' ')}` : 0;
}

// Проверка, является ли массив палиндромом
function isPalindrome(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

// Сложность O(n^2) 50ms, 5.39Mb
function makeSymmetricSimple(arr) {
    // Пробуем добавить 0, 1, 2, ... элементов
    for (let addCount = 0; addCount <= arr.length; addCount++) {
        // Создаём новый массив с добавленными элементами
        let newArr = [...arr];

        // Добавляем первые addCount элементов исходного массива В ОБРАТНОМ ПОРЯДКЕ
        for (let i = addCount - 1; i >= 0; i--) {
            newArr.push(arr[i]);
        }

        // Проверяем, палиндром ли получился
        if (isPalindrome(newArr)) {
            if (addCount === 0) {
                return 0;
            } else {
                let toAdd = [];
                for (let i = addCount - 1; i >= 0; i--) {
                    toAdd.push(arr[i]);
                }
                return `${addCount}\n${toAdd.join(' ')}`;
            }
        }
    }
    return 0
}

