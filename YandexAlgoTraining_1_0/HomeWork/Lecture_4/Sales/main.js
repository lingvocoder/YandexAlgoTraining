const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const entries = fileContent.toString().trim().split(/\r?\n/);


const result = calcSalesByItem(entries);
fs.writeFileSync("output.txt", result.toString());

//0.926s, 90.32Mb
function calcSalesByItem(entries) {
    const names = {};
    let sortedNames;

    for (let i = 0; i < entries.length; i++) {
        let [name, item, vol] = entries[i].split(' ');

        if (names.hasOwnProperty(name)) {
            if (!names[name].hasOwnProperty(item)) {
                names[name][item] = 0;
            }
        } else {
            names[name] = {};
            if (!names[name].hasOwnProperty(item)) {
                names[name][item] = 0;
            }
        }
        names[name][item] += Number(vol)
    }

    sortedNames = Object.keys(names).sort().reduce((obj, key) => {
        obj[key] = names[key]
        return obj;
    }, {});

    let resArr = [];
    for (const name in sortedNames) {
        let nameItems = [];
        for (const item in sortedNames[name]) {
            nameItems.push(`${item} ${sortedNames[name][item]}`);
        }
        let sortedItems = nameItems.sort().join('\n');
        resArr.push(`${name}:\n${sortedItems}`);
    }
    return resArr.join('\n');

}
