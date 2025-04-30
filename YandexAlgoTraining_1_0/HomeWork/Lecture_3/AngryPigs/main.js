const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const data = fileContent.toString().trim().split(/\r?\n/);

const result = calculateMinimumShots(data);
fs.writeFileSync("output.txt", result.toString());

//59ms, 5.26Mb
function calculateMinimumShots(data) {
    const birds = Number(data[0]);
    const coords = data.slice(1).map(pair => pair.split(' '));
    const birdsCoords = {};

    for (let i = 0; i < birds; i++) {
        let x = coords[i][0];

        if (!birdsCoords.hasOwnProperty(x)) {
            birdsCoords[x] = 1;
        }
    }
    let counter = 0;
    for (const x in birdsCoords) {
        counter++;
    }
    return counter;
}