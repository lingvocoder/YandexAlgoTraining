const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const [list1, list2] = fileContent.toString().trim().split(/\r?\n/);
const result = mergeSortedLists1(list1, list2);
fs.writeFileSync('output.txt', result.toString(), 'utf8');

function mergeSortedLists(list1, list2) {
    const ls1 = list1.split(' ').map(num => Number(num)).sort((a, b) => a - b);
    const ls2 = list2.split(' ').map(num => Number(num)).sort((a, b) => a - b);
    let l1 = 0;
    let l2 = 0;
    let writer = 0;
    let mergedArr = [];


    for (let i = 0; i < ls2.length + ls1.length; i++) {
        if (ls1[l1] <= ls2[l2]) {
            mergedArr[writer++] = ls1[l1++];
        }
        if (ls2[l2] <= ls1[l1]) {
            mergedArr[writer++] = ls2[l2++];
        }
        if (i >= ls1.length) {
            mergedArr[writer++] = ls2[l2++];
        } else if (i >= ls2.length) {
            mergedArr[writer++] = ls1[l1++];
        }

    }
    return mergedArr.join('\n');
}

function mergeSortedLists1(list1, list2) {
    const ls1 = list1.split(' ').map(num => Number(num)).sort((a, b) => a - b);
    const ls2 = list2.split(' ').map(num => Number(num)).sort((a, b) => a - b);
    let mergedArr = new Array(ls1.length + ls2.length).fill(0);
    let l1 = 0;
    let l2 = 0;
    let writer = 0;


    for (let i = 0; i < ls2.length + ls1.length; i++) {
        if (l1 !== ls1.length && l2 === ls2.length || ls1[l1] <= ls2[l2]) {
            mergedArr[writer++] = ls1[l1++];
        } else {
            mergedArr[writer++] = ls2[l2++];
        }
    }
    return mergedArr.join(' ');
}