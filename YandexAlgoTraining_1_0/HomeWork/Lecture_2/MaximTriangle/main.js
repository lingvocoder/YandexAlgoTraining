const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const data = fileContent.toString().trim().split("\n");
const noteLen = parseInt(data[0]);
const frequencies = data.slice(1);
const result = calcFrequency(noteLen, frequencies);
fs.writeFileSync("output.txt", result.toString());

//50ms, 5.41Mb
function calcFrequency(len, frequencies) {
    let left = 30;    // минимальная граница
    let right = 4000; // максимальная граница

    let prevFreq = parseFloat(frequencies[0]); // первая частота

    for (let j = 1; j < len; j++) {
        const parts = frequencies[j].split(' ');

        const [currVal, currDir] = parts;
        const currFreq = parseFloat(currVal);
        console.log(`${currFreq} ${currDir}`);

        // Находим середину между предыдущей и текущей частотой
        const middle = (prevFreq + currFreq) / 2;
        console.log(`middle: ${middle}`);

        if (currDir === 'closer') {
            // Текущая частота ближе к треугольнику
            // |f - curr| < |f - prev|

            if (currFreq < prevFreq) {
                // f < (curr + prev)/2
                right = Math.min(right, middle);
                console.log(`right: ${right}`)
            } else if (currFreq > prevFreq) {
                // f > (curr + prev)/2
                left = Math.max(left, middle);
                console.log(`left: ${left}`)
            }
        } else { // further
            // Текущая частота дальше от треугольника
            // |f - curr| > |f - prev|

            if (currFreq < prevFreq) {
                // f > (curr + prev)/2
                left = Math.max(left, middle);
                console.log(`left: ${left}`)
            } else if (currFreq > prevFreq) {
                // f < (curr + prev)/2
                right = Math.min(right, middle);
                console.log(`right: ${right}`)
            }
        }

        prevFreq = currFreq;
        console.log(`prevFreq: ${prevFreq}`);
    }

    const minBound = Math.min(left, right);
    const maxBound = Math.max(left, right);
    return `${minBound.toFixed(6)} ${maxBound.toFixed(6)}`;
}



