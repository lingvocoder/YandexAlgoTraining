const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const data = fileContent.toString().trim().split("\n");
const readInt = (param) => parseFloat(param);
const noteLen = readInt(data[0]);
const frequencies = data.slice(1);
const result = calcFrequency(noteLen, frequencies);
fs.writeFileSync("output.txt", result.toString());





function calcFrequency(len, frequencies) {
    const left = 30;
    const right = 4000;
    console.log(frequencies);

    for (let j = 1; j < len; j++) {
        const [currVal, currDir] = frequencies[j].split(' ');
        console.log(currVal,currDir);
    }
}



