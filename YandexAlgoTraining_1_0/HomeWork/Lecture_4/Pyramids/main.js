const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const [N, ...dimensions] = fileContent.toString().trim().split(/\r?\n/);

const result = buildPyramid1(N, dimensions);
fs.writeFileSync("output.txt", result.toString());

//399ms, 46.85Mb
function buildPyramid(n, dimensions) {
    const blocks = Number(n);
    const params = {};
    let maxHeight = 0;

    for (let i = 0; i < blocks; i++) {
        const [w, h] = dimensions[i].split(' ').map(Number);
        if (!params.hasOwnProperty(w)) {
            params[w] = h;
        }
        if (h > params[w]) {
            params[w] = h;
        }
    }

    for (const w in params) {
        maxHeight += params[w];
    }
    return maxHeight;
}

//356ms, 46.83Mb Оптимизируем проверку условия за счёт блока else
function buildPyramid1(n, dimensions) {
    const blocks = Number(n);
    const params = {};
    let maxHeight = 0;

    for (let i = 0; i < blocks; i++) {
        const [w, h] = dimensions[i].split(' ').map(Number);
        if (!params.hasOwnProperty(w)) {
            params[w] = h;
        } else {
            if (h > params[w]) {
                params[w] = h;
            }
        }
    }

    for (const w in params) {
        maxHeight += params[w];
    }
    return maxHeight;
}
