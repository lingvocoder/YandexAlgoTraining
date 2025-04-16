const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const str = fileContent.toString().trim().split("\n");
const result = checkNumber1(str);
fs.writeFileSync("output.txt", result.toString(), 'utf-8');


function checkNumber(str) {
    let prefix = '7495';
    let ans = [];
    const replaceLeadingDigit = (str) => str.replace(/^7|^8/, '7');
    const targetNum = replaceLeadingDigit(removeSymbols(str[0]).join('').padStart(11, prefix));
    let nums = str.slice(1)
        .map(num => removeSymbols(num).join(''))
        .map(num => num.padStart(11, prefix))
        .map(num => replaceLeadingDigit(num))


    for (let i = 0; i < nums.length; i++) {
        ans[i] = targetNum === nums[i] ? 'YES' : 'NO';
    }
    //Циклический сдвиг
    function removeSymbols(numStr) {
        let numArr = numStr.split('');
        for (let j = 0; j < numArr.length - 1; j++) {
            if (isNaN(numArr[j])) {
                for (let k = j; k < numArr.length - 1; k++) {
                    numArr[k] = numArr[k + 1];
                }
                numArr.length--;
            }
        }
        return numArr;
    }

    return ans.join('\n');
}

//58ms, 5.26Mb Без циклического сдвига, без предварительной модификации targetNumber
function checkNumber1(str) {
    let nums = str;
    let ans = [];
    let prefix = '7495';

    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i].replace(/\D/g, '');
        if (nums[i].length === 11) {
            nums[i] = nums[i].replace(/^7|^8/, '7');
        } else if (nums[i].length === 7) {
            nums[i] = prefix + nums[i];
        }
        nums[i] = parseInt(nums[i]);
    }
    const targetNum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        ans[i] = targetNum === nums[i] ? 'YES' : 'NO';
    }
    return ans.join('\n');
}
