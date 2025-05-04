const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const [n, c, k, p] = fileContent.toString().trim().split(/\r?\n/);


const result = calcKeyboardResource1(n, c, k, p);
fs.writeFileSync("output.txt", result.toString());

//83ms, 12.15Mb
function calcKeyboardResource(n, c, k, p) {
    const keys = Number(n);
    const combinations = Number(k);
    const keySeq = p.split(' ').map(value => Number(value));
    const keyResource = c.split(' ').map(value => Number(value));
    const resourceMap = {};

    for (let i = 1; i <= keys; i++) {
        if (!resourceMap.hasOwnProperty(i)) {
            resourceMap[i] = keyResource[i - 1];
        }
    }
    for (let k = 0; k < combinations; k++) {
        if (resourceMap.hasOwnProperty(keySeq[k])) {
            resourceMap[keySeq[k]]--;
        }
    }
    const resArr = [];

    for (const key in resourceMap) {
        resourceMap[key] = resourceMap[key] < 0 ? resArr.push('YES') : resArr.push('NO');
    }

    return resArr.join('\n');

}
//Сортировка подсчетом 81ms, 12.16Mb
function calcKeyboardResource1(n, c, k, p) {
    const keys = Number(n);
    const combinations = Number(k);
    const keySeq = p.split(' ').map(value => Number(value));
    const keyResource = c.split(' ').map(value => Number(value));
    const max = Math.max(...keySeq);
    const min = Math.min(...keySeq);
    const resourceArr = new Array(max - min + 1).fill(0);

    for (let i = 0; i < combinations; i++) {
        resourceArr[keySeq[i] - min]++;
    }

    for (let k = 0; k < keys; k++) {
        resourceArr[k] = resourceArr[k] > keyResource[k] ? 'YES' : 'NO';
    }
    return resourceArr.join('\n');
}

//Просто линейная зависимость без min/max
function calcKeyboardResource2(n, c, k, p) {
    const keys = Number(n);
    const combinations = Number(k);
    const keySeq = p.split(' ').map(value => Number(value));
    const keyResource = c.split(' ').map(value => Number(value));
    const resourceArr = new Array(keys).fill(0);

    for (let i = 0; i < combinations; i++) {
        resourceArr[keySeq[i]-1]++;
    }

    for (let k = 0; k < keys; k++) {
        resourceArr[k] = resourceArr[k] > keyResource[k] ? 'YES' : 'NO';
    }
    return resourceArr.join('\n');

}