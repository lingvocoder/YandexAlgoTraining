const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const [str1, str2] = fileContent.toString().trim().split("\n");
const nums1 = str1.split(' ').map(n => Number(n));
const nums2 = str2.split(' ').map(n => Number(n));

const result = countDifferentNumbers(nums1, nums2);
fs.writeFileSync("output.txt", result.toString());

function countDifferentNumbers(arr1, arr2) {
    let hashMap = {};
    let resArr = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!hashMap.hasOwnProperty(arr1[i])) {
            hashMap[arr1[i]] = 1;
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!hashMap.hasOwnProperty(arr2[i])) {
            hashMap[arr2[i]] = 1;
        } else {
            hashMap[arr2[i]]++;
        }
    }
    for (const [key, value] of Object.entries(hashMap)) {
        if (value > 1) {
            resArr.push(parseFloat(key));
        }
    }
    return resArr.join(' ');
}



